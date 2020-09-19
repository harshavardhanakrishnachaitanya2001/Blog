import Link from 'next/link'
import Head from 'next/head'
const todoApp = () => {
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
            <title>
                Todo application
            </title>
        </Head>
        <h1>Todo Applicaiton</h1>
        <p>
        Todo application is a web application created using create-react-app. This app stores user input and renders that data along with the done button, which 
        when clicked removes the data<br />
        <Link href="https://todoapplication-nu.vercel.app/"><button>Todo application</button></Link>
        <Link href="/"><button>Home</button></Link>
        </p>
        </div>
    )
}
export default todoApp