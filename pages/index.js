import Head from 'next/head'
import { categories } from '../data/product.js'
import Link from 'next/link'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Adis Hasanic</title>
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
                        <Link href="/portfolio"><span>Portfolio</span></Link>
                    </div>
                </div>
            </div>

            <div className="content-about">

                <div className="container">

                    <div className="section intro">
                        <div className="section text">
                            <h1>Designing UI/UX, websites and visual past 9 years <br></br>at startups backed by YC, Sequoia, TechStars, etc.</h1>
                            <p>Currently looking for a full-time role, preferably at a startup in Europe, as I'm also looking to relocate from Bosnia to more of a tech hub and work closely on building and selling great digital products.
<br></br><br></br>
Self-taught, started from practicing Photoshop and web design at age 13. Used Sketch mostly, Figma lately. Worked on design system, and recently learned more about how React works. I love designing visual interfaces for web and mobile screens, simplifying processes, and working in agile ways — mockups, discussing, iterating, launching. User research through surveys, interviews and testing is something I’d like to start practicing.</p>
                        </div>
                        <div className="section image"><img src="adis-hasanic.jpg" width="122"></img></div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Flowdash</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">3 months</span><span class="period">Aug 2020 - present</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based, YC-backed startup building a way to create apps for team workflows (tasks) and operations, without coding.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Contract</span></div>
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
                        <div className="type blue"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Portal</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">9 months</span><span class="period">Jun 2018 - Mar 2019</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based startup, backed by 500 Startups, building a Mac-based user-friendly all-in-one cryptocurrency wallet and exchange.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Project</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">MultiplyLabs</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 week</span><span class="period">Oct 2020</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based YC-backed startup working on a customizable pill with health and energy supplements. I was hired by MultiplyLabs to design a landing page announcing their pill.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Kamcord</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">5 months</span><span class="period">May 2015 - Sep 2015</span></div>
                                    <div className="place">San Francisco, CA</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based Series-A startup, backed by YCombinator and Tencent, building a platform and tools for mobile games livestreams and videos.</span></div>
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
                            <div className="description"><span>San Francisco based Series-A startup, backed by YCombinator and Tencent, building a platform and tools for mobile games livestreams and videos.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Mobiley (became Branded.me)</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Aug 2013 - Aug 2014</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>San Francisco based Series-A startup, backed by YCombinator and Tencent, building a platform and tools for mobile games livestreams and videos.</span></div>
                        </div>
                    </div>

                    <div className="section work-experience-row">
                        <div className="type blue"><span>Contract</span></div>
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
                        <div className="type blue"><span>Contract</span></div>
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
                        <div className="type blue"><span>Contract</span></div>
                        <div className="info">
                            <div className="meta">
                                <div className="name">Playmonks</div>
                                <div className="time-place">
                                    <div className="time"><span className="duration">1 year</span><span class="period">Jul 2011 - Jul 2012</span></div>
                                    <div className="place">Remotely</div>
                                </div>
                            </div>
                            <div className="description"><span>Austin based TechStars-backed startup building a knowledge-base building platform used internally or as help center.</span></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
