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
        <div className="font-300-bold title">Stacker</div>
        <div className="font-100 description">Turn spreadsheets into apps and customize without coding.</div>
        <div className="arrows">
        <Link href="flowdash"><div><img src="arrow-left-web.svg"></img></div></Link>
          <Link href="teamscope"><div><img src="arrow-right-web.svg"></img></div></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <Link href="flowdash"><a href="flowdash"><div><img src="arrow-left-mobile.svg"></img></div></a></Link>
          <Link href="teamscope"><a href="teamscope"><div><img src="arrow-right-mobile.svg"></img></div></a></Link>
        </div>

      <div className="presentation twelve-eighty">
      <div><img src="portfolio/product/stacker/visual-updates/1.jpg"></img></div>
      <div><img src="portfolio/product/stacker/visual-updates/2.jpg"></img></div>
      <div><img src="portfolio/product/stacker/visual-updates/3.jpg"></img></div>
      <div><img src="portfolio/product/stacker/editor/0.jpg"></img></div>
      <div><img src="portfolio/product/stacker/editor/1.jpg"></img></div>
      <div><img src="portfolio/product/stacker/editor/2.jpg"></img></div>
      <div><img src="portfolio/product/stacker/editor/3.jpg"></img></div>
      <div><img src="portfolio/product/stacker/editor/4.jpg"></img></div>
        <div><img src="portfolio/product/stacker/1/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/1/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/1/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/1/4.jpg"></img></div>
        <div><img src="portfolio/product/stacker/1/5.jpg"></img></div>
        <div><img src="portfolio/product/stacker/5/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/3/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/3/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/3/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/3/4.jpg"></img></div>
        <div><img src="portfolio/product/stacker/6/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/6/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/6/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/6/4.jpg"></img></div>
        <div><img src="portfolio/product/stacker/4/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/4/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/2/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/2/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/2/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/7/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/7/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/7/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/8/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/3.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/4.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/5.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/6.jpg"></img></div>
        <div><img src="portfolio/product/stacker/9/7.jpg"></img></div>
        <div><img src="portfolio/product/stacker/10/1.jpg"></img></div>
        <div><img src="portfolio/product/stacker/10/2.jpg"></img></div>
        <div><img src="portfolio/product/stacker/10/3.jpg"></img></div>
      </div>
    </div>
  )
}
