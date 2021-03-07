import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Kamcord Livestream Watching - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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
          <img src="/portfolio/product/kamcord/livestream/1.png" className="iphone-five"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/livestream/2.png" className="iphone-five"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/livestream/3.png" className="iphone-five"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/livestream/4.png" className="iphone-five"></img>
        </div>

      </div>

    </div>
  )
}
