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
              <p>I'm a 24-year-old interface designer from and currently based in Bosnia and Herzegovina. I also design user experience, although talking to users is something I have yet to start practicing, and I don't really believe that an experience is ever really designed, but, I understand what that means in business. Occasionally, I have also designed websites for announcing, explaining or selling a product. As well as various visual material used in marketing, sales, advertising. And design system recently.</p>
              <p>I've been designing professionally for almost 10 years. In 2000s I played video games a lot (CS, DotA, WoW), and in the Art & Design section of a gaming forum I found Photoshop, installed it to see if it might be something for me, and after creating my first abstract image, I thought "This is it. This is what I want to do for a living." I guess I found my passion, as that love of making images and designing on screen is still ongoing. After posting random images, graphic design, and web design on forums and showcase websites, I started getting freelance work when I was around 14, and from there I went into UI and UX. I learned all I know through reading and through experience of working with smart people in tech business, at startups backers of which include YCombinator, 500 Startups, TechStars, Sequoia, etc.</p>
              <p>My goal is to design tools as great digital products. 'Design' is a word that is used in many places, but to me it's just an act of shaping and rethinking the world, technology and processes we rely on to help us get what we need and want. Interactive screen connected to the internet provides many possibilities for what to show on it, how to help and entertain with it, and generally how to utilize it in life and society. Humankind is still at the beginning of exploration of it, it is still new compared to others mediums. It's an incredible opportunity to be at the forefront of that exploration by designing for it.</p>
              <p>I mostly rely on Figma/Sketch, Stickies/TextEdit/Byword/Notion, HTML/CSS, Principle, and Adobe CC on a MacBook Pro. Recently learned a bit about React, and I built this website in Next JS. My process mostly comes down to asking questions and researching to better understand, making drafts (prototypes, mockups, wireframes) of what I think addresses the requirements, and discussing, iterating, launching, and tracking.</p>
              <p>Currently, I'm looking for a full-time role, preferably at a startup located in a city that is a tech hub, as I'm also looking to relocate. Reach out anytime at <b>adishasanic96@gmail.com</b></p>
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
