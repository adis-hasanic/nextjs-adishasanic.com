import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
        <div className="row">
          <h1>References</h1>
          <h2>Words of people I worked with directly.</h2>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/blake-puryear.jpg"></img>
            <div className="text"><p>"From day one, Adis was able to massively contribute to the UX of our platform. He thoughtfully approaches his design decisions and takes the time to understand the individual problems of each user flow. He is always quick to respond and has created a visual design for our product that we are extremely happy with!"</p>
              <div className="person">
                <span className="name">Blake Puryear</span>
                <a href="https://www.linkedin.com/in/bpuryear" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while Product Lead at Engine in 2018</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/kelsey-klein.jpg"></img>
            <div className="text"><p>"Adis took direction well, and was comfortable iterating [on infographics] through completion to create exactly what we were looking for."</p>
              <div className="person">
                <span className="name">Kelsey Klein</span>
                <a href="https://www.linkedin.com/in/kelseyklein/" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while PM at Meitu in 2017</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/indraneel-mukherjee.jpg"></img>
            <div className="text"><p>“Adis is an excellent communicator, creates great designs fast, and is really great to work with. He quickly understood our rather complex requirements, did a bunch of quick iterations producing great work, was very flexible and patient as we came up with new requests, and also helped shape the overall product we were building."</p>
              <div className="person">
                <span className="name">Indraneel Mukherjee</span>
                <a href="https://www.linkedin.com/in/indraneelmukherjee" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while co-founder/CEO at LiftIgniter in 2016</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/tiffany-kuo.jpg"></img>
            <div className="text"><p>“Adis is easy to work with and fast. After sharing who our target customers are, a sketch of our landing page, and our copy, he was able to make suggestions to our original thinking and create a beautiful [landing page] design in just three days.”</p>
              <div className="person">
                <span className="name">Tiffany Kuo</span>
                <a href="https://www.linkedin.com/in/tiffanyamykuo/" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while co-founder at MultiplyLabs in 2015</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/dawson-whitfield.jpg"></img>
            <div className="text"><p>"Adis was always able to deliver something new and supremely beautiful. He was key in exploring new UIs and visual designs for our 10M+ users. A true pleasure to work with (and you get kickass designs too).”</p>
              <div className="person">
                <span className="name">Dawson Whitfield</span>
                <a href="https://ca.linkedin.com/in/dawsonwhitfield" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while designer at Weebly in 2012</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="reference">
            <img src="/references/vincent-chou.jpg"></img>
            <div className="text"><p>“Adis produces nothing short of grade A work with great attention to detail and mindfulness of client requirements.”</p>
              <div className="person">
                <span className="name">Vincent Chou</span>
                <a href="https://www.linkedin.com/in/vincentchou1" target="_blank"><img src="linkedin.svg"></img></a>
                <span className="about">while founder/CEO at Playmonks in 2011</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
