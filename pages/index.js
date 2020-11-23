import Head from 'next/head'
import { categories } from '../data/product.js'
import Link from 'next/link'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Adis Hasanic</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <a className="contact-button" href="https://calendly.com/adishasanic/60min?month=2020-11">Contact</a>

            <div className="content">
                

                <div className="section portfolio">

                <div className="col">
                    <div className="category">
                        <div className="intro">Digital Product Design (UI/UX)</div>
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
                        <div className="intro">Web Design</div>
                        {categories[1].projects.map(project => {
                            return (
                                <Link key={project.id} href={`/portfolio/${categories[1].id}?project=${project.id}`} >
                                    <div className="work-thumbnail">
                                        <span className="title">{project.id}</span>
                                        <span className="description">{project.description}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="category">
                        <div className="intro">Visual</div>
                        {categories[2].projects.map(project => {
                            return (
                                <Link key={project.id} href={`/portfolio/${categories[2].id}?project=${project.id}`} >
                                    <div className="work-thumbnail">
                                        <span className="title">{project.id}</span>
                                        <span className="description">{project.description}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    
                </div>

                </div>

            </div>

        </div>
    )
}
