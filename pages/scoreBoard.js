import Head from 'next/head'
import Link from 'next/link'
function scoreBoard(){
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
                    margin: 0;
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
                <title>Score board</title>
            </Head>
            <h1>Score Board</h1>
            <p>This is a react application which takes in as many players names and displayes them along with one increment and one 
            decrement button. These buttons increment and decrement the peoples scores as you expect.<br />
            <Link href='https://score-board-application.vercel.app/'><button>Score Board</button></Link>
            <Link href='/'><button>Home</button></Link>
            </p>
        </div>
    )
}
export default scoreBoard