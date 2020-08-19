import Link from 'next/link'
const weatherapp = () => {
    return (
        <div>
            <style>
                {`
                h1{
                    text-align:center;
                    font-size:50px;
                }
                p{
                    text-align:center;
                    font-size:25px;
                }
                button{
                    margin-left:10px;
                }
                `}
            </style>
            <h1>Weather forecast</h1>
            <p>
            This is a mobile application created using react-native.<br />
            <Link href="https://expo.io/@kccodes/weatherapp"><button>Weather forecast</button></Link>
            <Link href="/"><button>Home</button></Link>
            </p>
        </div>
    )
}
export default weatherapp;