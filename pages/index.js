import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
    <style>
      {`
      button{
        margin-left:10px;
      }
      `}
    </style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          G.H.Krishna Chaitanya
        </h1>

        <p className={styles.description}>
        Projects done:<br />
        <Link href="https://todoapplication-nu.vercel.app/"><button>Todo Application</button></Link>
        <Link href="https://currymaker.vercel.app/"><button>Curry Maker</button></Link>
        <Link href="https://expo.io/@kccodes/weatherapp"><button>Weather application(mobile)</button></Link>
        </p>
      </main>
    </div>
  )
}
