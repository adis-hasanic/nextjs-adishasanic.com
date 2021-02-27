import Menu from '../components/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div>
      <Link href="/"><div className="exit">←</div></Link>
      <div className="content references">
      <div className="row">
          <img src="/portfolio/web/woodfolio.jpg" className="eleven-twenty"></img>
        </div>

      </div>
    </div>
  )
}
