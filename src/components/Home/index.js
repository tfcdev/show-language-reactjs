import React from "react"
import Slider from "../Slider"

import style from "./style.module.css"


const Home = () => {
  return (
    <>
      <Slider/>

      <section className={style.MainInput} >
        <input type="text" placeholder="Search"/>
      </section>

      <div className={style.Container}>

        <section className={style.ContainerBlog}>
          <h2>Blog</h2>

          <div className={style.ContainerBlogItem}>
            <div className={style.ContainerBlogItems}>

            </div>
            <div className={style.ContainerBlogItems}>
              
            </div>
            <div className={style.ContainerBlogItems}> 
              
            </div>
            <div className={style.ContainerBlogItems}>
              
            </div>
            <div className={style.ContainerBlogItemsVideo}>
              
            </div>
          </div>
        </section>

        <section className={style.ContainerLanguage}>
          <h2>Language</h2>

          <div className={style.ContainerLanguageItem}>
            <div className={style.ContainerLanguageItems}>

            </div>
            <div className={style.ContainerLanguageItems}>
              
            </div>
            <div className={style.ContainerLanguageItems}> 
              
            </div>
            <div className={style.ContainerLanguageItems}>
              
            </div>
            <div className={style.ContainerLanguageItemsVideo}>
              
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home;