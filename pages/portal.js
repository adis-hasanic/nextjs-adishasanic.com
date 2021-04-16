import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis Hasanic - UX and UI Designer</title>
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
        <div className="font-100">UX and UI Designer</div>
        <div className="icons">
        <div><a href="https://www.linkedin.com/in/adis-hasanic/"><img src="linkedin.svg"></img></a></div>
          <div><a href="https://adishasanic96.typeform.com/to/IVmKhGC5"><img src="email.svg"></img></a></div>
        </div>
        </div>
      </div>
      <div className="work">
        <div>
        <div className="font-300-bold title">Portal</div>
        <div className="font-100 description">All-in-one platform for everyone to store, transfer, exchange and convert cryptocurrencies and tune into the future of decentralized finance.</div>
        <div className="arrows">
        <Link href="/"><div><img src="arrow-left-web.svg"></img></div></Link>
          <Link href=""><div className="inactive"><img src="arrow-right-web.svg"></img></div></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="/"><div><img src="arrow-left-mobile.svg"></img></div></Link>
          <Link href=""><div className="inactive"><img src="arrow-right-mobile.svg"></img></div></Link>
        </div>

      <div className="presentation twelve-eighty">
        <div><img src="portfolio/product/portal/1/1.jpg"></img></div>
        <div><img src="portfolio/product/portal/1/2.jpg"></img></div>
        <div><img src="portfolio/product/portal/1/3.jpg"></img></div>
        <div><img src="portfolio/product/portal/1/4.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/1.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/2.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/3.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/4.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/5.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/6.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/7.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/8.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/9.jpg"></img></div>
        <div><img src="portfolio/product/portal/2/10.jpg"></img></div>
        <div><img src="portfolio/product/portal/3/1.jpg"></img></div>
        <div><img src="portfolio/product/portal/3/2.jpg"></img></div>
        <div><img src="portfolio/product/portal/3/3.jpg"></img></div>
        <div><img src="portfolio/product/portal/3/4.jpg"></img></div>
        <div><img src="portfolio/product/portal/3/5.jpg"></img></div>
        <div><img src="portfolio/product/portal/4/1.jpg"></img></div>
        <div><img src="portfolio/product/portal/4/2.jpg"></img></div>
        <div><img src="portfolio/product/portal/4/3.jpg"></img></div>
      </div>
    </div>
  )
}
