import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head><title>Adis Hasanic - Product Designer (UI/UX)</title><link rel="shortcut icon" href="favicon.jpg" />
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

      <div className="content index">

        <div className="first"><h1>I design visual UI and UX <br></br>within web and mobile.</h1></div>
        <div className="nav">
            <Link href="/portfolio"><a href="/portfolio">Portfolio</a></Link>
            <Link href="/references"><a href="/references">References</a></Link> 
            <a href="https://www.linkedin.com/in/adis-hasanic-3381ab1b8/">LinkedIn</a>
                <a href="https://adishasanic96.typeform.com/to/IVmKhGC5">Contact</a>
                    
            </div>

      </div>

    </div>
  )
}
