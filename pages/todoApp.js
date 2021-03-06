import Link from 'next/link'
import Head from 'next/head'
const todoApp = () => {
    return (
        <div>
        <style>
            {`
                h1{
                    margin-top: 0px;
                    margin-bottom:2px;
                     font-size: 4rem;
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
            <link rel='icon' href='/todo.png'/>
        </Head>
        <h1>Todo Applicaiton</h1>
        <p>
        Todo application is a web application created using create-react-app. This app stores user input and renders that data along with the done button, which 
        when clicked removes the data. This is the first web application I created. Please bear with the styling.<br />
        <Link href="https://todoapplication-nu.vercel.app/"><button>Todo application</button></Link>
        <Link href="/"><button>Home</button></Link>
        </p>
        </div>
    )
}
export default todoApp