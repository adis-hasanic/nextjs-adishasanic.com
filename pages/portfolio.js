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
      <div className="text">Stacker was a London based startup (5-15 people), backed by YC and Initialized Capital, building a web platform that makes it easy to create web apps without coding using existing data in Airtable, Google Sheets, etc. On a freelance basis, I was working mostly on UI/UX and design system. In second part of 2020 Stacker's sales skyrocketed, and in 2021 Stacker raised a Series A from Andreessen Horowitz.</div>
    <div className="see-work"><Link href="stacker"><a href="stacker">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Flowdash</div>
      <div className="period">2020 (4 months)</div>
      </div>
      <div className="text">Flowdash was a San Francisco based startup (just 2 co-founders; ex early engineers at Gusto), backed by YC, building a web platform that makes it easy to create apps without coding, focusing on internal tools and funnel-type processes. On a freelance basis, I was working motl on UI/UX. After 4 months, completely redesigned version of the product was launched, became #2 product of the month on ProductHunt with almost 3000 upvotes, and each new user was able to create a workflow without contacting support, which no user was able to before.</div>
    <div className="see-work"><Link href="flowdash"><a href="flowdash">See work &nbsp; →</a></Link></div>
      </div>
      
      <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Teamscope</div>
      <div className="period">2018 - 2020 (1 year 3 months)</div>
      </div>
      <div className="text">Teamscope was a Tallinn based startup (5-10 people) providing a web platform that helps companies reveal the underlying map of people’s characteristics (personality, values and competencies) to make better decisions in hiring, team building and employee onboarding. One Teamscope’s co-founder spent 30+ years in executive headhunting, and Teamscope was backed by TechStars, SAP, BlackPearls and Jaan Tallinn, co-founder of Skype.
<br></br><br></br>
I was at Teamscope full-time on-site in Estonia. Working closely with CEO and PM, I was designing product UI and UX, marketing website and created various visual and video assets for branding, marketing, sales, advertising and fundraising. Product was used by thousands of managers, employees and candidates in large companies, website redesigns increased avg. demo bookings from 5 to 30 per month, and Teamscope’s CEO, who was mostly selling the product to enterprise organizations, said that my work “made the product 10x of what it was and took the business to a whole new level.”</div>
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
      <div className="title">Teleport</div>
      <div className="period">2019 (3 days)</div>
      </div>
      <div className="text">Base Camp was a 3-day hackathon organized by Garage48 and Superangel (one of the most well-known Estonian VC funds, backed Bolt.eu, one of European's fastest growing startups ever) at Palo Alto Club in Tallinn, Estonia. I joined CEO and CTO of ZitiCity, a Lithuanian startup providing fast deliveries for businesses, and we built a prototype of "Uber for deliveries", making it easy to deliver anything locally within one day. I suggested the name Teleport, designed UI and UX, landing page and ads. More than 100 teams applied, 15 teams competed, we won. It led to Superangel investing in ZitiCity.</div>
    <div className="see-work"><Link href="teleport"><a href="teleport">See work &nbsp; →</a></Link></div>
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
      <div className="title">IndieCampers</div>
      <div className="period">2018 (1 week)</div>
      </div>
      <div className="text">IndieCampers was a Lisbon based startup and European biggest campervan rental service. As a part of a job interviewing process, I was asked to design a process of booking a campervan on a mobile website. I turned 5 pages into 1, reduced steps, and created a new style visually and in text. CEO and PM of IndieCampers were impressed and offered me a full-time role.</div>
    <div className="see-work"><Link href="indiecampers"><a href="indiecampers">See work &nbsp; →</a></Link></div>
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
      <div className="title">Engine</div>
      <div className="period">2017 (4 months)</div>
      </div>
      <div className="text">Engine was a US based startup providing a web platform that enables anyone to set up and manage a custom online store. Like Shopify, but with more independence and customization. On a freelance basis, I was hired to design Engine's admin panel, where shop owners track results and orders, and customize the shop by editing or creating new posts or changing the theme.</div>
    <div className="see-work"><Link href="engine"><a href="engine">See work &nbsp; →</a></Link></div>
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
      <div className="title">Typen</div>
      <div className="period">2016 (5 months)</div>
      </div>
      <div className="text">Typen was a distraction-free writing app. I designed UI and UX, as well as the marketing website and ads. I also recruited a developer, bootstrapped development and advertising. More than 2000 signups within 2 months, positive feedback on product sent from amateur novelists as well as a professional dramaturge. I discontinued it due to high cost of maintenance and to focus on freelancing, but I learned about the difficulty of finding a marketing message after the product has been designed and built, and of continual support to the customers.</div>
    <div className="see-work"><Link href="typen"><a href="typen">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Foodmunk</div>
      <div className="period">2016 (6 months)</div>
      </div>
      <div className="text">Fuel was a San Francisco based digital health startup, backed by 500 Startups. On a freelance basis, I was hired to design an iOS app that helps user stay on track of eating healthy. Collaborating closely with founder, I designed UI and UX, and recruited illustrator and provided creative direction for illustration work.</div>
    <div className="see-work"><Link href="foodmunk"><a href="foodmunk">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">MultiplyLabs</div>
      <div className="period">2015 (1 week)</div>
      </div>
      <div className="text">MultiplyLabs was a San Francisco based YC-backed startup that enables anyone to order a pill with supplements they need to stay healthy and energized through the busy day. I was hired to design a landing page that announces the idea and converts visits into email subscriptions.</div>
    <div className="see-work"><Link href="multiplylabs"><a href="multiplylabs">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Kamcord</div>
      <div className="period">2015 (4 months)</div>
      </div>
      <div className="text">Kamcord was a San Francisco based startup at Series A building a platform and tools to record and share gameplays and livestreams of mobile games, backed by YCombinator and Tencent Holdings. Much later in 2017 acquired by Lyft. On a freelance basis, I was designing at Kamcord on-site, reporting to Senior Designer, working mostly on UI/UX of web platform, mobile app and mobile recording tools, and on various visual assets for app store and platform.</div>
    <div className="see-work"><Link href="kamcord"><a href="kamcord">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Branded.me</div>
      <div className="period">2013 - 2015 (2 years)</div>
      </div>
      <div className="text">From mid 2013 to mid 2014, it was called Mobiley and we were a team of 3 people building a web app that converts any website into customizable mobile website. I was working remotely from Bosnia, while at last year of high school. Mobiley was discontinued due to poor development work done by an agency. In 2014 I moved to San Francisco, and from mid 2014 to mid 2015 we were a team of 6 people building a web app that converts LinkedIn profile into a customizable personal website. More than 300k websites were created within 3 months after launch and there was an offer for acquisition from Amazon.</div>
    <div className="see-work"><Link href="branded-me"><a href="branded-me">See work &nbsp; →</a></Link></div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Weebly</div>
      <div className="period">2012 - 2013 (1 year)</div>
      </div>
      <div className="text">During that time, Weebly was a San Francisco based startup providing a website builder to 15 million users, at Series B backed by YC and Sequoia. From more than 250 web designers that applied, I was selected to be among 10 to design a new set of website templates that adapt to any screen size. I delivered 15 unique templates that Weebly included in their official and featured on their blog. I was 16 years old and saw that it's possible to design something for millions of people while working from a bedroom.</div>
      </div>
    
    <div className="portfolio-story">
      <div className="story-intro">
      <div className="title">Playmonks</div>
      <div className="period">2011 - 2012 (1 year)</div>
      </div>
      <div className="text">Playmonks (first called TurboBOTZ) was a Chicago based startup, backed by The Brandery, building a web platform that makes it easy to discover new games based on what you and people you follow played. Collaborating closely with CEO and CTO who provided wireframes, I designed visual UI, marketing website and logotype.</div>
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
