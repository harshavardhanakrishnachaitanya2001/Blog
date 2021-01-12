import Link from 'next/link'
import Head from 'next/head'
const currymaker= () => {
    return (
        <div>
            <style>
                {`
                button{
                    font-size:20px;
                    margin-left:10px;
                    cursor:pointer;
                }
                h1{
                    margin-top: 0;
                    margin-bottom:2px;
                     font-size: 4rem;
                     text-align:center;
                }
                p{
                    text-align:center;
                    font-size:25px;
                }
                `}
            </style>
            <Head>
                <title>
                    Curry Maker
                </title>
                <link rel='icon' href='/currymaker.png'/>
            </Head>
            <h1>Curry Maker</h1>
            <p>
            This Curry Maker application is made using creact-react-app and styled using styled components. Here, react router is also used.<br />
            <Link href="https://currymaker.vercel.app/"><button>Curry Maker</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default currymaker