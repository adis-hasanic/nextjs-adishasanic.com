import Head from 'next/head'
import { categories } from '../data/product.js'
import Link from 'next/link'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Adis Hasanic - Designer</title>
                <link rel="icon" href="/favicon.svg" />

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
                />

            </Head>

            <a className="contact-button" href="https://calendly.com/adishasanic/60min?month=2020-11">About and Contact</a>

            <div className="top-menu">
                <div class="top-menu-container">
                    <div class="pages">
                        <Link href="/"><span>About</span></Link>
                        <Link href="/portfolio"><span>Work</span></Link>
                        <Link href="/references"><span class="active">References</span></Link>
                    </div>
                    <div class="contact">
                        <a href="https://calendly.com/adishasanic/60min"><img src="calendly.svg"></img>Schedule a call</a>
                    </div>
                </div>
            </div>

            <div className="content-about">

                <div className="container">

                    <div className="section intro">
                        <div className="section image"><img src="/references/blake-puryear.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>"From day one, Adis was able to massively contribute to the UX of our platform. He thoughtfully approaches his design decisions and takes the time to understand the individual problems of each user flow. He is always quick to respond and has created a visual design for our product that we are extremely happy with!"</h1>
                            <p>Blake Puryear <a href="https://www.linkedin.com/in/bpuryear" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while Product Lead at Engine</span>
                        </div>
                    </div>

                    <div className="section intro">
                        <div className="section image"><img src="/references/kelsey-klein.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>"Adis took direction well, and was comfortable iterating [on infographics] through completion to create exactly what we were looking for."</h1>
                            <p>Kelsey Klein <a href="https://www.linkedin.com/in/kelseyklein/" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while PM at Meitu</span>
                        </div>
                    </div>

                    <div className="section intro">
                        <div className="section image"><img src="/references/indraneel-mukherjee.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>“Adis is an excellent communicator, creates great designs fast, and is really great to work with. He quickly understood our rather complex requirements, did a bunch of quick iterations producing great work, was very flexible and patient as we came up with new requests, and also helped shape the overall product we were building."</h1>
                            <p>Indraneel Mukherjee <a href="https://www.linkedin.com/in/indraneelmukherjee" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while co-founder/CEO at LiftIgniter</span>
                        </div>
                    </div>

                    <div className="section intro">
                        <div className="section image"><img src="/references/tiffany-kuo.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>“Adis is easy to work with and fast. After sharing who our target customers are, a sketch of our landing page, and our copy, he was able to make suggestions to our original thinking and create a beautiful [landing page] design in just three days.”</h1>
                            <p>Tiffany Kuo <a href="https://www.linkedin.com/in/tiffanyamykuo/" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while co-founder at MultiplyLabs</span>
                        </div>
                    </div>

                    <div className="section intro">
                        <div className="section image"><img src="/references/dawson-whitfield.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>"Adis was always able to deliver something new and supremely beautiful. He was key in exploring new UIs and visual designs for our 10M+ users. A true pleasure to work with (and you get kickass designs too).”</h1>
                            <p>Dawson Whitfield <a href="https://ca.linkedin.com/in/dawsonwhitfield" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while designer at Weebly</span>
                        </div>
                    </div>

                    <div className="section intro">
                        <div className="section image"><img src="/references/vincent-chou.jpg" width="96"></img></div>
                        <div className="section text">
                            <h1>“Adis produces nothing short of grade A work with great attention to detail and mindfulness of requirements.”</h1>
                            <p>Vincent Chou <a href="https://www.linkedin.com/in/vincentchou1" target="_blank"><img src="linkedin.svg"></img></a></p>
                            <span>while founder/CEO at Playmonks</span>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    )
}
