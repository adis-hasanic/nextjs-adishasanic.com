import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Flowdash</title>
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
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/signup-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/signup-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/signup-3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/dashboard.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/table-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/table-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/table-3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/table-4.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/detail-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/detail-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/filters-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/flow-0-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/flow-0-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/flow-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/flow-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/flow-3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/errors-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/settings-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/settings-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/settings-3.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/timers-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/permissions-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/collaborators-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/allassigned-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/allassigned-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/notifications-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/analytics.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/trial-expired-1.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/trial-expired-2.jpg"></img></div>
      </div>
      <div className="row">
      <div className="image"><img className="eleven-twenty border" src="portfolio/product/flowdash/playbook-1.jpg"></img></div>
      </div>
      </div>
    
    
    

      
      </div>
      
    </div>
  )
}
