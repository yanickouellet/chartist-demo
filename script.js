
var graphs = [];
var labels = [];
for (var i = 0; i< 20; i++) {
  labels.push(i % 2 === 0 ? i : ' ');
}

for (var i = 0; i < 3; i++) {
  var g = [];
  for (var j = 0; j < 20; j++) {
    g.push(rand(20));
  }
  graphs.push(g);
}

new Chartist.Line('.chart', {
  labels: labels,
  series: graphs
}, {
  axisX: {
  },
  showPoint: false,
  showArea: false,
  height: 400,
  lineSmooth: false
});

new Chartist.Bar('.bar', {
  labels: ['Hello', 'World', 'Foo', 'Bar'],
  series: [
    [100, 200, 400, 300],
    [300, 200, 100, 200]
  ]
});

function rand(max) {
  return Math.random() * (max - 1) + 1;
}

function maxRand(max) {
  return Math.abs(Math.tan(rand(max) * Math.cos(rand(max))));
}
