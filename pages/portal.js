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
      Portal
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2018 for 9 months total, on a freelance basis full-time, I was a sole designer at Portal, an early-stage startup with headquarters in San Francisco, building a Mac app that helps anyone store, transfer and exchange cryptocurrencies.
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
      From start to end of the process, I collaborated closely with Chandra Duggirala, CEO of Portal. In a highly iterative process, we did research users and competitors, decided on a design roadmap, after which I'd draw sketches or create mockups of designs explaining my ideas and Chandra would draw sketches explaining his ideas, which we would then discuss together and decide on next steps.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty border" src="portfolio/product/portal/research-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty border" src="portfolio/product/portal/research-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-1.jpeg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-2.jpeg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-3.jpeg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-4.jpeg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-5.jpeg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="six-hundred" src="portfolio/product/portal/sketch-6.jpeg"></img>
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
      <div className="text">
      <div className="text-300">
      Explorations
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      It took a few months of iterations and discussion until we agreed on the direction of the structure and style of app UI and UX. 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/portal/exploration-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="nine-sixty" src="portfolio/product/portal/exploration-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="nine-sixty" src="portfolio/product/portal/exploration-3-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="nine-sixty" src="portfolio/product/portal/exploration-3-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/portal/exploration-4-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/portal/exploration-4-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty border" src="portfolio/product/portal/exploration-5.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/exploration-6.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty" src="portfolio/product/portal/exploration-7.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/exploration-8-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/exploration-8-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-300">
      Final
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      The direction we decided to go is where the main two areas are wallet and exchange, and those two areas are distinguished by the background color. When the structure was decided of those two basic areas, from there it was mostly about solving design challenges of how to structure smaller areas and make it easy for user to do all the crypto related activities from one place: getting onboarded by creating account and safely storing password, tracking portfolio, making transfers, following prices, chatting with partners and consultants, exchanging and converting currencies, etc.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/1/1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/1/2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/1/3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/1/4.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/1/5.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/4.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/5.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/6.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/7.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/8.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/9.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/2/10.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/4/3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/3/1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/3/2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/3/3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/3/5.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/4/1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="twelve-eighty" src="portfolio/product/portal/4/2.jpg"></img>
      </div>
      </div>
      
      </div>
      
    </div>
  )
}
