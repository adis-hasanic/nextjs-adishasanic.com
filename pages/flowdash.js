import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head><title>Adis Hasanic</title>
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
      During 2020, for 4 months total, full-time on a freelance basis, I was a sole designer at Flowdash, an early-stage startup with headquarters in San Francisco, building a web platform that focuses on helping ops teams build internal apps without coding, for their business processes and team workflows. I worked closely with CEO and CTO of Flowdash on making it easy to build apps without coding and adding new features.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-100">
      The screenshots of the previous design were taken from the video made by CEO of Flowdash, Omar Skalli.
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
      Taking notes of how product currently works and suggesting areas to focus on. CEO and CTO would create a design roadmap, after which I'd start designing and iterating, and on daily calls we'd review the designs together, discuss what the problems could be, and decide what to focus on next.
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
      <div className="text-100">
      Over the course of 4 months, product was completely redesigned with a lot of small improvements, and several new features were designed into the product.
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
      <div className="text-300">
      Editing flow
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
      Stages were set up once during the onboarding process, and later were found in settings as a list, which can be expanded to add more information about the stage and a checklist which appears at a task in that stage.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash-old/10.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash-old/13.jpg"></img>
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
      People are familiar with flowchart, so we've designed a visual editor for creating a flow through which tasks would go. User creates a stage, connects it to another stage, which automatically creates an action (an action is a button or automatic trigger, because each task needs an action to move to another stage). After clicking on stage or action, user can configure it in the sidebar. Finally, user can visually rearrange stages and actions so that the flow is easier to understand to collaborators who want to edit it.
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-0-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-0-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/flow-3.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-300">
      Task details
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
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash-old/2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash-old/3.jpg"></img>
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
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/detail-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/detail-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-300">
      And a lot of new stuff...
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      All tasks assigned to you
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/allassigned-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/allassigned-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Tracking analytics
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/analytics.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      All comments 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/comments-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/comments-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      All errors from all apps
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/errors-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Playbook editor
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/playbook-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Trigger automatic actions
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/settings-2.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Configure max. time for completing tasks
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/timers-1.jpg"></img>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <div className="text-200">
      Dashboard
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="image">
      <img className="eleven-twenty border" src="portfolio/product/flowdash/dashboard.jpg"></img>
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
      After 4 months, completely redesigned version was built and launched. On ProductHunt it became #2 product of the month in November 2020. There was a lot of positive feedback on ease of use, and all new users were able to create a workflow and use the product without contacting support. 
      </div>
      </div>
      </div>
      
      <div className="width">
      <div className="text">
      <iframe src="https://cards.producthunt.com/cards/posts/275215?v=1" width="600" height="500" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
      </div>
      
      
      
      
      
      
      
      
      </div>
      
    </div>
  )
}
