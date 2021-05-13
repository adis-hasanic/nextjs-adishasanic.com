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
      <div><a href="https://www.linkedin.com/in/adis-hasanic/"><img src="dribbble.svg"></img></a></div>
      <div><a href="https://www.linkedin.com/in/adis-hasanic/"><img src="linkedin.svg"></img></a></div>
        </div>
        </div>
      </div>
      <div className="work">
        <div>
        <div className="font-300-bold title">LiftIgniter</div>
        <div className="font-100 description">Setup and dashboard of an API that learns about users to suggest the most accurate content.</div>
        <div className="arrows">
        <Link href="portal"><div><img src="arrow-left-web.svg"></img></div></Link>
          <Link href="foodmunk"><div><img src="arrow-right-web.svg"></img></div></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="portal"><div><img src="arrow-left-mobile.svg"></img></div></Link>
          <Link href="foodmunk"><div><img src="arrow-right-mobile.svg"></img></div></Link>
        </div>

      <div className="presentation twelve-eighty">
        <div><img src="portfolio/product/liftigniter/4.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/5.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/6.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/7.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/8.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/9.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/10.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/11.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/12.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/13.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/14.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/15.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/1.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/2.jpg"></img></div>
      <div><img src="portfolio/product/liftigniter/3.jpg"></img></div>
      </div>
    </div>
  )
}
