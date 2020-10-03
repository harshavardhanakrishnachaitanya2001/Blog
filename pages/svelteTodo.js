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
                Todo application: Mark:II
            </title>
        </Head>
        <h1>Todo Applicaiton: Mark II</h1>
        <p>
        This todo application is built using sveltejs, a js framework. This website has a way to clear the entair list
        (an 'empty list' button).Unlike the last one, insted of buttons beside every task, check boxes are used so 
        that it looks like an actual todo list.<br />
        <Link href="https://todo-svelte-six.vercel.app/"><button>Todo application: Mark II</button></Link>
        <Link href="/"><button>Home</button></Link>
        </p>
        </div>
    )
}
export default todoApp