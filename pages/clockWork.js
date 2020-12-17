import Link from 'next/link'
import Head from 'next/head'
const clockWork= () => {
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
                     font-size: 50px;
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
                    Clock work
                </title>
            </Head>
            <h1>Clock work</h1>
            <p>
            This is a web application created using svelte.js which shows time in hours, minutes and seconds as well.
            In this application the time can be set manually. If not set, it will start at 12 hours and 0 minutes. 
            <br />Please take a look<br />
            <Link href="https://clock-app-with-svelte-js.vercel.app/"><button>Clock work</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default clockWork;