import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>IndieCampers</h1>
          <h2>Book a campervan using a mobile website.</h2>
        </div>
        <div className="row">
          <p>In October 2018, as a part of a job application process to IndieCampers, Europe's biggest campervan rental service based in Lisbon, Portugal, I was asked by IndieCampers to do a quick 1-week redesign of experience of booking a campervan via a mobile website. I turned 5 pages into 1, set a new visual direction, and simplified process in lots of small ways. IndieCampers CEO and PM were impressed and offered me a full-time role.</p>
        </div>
        <div className="row">
          <img src="/portfolio/quick/indiecampers/1.jpg" className="three-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
