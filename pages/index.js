import Head from 'next/head'
import { categories } from '../data/product.js'
import Link from 'next/link'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Adis Hasanic - UI/UX Designer</title>
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
                        <Link href="/"><span class="active">About</span></Link>
                        <Link href="/portfolio"><span>Work</span></Link>
                        <Link href="/references"><span>References</span></Link>
                    </div>
                    <div class="contact">
                        <a href="https://calendly.com/adishasanic/60min"><img src="calendly.svg"></img>Schedule a call</a>
                    </div>
                </div>
            </div>

            <div className="content-about">

                <div className="container">

                    <div className="section intro">
                
                        <div className="section image"><img src="adis-hasanic.jpg" width="122"></img></div>
                        <div className="section text">
                            <h1>Designing UI/UX (primarily), websites and visual past 9 years<br></br> at tech startups (backers include YC, Sequoia, TechStars, etc.)</h1>
                            <p>Currently looking for a full-time role, preferably at a startup in Europe, as I'm also looking to relocate from Bosnia to more of a tech hub and work closely on building and selling great digital products.
<br></br><br></br>
24, self-taught — started from practicing Photoshop and web design at age 13. Used Sketch mostly, Figma lately. Some experience lately with design systems and learned more about how React works. I love designing visual interfaces for web and mobile screens, structuring information and processes, and working in an agile way — mockups, discussing, iterating, launching. User research through surveys, interviews and testing is something I’d like to start practicing.</p>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Flowdash</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">4 months</span><span class="period">Aug 2020 - present</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based, YC-backed startup building a way to create apps for team workflows (tasks) and operations, without coding.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Stacker</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">4 months</span><span class="period">Feb 2020 - May 2020</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>London based, YC-backed startup building a way to quickly turn spreadsheets into web apps for collaborating around data, and customize without coding.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Hackathon</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Teleport by ZITICITY</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">3 days</span><span class="period">Jun 2019</span></div>
                                    <div className="place">Tallinn, Estonia</div>
                                </div>
                            </div>
                            <div className="description"><span>I teamed up with CEO and CTO of ZITICITY, a delivery startup from Lithuania backed by The Startup Wiseguys, to build a working prototype in 3 days, at Base Camp hackathon organized by Garage 48 and Superangel, Estonia's leading startup hub and VC. More than 100 teams applied, 15 teams competed, we won.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Employee</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Teamscope</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 yr. 2 mo.</span><span class="period">Nov 2018 - Jan 2020</span></div>
                                    <div className="place">Tallinn, Estonia</div>
                                </div>
                            </div>
                            <div className="description"><span>Estonian startup, backed by TechStars, SAP and Jaan Tallinn (co-founder of Skype), building a platform that helps companies build high-performing teams by better understanding people’s personality, driving values, and competencies.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Portal by Fuel</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">9 months</span><span class="period">Jun 2018 - Mar 2019</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Founder of Fuel, a digital health startup, based in San Francisco backed by 500 Startups, hired me to work on a user-friendly cryptocurrency wallet and exchange platform.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Tides by Fuel</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">2 months</span><span class="period">Nov 2017 - Dec 2017</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Founders of Fuel, a digital health startup, based in San Francisco backed by 500 Startups, hired me to work on a platform that decentralizes health insurance using blockchain.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Meitu</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">2 months</span><span class="period">During 2017</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>China based startup, one of the leading providers of photo-editing apps for mobile. I was hired by their LA team to design several infographics.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Engine</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">2 months</span><span class="period">During 2017</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>US based startup providing a platform that enables anyone to set up a custom online shop. I worked on redesigning the admin panel where data is tracked, inventory is managed and shop's pages are customized.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">LiftIgniter</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">5 months</span><span class="period">During 2016 and 2017</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based YC-backed startup providing an API for content recommendation. Later was acquired by Maven.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Personal</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Typen</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">6 months</span><span class="period">Jul 2016 - Jan 2017</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>A distraction-free, customizable, web-based writing app I designed and founded (recruited a developer and bootstrapped development). 2000 sign ups within 2 months of Facebook ads. Positive user feedback, low retention rate (safety concerns, lack of cross-platform support).</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Foodmunk by Fuel</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">6 months</span><span class="period">Jan 2016 - Jun 2016</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Founders of Fuel, a digital health startup, based in San Francisco backed by 500 Startups, hired me to work on an iOS app that learns about user's lifestyle and suggests healthiest meals to nearby.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Project</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">MultiplyLabs</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 week</span><span class="period">Oct 2015</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based YC-backed startup working on a customizable pill with health and energy supplements. I was hired by MultiplyLabs to design a landing page announcing their pill.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Kamcord</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">5 months</span><span class="period">May 2015 - Sep 2015</span></div>
                                    <div className="place">San Francisco, CA</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based Series-A startup, backed by YCombinator and Tencent, building a platform and tools for mobile games livestreams and videos. Later, in 2017, was acquired by Lyft.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Employee</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Branded.me</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">9 months</span><span class="period">Aug 2014 - Apr 2015</span></div>
                                    <div className="place">San Francisco, CA</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based startup building a personal website builder. After 6 months of building the product, within 3 months of launch, more than 100k websites were generated and there was an offer for acquisition from Amazon. Later became Remote.com</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Mobiley (became Branded.me)</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Aug 2013 - Aug 2014</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based startup building a platform for building a mobile website without coding, focusing on helping small businesses to quickly convert their existing website into mobile.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Weebly</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Jul 2012 - Jul 2013</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based startup at Series A, backed by YCombinator and Sequoia, providing a website builder for 10+ million users. I was hired by Weebly to design new and original web themes that Weebly included in their official offering.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Helpjuice</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Jul 2012 - Jul 2013</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Austin based TechStars-backed startup building a knowledge-base building platform used internally or as help center.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type green"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Playmonks</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Jul 2011 - Jul 2012</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Chicago based startup building a social media platform for gamers to connect and discover new games based on their connections.</span></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
