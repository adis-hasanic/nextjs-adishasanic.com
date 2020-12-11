import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>Stacker</h1>
        </div>
        <div className="row">
          <p>From Feb 2020 to May 2020, I was a sole designer at Stacker, a London based YC early-stage startup backed by YC and Pentech, building a no-code platform that makes it easy to create an app from existing spreadsheets and customize it without coding.</p>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/1/1.jpg" className="twelve-eighty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/1/2.jpg" className="twelve-eighty border"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/1/3.jpg" className="twelve-eighty"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/1/4.jpg" className="twelve-eighty"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/1/5.jpg" className="twelve-eighty"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/2/1.jpg" className="twelve-eighty"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/stacker/2/3.jpg" className="twelve-eighty"></img>
        </div>
      </div>
    </div>
  )
}
