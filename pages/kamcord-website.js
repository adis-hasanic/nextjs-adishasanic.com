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

        <div className="row no-vh first">
          <img src="/portfolio/product/kamcord/website/1.jpg" className="twelve-eighty"></img>
        </div>

<div className="row">
          <img src="/portfolio/product/kamcord/website/2.jpg" className="twelve-eighty"></img>
        </div>

<div className="row">
          <img src="/portfolio/product/kamcord/website/3.jpg" className="twelve-eighty"></img>
        </div>

<div className="row">
          <img src="/portfolio/product/kamcord/website/4.jpg" className="twelve-eighty"></img>
        </div>

<div className="row">
          <img src="/portfolio/product/kamcord/website/5.jpg" className="twelve-eighty"></img>
        </div>

      </div>

    </div>
  )
}
