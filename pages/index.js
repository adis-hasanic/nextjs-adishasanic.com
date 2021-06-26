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
      During 2020 and 2021 for 9 months total, on a freelance basis full-time, I was a sole designer at Stacker, an early-stage startup with headquarters in London, building a web platform that helps companies create business software without coding. <Link href="stacker"><a href="stacker">See more</a></Link>
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
      During 2020 for 4 months total, on a freelance basis full-time, I was a sole designer at Flowdash, an early-stage startup with headquarters in San Francisco, building a web platform that helps ops teams create internal apps without coding for team workflows and business processes. <Link href="flowdash"><a href="flowdash">See more</a></Link>
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
