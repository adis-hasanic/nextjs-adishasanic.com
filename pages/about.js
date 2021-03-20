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

        <div className="row live intro">
            
          <h1>I’m Adis, a 24-year-old visual UI and UX designer from Bosnia and Herzegovina. Past 9 years (3 while going to high-school) designing at early-stage startups building digital products (web platforms and mobile apps), backers of which include YCombinator, TechStars, Sequoia, 500 Startups, Tencent, Khosla, etc.<br></br><br></br>When I was 12, on an online forum for gamers I discovered Photoshop, made an abstract image and thought "This is it, this is what I want to do for a living." I started posting my graphic design and web design work on showcase websites (such as deviantART), which led to part-time remote work at a Chicago-based startup when I was 15. I mostly worked remotely, with on-site 1 year in San Francisco (2014 - 2015) and 1 year in Tallinn (2019 - 2020). I’ve had plans to study Industrial Design when I was 19, but after taking drawing classes, I realized I'm only interested in trying to create something amazing in screen and software.<br></br><br></br>Currently based in Bosnia and Herzegovina. Looking to join an early-stage startup in EU or UK, start remotely and relocate when possible. My process is learning (reading, thinking), drafts (mockups in Figma) and feedback (discussions with collaborators, user feedback and metrics). I think the best way to get started is just to try working together for a week or two and see where to go from there.<br></br><br></br> <a href="/Adis-resume.pdf">Download resume (PDF)</a></h1><br></br>
        </div>

      </div>

    </div>
  )
}
