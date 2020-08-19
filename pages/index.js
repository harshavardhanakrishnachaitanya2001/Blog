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
        font-size:20px;
      }
      `}
    </style>
      <Head>
        <title>G. H. Krishna Chaitanya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          G.H.Krishna Chaitanya
        </h1>

        <p className={styles.description}>
        <b>Projects made:</b><br />
        <Link href="/todoApp"><button>Todo application</button></Link>
        <Link href="https://currymaker.vercel.app/"><button>Curry maker application</button></Link>
        <Link href="https://expo.io/@kccodes/weatherapp"><button>Weather application</button></Link>
        </p>
      </main>
    </div>
  )
}
