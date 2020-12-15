import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Menu = () => {

        const router = useRouter()
        function isActive(route){
            if(route== router.pathname){
                return "active"
            }
            else ""
        }

    return (
        <div className="menu">
            <Head><title>Adis Hasanic - UI/UX Designer</title><link rel="shortcut icon" href="favicon.jpg" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121629290-2"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121629290-2');
  `,
                    }}
                /></Head>
            <Link href="/"><div className="exit">Exit</div></Link>
            <div className="top">
                <div className="name">Adis Hasanic</div>
                <div className="title">UI/UX Designer</div>
            </div>
            <div className="links">
                <Link href="/flowdash"><div className={isActive('/flowdash')} >Flowdash</div></Link>
                <Link href="/stacker"><div className={isActive('/stacker')}>Stacker</div></Link>
                <Link href="/teamscope"><div className={isActive('/teamscope')}>Teamscope</div></Link>
                <Link href="/amigos"><div className={isActive('/amigos')}>Amigos</div></Link>
                <Link href="/teleport"><div className={isActive('/teleport')}>Teleport</div></Link>
                <Link href="/portal"><div className={isActive('/portal')}>Portal</div></Link>
                <Link href="/indiecampers"><div className={isActive('/indiecampers')}>IndieCampers</div></Link>
                <Link href="/engine"><div className={isActive('/engine')}>Engine</div></Link>
                <Link href="/liftigniter"><div className={isActive('/liftigniter')}>LiftIgniter</div></Link>
                <Link href="/typen"><div className={isActive('/typen')}>Typen</div></Link>
                <Link href="/helpjuice"><div className={isActive('/helpjuice')}>Helpjuice</div></Link>
                <Link href="/foodmunk"><div className={isActive('/foodmunk')}>Foodmunk</div></Link>
                <Link href="/kamcord"><div className={isActive('/kamcord')}>Kamcord</div></Link>
                <Link href="/brandedme"><div className={isActive('/brandedme')}>Branded.me</div></Link>
            </div>
            <div className="links">
            <a href="cv.pdf"><div>Download CV</div></a>
                <a href="https://calendly.com/adishasanic/60min"><div>About me</div></a>
            </div>
        </div>
    )
}

export default Menu