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
        <div className="font-100 description">Create business software without coding, based on existing data in connected data sources (Airtable, Google Sheets, etc.)</div>
        <div className="arrows">
        <Link href=""><div className="inactive"><img src="arrow-left-web.svg"></img></div></Link>
          <Link href="flowdash"><a href="flowdash"><div><img src="arrow-right-web.svg"></img></div></a></Link>
        </div>
        </div>
      </div>

      <div className="arrows-mobile">
      <a><Link href=""><div className="inactive"><img src="arrow-left-mobile.svg"></img></div></Link></a>
          <Link href="flowdash"><a href="flowdash"><div><img src="arrow-right-mobile.svg"></img></div></a></Link>
        </div>

      <div className="presentation twelve-eighty">
      <div><img src="portfolio/product/stacker-2021/app-1.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-2.jpg"></img></div>
          <div><img src="portfolio/product/stacker-2021/app-3.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-settings-1.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-settings-2.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-settings-3.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-settings-4.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/app-settings-5.jpg"></img></div>
          <div><img src="portfolio/product/stacker-2021/app-settings-6.jpg"></img></div>
              <div><img src="portfolio/product/stacker-2021/app-settings-7.jpg"></img></div>
                  <div><img src="portfolio/product/stacker-2021/app-settings-8.jpg"></img></div>
      <div><img src="portfolio/product/stacker-2021/profile-settings-1.jpg"></img></div>
      </div>
    </div>
  )
}
