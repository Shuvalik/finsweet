import { useState } from "react";
import { useInView } from 'react-intersection-observer';

function CounterItem({number, label, index, init, offInit}) {
  const [countState, setCountState] = useState(0);
  function CountersInit(){
    let startTimestep = null;
    const duration = 1500;
    const startValue = number;
    const startPosition = 0;
    const step = (timestamp) => {
        if (!startTimestep) startTimestep = timestamp;
        const progress = Math.min((timestamp - startTimestep) / duration, 1);
        let b = Math.floor(progress * (startPosition + startValue));
        setCountState(b);
        console.log(countState);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
          offInit();
        }
    };
    window.requestAnimationFrame(step);
    if (number === countState) {
      offInit();
    }      
  }
  if (init) {
    CountersInit()
  }
  return(
    <div key={index}>
      <span className="number">{countState}+</span>
      {label}
    </div>
  )
}

function CounterList({content}) {
    const [initState, setInitState] = useState(false);
    const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setInitState(true);
      } else {
        setInitState(false);
      }
    },
  });
  function offInitHandler() {
    setInitState(false);
  }
    return (
        <div className="counterList" ref={ref}>
          {content.map((item, index) => {
            return (
                <CounterItem key={index}  number={+item.number} label={item.label} index={index} init={initState} offInit={offInitHandler} />
            ) 
            })
          }
        </div>
    )
}
export default CounterList;