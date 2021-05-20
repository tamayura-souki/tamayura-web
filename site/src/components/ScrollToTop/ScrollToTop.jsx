import React, { useEffect, useState } from "react";

import "../../style/components/scrolltotop.scss"

const ScrollToTop =() => {
  const topText = "もう あがれないよ"
  const notTopText = "あがるかい？"
  const [text, setText] = useState(topText)

  const toggleText = () => {
    const isTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop) === 0
    if (isTop) {
      setText(topText)
    } else {
      setText(notTopText)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleText)
    return () => {
      window.removeEventListener("scroll", toggleText)
    }
  }, [])

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      {text}
    </button>
  )
}

export default ScrollToTop