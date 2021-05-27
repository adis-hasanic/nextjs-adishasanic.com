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
      
      <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Stacker</div>
      <div className="period">2020 - 2021 (8 months)</div>
      </div>
      <div className="text">Stacker is a London based startup, backed by YC and Initialized Capital, building a web platform that makes it easy to create custom business software without coding, based on connected data sources (Airtable, Google Sheets, etc.) I was designing at Stacker on a freelance basis, working mostly on UI/UX and design system. After lots of quick visual UI improvements, UX/UI redesigns, and new features, in second part of 2020 Stacker's sales skyrocketed, and in 2021 Stacker raised a Series A from Andreessen Horowitz.</div>
    <div className="see-work"><Link href="stacker"><a href="stacker">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Flowdash</div>
      <div className="period">2020 (4 months)</div>
      </div>
      <div className="text">Flowdash is a startup making it easy for ops teams to create workflows for teams to carry out complex business processes, with headquarters in San Francisco and backed by YC. I worked closely with CEO and CTO of Flowdash on making the product easier to use, creating new visual style, and adding new features. Completely redesigned version of the product was launched, became #2 product of the month on ProductHunt with almost 3000 upvotes, and each new user was able to get onboarded and create a workflow without contacting support.</div>
    <div className="see-work"><Link href="flowdash"><a href="flowdash">See work &nbsp; →</a></Link></div>
      </div>
      
      <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Teamscope</div>
      <div className="period">2018 - 2020 (1 year 3 months)</div>
      </div>
      <div className="text">Teamscope was a Tallinn based startup (5-10 people) providing a web platform that helps companies reveal the underlying map of people’s characteristics (personality, values and competencies) to make better decisions in hiring, team building and employee onboarding. One Teamscope’s co-founder spent 30+ years in executive headhunting, and Teamscope was backed by TechStars, SAP, BlackPearls and Jaan Tallinn, co-founder of Skype.
<br></br><br></br>
I was at Teamscope full-time on-site in Estonia. Working closely with CEO and PM, I was designing product UI and UX, marketing website and created various visual and video assets for branding, marketing, sales, advertising and fundraising. Product was used by thousands of managers, employees and candidates in large companies, website redesigns increased avg. demo bookings from 5 to 30 per month, and Teamscope’s CEO, who was mostly selling the product to enterprise organizations, said that my work “made the product 10x of what it was and took the business to a whole new level”.</div>
    <div className="see-work"><Link href="teamscope"><a href="teamscope">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Amigos</div>
      <div className="period">2019 (1 month)</div>
      </div>
      <div className="text">My brother Dino, who writes code and manages a car dealership in California, hired me in 2019 to design an iOS app that makes it easy to find the right car and purchase it at a nearby dealership. The idea was that it should be like a social network, where options are narrowed by filters and reviews, and like a funnel that goes from exploration to making a list of favorites to contacting dealership to negotiate a deal. That's the customer side, and then there was also the dealership side of the app where vehicles are posted and leads tracked.</div>
    <div className="see-work"><Link href="amigos"><a href="amigos">See work &nbsp; →</a></Link></div>
      </div>
      
      <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Portal</div>
      <div className="period">2018 - 2019 (9 months)</div>
      </div>
      <div className="text">Portal was a San Francisco based startup trying to build a first Mac app that brings everything a user needs related to cryptocurrencies — storing, transferring, exchange, and conversion. I designed product UI and UX, and a website that presents the product and collects email addresses for requesting early access.</div>
    <div className="see-work"><Link href="portal"><a href="portal">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Tides</div>
      <div className="period">2018 (2 months)</div>
      </div>
      <div className="text">Tides was a San Francisco based startup trying to build a platform that uses blockchain technology to decentralize health insurance. I designed a website announcing the product, a document template for a whitepaper explaining the technology, and a business card. Before I started designing product UI and UX, Tides pivoted to start building a platform for managing cryptocurrencies.</div>
    <div className="see-work"><Link href="tides"><a href="tides">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">LiftIgniter</div>
      <div className="period">2017 (5 months)</div>
      </div>
      <div className="text">LiftIgniter was a YC-backed San Francisco based startup providing API for creating content recommendations and analyzing user behavior. On a freelance basis, I was hired to design the new onboarding process of setting up an API to an app, on making it easy for users to learn from data and configure the API, and on creating visuals for the marketing website.</div>
    <div className="see-work"><Link href="liftigniter"><a href="liftigniter">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Foodmunk</div>
      <div className="period">2016 (5 months)</div>
      </div>
      <div className="text">Fuel was a San Francisco based digital health startup, backed by 500 Startups. On a freelance basis, I was hired to design an iOS app that helps user stay on track of eating healthy. Collaborating closely with founder, I designed UI and UX, and recruited illustrator and provided creative direction for illustration work.</div>
    <div className="see-work"><Link href="foodmunk"><a href="foodmunk">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="outro">
      <div className="text">If you want to see more or to learn more about the process, happy to explain more via call or email.</div>
      <div className="cta">
      <a href="mailto:adishasanic96@gmail.com"><div className="button text-only">Email</div></a>
      <a href="https://www.linkedin.com/in/adis-hasanic/"><div className="button linkedin"><img src="linkedin.svg"></img></div></a>
      </div>
      </div>
    
    
      </div>
      </div>
    
    
    

      
      
    </div>
  )
}
