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
          <h1>I design visual UI and UX focusing on products for web and mobile. <br></br>Past 10 years at early-stage startups (backed by YC, TechStars, etc.) <br></br><a href="/Adis-resume.pdf">Resume</a> <a href="mailto:adishasanic96@gmail.com">Email</a></h1><br></br>
        </div>

        <div className="row live">
          <h1>Flowdash</h1><br></br>
          <h2>Create web apps, without coding, for team workflows.</h2><br></br>
          <p>Flowdash was a 2-person startup (software engineers who are also building the product). I was designing at Flowdash for 4 months, making it easy to build and use workflows in Flowdash, as well as designing new features and capabilities into the product. After 4 months since I started, new version of Flowdash was posted on ProductHunt and it became #2 product of the month with more than 2000 upvotes.</p><br></br>
          <Link href="/flowdash"><a href="/flowdash">See more</a></Link><br></br>
          <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty border"></img><br></br>
        </div>

        <div className="row live">
          <h1>Stacker</h1><br></br>
          <h2>Create web apps, without coding, from spreadsheets.</h2><br></br>
          <p>Stacker was a 5-person startup. I was designing at Stacker for 4 months, starting from making quick visual changes to their current UI, to making the editor easy to use, setup easy to understand, and to designing a new version of the product that focuses on workspaces and end-user productivity more than stand-alone apps.</p><br></br>
          <Link href="/stacker"><a href="/stacker">See more</a></Link><br></br>
          <img src="/portfolio/product/stacker/7/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Teamscope</h1><br></br>
          <h2>Analyze personality and values to build teams.</h2><br></br>
          <p>Teamscope was a 6-person startup. I was a sole designer at Teamscope for 1 year, working most closely with CEO and PM to design a product which presents an easy-to-follow process to the employees and candidates who will take the tests, as well as team builders and hiring managers to understand data via visualizations and find applicable insights.</p><br></br>
          <Link href="/teamscope"><a href="/teamscope">See more</a></Link><br></br>
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty border"></img><br></br>
        </div>

        <div className="row live">
          <h1>Thrive</h1><br></br>
          <h2>Buy a car you want at a dealership nearby.</h2><br></br>
          <p>Entire app designed in about 1 month. Started with only the idea from the founder that it should be a marketplace designed as a social network that allows you to like, revisit, check comments and talk to dealerships. Result was a car-search focused platform designed as a funnel from exploration to narrowing down to favorites to talking with dealerships in purchasing.</p><br></br>
          <Link href="/thrive"><a href="/thrive">See more</a></Link><br></br>
          <img src="/portfolio/product/thrive/2/1.png" className="iphone-x"></img><br></br>
        </div>

        <div className="row live">
          <h1>Portal</h1><br></br>
          <h2>Store, transfer and exchange cryptocurrencies.</h2><br></br>
          <p>Portal was a 3-person startup. I was designing Portal for 9 months, working closely with CEO and CTO to understand the complex processes of working with cryptocurrencies and designing a single app where user can track and manage all their crypto finances and crypto related activities.</p><br></br>
          <Link href="/portal"><a href="/portal">See more</a></Link><br></br>
          <img src="/portfolio/product/portal/2/1.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>Typen</h2><br></br>
          <p>Focus on writing.</p><br></br>
          <Link href="/typen"><a href="/typen">See more</a></Link><br></br>
          <img src="/portfolio/product/typen/1.png" className="eleven-ninetysix"></img><br></br>
        </div>

        <div className="row live">
          <h2>Engine</h2><br></br>
          <p>Manage an online store.</p><br></br>
          <Link href="/engine"><a href="/engine">See more</a></Link><br></br>
          <img src="/portfolio/product/engine/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>LiftIgniter</h2><br></br>
          <p>Setup API for content recommendations.</p><br></br>
          <Link href="/liftigniter"><a href="/liftigniter">See more</a></Link><br></br>
          <img src="/portfolio/product/liftigniter/4.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>IndieCampers Booking</h2><br></br>
          <p>Book a campervan via mobile website.</p><br></br>
          <Link href="/indiecampers"><a href="/indiecampers">See more</a></Link><br></br>
          <img src="/portfolio/product/indiecampers/preview.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h2>Foodmunk</h2><br></br>
          <p>Find the next best meal for you nearby.</p><br></br>
          <Link href="/foodmunk"><a href="/foodmunk">See more</a></Link><br></br>
          <img src="/portfolio/product/foodmunk/3/1.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h2>Kamcord Broadcasting</h2><br></br>
          <p>Host a livestream while playing a mobile game.</p><br></br>
          <Link href="/kamcord-livestream-broadcasting"><a href="/kamcord-livestream-broadcasting">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/broadcasting/4.png" className="android-landscape"></img><br></br>
        </div>

        <div className="row live">
          <h2>Kamcord Livestream</h2><br></br>
          <p>Watch a livestream of a mobile game.</p><br></br>
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
          <p>Create a personal website, without coding, in minutes.</p><br></br>
          <Link href="/brandedme"><a href="/brandedme">See more</a></Link><br></br>
          <img src="/portfolio/product/brandedme/1.jpg" className="eleven-twenty"></img><br></br>
        </div>

      </div>

    </div>
  )
}
