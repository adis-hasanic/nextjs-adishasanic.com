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
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/1/5.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/2/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty" src="portfolio/product/portal/2/2.jpg"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
