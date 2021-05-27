import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Teamscope</title>
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
      <div className="image"><img className="forteen-forty border" src="portfolio/web/teamscope-2020/home.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="forteen-forty border" src="portfolio/web/teamscope-2020/bookademo.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/1/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/1/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/1/3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/1/4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/2/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/3/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/3/3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/3/4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/4/1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/4/2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/4/3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="twelve-eighty border" src="portfolio/product/teamscope/4/4.jpg"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
