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
        <div className="font-300-bold title">Amigos</div>
        <div className="font-100 description">Find a vehicle which you want, need and can afford, and negotiate the purchase with a dealership nearby.</div>
        <div className="arrows">
        <Link href="teamscope"><div><img src="arrow-left-web.svg"></img></div></Link>
          <Link href="portal"><div><img src="arrow-right-web.svg"></img></div></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="teamscope"><div><img src="arrow-left-mobile.svg"></img></div></Link>
          <Link href="portal"><div><img src="arrow-right-mobile.svg"></img></div></Link>
        </div>

      <div className="presentation iphone-five">
        <div>
            <img src="portfolio/product/amigos/2/1.png"></img>
            <img src="portfolio/product/amigos/2/2.png"></img>
      <img src="portfolio/product/amigos/2/3.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/2/4.png"></img>
            <img src="portfolio/product/amigos/3/1.png"></img>
      <img src="portfolio/product/amigos/3/2.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/3/3.png"></img>
            <img src="portfolio/product/amigos/3/4.png"></img>
      <img src="portfolio/product/amigos/3/5.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/4/1.png"></img>
            <img src="portfolio/product/amigos/4/2.png"></img>
      <img src="portfolio/product/amigos/4/3.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/4/4.png"></img>
            <img src="portfolio/product/amigos/5/1.png"></img>
      <img src="portfolio/product/amigos/5/2.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/5/3.png"></img>
            <img src="portfolio/product/amigos/5/4.png"></img>
      <img src="portfolio/product/amigos/5/5.png"></img>
        </div>
      <div>
            <img src="portfolio/product/amigos/5/6.png"></img>
            <img src="portfolio/product/amigos/6/1.png"></img>
      <img src="portfolio/product/amigos/6/4.png"></img>
        </div>
      </div>
    </div>
  )
}
