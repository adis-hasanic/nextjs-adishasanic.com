import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis Hasanic - Interface Designer</title>
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

        <div className="row intro">
          <div>
            <div className="name">Adis Hasanić</div>
            <div className="about">Interface Designer</div>
            <div className="icons-container">
              <div className="icons">
                <a href="https://www.linkedin.com/in/adis-hasanic/" className="linkedin"><img src="linkedin.svg"></img></a>
                <a href="https://adishasanic96.typeform.com/to/IVmKhGC5" className="message"><img src="message.svg"></img></a>
              </div>
            </div>
          </div>
        </div>

        <Link href="flowdash">
          <a href="flowdash">
            <div className="row">
              <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty"></img>
            </div>
          </a>
        </Link>

        <Link href="stacker">
          <a href="stacker">
            <div className="row">
              <img src="/portfolio/product/stacker/1/4.jpg" className="twelve-eighty"></img>
            </div>
          </a>
        </Link>


        <Link href="teamscope-website-2020">
          <a href="teamscope-website-2020">
            <div className="row">
              <img src="/portfolio/web/teamscope-2020/preview.jpg" className="twelve-eighty"></img>
            </div>
          </a>
        </Link>

        <Link href="teamscope">
          <a href="teamscope">
            <div className="row">
              <img src="/portfolio/product/teamscope/preview.jpg" className="twelve-eighty"></img>
            </div>
          </a>
        </Link>

        <Link href="teleport">
          <a href="teleport">
            <div className="row">
              <img src="/portfolio/product/teleport/schedule-dropoff/1.jpg" className="twelve-eighty"></img>
            </div>
          </a>
        </Link>

        <Link href="thrive">
          <a href="thrive">
            <div className="row">
              <img src="/portfolio/product/thrive/5/1.png" className="iphone-x"></img>
            </div>
          </a>
        </Link>

        <Link href="portal">
          <a href="portal">
        <div className="row">
          <img src="/portfolio/product/portal/2/1.jpg" className="twelve-eighty"></img>
        </div>
        </a>
        </Link>

        <Link href="indiecampers">
          <a href="indiecampers">
            <div className="row">
              <img src="/portfolio/product/indiecampers/preview.png" className="iphone-5"></img>
            </div>
          </a>
        </Link>

        <div className="row">
          <img src="/portfolio/web/tides/preview.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/engine/2.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/liftigniter/8.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/typen/2.png" className="eleven-ninetysix"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/helpjuice/4.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/foodmunk/3/1.png" className="iphone-5"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/website/1.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/livestream/3.png" className="iphone-5"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/4.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/2.jpg" className="twelve-eighty"></img>
        </div>

      </div>
    </div>
  )
}
