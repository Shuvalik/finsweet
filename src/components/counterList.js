import { useState } from "react";
import { useInView } from 'react-intersection-observer';

function CounterList({content}) {
    const [countStateProject, setCountStateProject] = useState(0);
    const [countStateProfessional, setCountStateProfessional] = useState(0);    
    const [countStateClient, setCountStateClient] = useState(0);    
    const [countStateExperience, setCountStateExperience] = useState(0);
    function CountersInit() {
        const dataCounter = [
            {number: +content[0].number, setState: setCountStateProject},
            {number: +content[1].number, setState: setCountStateProfessional},
            {number: +content[2].number, setState: setCountStateClient},
            {number: +content[3].number, setState: setCountStateExperience}
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
            {content[0].label}
          </div>
          <div>
            <span className="number">{countStateProfessional}+</span>
            {content[1].label}
          </div>
          <div>
            <span className="number">{countStateClient}+</span>
            {content[2].label}
          </div>
          <div>
            <span className="number">{countStateExperience} yrs</span>
            {content[3].label}
          </div>
        </div>
    )
}
export default CounterList;