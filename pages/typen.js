import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Typen - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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
          <img src="/portfolio/product/typen/1.png" className="eleven-ninetysix"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/typen/2.png" className="eleven-ninetysix"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/typen/3.png" className="eleven-ninetysix"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/typen/4.png" className="eleven-ninetysix border"></img>
        </div>

      </div>

    </div>
  )
}
