import Link from 'next/link'
import Head from 'next/head'
const message= () => {
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
                     font-size: 4rem;
                     text-align:center;
                     margin-top:0px;
                     margin-bottom:2px;
                }
                p{
                    text-align:center;
                    font-size:25px;
                    margin-top:1px;
                }
                `}
            </style>
            <Head>
                <title> 
                    Messanger
                </title>
            </Head>
            <h1>Messanger</h1>
            <p>
            This is a web application created using react.js which displays user typed message on a button click or on pressing enter.Now since this app is not linked to any contacts, this does not send messages to others. This website potrays my custom hook designing abilities. Please check it out<br />
            <Link href="https://my-chat-app-wheat.vercel.app/"><button>Messanger</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default message;