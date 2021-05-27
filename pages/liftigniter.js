import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>LiftIgniter</title>
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
      <Link href="portfolio"><a className="current" href="portfolio"><div>← &nbsp;Back</div></a></Link>
      </div>
      
      </div>
      </div>
      
      <div className="portfolio">
    
    <div className="section">
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/5.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/7.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/8.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/9.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/10.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/11.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/12.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/13.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/14.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/15.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/liftigniter/3.jpg"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
