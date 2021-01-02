import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
        <div className="row">
          <div className="about">
            <img src="/references/adis-hasanic.jpg"></img>
            <div className="about-row">
              <p>I'm Adis Hasanic, 24 years old, from Bosnia and Herzegovina. For the past 9 years, I've been designing UI and UX, websites, and all sorts of visuals. I've mostly worked for tech startups, backers of which include YCombinator, 500 Startups, TechStars, Sequoia, etc. Remotely 7 years while based in Bosnia (4 years while going to high-school); on-site 1 year at Branded.me and Kamcord in San Francisco, CA (Sep 2014 - Sep 2015) and 1 year at Teamscope in Tallinn, Estonia (Jan 2019 - Jan 2020).</p>
              <p>I'm self-taught. In 2000s I played PC games a lot (CS, DotA, WoW), and in 2008, at the Art & Design section of an online forum for gamers, I found Photoshop, installed it to see if it might be something for me, and after creating an abstract image, I thought "This is it. This is what I want to do for a living." After posting my work of visual art, graphic design, logo design, and web design, on forums and showcase websites, I started getting freelance work when I was 14, and that led to UI and UX. </p>
              <p>I use Figma and text editors on a MacBook Pro. Recently learned a bit about React, and made this site in Next JS. My process mostly comes down to asking questions and researching to better understand, making drafts (prototypes, mockups, wireframes) of what I think addresses the requirements, and discussing, iterating, testing, launching, and tracking.</p>
              <p>Currently freelancing based in Bosnia and Herzegovina. Soon joining <a href="https://gigapay.co">Gigapay</a>, a Stockholm based fintech startup solving payments for gig economy. Reach out anytime at <a href="mailto:adishasanic96@gmail.com">adishasanic96@gmail.com</a></p>
            </div>
            <div className="about-row">
              <a className="button" href="cv.pdf">Download CV</a>
              <a className="button" href="https://calendly.com/adishasanic/60min">Schedule a call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
