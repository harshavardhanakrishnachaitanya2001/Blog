import Link from 'next/link'
import Head from 'next/head'
function wordOfAdvice(){
    return (
        <div>
            <style>
            {`
                h1{
                    margin: 0;
                     font-size: 50px;
                     text-align:center;
                }
                p{
                    text-align:center;
                    font-size:25px;
                }
                button{
                    margin-left:10px;
                    font-size:20px;
                    cursor:pointer;
                }
            `}
        </style>
        <Head>
            <title>Word of advice</title>
        </Head>
        <h1>Word of advice</h1>
        <p>This is a react application which I created as a practice.<br />
        <Link href='https://first-react-app-zeta.vercel.app/'><button>Word of advice</button></Link>
        <Link href='/'><button>Home</button></Link>
        </p>
        </div>
    )
}
export default wordOfAdvice