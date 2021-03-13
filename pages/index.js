import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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

      <div className="content index">

        <div className="row live intro">
            
          <h1><img src="/adis-hasanic.jpg"></img><br></br>I’m Adis, a 24-year-old digital product designer from Bosnia and Herzegovina. Past 10 years I've been designing UI/UX, websites and visual at early-stage startups, backers of which include YCombinator, TechStars, 500 Startups, etc.<br></br><br></br>On a gaming forum, I stumbled upon Photoshop when I was 12, made an abstract image and thought "This is it, this is what I want to do for a living." I started making and posting my work of graphic design and web design on showcase websites when I was 13, which led to part-time remote work at a Chicago-based startup when I was 15, where I was hired to design UI and UX of a web app. I just kept doing it since, mostly as a freelancer remotely, with on-site 1 year in San Francisco and 1 year in Tallinn. I’ve had plans for studying Industrial Design when I was 19, but after taking drawing classes, I realized I don’t ever wish to move away from shaping the screen. I also love film, not the popular entertainment theatre-based high-society-only type but the timeless independent ones made by artists experimenting with possibilities of the medium and solving important problems by showing something directly or effectively, and if I wasn’t focusing on solving problems with technology, I’d focus on film editing and directing.<br></br><br></br>Currently based in Bosnia and Herzegovina. Looking to join an early-stage startup in EU or UK, start remotely and relocate when possible. My process is just drafts (mockups in Figma or Sketch) and feedback (discussions and metrics/user-feedback), so I think the best way to get started is just to try working together for a week or two and see where to go from there.<br></br><br></br><a href="/Adis-resume.pdf">Resume</a> <a href="mailto:adishasanic96@gmail.com">Email</a></h1><br></br>
        </div>

        <div className="row live">
          <h1>Flowdash</h1><br></br>
          <h2>Create web apps, without coding, for team workflows.</h2><br></br>
          <p>Flowdash was a San Francisco based 2-person startup, backed by YC. I was designing at Flowdash for 4 months (Aug 2020 - Dec 2020), making it easy to build and use workflows in Flowdash, as well as designing new features and capabilities into the product. After 4 months since I started, new version of Flowdash was posted on ProductHunt and it became #2 product of the month with more than 2000 upvotes.</p><br></br>
          <Link href="/flowdash"><a href="/flowdash">See more</a></Link><br></br>
          <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty border"></img><br></br>
        </div>

        <div className="row live">
          <h1>Stacker</h1><br></br>
          <h2>Create web apps, without coding, from spreadsheets.</h2><br></br>
          <p>Stacker was a London based 5-person startup. I was designing at Stacker for 4 months (Feb 2020 - May 2020), starting from making quick visual changes to their current UI, to making the editor easy to use, setup easy to understand, and to designing a new version of the product that focuses on workspaces and end-user productivity more than stand-alone apps.</p><br></br>
          <Link href="/stacker"><a href="/stacker">See more</a></Link><br></br>
          <img src="/portfolio/product/stacker/7/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Teamscope</h1><br></br>
          <h2>Analyze personality and values to build teams.</h2><br></br>
          <p>Teamscope was a Tallin based 6-person startup, backed by TechStars. I was a sole designer at Teamscope for 1 year (Nov 2018 - Jan 2020), working most closely with CEO and PM to design a product which presents an easy-to-follow process to the employees and candidates who will take the tests, as well as team builders and hiring managers to understand data via visualizations and find applicable insights.</p><br></br>
          <Link href="/teamscope"><a href="/teamscope">See more</a></Link><br></br>
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty border"></img><br></br>
        </div>

        <div className="row live">
          <h1>Thrive</h1><br></br>
          <h2>Buy a car you want at a dealership nearby.</h2><br></br>
          <p>Entire app designed in about 1 month (Sep 2019). Started with only the idea from the founder that it should be a marketplace designed as a social network that allows you to like, revisit, check comments and talk to dealerships. Result was a car-search focused platform designed as a funnel from exploration to narrowing down to favorites to talking with dealerships in purchasing.</p><br></br>
          <Link href="/thrive"><a href="/thrive">See more</a></Link><br></br>
          <img src="/portfolio/product/thrive/2/1.png" className="iphone-x"></img><br></br>
        </div>

        <div className="row live">
          <h1>IndieCampers Booking</h1><br></br>
          <h2>Book a campervan via mobile website.</h2><br></br>
          <p>IndieCampers was a Lisbon-based early-stage startup, and biggest campervan rental service in Europe. I was given 1 week (in Oct 2018) to design UI and UX of a lengthy process of booking a campervan via mobile website. After total 8 hours of work, I turned 5 pages into 1, simplified steps and language, created a new visual style, and sent it via email along with my reasoning behind all the design decisions. CEO and PM were impressed and offered me a full-time role at IndieCampers.</p><br></br>
          <Link href="/indiecampers"><a href="/indiecampers">See more</a></Link><br></br>
          <img src="/portfolio/product/indiecampers/preview.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h1>Portal</h1><br></br>
          <h2>Store, transfer and exchange cryptocurrencies.</h2><br></br>
          <p>Portal was a San Francisco based 3-person startup. Founders' previous venture was backed by 500 Startups. I was designing Portal for 9 months (mid 2018 - early 2019), working closely with CEO and CTO to understand the complex processes of working with cryptocurrencies and designing a single app where user can track and manage all their crypto finances and crypto related activities.</p><br></br>
          <Link href="/portal"><a href="/portal">See more</a></Link><br></br>
          <img src="/portfolio/product/portal/2/1.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Engine</h1><br></br>
          <h2>Manage an online store.</h2><br></br>
          <p>Engine was a US-based 5-person startup. I worked with Engine for several months during 2017, working closely with PM/co-founder to design UI and UX of an admin panel where Engine users can manage, track and run their custom online store.</p><br></br>
          <Link href="/engine"><a href="/engine">See more</a></Link><br></br>
          <img src="/portfolio/product/engine/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>LiftIgniter</h1><br></br>
          <h2>Setup API for content recommendations.</h2><br></br>
          <p>LiftIgniter was a San Francisco based 8-person startup, backed by YC. I worked with LiftIgniter for several months during 2017, working closely with CEO and CTO to design UI and UX of process of customer integrating LiftIgniter's API into their app and then using LiftIgniter's admin panel to track data and make modification to API settings to be more suitable to their needs.</p><br></br>
          <Link href="/liftigniter"><a href="/liftigniter">See more</a></Link><br></br>
          <img src="/portfolio/product/liftigniter/4.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Typen</h1><br></br>
          <h2>Focus on writing.</h2><br></br>
          <p>Typen was a personal project. Frustrated by the lack of proper writing apps that make it easy to store text and customize the look without showing a bunch of toolbars during creative process, in 4 months (late 2016 - early 2017) I designed UI and UX of Typen, bootstrapped and recruited developer, and designed website and created Facebook ads. Within 2 months of launch, more than 2000 signups, and positive feedback on design sent by amateur novelists as well as a professional dramaturge. I learned a lot about process of launching a product and difficulties of finding the marketing message after the product has been built.</p><br></br>
          <Link href="/typen"><a href="/typen">See more</a></Link><br></br>
          <img src="/portfolio/product/typen/1.png" className="eleven-ninetysix"></img><br></br>
        </div>

        <div className="row live">
          <h1>Foodmunk</h1><br></br>
          <h2>Find the next best meal for you nearby.</h2><br></br>
          <p>Foodmunk was an app by a 3-person digital health startup called Fuel, backed by 500 Startups. In about 6 months (Jan 2016 - Jun 2016), working closely with CEO, I designed UI and UX of an iOS app that learns about user's body, lifestyle and choices, to be able to recommend the next best meal nearby. The best means not only that it's healthy, but that it also provides variety when compared to previous choices.</p><br></br>
          <Link href="/foodmunk"><a href="/foodmunk">See more</a></Link><br></br>
          <img src="/portfolio/product/foodmunk/3/1.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h1>Kamcord Broadcasting</h1><br></br>
          <h2>Host a livestream while playing a mobile game.</h2><br></br>
          <p>Kamcord was San Francisco based startup with more than 40 people, backed by YC, Tencent, etc. I was working on Kamcord Broadcasting for 3 weeks (mid 2015), under a Senior Designer, who defined product requirements with PM and founders, and assigned me to design UI and UX, providing only the idea/direction that it could work similarly to Messenger floating avatars as a proven interaction pattern that helps in multitasking on mobile.</p><br></br>
          <Link href="/kamcord-livestream-broadcasting"><a href="/kamcord-livestream-broadcasting">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/broadcasting/4.png" className="android-landscape"></img><br></br>
        </div>

        <div className="row live">
          <h1>Kamcord Livestream</h1><br></br>
          <h2>Watch a livestream of a mobile game.</h2><br></br>
          <p>Kamcord was San Francisco based startup with more than 40 people, backed by YC, Tencent, etc. I was working on Kamcord Livestream for 2-3 weeks (mid 2015), under a Senior Designer, who defined product requirements with PM and founders, and assigned me to design UI and UX.</p><br></br>
          <Link href="/kamcord-livestream-watching"><a href="/kamcord-livestream-watching">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/livestream/2.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row">
          <h1>Kamcord.com</h1><br></br>
          <p>Find gameplays and livestreams, and discover new games.</p><br></br>
          <Link href="/kamcord-website"><a href="/kamcord-livestream-watching">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/website/1.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Branded.me</h1><br></br>
          <h2>Create a personal website, without coding, in minutes.</h2><br></br>
          <p>Branded.me was a 5-person startup. The product was a result of 2 years (2013 - 2015) of collaboration. In the first year it was called Mobiley and was a mobile website builder, but it was discontinued. Then we designed and built Branded.me, a personal website builder, in 6 months. Within 3 months of launching the product, there was more than 300k websites created by users.</p><br></br>
          <Link href="/brandedme"><a href="/brandedme">See more</a></Link><br></br>
          <img src="/portfolio/product/brandedme/1.jpg" className="eleven-twenty"></img><br></br>
        </div>

      </div>

    </div>
  )
}
