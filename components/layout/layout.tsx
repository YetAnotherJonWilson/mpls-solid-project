import Head from 'next/head';
import styles from './layout.module.css';
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
        <header className={styles.header}>
          <div className={utilStyles.heading3Xl}>
            <span className="font-extralight">{name1}</span>
            {name2}
          </div>
        </header>
      ) : (
        <header
          className={styles.header}
          style={{ backgroundColor: 'HSL(300, 60%, 50%)' }}
        >
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

      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
