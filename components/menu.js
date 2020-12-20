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
                <Link href="/flowdash"><div className={isActive('/flowdash')} ><span className="name">Flowdash</span><span className="description">Build apps for team workflows without coding.</span></div></Link>
                <Link href="/stacker"><div className={isActive('/stacker')}><span className="name">Stacker</span><span className="description">Turn spreadsheets into customizable apps.</span></div></Link>
                <Link href="/teamscope"><div className={isActive('/teamscope')}><span className="name">Teamscope</span><span className="description">Analyze people (personality, values, etc.) to build teams.</span></div></Link>
                <Link href="/amigos"><div className={isActive('/amigos')}><span className="name">Amigos</span><span className="description">Car-search and marketplace for iOS.</span></div></Link>
                <Link href="/teleport"><div className={isActive('/teleport')}><span className="name">Teleport</span><span className="description"><i>Uber</i> for deliveries. Winner of a 3-day hackathon in Estonia.</span></div></Link>
                <Link href="/portal"><div className={isActive('/portal')}><span className="name">Portal</span><span className="description">Cryptocurrency wallet, transfer, exchange, and conversion.</span></div></Link>
                <Link href="/indiecampers"><div className={isActive('/indiecampers')}><span className="name">IndieCampers</span><span className="description">Book a campervan for a trip using a mobile website.</span></div></Link>
                <Link href="/engine"><div className={isActive('/engine')}><span className="name">Engine</span><span className="description">Build and manage a custom online shop.</span></div></Link>
                <Link href="/liftigniter"><div className={isActive('/liftigniter')}><span className="name">LiftIgniter</span><span className="description">Connect and manage an API for content recommendation.</span></div></Link>
                <Link href="/typen"><div className={isActive('/typen')}><span className="name">Typen</span><span className="description">Distraction-free writing app with a customizable look.</span></div></Link>
                <Link href="/helpjuice"><div className={isActive('/helpjuice')}><span className="name">Helpjuice</span><span className="description">Build a knowledge-base (internal, help center, etc.)</span></div></Link>
                <Link href="/foodmunk"><div className={isActive('/foodmunk')}><span className="name">Foodmunk</span><span className="description">Find a perfect meal nearby, stay healthy and fit.</span></div></Link>
                <Link href="/kamcord"><div className={isActive('/kamcord')}><span className="name">Kamcord</span><span className="description">Mobile games gameplays and livestreams.</span></div></Link>
                <Link href="/brandedme"><div className={isActive('/brandedme')}><span className="name">Branded.me</span><span className="description">Mobile games gameplays and livestreams.</span></div></Link>
            </div>
            <div className="links">
            <a href="cv.pdf"><div>Download CV</div></a>
                <a href="https://calendly.com/adishasanic/60min"><div>About me</div></a>
            </div>
        </div>
    )
}

export default Menu