import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>MultiplyLabs</h1>
          <h2>Customizable pill for health and energy.</h2>
        </div>
        <div className="row">
          <p>In October 2015, I designed a coming-soon website for MultiplyLabs, early-stage startup based in San Francisco, backed by YCombinator, providing a customizable pill with supplements for health and energy.</p>
        </div>
        <div className="row">
          <img src="/portfolio/web/multiplylabs/1.jpg" className="eleven-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
