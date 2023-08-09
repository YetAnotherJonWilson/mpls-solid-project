import Head from "next/head";
import { useState } from "react";

export default function Docs() {
  const [queryInput, setQueryInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: queryInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result.content);
      setQueryInput("");
    } catch(error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main>
        <h3>What would you like to learn about Solid?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Enter a query"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
          />
          <input type="submit" value="Generate answer" />
        </form>
        <div>{result}</div>
      </main>
    </div>
  );
}
