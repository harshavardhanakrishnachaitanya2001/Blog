import Link from 'next/link'
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
                    font-size:15px;
                }
            `}
        </style>
        <h1>Todo Applicaiton</h1>
        <p>
        Todo application is a web application created using create-react-app.<br />
        <Link href="https://todoapplication-nu.vercel.app/"><button>Todo application</button></Link>
        <Link href="/"><button>Home</button></Link>
        </p>
        </div>
    )
}
export default todoApp