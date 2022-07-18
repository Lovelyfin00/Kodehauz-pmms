var options = {
  series: [{
    name: "Voltage",
    data: [-200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2],
  curve: 'smooth',
  colors: '#E91E63'
},
title: {
  text: 'Voltage',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [],
}
};

var chart = new ApexCharts(document.querySelector("#chart-voltage"), options);
chart.render();

var options = {
  series: [{
    name: "Current",
    data: [0, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2],
  curve: 'smooth',
  colors:'#09A118'
},
title: {
  text: 'Current',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [],
}
};

var chart = new ApexCharts(document.querySelector("#chart-current"), options);
chart.render();

var options = {
  series: [{
    name: "Frequency",
    data: [0, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200, -200, 200,-200 ]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2],
  curve: 'smooth',
  colors:'#298AFF'
},
title: {
  text: 'Frequency',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [],
}
};

var chart = new ApexCharts(document.querySelector("#chart-frequency"), options);
chart.render();
