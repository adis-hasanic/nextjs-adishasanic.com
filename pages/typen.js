import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="content">
      <div className="row">
          <h1>Typen</h1>
          <h2>Distraction-free writing app.</h2>
        </div>
        <div className="row">
          <p>In 2017, I founded and designed Typen, a writing app that helps the user focus on creative part of writing by removing distractions and providing customizable look of the app to suit any space, atmosphere, or time.</p>
        </div>
        <div className="row">
          <img src="/portfolio/product/typen/1.png" className="eleven-ninetysix"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/typen/2.png" className="eleven-ninetysix"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/typen/3.png" className="eleven-ninetysix"></img>
        </div>
        <div className="row">
          <img src="/portfolio/product/typen/5.png" className="eleven-ninetysix"></img>
        </div>
      </div>
    </div>
  )
}
