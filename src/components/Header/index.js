import React from "react"
import {Link} from "react-router-dom"
import style from "./style.module.css"

const Header = () => {
  return (
    <header className={style.Header}>
      <h1>show language</h1>

      <div className={style.Navbar}>
        <ul>
          <li><Link className={style.li} to={"/"}>Home</Link></li>
          <li><Link className={style.li}  to={"/Blogs"}>Docs</Link></li>
          <li><Link className={style.li}  to={"/English"}>English</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;