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
          <h1>I design digital product UI and UX. <br></br><a href="/Adis-resume.pdf">Resume</a> <a href="mailto:adishasanic96@gmail.com">Email</a></h1><br></br>
        </div>

        <div className="row live">
          <h2>Flowdash</h2><br></br>
          <p>Create web apps, without coding, for team workflows.</p><br></br>
          <Link href="/flowdash"><a href="/flowdash">See more</a></Link><br></br>
          <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty border"></img><br></br>
        </div>

        <div className="row live">
          <h2>Stacker</h2><br></br>
          <p>Create web apps, without coding, from spreadsheets.</p><br></br>
          <Link href="/stacker"><a href="/stacker">See more</a></Link><br></br>
          <img src="/portfolio/product/stacker/7/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>Teamscope</h2><br></br>
          <p>Analyze personality and values to build teams.</p><br></br>
          <Link href="/teamscope"><a href="/teamscope">See more</a></Link><br></br>
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty border"></img><br></br>
        </div>

        <div className="row live">
          <h2>Thrive</h2><br></br>
          <p>Buy a car you want at a dealership nearby.</p><br></br>
          <Link href="/thrive"><a href="/thrive">See more</a></Link><br></br>
          <img src="/portfolio/product/thrive/2/1.png" className="iphone-x"></img><br></br>
        </div>

        <div className="row live">
          <h2>Portal</h2><br></br>
          <p>Store, transfer and exchange cryptocurrencies.</p><br></br>
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
