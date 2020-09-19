import Link from 'next/link'
function Anime(){
return (
    <div>
        <style jsx>
            {`
            button{
                font-size:20px;
                margin-left:10px;
                cursor:pointer;
            }
            h1{
                margin:0;
                font-size:50px;
                text-align:center;
            }
            p{
                text-align:center;
                font-size:25px;
            }
            `}
        </style>
        <h1>Anime I Love</h1>
        <p>
            The website is made using nextjs with static file (image) serving. This site came out better than the other 2 web applications.
            <Link href='https://anime-vert.vercel.app/'><button>Anime I Love</button></Link>
            <Link href='/'><button>Home</button></Link>
        </p>
    </div>
)
}
export default Anime