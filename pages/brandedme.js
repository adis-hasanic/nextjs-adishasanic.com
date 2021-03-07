import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Branded.me - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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
          <img src="/portfolio/product/brandedme/1.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/2.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/3.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/4.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/5.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/6.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/7.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/8.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/9.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/brandedme/10.jpg" className="eleven-twenty"></img>
        </div>

      </div>

    </div>
  )
}
