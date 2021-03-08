import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Teamscope - Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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
          <img src="/portfolio/web/teamscope-2020/home.jpg" className="forteen-forty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/teamscope/1/1.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/teamscope/1/3.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/teamscope/1/4.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/2/1.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/3/2.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/3/3.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/3/4.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/4/1.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/4/2.jpg" className="twelve-eighty border"></img>
        </div>

        <div className="row no-vh">
          <img src="/portfolio/product/teamscope/4/3.jpg" className="twelve-eighty border"></img>
        </div>

      </div>

    </div>
  )
}
