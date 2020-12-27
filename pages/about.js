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
              <p>My name is Adis, I'm a 24-year-old product designer from Bosnia and Herzegovina. Occasionally, I have also designed websites for announcing, explaining or selling a product. As well as various visual material used in marketing, sales, advertising. And worked on 2 design systems recently.</p>
              <p>I'm self-taught, learned through experience designing past 9 years. In 2000s I played PC games a lot (CS, DotA, WoW), and in the Art & Design section of an online forum for gamers, I found Photoshop, installed it to see if it might be something for me, and after creating my first abstract image, I thought "This is it. This is what I want to do for a living." After posting my work of visual art, graphic design, logo design, and web design, on forums and showcase websites, I started getting freelance work when I was 14, and that led to UI and UX which I've been focusing on since. I've mostly worked remotely, while on-site only 1 year (Sep 2014 - Sep 2015) in San Francisco at Branded.me and Kamcord, and 1 year (Jan 2019 - Jan 2020) in Tallinn at Teamscope.</p>
              <p>I mostly rely on Figma and text editors on a MacBook Pro. Recently learned a bit about React, and I built this website in Next JS. My process mostly comes down to asking questions and researching to better understand, making drafts (prototypes, mockups, wireframes) of what I think addresses the requirements, and discussing, iterating, testing, launching, and tracking.</p>
              <p>Currently based in Bosnia and Herzegovina. Looking for a full-time role, willing to relocate. Feel free to reach out anytime at <a href="mailto:adishasanic96@gmail.com">adishasanic96@gmail.com</a></p>
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
