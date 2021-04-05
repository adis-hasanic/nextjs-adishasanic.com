import Head from 'next/head'

export default function Home() {
  return (
    <div>
       <Head><title>Adis Hasanic - Interface Designer</title>
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

      <div className="content">

        <div className="row intro">
          <div>
            <div className="name">Adis Hasanić</div>
            <div className="about">Interface Designer</div>
            <div className="icons-container">
            <div className="icons">
              <a href="https://www.linkedin.com/in/adis-hasanic/" className="linkedin"><img src="linkedin.svg"></img></a>
              <a href="https://adishasanic96.typeform.com/to/IVmKhGC5" className="message"><img src="message.svg"></img></a>
            </div>
            </div>
          </div>
        </div>

        <div className="row">
          <img src="/portfolio/product/flowdash/flow-2.jpg" className="eleven-twenty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/teamscope/1/2.jpg" className="twelve-eighty"></img>
        </div>

        <div className="row">
          <img src="/portfolio/product/portal/1/1.jpg" className="twelve-eighty"></img>
        </div>

      </div>
    </div>
  )
}
