import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>Tides</h1>
          <h2>Decentralizing health insurance.</h2>
        </div>
        <div className="row">
          <p>Tides was a San Francisco based venture, started by the founders of Fuel (backed by 500 Startups), building a platform that uses blockchain technology that enables people to form their independent insurance pools, thus decentralizing health insurance. I only got to design the landing page before they moved on from that idea to focus on a new venture.</p>
        </div>
        <div className="row">
          <img src="/portfolio/web/tides/1.jpg" className="eleven-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
