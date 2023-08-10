import { useState } from "react"
import { useInView } from "react-intersection-observer"

function CountUp({label, value, suffix}){
  const [count, setCount] = useState(0)

  function countUp(){
    let startTimestep = null
    const duration = 1500
    const startValue = 0
    const step = (timestamp) => {
      if (!startTimestep) startTimestep = timestamp
      const progress = Math.min((timestamp - startTimestep) / duration, 1)
      setCount(Math.floor(progress * (startValue + value)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => { inView && countUp() }
  });

  return (
    <div ref={ref}>
      <span className="number">{count}{suffix}</span>
      {label}
    </div>
  )

}

export default CountUp