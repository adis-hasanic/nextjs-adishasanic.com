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
        <div className="font-300-bold title">Typen</div>
        <div className="font-100 description">Writing app that removes the distractions with a focus mode and customization capabilities that make it easy to get the typewriter that fits any space or subject material.</div>
        <div className="arrows">
        <Link href="liftigniter"><a href="liftigniter"><div><img src="arrow-left-web.svg"></img></div></a></Link>
          <Link href="foodmunk"><a href="foodmunk"><div><img src="arrow-right-web.svg"></img></div></a></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="liftigniter"><a href="liftigniter"><div><img src="arrow-left-mobile.svg"></img></div></a></Link>
          <Link href="foodmunk"><a href="portal"><div><img src="arrow-right-mobile.svg"></img></div></a></Link>
        </div>

      <div className="presentation twelve-eighty">
        <div><img src="portfolio/product/typen/1.png"></img></div>
      <div><img src="portfolio/product/typen/2.png"></img></div>
      <div><img src="portfolio/product/typen/3.png"></img></div>
      <div><img src="portfolio/product/typen/4.png"></img></div>
      <div><img src="portfolio/product/typen/5.png"></img></div>
      <div><img src="portfolio/product/typen/focus.gif"></img></div>
      </div>
    </div>
  )
}
