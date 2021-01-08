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
        cursor:pointer;
      }
      .aboutme{
        text-align:center;
      }
      .about{
        text-align:center;
        font-size:20px;
      }
      img{
        border-radius:50%;
        height:120px;
        margin-left:5px;
        margin-top:4px;
        border:2px solid black;
      }
      `}
    </style>
      <Head>
        <title>G. H. Krishna Chaitanya</title>
        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'/>
        <link rel="icon" href="https://avatars3.githubusercontent.com/u/68343068?s=460&u=df8a95d0d4979f2ddc67bb8a809c1f88a55470fc&v=4" />
      </Head>

        <h1 className={styles.title}>
          G.H.Krishna Chaitanya
          <img src="https://avatars3.githubusercontent.com/u/68343068?s=460&u=df8a95d0d4979f2ddc67bb8a809c1f88a55470fc&v=4"/>
        </h1>

        <p className={styles.description}>
        <b>Projects developed:</b><br />
        <Link href='/wordOfAdvice'><button>Word of advice</button></Link>
        <Link href="/todoApp"><button>Todo application</button></Link>
        <Link href="/currymaker"><button>Curry maker application</button></Link>
        <Link href="/scoreBoard"><button>Score board</button></Link>
        <Link href="/weatherapp"><button>Weather application</button></Link>
        <Link href="/Anime"><button>Anime</button></Link>
        <Link href="/svelteTodo"><button>Todo application: Mark II</button></Link>
        <Link href="/clockWork"><button>Clock work</button></Link>
        <Link href="/message"><button>Messanger</button></Link>
        </p>
        <h1 className="aboutme">About me</h1>
        <p className="about">
          I am G.H.Krishna Chaitanya, pursuing my B.tech IIIrd year in Marri Laxman Reddy instute of technology and management. 
          I am an enthusiastic front-end web developer, working primarily with Next.js along with CSS, Bootstrap, React-native, context, 
          git and React. I also enjoy working with java, C and python.<br />
          I also have a Youtube channel where I explain all the concepts I know:
          <Link href='https://www.youtube.com/channel/UCZv-HrgSN0qc92gEZqDC3sA'><a target='_blank'> K.C. codes</a></Link><br />
          <br />
          <h2>Contact me</h2>
          You can contact me via twitter <a href='https://twitter.com/Harsha03751437' target='_blank'>@harsha</a>, on instagram <a href='https://www.instagram.com/harshavardhan_kc/' target='_blank'>@harshavardhan_kc</a> and on faceBook <a href='https://www.facebook.com/profile.php?id=100009945935184'>@Harshavardhan</a>.
        </p>
    </div>
  )
}
