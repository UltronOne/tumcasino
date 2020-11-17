import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

var data = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

function crash() {
  var zufallsnummer = Math.floor(Math.random()*Math.pow(2, 52))
  var crashmultiplikator = ((100*Math.pow(2,52)-zufallsnummer) / (Math.pow(2, 52) - zufallsnummer)) / 100;
  return crashmultiplikator;
}

function draw_crashcurve(crashmultiplikator,a) {
  var i = a;
  var zeit = (crashmultiplikator / 0.1) - 10;
  var multiplikator_schritte = (crashmultiplikator - 1) / zeit
  var grafen_werte = [];
 
  grafen_werte[i]=(multiplikator_schritte * i);
  console.log(grafen_werte[i]);
  data.datasets[0].data.push(multiplikator_schritte * i)
  
  setTimeout(function() {
       if(i<=zeit){draw_crashcurve(crashmultiplikator,i++)}
  }, 500);
  
}

draw_crashcurve(crash());




export default function Home() {

  draw_crashcurve(crash());
  


  
  return (
   <>
<div className="m-64">
<div className="m-64">
<div className="m-64">
    <h2 onClick={() => addData()}>Line Example-----------------------------------------------------</h2>
    <Line
      data={data}
      width={400}
      height={400}
    />
  </div>
  </div>
  </div>
  

  </>
  )
}
