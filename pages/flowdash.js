import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>Flowdash</h1>
        </div>
        <div className="row">
          <p>In August 2020, hired by Flowdash, a YC-backed San Francisco based startup, to work the design of their product. Working closely with CEO and CTO on redesigning Flowdash's product and on designing new features.</p>
        </div>
        <div className="row">
          <p>The problem was mainly that people who sign up do not learn how to build a workflow on their own. After about 3 months, the new version was launched on ProductHunt: got more than 2000 upvotes, positive feedback on product and design, and everyone who tried it went through the onboarding successfully.</p>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/1.jpg" className="eleven-twenty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/2.jpg" className="eleven-twenty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/3.jpg" className="eleven-twenty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/4.jpg" className="eleven-twenty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/5.jpg" className="eleven-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
