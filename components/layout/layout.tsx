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
        <header className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 md:col-span-6 lg:col-span-12 bg-primary-500 shadow-lg py-7 my-7 grow">
          <div className="col-start-2 col-span-5 text-5xl leading-tight font-extrabold tracking-tighter text-primary-900">
            <span className="font-extralight">{name1}</span>
            {name2}
          </div>
          <div className="col-start-9 col-span-3 text-2xl rotate-12 relative top-3">
            <p
              className="font-semibold px-8 py-2 shadow-xl w-fit"
              style={{
                backgroundColor: 'HSL(24, 100%, 50%)',
                color: 'whitesmoke',
              }}
            >
              Build the Future
            </p>
          </div>
          <div className="flex items-center mr-10 hidden">
            <div className="block">
              <a
                href="https://solidproject.org/users/get-a-pod"
                className="text-primary-900"
              >
                Get a Solid Pod
              </a>
              <br />
              <a
                href="https://www.meetup.com/minneapolis-solid-project/"
                className="text-primary-900"
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

      <main className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 mt-20">
        {children}
      </main>
      {!home && (
        <div className="mt-9 ml-6">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
