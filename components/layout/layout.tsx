import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

const name1 = 'Minneapolis';
const name2 = 'Solid Project';
export const siteTitle = 'Minneapolis Solid Project';

export default function Layout({ children, home }: any) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Minneapolis Solid Project" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {home ? (
        <header className="flex mb-16 mt-12 pl-20 bg-primary-500 shadow-lg">
          <div className={`${utilStyles.heading3Xl} grow`}>
            <span className="font-extralight">{name1}</span>
            {name2}
          </div>
          <div className="flex items-center mr-10">
            <div className="block">
              <a
                href="https://solidproject.org/users/get-a-pod"
                className="text-black"
              >
                Get a Solid Pod
              </a>
              <br />
              <a
                href="https://www.meetup.com/minneapolis-solid-project/"
                className="text-black"
              >
                Join Our Meetup
              </a>
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-accent2-700">
          <h2 className={utilStyles.headingXl}>
            <Link href="/" className={utilStyles.colorInherit}>
              <span className="text-white">
                <span className="font-extralight">{name1}</span>
                {name2}
              </span>
            </Link>
          </h2>
        </header>
      )}

      <div>
        <main>{children}</main>
        {!home && (
          <div className="mt-9 ml-6">
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
