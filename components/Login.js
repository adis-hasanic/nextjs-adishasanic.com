import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "../consts"

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <div className="login">
      <form>
          <input
            type="password"
            className="field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        <button
          type="submit"
          className="button"
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: "/",
            })
            window.location.href = redirectPath ?? "/"
          }}
        >
          Enter
        </button>
      </form>
      <div className="contact"><a href="https://adishasanic96.typeform.com/to/IVmKhGC5">Request password</a></div>
    </div>
  )
}

export default Login
