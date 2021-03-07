import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Flowdash - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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

      <div className="content presentation">

        <div className="row">
          <img src="/portfolio/product/flowdash/signup-1.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/signup-2.jpg" className="eleven-twenty border"></img>
        </div>
        
        <div className="row">
          <img src="/portfolio/product/flowdash/signup-3.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/dashboard.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/dashboard.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/table-1.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/table-2.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/settings-1.jpg" className="eleven-twenty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/flowdash/settings-2.jpg" className="eleven-twenty border"></img>
        </div>

      </div>

    </div>
  )
}
