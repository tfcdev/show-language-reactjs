import React, {useState, useEffect, useCallback} from "react";
import style from "./style.module.css"

const Slider = () => {

  const [image, setImage] = useState(0)

  const slides = [
    {url: "https://1.bp.blogspot.com/-afiMLjD2d5M/Vupbd3QN7-I/AAAAAAAAQ1Q/txQ4g8cjl5oIT7OMJYwOVTIOSi-uS1OrQ/s1600/banner.jpg", title:"three languages"},
    {url: "https://devporai.com.br/wp-content/uploads/2020/09/html5.jpg", title: "HTML"},
    {url: "https://miro.medium.com/max/800/1*MVaraOOVG-gVUkirc9g2tA.png", title: "CSS3"},
    {url: "https://miro.medium.com/max/800/0*PPBpDTluCb3ePG3t.png", title: "Javascript"}
  ]
  
  const next = useCallback(() => {
    {image < slides.length - 1 ? setImage(image + 1) : setImage(0)}
  }, [image, slides.length])

  const back = () => {
    {image >= 1 ? setImage(image - 1) : setImage(slides.length - 1)}
  }

  useEffect(() => {
    const Interval = setInterval(() => {
      next();
    }, 5000)

    return () => clearInterval(Interval)
  },[next])

  return (
    <div style={{
                marginTop: "20px",
                width: "85%",
                height: "30vh"
                
                // margin: "0 auto"
                }}>

      <div style={{ height: "100%", position: "relative", }}>

      <span className={style.LeftSpan} onClick={() => {back()}}>{"<"}</span>

      <span className={style.RightSpan} onClick={() => {next()}}>{">"}</span>

      <img className={style.ImgSlide} 
      src={slides[image].url} alt={slides[image].title} />

      </div>
      </div>
  )
}

export default Slider;