import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Tides</title>
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
      <div className="image"><img className="forteen-forty border" src="portfolio/web/tides/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="business-card" src="portfolio/visual/tides/1.png"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="business-card" src="portfolio/visual/tides/2.png"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
