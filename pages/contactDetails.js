import Link from 'next/link'
import Head from 'next/head'
const contactDetails= () => {
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
                     margin-top:0px;
                     margin-bottom:2px;
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
                    Cotact details
                </title>
            </Head>
            <h1>Contact details</h1>
            <p>
            This is a single page web app created using next.js, which receives user's details like name, age, phone number, age and date of birth and displayes them in the same page<br />
            Now, I my goal is to make this a two page app where in, one page receives data via the form and the other displays that data.<br />
            At the present, it is a single page app<br />
            <Link href="https://contacts-with-next.vercel.app/"><button>Contact details</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default contactDetails;