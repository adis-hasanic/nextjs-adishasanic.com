import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
        <div className="row">
          <div className="about">
            <img src="/adis-hasanic.jpg"></img>
            <div className="about-text">
              <p>I’m Adis, a 24-year-old creative from Bosnia. Passionate about screen, images, products, startups, storytelling, film and text. Artist at heart, but I love designing above all and creating change and value via business.</p>
              <p>Designing at early-stage tech startups past 10 years, primarily UI and UX, sometimes websites and visuals (slides, pages, etc.). Mostly remotely, with on-site 1 year in San Francisco and 1 year in Tallinn. I solve problems with explorations and making mockups fast (using Figma), look for concerns with any solution, and like to hear and discuss feedback on drafts often.</p>
              <p><b>Looking to join an early-stage startup in Europe (visa required).</b><br></br><a>adishasanic96@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
