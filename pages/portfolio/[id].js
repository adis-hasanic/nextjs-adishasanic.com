import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {categories} from '../../data/product.js'



const Story = () => {
    const router = useRouter()
    const {id, project} = router.query
    let category = categories.find(o => o.id == id)
    if (category) {
        let story = category.projects.find(o => o.id == project)

        if (story) {
            return(

                
            <div>

                
                 <Head>
                    <title>{story.id}</title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                
                <div className="top-bar"><Link href="/" ><div className="back">← Exit</div></Link></div>
                <a className="contact-button" href="https://calendly.com/adishasanic/60min?month=2020-11">About and Contact</a>

                <div className="story-page">
                {story.paragraphs.map(paragraph => {
                    return(
                    <div key={paragraph.id} className={paragraph.imageClass}>
                    <img className={paragraph.imageClass ? paragraph.imageClass : ""} src={paragraph.imageURL} ></img>
                    </div>
                    )
                })}
                </div>
            </div>
            )
        }
        else {
            return(
            <div>loading</div>
            )
        }
    }
    else {
        return(
        <div>loading</div>
        )
    }
}

export default Story;