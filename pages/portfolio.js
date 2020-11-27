import Head from 'next/head'
import { categories } from '../data/product.js'
import Link from 'next/link'

export default function Work() {
    return (
        <div>
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
                        <Link href="/"><span>About</span></Link>
                        <Link href="/portfolio"><span class="active">Portfolio</span></Link>
                    </div>
                </div>
            </div>

            <div className="content">


                <div className="section portfolio">

                    <div className="col">
                        <div className="category">
                            <div className="intro">Product UI / UX</div>
                            {categories[0].projects.map(project => {
                                return (
                                    <Link key={project.id} href={`/portfolio/${categories[0].id}?project=${project.id}`} >
                                        <a href={`/portfolio/${categories[0].id}?project=${project.id}`} >
                                            <div className="work-thumbnail">
                                                <span className="title">{project.id}</span>
                                                <span className="description">{project.description}</span>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col">
                        <div className="category">
                            <div className="intro">Website</div>
                            {categories[1].projects.map(project => {
                                return (
                                    <Link key={project.id} href={`/portfolio/${categories[1].id}?project=${project.id}`} >
                                        <a href={`/portfolio/${categories[1].id}?project=${project.id}`} >
                                            <div className="work-thumbnail">
                                                <span className="title">{project.id}</span>
                                                <span className="description">{project.description}</span>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="category">
                            <div className="intro">Visual</div>
                            {categories[2].projects.map(project => {
                                return (
                                    <Link key={project.id} href={`/portfolio/${categories[2].id}?project=${project.id}`} >
                                        <a href={`/portfolio/${categories[2].id}?project=${project.id}`} >
                                            <div className="work-thumbnail">
                                                <span className="title">{project.id}</span>
                                                <span className="description">{project.description}</span>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}