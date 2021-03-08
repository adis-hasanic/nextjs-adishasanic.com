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
          <h1>Visual UI and UX. Web, mobile. Early-stage startups. <a href="/Adis-resume.pdf">Resume</a> <a href="mailto:adishasanic96@gmail.com">Email</a></h1><br></br>
        </div>

        <div className="row live">
          <h2>Flowdash</h2><br></br>
          <p>Create web apps, without coding, for team workflows</p><br></br>
          <Link href="/flowdash"><a href="/flowdash">See more</a></Link><br></br>
          <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty border"></img><br></br>
        </div>

        <div className="row live">
          <h2>Stacker</h2><br></br>
          <p>Create web apps, without coding, from spreadsheets</p><br></br>
          <Link href="/stacker"><a href="/stacker">See more</a></Link><br></br>
          <img src="/portfolio/product/stacker/7/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>Teamscope</h2><br></br>
          <p>Enterprise software that uses surveys and machine learning to analyze personalities, values and competencies, to help companies learn about their people to build better teams.</p><br></br>
          <Link href="/teamscope"><a href="/teamscope">See more</a></Link><br></br>
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty border"></img><br></br>
        </div>

        <div className="row live">
          <h2>Thrive</h2><br></br>
          <p>Vehicle marketplace focusing on helping the customer find the car they want and which is available at a nearby dealership.</p><br></br>
          <Link href="/thrive"><a href="/thrive">See more</a></Link><br></br>
          <img src="/portfolio/product/thrive/2/1.png" className="iphone-x"></img><br></br>
        </div>

        <div className="row live">
          <h2>Portal</h2><br></br>
          <p>Mac app that makes it easy for anyone to store, transfer, exchange and convert cryptocurrencies, and helps trade and withdraw on time.</p><br></br>
          <Link href="/portal"><a href="/portal">See more</a></Link><br></br>
          <img src="/portfolio/product/portal/2/1.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>Typen</h2><br></br>
          <p>Web-based writing app that helps focus on writing by providing text storage, customizable look, distraction-free mode.</p><br></br>
          <Link href="/typen"><a href="/typen">See more</a></Link><br></br>
          <img src="/portfolio/product/typen/1.png" className="eleven-ninetysix"></img><br></br>
        </div>

        <div className="row live">
          <h2>Engine</h2><br></br>
          <p>Admin panel of a web platform that enables anyone to set up and run an online store, independently on a custom domain.</p><br></br>
          <Link href="/engine"><a href="/engine">See more</a></Link><br></br>
          <img src="/portfolio/product/engine/2.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>LiftIgniter</h2><br></br>
          <p>Setting up and managing an API that when integrated learns about app's users to show accurate content recommendations.</p><br></br>
          <Link href="/liftigniter"><a href="/liftigniter">See more</a></Link><br></br>
          <img src="/portfolio/product/liftigniter/4.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h2>IndieCampers Campervan Booking</h2><br></br>
          <p>Process of booking a campervan via mobile website of IndieCampers, Europe's largest campervan rental service.</p><br></br>
          <Link href="/indiecampers"><a href="/indiecampers">See more</a></Link><br></br>
          <img src="/portfolio/product/indiecampers/preview.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h2>Foodmunk</h2><br></br>
          <p>Nutrition assistant that learns about user to ensure that each next meal is the best choice for health and variety (based on their previous meals).</p><br></br>
          <Link href="/foodmunk"><a href="/foodmunk">See more</a></Link><br></br>
          <img src="/portfolio/product/foodmunk/3/1.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row live">
          <h2>Kamcord Livestream Broadcasting</h2><br></br>
          <p>The solution that didn't exist until then — ability to host a livestream of a mobile game, using only a phone while playing a mobile game on it.</p><br></br>
          <Link href="/kamcord-livestream-broadcasting"><a href="/kamcord-livestream-broadcasting">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/broadcasting/4.png" className="android-landscape"></img><br></br>
        </div>

        <div className="row live">
          <h2>Kamcord Livestream Watching</h2><br></br>
          <p>Watching a livestream on phone of a mobile game. Makes it easy to send positive reactions, chat, connect, and explore who else is watching.</p><br></br>
          <Link href="/kamcord-livestream-watching"><a href="/kamcord-livestream-watching">See more</a></Link><br></br>
          <img src="/portfolio/product/kamcord/livestream/2.png" className="iphone-five"></img><br></br>
        </div>

        <div className="row">
          <h1>Kamcord.com</h1><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br>
          <img src="/portfolio/product/kamcord/website/1.jpg" className="twelve-eighty"></img><br></br>
        </div>

        <div className="row live">
          <h1>Branded.me</h1><br></br>
          <p>Enabling anyone to create a website about their professional history and achievements, focusing on converting LinkedIn profile into website.</p><br></br>
          <Link href="/brandedme"><a href="/brandedme">See more</a></Link><br></br>
          <img src="/portfolio/product/brandedme/1.jpg" className="eleven-twenty"></img><br></br>
        </div>

      </div>

    </div>
  )
}
