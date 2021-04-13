import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"
import Login from "../components/Login"

export default function Protected({ hasReadPermission }) {

  
  const router = useRouter()

  if (!hasReadPermission) {
    return <div>
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
        <Login redirectPath={router.asPath} />
        </div>
  }

  return (
    <div>

    </div >
  )
}
