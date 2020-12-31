
import React, { useEffect, useState } from "react";







export default function test(){

  

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()+5;
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [started, setStarted] = useState(false);
      const [year] = useState(new Date().getFullYear());
    
     
      useEffect(() => {
        setTimeout(() => {
          if(started){
            setTimeLeft(calculateTimeLeft());
          }
          
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });


      return (
        <>
          <h1>HacktoberFest {year} Countdown</h1>
          <h2>With React Hooks!</h2>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
         <div>
         <button onClick={ _ => setStarted(!started) }>Start timer</button>
         </div>
        </>
      );
}