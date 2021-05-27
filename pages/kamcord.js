import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Kamcord</title>
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
      <Link href="portfolio"><a className="current" href="portfolio"><div>← &nbsp; Back</div></a></Link>
      </div>
      
      </div>
      </div>
      
      <div className="portfolio">
    
    <div className="section">
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/website/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/website/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/website/3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/website/4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/website/5.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/kamcord/livestream.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/1.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/2.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/3.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/4.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/5.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/6.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/7.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/8.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="android-landscape" src="portfolio/product/kamcord/broadcasting/9.png"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
