var ctx = document.getElementById('myChart-1').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#F4ED17",
                backgroundColor: "#F4ED17",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#EF5B2A",
                backgroundColor: "#EF5B2A",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "U.S.",
                borderColor: "#222F63",
                backgroundColor:"#222F63",
                borderWidth:2,
                
              }, {
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#ED1C2A",
                backgroundColor: "#ED1C2A",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#3DB248",
                backgroundColor: "#3DB248",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#0B4F9E",
                backgroundColor:"#0B4F9E",
                borderWidth:2,
                
              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#184F2F",
                backgroundColor: "#184F2F",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#008B6D",
                backgroundColor: "#008B6D",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#AA1A2A",
                backgroundColor:"#AA1A2A",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
            title: {
                display: true,
                text: 'Japan has the highest life expectancy',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Japan has the highest life expectancy with only the second highest GDP per capita. The United States has the highest GDP but the second highest life expectancy.'
            }
        },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });



var ctx = document.getElementById('myChart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000', '2021'],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.40, 32.75, 51.78, 63.65, 71.44, 76.33],
            fill: true,
            borderColor: '#3DB248',
            backgroundColor: 'transparent',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.40],
            fill: true,
            borderColor: '#F4ED17',
            backgroundColor: 'transparent',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            fill: true,
            borderColor: '#EF5B2A',
            backgroundColor: 'transparent',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: true,
            borderColor: '#ED1C2A',
            backgroundColor: 'transparent',
            tension: 0.1},
        {
            label: 'U.S.',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.90, 79.59],
            fill: true,
            borderColor: '#222F63',
            backgroundColor: 'transparent',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'India has had the lowest life expectancy for generations',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'From 1800 to 2021, India has consistently had the lowest life expectancy compared to other countries like the U.S. and Indonesia.'
            }
        },
        scales: {
              y: {
                title: {
                  display: true,
                  text: 'Life Expectancy'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Year'
                  }
        }
    }
  }
});