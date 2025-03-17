import { useEffect, useRef, useState } from "react"

export default function App() {
  const[currentFloor, setCurrentFloor] = useState(0)
  const[doorWidth, setDoorWidth] = useState(50)
  const[entered, setEntered] = useState(false)
  const doorRef = useRef(null)
  const[inside, setInside] = useState(false)

  useEffect(() => {
    if(doorWidth === 0) {
      setEntered(true)
    }
    if(inside === true && doorWidth === 50) {

    }

  }, [doorWidth])

  const handleGoUp = () => {
    if(currentFloor === 0) {
      const intervalId = setInterval(() => {
        setDoorWidth(prev => {
          const width = Math.max(prev - 0.2, 0)
          if(width <= 0) {
            clearInterval(intervalId)
          }
          return width
        })

      }, 10)
    }
    
  }

  const handleEntered = () => {
    setEntered(false)
      const intervalId = setInterval(() => {
          setDoorWidth(prev => {
            const width = Math.min(prev + 0.2, 50)
            if(width >= 50) {
              clearInterval(intervalId)
            }
            return width
          })
      }, 10)   
    setInside(true) 
  }
  console.log(doorWidth)
  return (
    <div className="container">
      <div className="elevator">
        <div className="top">
          <div className="t-display">
            {currentFloor}
          </div>
        </div>
        <div className="bottom">
        {
          inside === true && doorWidth === 50 ? 
          <>
            <div className="b-left"></div>
            <div className="b-right"></div> 
          </> :
          <>
            <div className="b-left" style={{ '--door-width': doorWidth }}>
            {
              entered ?
              <div ref={doorRef} className="b-l-inside" >
                <button className="btn1" onClick={() => handleEntered()} >Get In</button>
                <button className="btn1">Wait</button>
              </div> : 
              <>
                <div className="b-l-left" ></div>
                <div className="b-l-right"></div>
              </>
            }
            </div>
            <div className="b-right">
              <div className="b-r-buttons">
                <i className="fa-solid fa-caret-up" onClick={() => handleGoUp()}></i>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </>
        }

          
        </div>
      </div>
    </div>
  )
}