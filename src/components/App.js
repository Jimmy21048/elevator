import { useEffect, useRef, useState } from "react"

export default function App() {
  const[currentFloor, setCurrentFloor] = useState(0)
  const[doorWidth, setDoorWidth] = useState(50)
  const doorRef = useRef(null)

  useEffect(() => {
    if(doorWidth === 0) {
      doorRef.current.style.display = 'flex'
    }
  }, [doorWidth])

  const handleGoUp = () => {
    if(currentFloor === 0) {
      setInterval(() => {
        setDoorWidth(prev => Math.max(prev - 0.2, 0))
      }, 10)
    }
  }

  return (
    <div className="container">
      <div className="elevator">
        <div className="top">
          <div className="t-display">
            {currentFloor}
          </div>
        </div>
        <div className="bottom">
          <div className="b-left" style={{ '--door-width': doorWidth }}>
            <div className="b-l-left" ></div>
            <div className="b-l-right"></div>
            <div ref={doorRef} style={{display: 'none'}} className="b-l-inside" >
              <button className="btn1">Get In</button>
              <button className="btn1">Wait</button>
            </div>
          </div>
          <div className="b-right">
            <div className="b-r-buttons">
              <i className="fa-solid fa-caret-up" onClick={handleGoUp}></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}