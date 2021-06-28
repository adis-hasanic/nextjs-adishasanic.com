import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
      
      
    <div>
      <Head><title>Adis Hasanic</title>
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
      I design product UI and UX, websites, and visual.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Past 10 years designing for early-stage startups backed by YC, A16Z, Sequoia, and TechStars. From problems, goals, and ideas, through research, user flows, visual, design system, HTML and CSS, testing, explanations, feedback and discussions, to user experience and interface that is easy to use and looks great while communicating brand values.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Occasionally designed websites (from content strategy and IA to visual, copywriting, and HTML/CSS), and visuals such as website images, email templates, business cards, document templates, presentation slides, etc.
      </div>
      </div>
      </div>
    
    <div className="width">
      <div className="text">
      <div className="text-100">
      More information on <a href="https://www.linkedin.com/in/adis-hasanic/" >LinkedIn</a>
      </div>
      </div>
      </div>
    
    <div className="width">
      <div className="text">
      <div className="text-200">
      Reach out anytime about anything.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Available for freelance work remotely for an early-stage startup (1-50 people), on an hourly, weekly, monthly, quarterly or project basis.
      </div>
      </div>
      </div>
      
    <div className="width">
      <div className="text">
      <form action="https://getform.io/f/240704a8-5047-49a9-9dcd-0180f07ccf03" method="POST">

      
      <div className="text-100">Your email address</div>
  <input type="email" name="email"></input>
      
      <div className="text-100">Message</div>
  <textarea type="text" name="message"></textarea>
  <button type="submit">Send</button>

</form>
        

      </div>
      
      </div>
      
      
      
      
      </div>
      
    </div>
  )
}
