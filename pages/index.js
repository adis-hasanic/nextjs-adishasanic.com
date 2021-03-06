import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis Hasanic</title>
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
      During 2020 and 2021 for 9 months total, on a freelance basis full-time remotely, I was a product designer at Stacker, an early-stage startup backed by YCombinator and Andreessen Horowitz, with headquarters in London, building a web platform that helps companies create business software without coding. <Link href="stacker"><a href="stacker">See more</a></Link>
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
      During 2020 for 4 months total, on a freelance basis full-time remotely, I was a product designer at Flowdash, an early-stage startup backed by YCombinator with headquarters in San Francisco, building a web platform that helps ops teams create internal apps without coding for team workflows and business processes. <Link href="flowdash"><a href="flowdash">See more</a></Link>
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
      For 1 year and 3 months (Oct 2018 - Jan 2020), on a full-time basis on-site, I was a product designer at Teamscope, an early-stage startup backed by TechStars with headquarters in Tallinn, building a web platform that helps companies analyze personality and values to build better teams. <Link href="teamscope"><a href="teamscope">See more</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty border" src="portfolio/product/teamscope/3/3-1.jpg"></img>
      </div>
      </div>
      
      </div>
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Amigos
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2019 for 1 months total, on a freelance basis part-time remotely, I was hired by my brother Dino who writes code and manages a car dealership in California, to design an iOS app called Amigos, that helps customers find and buy the right car nearby and dealership to sell vehicles.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty" src="portfolio/product/amigos/2.jpg"></img>
      </div>
      </div>
      
      </div>
      
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Portal
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2018 for 9 months total, on a freelance basis full-time, I was a product designer at Portal, an early-stage startup with headquarters in San Francisco, building a Mac app that helps anyone store, transfer and exchange cryptocurrencies. <Link href="portal"><a href="portal">See more</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/1.jpg"></img>
      </div>
      </div>
      
      </div>
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      LiftIgniter
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2017 for 5 months total, on a freelance basis full-time remotely, I was a product designer at LiftIgniter, an early-stage startup backed by YCombinator with headquarters in San Francisco, providing an API for accurate content recommendations within web or mobile app. <Link href="liftigniter"><a href="liftigniter">See more</a></Link> 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/liftigniter/onboarding-draft-3/8.jpg"></img>
      </div>
      </div>
      
      </div>
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Typen
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Typen was a product I designed and bootstrapped to build and launch in 2016, based on my belief that a product for creative part of the writing process should have a customizable look, a focus mode where only text is visible, and internal storage. A typewriter of the 21st century. <Link href="typen"><a href="typen">See more</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix" src="portfolio/product/typen/5.png"></img>
      </div>
      </div>
      
      </div>
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Foodmunk
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2016 for 6 months total, on a freelance basis full-time remotely, I was a product designer at Fuel, an early-stage startup backed by 500 Startups with headquarters in San Francisco, building an iOS app called Foodmunk that helps people stay on track of eating and living healthy.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/foodmunk/5.jpg"></img>
      </div>
      </div>
      
      </div>
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Kamcord
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2015 for 4 months total, on a freelance basis full-time on-site, I was a product designer at Kamcord, an early-stage startup at Series A backed by YCombinator and Tencent with headquarters in San Francisco and offices also in China and Japan, building a platform and tools to watch and stream gameplays of mobile games.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/kamcord/website/5.jpg"></img>
      </div>
      </div>
      
      </div>
    
    
    <div className="work-intro">
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Branded.me
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      For 2 years (2013 - 2015), on a freelance basis, I was a product designer at Branded.me, an early-stage startup with headquarters in San Francisco. First year, I worked part-time remotely while going to high-school, and we were building web platform for converting websites to customizable mobile websites. Second year, I worked full-time on-site in San Francisco, and we were building a web platform for converting a LinkedIn profile to a customizable personal website.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/brandedme/2.jpg"></img>
      </div>
      </div>
      
      </div>
    
    
    <div className="width">
      <div className="text">
      <div className="text-200">
      Reach out anytime about anything.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Available for freelance work remotely for an early-stage startup (1-50 people), on an hourly, weekly, monthly, quarterly or project basis.
      </div>
      </div>
      </div>
      
      
      
      
      <div className="width">
      <div className="text">
      <form action="https://getform.io/f/240704a8-5047-49a9-9dcd-0180f07ccf03" method="POST">

      
      <div className="text-100">Your email address</div>
  <input type="email" name="email" required></input>
      
      <div className="text-100">Message</div>
  <textarea type="text" name="message" required></textarea>
  <button type="submit">Send</button>

</form>
        

      </div>
      
      </div>
      
      
      
      </div>
      
    </div>
  )
}
