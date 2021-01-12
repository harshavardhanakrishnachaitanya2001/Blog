import Link from 'next/link'
import Head from 'next/head'
const weatherapp = () => {
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
                    font-size:20px;
                    margin-left:10px;
                    cursor:pointer;
                }
                `}
            </style>
            <Head>
                <title>Weather application</title>
                <link rel='icon' href='/weatherApplication.png'/>
            </Head>
            <h1>Weather forecast</h1>
            <p>
            This is a mobile application created using react-native. This application fetches data from a remote weather api and renders it in a stylish manner on 
            the mobile screen<br />
            <Link href="https://expo.io/@kccodes/weatherapp"><button>Weather forecast</button></Link>
            <Link href="/"><button>Home</button></Link><br />
            </p>
        </div>
    )
}
export default weatherapp;