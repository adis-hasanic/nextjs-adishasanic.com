import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"
import Login from "../components/Login"

export default function Protected({ hasReadPermission }) {

  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  return (
    <div>
      <Head><title>Teamscope</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121629290-2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121629290-2');
  `,
          }}
        /></Head>

      <div className="page teamscope">

      <div className="arrow-left"><img src="arrow-left.svg"></img></div>
      <Link href="stacker"><div className="arrow-right"><img src="arrow-right.svg"></img></div></Link>

        <div className="section">
          <div className="content text">
          <br></br>
          <br></br>
            <h1>Teamscope</h1>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content text">
            <p>During that time, Teamscope (teamscope.io) was an early-stage startup with less than 10 people. Backed by TechStars, SAP, BlackPearls and Jaan Tallinn (co-founder of Skype).</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/team-photo.jpg" className="photo"></img>
            
          </div>
        </div>

        <div className="section">
          <div className="content text">
          <br></br>
          <br></br>
          <br></br>
            <h2>Product</h2>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content text">
            <p>Designed UX and UI of a mobile-friendly web app that collects data about people's characteristics (personality, values and competencies) to help companies make better decisions in hiring, teambuilding and employee onboarding.</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/product/1/1.jpg"></img>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/product/1/2.jpg"></img>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/product/1/3.jpg"></img>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/product/1/4.jpg"></img>
          </div>
        </div>

        <div className="section">
          <div className="content text">
          <br></br>
          <br></br>
          <br></br>
            <h2>Website</h2>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content text">
            <p>Designed and developed the marketing website on 2 occassions. From content strategy (in collaboration with founders and PM) and copywriting to visual design and HTML/CSS. Increased bookings of demo from 5 to 30 avg. per month.</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/website/home.jpg"></img>
          </div>
        </div>

        <div className="section">
          <div className="content">
            <img src="portfolio/teamscope/website/bookademo.jpg"></img>
          </div>
        </div>

      </div >

    </div >
  )
}
