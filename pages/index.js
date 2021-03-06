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

        <div className="content">
          <h1>Adis Hasanic</h1>
          <h2>Product Designer (UI/UX)</h2>
          <a href="adishasanic96@gmail.com">Email</a>
          <a href="https://adishasanic.com/Adis-resume.pdf">Resume</a></div>

      </div>
  )
}
