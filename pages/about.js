import Menu from '../components/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div>
      <Link href="/"><div className="exit">←</div></Link>
      <div className="content references">
        <div className="row">
          <div className="about">
            <img src="/references/adis-hasanic.jpg"></img>
            <div className="about-text">
              <p>I’m Adis, a 24-year-old creative from Bosnia. Passionate about screen, images, products, startups, storytelling, film and text. Artist at heart, but I love designing above all and making change and value via business.</p>
              <p>Designing at early-stage tech startups past 10 years, primarily UI and UX, sometimes websites and visuals (slides, pages, etc.). Mostly remotely, with on-site 1 year in San Francisco and 1 year in Tallinn. I solve problems via explorations and making mockups fast (using Figma), look for concerns with any direction or solution, like to hear and discuss feedback on drafts often, and always look for ways to learn more about everything, test ideas, and bring something new and incredible to the medium and the market.</p>
              <p><b>Looking to join a startup in Europe (visa required). For UK, I already have an IELTS for UKVI certificate valid until Feb 2022. I can start remotely.</b><br></br><a href="mailto:adishasanic96@gmail.com">Email</a> or <a href="https://calendly.com/adishasanic/60min?month=2021-02">schedule a call</a> to hear more about my work and thinking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
