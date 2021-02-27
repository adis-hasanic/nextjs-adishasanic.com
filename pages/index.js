import Menu from '../components/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  return (

    <div className="landing">
      <Head><title>Adis Hasanic - UX / UI, Web and Visual Designer</title><link rel="shortcut icon" href="favicon.jpg" />
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

      <div className="row"><div className="landing-content">
        <div className="top">
          <div className="name">Adis Hasanic</div>
          <div className="first-menu">
            <Link href="/about"><div>About</div></Link>
            <Link href="/references"><div>References</div></Link>
            <Link href="https://calendly.com/adishasanic/60min?month=2021-02"><div>Contact</div></Link>
          </div>
        </div>
      </div></div>

      <div className="row"><div className="landing-content">
        <div className="intro">
          <h1>Designing UX / UI, web and visual, past 10 years, at startups.<br></br> Currently 24, freelancing from Bosnia, looking for a full-time role<br></br> at a startup, in UK or EU, which is willing to sponsor a visa.</h1>
        </div>
      </div></div>

      <div className="row"><div className="landing-content">

        <div className="work-line no-link">
          <div className="name">Stacker</div>
          <div className="description">No-code app builder for data-based workspaces</div>
          <div className="time">Feb 2021 - present</div>
          <div className="role">UX / UI</div>
        </div>

        <div className="work-line no-link">
          <div className="name">GigaPay</div>
          <div className="description">Send any payment as a salary (tax, insurance, etc.)</div>
          <div className="time">Jan 2021 (1 month)</div>
          <div className="role">UX / UI</div>
        </div>

        <Link href="/flowdash">
          <div className="work-line">
            <div className="name">Flowdash</div>
            <div className="description">No-code app builder for task-based workflows</div>
            <div className="time">Oct 2020 – Dec 2020</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/stacker">
          <div className="work-line">
            <div className="name">Stacker</div>
            <div className="description">No-code app builder for data-based workspaces</div>
            <div className="time">Feb 2020 – May 2020</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/amigos">
          <div className="work-line">
            <div className="name">Amigos</div>
            <div className="description">Car search and marketplace</div>
            <div className="time">Sep 2019 (1 month)</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/teleport">
          <div className="work-line">
            <div className="name">Teleport</div>
            <div className="description">“Uber” for deliveries</div>
            <div className="time">Jun 2019 (3 days)</div>
            <div className="role">UX / UI, Web, Visual</div>
          </div>
        </Link>

        <Link href="/teamscope">
          <div className="work-line">
            <div className="name">Teamscope</div>
            <div className="description">Analyze personality and values to build teams</div>
            <div className="time">Nov 2018 – Jan 2020</div>
            <div className="role">UX / UI, Web, Visual</div>
          </div>
        </Link>

        <Link href="/indiecampers">
          <div className="work-line">
            <div className="name">IndieCampers</div>
            <div className="description">Book a campervan on a mobile website</div>
            <div className="time">Oct 2018 (1 week)</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/portal">
          <div className="work-line">
            <div className="name">Portal</div>
            <div className="description">Crpytocurrency wallet and exchange</div>
            <div className="time">Jun 2018 - Mar 2019</div>
            <div className="role">UX / UI, Web, Visual</div>
          </div>
        </Link>

        <Link href="/tides">
          <div className="work-line">
            <div className="name">Tides</div>
            <div className="description">Decentralized health insurance via blockchain</div>
            <div className="time">Nov 2017 - Dec 2017</div>
            <div className="role">Web</div>
          </div>
        </Link>

        <Link href="/engine">
          <div className="work-line">
            <div className="name">Engine</div>
            <div className="description">Admin panel for managing eCommerce store</div>
            <div className="time">Sep 2017 - Dec 2017</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <div className="work-line no-link">
          <div className="name">Meitu</div>
          <div className="description">Mobile photo editing apps</div>
          <div className="time">Jun 2017 – Jul 2017</div>
          <div className="role">Visual (infographics)</div>
        </div>

        <Link href="/liftigniter">
          <div className="work-line">
            <div className="name">LiftIgniter</div>
            <div className="description">Setup and dashboard of recommendation API</div>
            <div className="time">Jan 2017 - Apr 2017</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/typen">
          <div className="work-line">
            <div className="name">Typen</div>
            <div className="description">Writing app with customizable look</div>
            <div className="time">Jun 2016 - Dec 2016</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/helpjuice">
          <div className="work-line">
            <div className="name">Helpjuice</div>
            <div className="description">Build a knowledgebase</div>
            <div className="time">Jun 2016 - Aug 2016</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/foodmunk">
          <div className="work-line">
            <div className="name">Foodmunk</div>
            <div className="description">Eat healthy</div>
            <div className="time">Jan 2016 – Jun 2016</div>
            <div className="role">UX / UI</div>
          </div>
        </Link>

        <Link href="/kamcord">
          <div className="work-line">
            <div className="name">MultiplyLabs</div>
            <div className="description">Customizable pill for health and energy</div>
            <div className="time">Oct 2015 (1 week)</div>
            <div className="role">Web</div>
          </div>
        </Link>

        <Link href="/kamcord">
          <div className="work-line">
            <div className="name">Kamcord</div>
            <div className="description">Share videos or livestreams of mobile gaming</div>
            <div className="time">May 2015 – Sep 2015</div>
            <div className="role">UX / UI, Web, Visual</div>
          </div>
        </Link>

        <Link href="/brandedme">
          <div className="work-line">
            <div className="name">Branded.me</div>
            <div className="description">Personal website builder</div>
            <div className="time">Aug 2014 – Apr 2015</div>
            <div className="role">UX / UI, Web, Visual</div>
          </div>
        </Link>

        <div className="work-line no-link">
          <div className="name">Mobiley</div>
          <div className="description">Mobile website builder</div>
          <div className="time">Jun 2013 – Jul 2014</div>
          <div className="role">UX / UI, Web, Visual</div>
        </div>

        <div className="work-line no-link">
          <div className="name">Weebly</div>
          <div className="description">Official web themes for 10M+ users</div>
          <div className="time">Jun 2012 – Jun 2013</div>
          <div className="role">Web</div>
        </div>

        <div className="work-line no-link last">
          <div className="name">Playmonks</div>
          <div className="description">Discover new PC/console games</div>
          <div className="time">Jun 2011 – Jun 2012</div>
          <div className="role">UX / UI, Web, Visual</div>
        </div>

      </div></div>

      <div className="row"><div className="landing-content">
        <div className="outro">
          <div>
          In mid 2012 I saw a job ad by Weebly that they were looking for web designers to design their official web themes to be offered to millions of their users. I got accepted to be among 10 web designers out of 250+ that applied. Until mid 2013, reporting to an in-house designer at Weebly, I designed more than 15 mobile-ready web themes that Weebly included in their official offering. It was incredible to see that it's possible to work with a company like that and provide something useful to millions of people, while going to high school and working from a bedroom. That's when I saw the power of internet and software.
            <br></br><br></br>
            In 2010, I started posting my work on DeviantART. It was mostly web design, graphic design and visual art, based on my fictional ideas for practice purposes. I started getting freelance work, won a few online design contests on 99designs. Then in 2011, I posted <Link href="/woodfolio"><a href="/woodfolio">Woodfolio</a></Link>, a website design of a fictional creative agency. It got featured in a Daily Deviation of DeviantART, a section reserved for a few selected artworks of the day deemed as great by the moderators, and quickly got thousands of views. That got me an offer from the founder of Playmonks, a Chicago based early stage startup, to design UI of a web platform that makes it easy to discover new video games based on what you and your friends played. I was 15.
          <br></br><br></br>
          During 2000s I was spending a lot of time playing PC games (CS, DotA, WoW), and in 2008, on an online forum for gamers, I saw people posting logos and visual art in Art & Design section. I downloaded Photoshop to try making an image myself, and after playing with it a bit and making something abstract, I thought "This is it. This is what I want to do for a living." I couldn't stop myself from using Photoshop every day after that.
          <br></br><br></br>
          Born on 26 March 1996, a few months after the end of <a href="https://en.wikipedia.org/wiki/Bosnian_War">Bosnian War</a>.
          </div>
    
        </div>
      </div></div>

    </div>
  )
}
