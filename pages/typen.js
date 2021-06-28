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
      <Link href="/"><a href="/" className="selected">Back</a></Link>
      </div>
      </div>
      </div>
      
      
      <div className="width">
      <div className="text">
      <div className="text-500">
      Typen
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Typen was a product I designed and bootstrapped to build and launch in 2016, based on my belief that a product for creative part of the writing process should have a customizable look, a focus mode where only text is visible, and internal storage. A typewriter of the 21st century.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Process
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      I designed the product on my own, and after it was built and launched, I was in contact with users to research the user needs and user feedback, based on which I was planning the roadmap.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/typen/process.jpg"></img>
      </div>
      </div>
      
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Designs
      </div>
      </div>
      </div>
      
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix" src="portfolio/product/typen/1.png"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix" src="portfolio/product/typen/2.png"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix" src="portfolio/product/typen/3.png"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix border" src="portfolio/product/typen/4.png"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-ninetysix border" src="portfolio/product/typen/5.png"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Effect
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      After launch, during 3 months of designing marketing and advertising material and advertising Typen via Facebook, there was more than 2000 sign ups and positive feedback sent from amateur novelists as well as a professional dramturge. I discontinued it to focus on freelancing, but I learned about the difficulty of finding marketing message after the product has been built and continual support to the customers.
      </div>
      </div>
      </div>
      
      
      <div className="width">
      <div className="text">
      <div className="text-400">
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
  <input type="email" name="email" required></input>
      
      <div className="text-100">Message</div>
  <textarea type="text" name="message" required></textarea>
  <button type="submit">Send</button>

</form>
       </div>
      </div>
      
      </div>
      
    </div>
  )
}
