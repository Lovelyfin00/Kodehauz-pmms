
//making the minutes display on load

 var optionsMin = {
  series: [{
    name: "Voltage",
    data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
    name: "Current",
    data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
    name: 'Frequency',
    data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
    name: 'Temperature',
    data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
    name: 'Vibration',
    data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-100, -80, -200, -111, -51,-180 , -10,300 ]
  }
],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2, 2, 2],
  curve: 'smooth',
  dashArray: [0, 0, 0]
},
title: {
  text: 'Page Statistics',
  align: 'left'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['3:56pm', '3:57pm', '3:58pm', '3:59pm', '4:00pm', '4:01pm','4:02pm','4:03pm'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (mins)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " per session"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};


var chart = new ApexCharts(document.querySelector("#chart"), optionsMin);
chart.render();

//graph forward mins changing options


function handleGraph () {
  let changeGraph = document.getElementById("chart","radio");

  if (changeGraph === "true") {
    chart.updateOptions({
    series: [{
    name: "Voltage",
    data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
    name: "Current",
    data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
    name: 'Frequency',
    data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
    name: 'Temperature',
    data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
    name: 'Vibration',
    data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-100, -80, -200, -111, -51,-180 , -10,300 ]
  }
],
})
  } else {
    chart.updateOptions({
    series: [{
    name: "Voltage",
    data: [0, 35, 130, -10, 50, 117, 300, 25]
  },
  {
    name: "Current",
    data: [10, 5, 98, 0, 1, 188, -100, 3]
  },
  {
    name: 'Frequency',
    data: [111, 53, 300, -100, 5, 15, -220,44]
  },
  {
    name: 'Temperature',
    data: [5, -4, 255, 26, 110, -100,10, -50]
  },
  {
    name: 'Vibration',
    data: [-10, 300, -80, 0, -100, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-10, -80, -200, -111, -5, 280 , 310, -200 ]
  }
],
xaxis: {
  categories: ['4:04pm', '4:05pm', '4:06pm', '4:07pm', '4:08pm', '4:09pm','4:10pm','4:11pm'
  ],
},
})
  }}


  //graph backward mins changing options


function returnGraph () {
  let returnGraph = document.getElementById("chart");

  if (returnGraph === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
  name: "Current",
  data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
  name: 'Frequency',
  data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
  name: 'Temperature',
  data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
  name: 'Vibration',
  data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
  name: 'Power',
  data: [-100, -80, -200, -111, -51,-180 , -10,300 ]
  }
  ],
  xaxis: {
    categories: ['3:56pm', '3:57pm', '3:58pm', '3:59pm', '4:00pm', '4:01pm','4:02pm','4:03pm'
    ],
  },
  })
  } 
}

 //graph radio buttons changing options

function graphMinutes () {
  let graphMinutes = document.getElementById("chart");

  if (graphMinutes === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
  name: "Current",
  data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
  name: 'Frequency',
  data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
  name: 'Temperature',
  data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
  name: 'Vibration',
  data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
  name: 'Power',
  data: [-100, -80, -200, -111, -51,-180 , -10,300]
  }
  ],
  xaxis: {
    categories: ['3:56pm', '3:57pm', '3:58pm', '3:59pm', '4:00pm', '4:01pm','4:02pm','4:03pm'
    ],
  },
  })
  } 
}

function graphHour () {
  let graphHour = document.getElementById("chart");

  if (graphHour === "true") {
      chart.updateOptions({
      series: [{
        name: "Voltage",
        data: [0, 35, 130, -10, 50, 117, 300, 25]
      },
      {
        name: "Current",
        data: [10, 5, 98, 0, 1, 188, -100, 3]
      },
      {
        name: 'Frequency',
        data: [111, 53, 300, -100, 5, 15, -220,44]
      },
      {
        name: 'Temperature',
        data: [5, -4, 255, 26, 110, -100,10, -50]
      },
      {
        name: 'Vibration',
        data: [-10, 300, -80, 0, -100, 300,-200, -10]
      },
      {
        name: 'Power',
        data: [-10, -80, -200, -111, -5,280 , 310 ]
      }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
    name: "Voltage",
    data: [-10, 50,0, 35, 130, 117, 300, 25]
  },
  {
    name: "Current",
    data: [98, 0, 1, 10, 5, 188, -100, 3]
  },
  {
    name: 'Frequency',
    data: [-100, 111, 53, 300, 5, 15, -220,44]
  },
  {
    name: 'Temperature',
    data: [ 110, -100,10, -50,5, -4, 255, 26,]
  },
  {
    name: 'Vibration',
    data: [-10, 300, -80, 0, -100, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-10, -80, -200, -111, -5, 280 , 310,-200 ]
  }
 ],
  xaxis: {
    categories: ['3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm','9:00pm','10:00pm'
    ],
  },
  })
  } 
}

function graphDay () {
  let graphDay = document.getElementById("chart");

  if (graphDay === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [5, 150, 0, 35, 110, 60, 67, 50, 25]
  },
  {
  name: "Current",
  data: [0, 166, 188, 100, 120, 155, 98,  53, 3]
  },
  {
  name: 'Frequency',
  data: [55, 95, 0, 53, 6, -100, -10, 44, -300]
  },
  {
  name: 'Temperature',
  data: [ 26, 50, 50, -45, 0, 100, 0, -50, 300]
  },
  {
  name: 'Vibration',
  data: [ 300,-200, -80, -100, -300,-250, 0, 100, -10]
  },
  {
  name: 'Power',
  data: [-51,-180 , -10, -100, -80, -200, -111, 1, 44]
  }
  ],
  xaxis: {
    categories: ['Dec 11', 'Dec 12', 'Dec 13', 'Dec 14', 'Dec 15', 'Dec 16','Dec 17','Dec 18','Dec 19'
    ],
  },
  })
  } 
}

function graphWeekly () {
  let graphWeekly = document.getElementById("chart");

  if (graphWeekly === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [150, 60, 50, 25]
  },
  {
  name: "Current",
  data: [ 0, 166, 188, 100]
  },
  {
  name: 'Frequency',
  data: [-100, 55, 95, -44]
  },
  {
  name: 'Temperature',
  data: [ 26, 100,0, -50]
  },
  {
  name: 'Vibration',
  data: [ -250, 0, 300,-200, ]
  },
  {
  name: 'Power',
  data: [ -111, -51,-180 , -10 ]
  }
  ],
  xaxis: {
    categories: ['Mon2-Sat 7', 'Mon2-Sat 14', 'Mon2-Sat 21', 'Mon2-Sat 28'
    ],
  },
  })
  } 
}

function graphMonthly () {
  let graphMonthly = document.getElementById("chart");

  if (graphMonthly === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [150, 60, 50, 25,-10, -80, -200, -111, -5,280 , 310,3]
  },
  {
  name: "Current",
  data: [ 0, 166, 188, 100, -10, 300, -80, 0, -100, 300,-200, -10]
  },
  {
  name: 'Frequency',
  data: [-100, 55, 95, -44, 5, -4, 255, 26, 110, -100, 10, -50]
  },
  {
  name: 'Temperature',
  data: [ 26, 100,0, -50, 111, 53, 300, -100, 5, 15, -220,44]
  },
  {
  name: 'Vibration',
  data: [ -250, 0, 300,-200, 10, 5, 98, 0, 1, 188, -100, 3 ]
  },
  {
  name: 'Power',
  data: [ -111, -51,-180 , -10, 0, 35, 130, -10, 50, 117, 300, 25 ]
  }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ],
  },
  })
  } 
}

function graphYearly () {
  let graphYearly = document.getElementById("chart");

  if (graphYearly === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [-80, 300, 60, 50, 25,-10, -200, -111, -5,280 , 310,3]
  },
  {
  name: "Current",
  data: [ -10, 300, -80, 0, 0, 166, 300,-200, -10, 8, 100, -100, ]
  },
  {
  name: 'Frequency',
  data: [ -44,-100, 55, 95, 5, -4, -100, 255, 26, 110, 10, -50]
  },
  {
  name: 'Temperature',
  data: [  53, 300, -100, 5,26, 100,0, -50, 111, 15, -220,44]
  },
  {
  name: 'Vibration',
  data: [  0, 300,-250,5, 98, 0, -200, 10, 1, 188, -100, 3 ]
  },
  {
  name: 'Power',
  data: [ -180 , -10, 0, -111, -51, 35, 130, 117, 300, 25,-10, 50 ]
  }
  ],
  xaxis: {
    categories: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1', 'May 1', 'Jun 1', 'Jul 1', 'Aug 1', 'Sept 1', 'Oct 1', 'Nov 1', 'Dec 1'
    ],
  },
  })
  } 
}



// chart.updateOptions({
//   series: [{
//     data: [{
//       x: "02-02-2002",
//       y: 44
//     }, {
//       x: "12-02-2002",
//       y: 51
//     }]
//   }],
//   xaxis: {
//     position: 'top'
//   }
// })


  
// let checkbox = document.querySelector("#checkbox");
// let box = document.querySelector(".box");
 

//   function changeBg() {
 
//     if (checkbox.checked === true){
//       box.style.backgroundColor = "blue";
//     } else {
//        box.style.backgroundColor = "white";
//     }
//   }
  
 
 





