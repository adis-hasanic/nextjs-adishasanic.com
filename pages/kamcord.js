import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis Hasanic - UX, UI, Web and Visual Designer</title>
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
      <div className="me">
        <div>
        <div className="font-200-bold">Adis Hasanic</div>
        <div className="font-100">UX, UI, Web and Visual</div>
        <div className="icons">
        <div><a href="https://adishasanic96.typeform.com/to/IVmKhGC5"><img src="email.svg"></img></a></div>
      <div><a href="https://dribbble.com/adishasanic"><img src="dribbble.svg"></img></a></div>
      <div><a href="https://www.linkedin.com/in/adis-hasanic/"><img src="linkedin.svg"></img></a></div>
        </div>
        </div>
      </div>
      <div className="work">
        <div>
        <div className="font-300-bold title">Kamcord</div>
        <div className="font-100 description">Watch, record and host gameplays and livestreams of mobile games, connect with gamers and discover new mobile games.</div>
        <div className="arrows">
        <Link href="foodmunk"><a href="foodmunk"><div><img src="arrow-left-web.svg"></img></div></a></Link>
          <Link href=""><a><div className="inactive"><img src="arrow-right-web.svg"></img></div></a></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="foodmunk"><a href="foodmunk"><div><img src="arrow-left-mobile.svg"></img></div></a></Link>
          <Link href=""><a><div className="inactive"><img src="arrow-right-mobile.svg"></img></div></a></Link>
        </div>

      <div className="presentation iphone-five">
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/1.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/2.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/3.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/4.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/5.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/6.png"></img></div>
      <div className="android-landscape"><img src="portfolio/product/kamcord/broadcasting/7.png"></img></div>
      
        <div>
            <img src="portfolio/product/kamcord/livestream/1.png"></img>
            <img src="portfolio/product/kamcord/livestream/2.png"></img>
      <img src="portfolio/product/kamcord/livestream/3.png"></img>
        </div>
      
      <div className="twelve-eighty"><img src="portfolio/product/kamcord/website/1.jpg"></img></div>
      <div className="twelve-eighty"><img src="portfolio/product/kamcord/website/2.jpg"></img></div>
      <div className="twelve-eighty"><img src="portfolio/product/kamcord/website/3.jpg"></img></div>
      <div className="twelve-eighty"><img src="portfolio/product/kamcord/website/4.jpg"></img></div>
      <div className="twelve-eighty"><img src="portfolio/product/kamcord/website/5.jpg"></img></div>
      
      </div>
    </div>
  )
}
