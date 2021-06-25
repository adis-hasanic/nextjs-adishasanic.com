import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
      
      
    <div>
      <Head><title>Adis — Product Designer</title>
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
      
      <div className="width">
      <div className="nav">
      <div className="text-100">
      <Link href="/"><a href="/" >Portfolio</a></Link>
      <a className="selected">About</a>
      <Link href="contact"><a href="contact" >Contact</a></Link>
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
    
      <div className="text-200 personal-photo">
      <div>
      <img src="adis-hasanic-photo.jpg"></img>
      </div>
      I'm Adis, a 25-year-old product designer from Bosnia and Herzegovina
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Past 10 years designing web platforms and apps at early-stage tech startups backed by YCombinator, A16Z, Sequoia, and TechStars. From problems, goals, and ideas, through research, understanding, user flows, visual, design system, HTML and CSS, testing, explanations, feedback and discussions, to user experience and interface that is easy to use and looks great while communicating brand values.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Occassionally designed websites and landing pages (from content strategy and IA to visual, copywriting, and HTML/CSS), and visual assets such as website images, email templates, business cards, document templates, presentation slides, etc.
      </div>
      </div>
      </div>
    
    <div className="width">
      <div className="text">
      <div className="text-100">
      Connect with me on <a href="https://www.linkedin.com/in/adis-hasanic/" >LinkedIn</a>
      </div>
      </div>
      </div>
      
      
      
      
      
      </div>
      
    </div>
  )
}
