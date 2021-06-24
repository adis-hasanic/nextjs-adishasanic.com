import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis — Product Designer</title>
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
      
      <div className="content">
      
      <div className="width">
      <div className="nav">
      <div className="text-100">
      <Link href="/"><a href="/" className="selected">Back</a></Link>
      </div>
      </div>
      </div>
      
      
      <div className="width">
      <div className="text">
      <div className="text-500">
      Flowdash
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      During 2020 and 2021, for 9 months total, full-time on a freelance basis, I was a product designer at Stacker, an early-stage startup with headquarters in London, building a web platform that makes it easy to create apps without coding, focusing on turning spreadsheets into custom suite of business software. In second part of 2020 Stacker’s sales skyrocketed after also getting accepted to YCombinator, and in 2021 Stacker raised Series A from Andreessen Horowitz.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Process
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      I was making drafts and every day was on the call with co-founders of Flowdash, presenting the designs and the reasons behind design decisions, and discussing designs and next steps in the design roadmap. 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty" src="portfolio/product/flowdash-old/process.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Designs
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-300">
      Workflow page
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Flowdash had a product that allows anyone to skip contacting developers and create a new app for their team based on the unique goals and workflow of each business process and operation. 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Previous design
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      List of tasks looked like spreadsheet. List of stages was shown horizontally as tabs, which causes problems if there is more than 10 stages. 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash-old/1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      New design
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      Tasks are on one side, everything else is in sidebar, including the workflow title and options to open dashboard, settings, etc. Stages are easy to search, and there is more space to show more characters at each stage label and to show more stages. Assignees are also shown in sidebar and no longer in dropdown, allowing the user to combine several search options to find exactly the tasks they need.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/table-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/table-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/table-3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/table-4.jpg"></img>
      </div>
      </div>
      
      
      
      <div className="width">
      <div className="text">
      <div className="text-400">
      Effects
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      After 4 months, completely redesigned version was built and launched. On ProductHunt it became #2 product of the month in November 2020, with almost 3000 upvotes. There was a lot of positive feedback on ease of use, and all new users were able to create a workflow and use the product without contacting support. 
      </div>
      </div>
      </div>
      
      
      
      
      
      
      
      </div>
      
    </div>
  )
}
