import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_TOKEN)

await hf.featureExtraction({
    model: "sentence-transformers/distilbert-base-nli-mean-tokens",
    inputs: "That is a happy person",
  });