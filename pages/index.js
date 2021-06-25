import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis — Product Designer</title>
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
      
      <div className="content">
      
      <div className="width">
      <div className="nav">
      <div className="text-100">
      <a className="selected">Portfolio</a>
      <Link href="about"><a href="about">About</a></Link>
      <Link href="contact"><a href="contact">Contact</a></Link>
      </div>
      </div>
      </div>
      
      
      <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Stacker
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2020 and 2021, for 9 months total, full-time on a freelance basis, I was a product designer at Stacker, an early-stage startup with headquarters in London, building a web platform that makes it easy to create apps without coding, focusing on turning spreadsheets into custom suite of business software. In second part of 2020 Stacker’s sales skyrocketed after also getting accepted to YCombinator, and in 2021 Stacker raised Series A from Andreessen Horowitz.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty" src="portfolio/product/stacker-2021/app-1.jpg"></img>
      </div>
      </div>
      
      </div>
      
      
      
      
      <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Flowdash
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2020, for 4 months total, full-time on a freelance basis, I was a sole designer at Flowdash, an early-stage startup with headquarters in San Francisco, building a web platform that focuses on helping ops teams build internal apps without coding, for their business processes and team workflows. I worked closely with CEO and CTO of Flowdash on making it easy to build apps without coding and adding new features. After 4 months, completely redesigned version of the product was launched, became #2 product of the month on ProductHunt with almost 3000 upvotes, and each new user was able to create a workflow without contacting support, which no user was able to before. <Link href="flowdash"><a href="flowdash">See more</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-2.jpg"></img>
      </div>
      </div>
      
      </div>
      
      <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Teamscope
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      For 1 year and 3 months (Oct 2018 - Jan 2020), on a full-time basis on-site, I was a sole designer at Teamscope, an early-stage startup with headquarters in Tallinn, building a web platform that helps companies analyze personality and values to build better teams. <Link href="teamscope"><a href="teamscope">See more</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty border" src="portfolio/product/teamscope/3/3-1.jpg"></img>
      </div>
      </div>
      
      </div>
      
      
      
      
      </div>
      
    </div>
  )
}
