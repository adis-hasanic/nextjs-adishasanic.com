import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>IndieCampers</h1>
        </div>
        <div className="row">
          <p>In October 2018, as a part of a job application process to IndieCampers — a Lisbon based Europe's biggest campervan rental service — I was asked by IndieCampers to do a quick 1-week redesign of experience of booking a campervan via a mobile website. It led to an offer for a full-time role.</p>
        </div>
        <div className="row">
          <img src="/portfolio/quick/indiecampers/1.jpg" className="three-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
