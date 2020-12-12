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
          <p>Since August 2020, hired by Flowdash, a YC-backed San Francisco based startup, to work on the design of their product.</p>
        </div>
        <div className="row">
          <p>Recently, after 3 months of working closely with founders of Flowdash (Nick and Omar), they launched the new version on ProductHunt: #2 product of the month, almost 3000 upvotes, positive feedback on product and design, and everyone who tried it went through the onboarding successfully.</p>
        </div>
        <div className="row">
          <p><iframe className="producthunt" src="https://cards.producthunt.com/cards/posts/275215?v=1" height="512" frameborder="0" scrolling="no" allowfullscreen></iframe></p>
        </div>
        <div className="row">
          <img src="/portfolio/product/flowdash/4.jpg" className="eleven-twenty border"></img>
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
          <img src="/portfolio/product/flowdash/5.jpg" className="eleven-twenty border"></img>
        </div>
      </div>
    </div>
  )
}
