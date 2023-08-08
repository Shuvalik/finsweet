import { useState } from "react";
import { useInView } from 'react-intersection-observer';

function CounterList() {
    const [countStateProject, setCountStateProject] = useState(0);
    const [countStateProfessional, setCountStateProfessional] = useState(0);    
    const [countStateClient, setCountStateClient] = useState(0);    
    const [countStateExperience, setCountStateExperience] = useState(0);
    function CountersInit() {
        const dataCounter = [
            {number: 1560, setState: setCountStateProject},
            {number: 100, setState: setCountStateProfessional},
            {number: 950, setState: setCountStateClient},
            {number: 10, setState: setCountStateExperience}
        ];
        dataCounter.forEach(({number, setState}) => {
            let startTimestep = null;
            const duration = 1500;
            const startValue = number;
            const startPosition = 0;
            const step = (timestamp) => {
                if (!startTimestep) startTimestep = timestamp;
                const progress = Math.min((timestamp - startTimestep) / duration, 1);
                let b = Math.floor(progress * (startPosition + startValue));
                setState(b);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        })
    }
    const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        CountersInit();
      }
    },
  });
    return (
        <div className="counterList" ref={ref}>
                  <div>
                    <span className="number">{countStateProject}+</span>
                    Project Delivered
                  </div>
                  <div>
                    <span className="number">{countStateProfessional}+</span>
                    Professional
                  </div>
                  <div>
                    <span className="number">{countStateClient}+</span>
                    Happy Client
                  </div>
                  <div>
                    <span className="number">{countStateExperience} yrs</span>
                    Experience
                  </div>
                </div>
    )
}
export default CounterList;