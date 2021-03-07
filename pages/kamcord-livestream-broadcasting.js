import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Kamcord Livestream Broadcasting - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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
          <img src="/portfolio/product/kamcord/broadcasting/1.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/2.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/3.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/4.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/5.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/6.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/7.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/8.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/9.png" className="android-landscape"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/kamcord/broadcasting/10.png" className="android-landscape"></img>
        </div>


      </div>

    </div>
  )
}
