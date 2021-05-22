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
      <div className="about">
      <div className="about-width">
      
      <div className="pages">
      <Link href="/"><a href="/"><div>About</div></a></Link>
      <Link href="portfolio"><a className="current" href="portfolio"><div>Portfolio</div></a></Link>
      </div>
      
      </div>
      </div>
      
      <div className="portfolio">
      
      <div className="section">
      <div className="row">
      <div className="text">Stacker is a startup with headquarters in London, backed by YC and Initialized Capital. Stacker is building a web platform that makes it easy to create custom business software without coding, based on connected data sources (Airtable, Google Sheets, etc.) I designed at Stacker on a freelance basis for 8 months total during 2020 and 2021, working mostly on UI/UX and design system. After new designs were implemented in 2020 their sales skyrocketed, and in 2021 they got backed by Andreessen Horowitz.</div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty" src="portfolio/product/stacker-2021/app-1.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="eleven-twenty" src="portfolio/product/stacker-2021/app-settings-1.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/stacker/editor/2.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/stacker/9/4.jpg"></img></div>
      </div>
      </div>
      
      <div className="section">
      <div className="row">
      <div className="text">Flowdash is a startup making it easy for ops teams to create workflows for teams to carry out complex business processes, with headquarters in San Francisco and backed by YC. I worked closely with CEO and CTO of Flowdash for 4 months during 2020 to make the product easier to use and add lots of new features. Completely redesigned version of the product was launched, became #2 product of the month on ProductHunt, and each new user was able to get onboarded and create a workflow without contacting support.</div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/7-1.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/7-3.jpg"></img></div>
      </div>
      </div>
    
    <div className="section">
      <div className="row">
      <div className="text">Chandra Duggirala, entrepreneur based in San Francisco, hired me to design a Mac app that was to be the first all-in-one cryptocurrency management platform that anyone knows how to use and tune into the future of decentralized finance. It was called Portal, and I worked closely with CEO and CTO of Portal for 9 months on a freelance basis.</div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/1.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/2.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/2/1.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/2/3.jpg"></img></div>
      </div>
    <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/3/2.jpg"></img></div>
      </div>
      </div>
      
      </div>
      
    </div>
  )
}
