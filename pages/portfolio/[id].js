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
                
                <Link href="/portfolio" ><div className="back">← Exit</div></Link>

                <div className="story-page">
                {story.paragraphs.map(paragraph => {
                    return(
                    <div key={paragraph.id} className={paragraph.imageClass}>
                    {paragraph.text ? <span className={paragraph.textClass ? paragraph.textClass: ""}>{paragraph.text}</span> : null }
                    {paragraph.imageURL ? <img className={paragraph.imageClass ? paragraph.imageClass : ""} src={paragraph.imageURL} ></img> : null }
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