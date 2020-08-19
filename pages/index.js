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
      .aboutme{
        text-align:center;
      }
      .about{
        text-align:center;
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
        <b>Projects developed:</b><br />
        <Link href="/todoApp"><button>Todo application</button></Link>
        <Link href="/currymaker"><button>Curry maker application</button></Link>
        <Link href="/weatherapp"><button>Weather application</button></Link>
        </p>
        <h1 className="aboutme">About</h1>
        <p className="about">
          I am G.H.Krishna Chaitanya, pursuing my B.tech IIIrd year in MarriLaxman Reddy instute of technology and management. I am an enthusiastic 
          front-end web developer, working primarily with React along with HTML, CSS, Bootstrap, React-native, context, git and Nextjs. I also work a little bit 
          with java, C language and python programming languages
        </p>
      </main>
    </div>
  )
}
