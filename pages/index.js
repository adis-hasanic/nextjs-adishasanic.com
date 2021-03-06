
import Head from 'next/head'

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

        <div>
          Adis Hasanic<br></br><a href="https://adishasanic.com/Adis-resume.pdf">Download CV</a></div>

      </div>
  )
}
