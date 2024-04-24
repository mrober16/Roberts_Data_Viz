// Define the chart data
var labels = ['Avengers', 'Unique Films', 'Thor', 'Captain America', 'Iron Man', 'Spider-Man', 'Black Panther', 'Guardians of the Galaxy', 'Dr.Strange', 'Ant-Man'];
var data = {
    labels: labels,
    datasets: [
        {
          label: 'Franchise Budget',
          data: [1290000000, 863000000, 730000000, 560000000, 556000000, 535000000, 450000000, 370000000, 365000000, 260000000],
          backgroundColor: 'rgba(30, 67, 155, 0.2)',
          borderColor: 'rgb(30, 67, 155)',
          borderWidth: 1
        },
        {
          label: 'Opening Weekend Gross',
          data: [1012000000, 434300000, 416000000, 339000000, 404000000, 470000000, 383000000, 240000000, 272000000, 132800000],
          backgroundColor: 'rgba(96, 32, 88, 0.2)',
          borderColor: 'rgb(96, 32, 88)',
          borderWidth: 1
        }
    ]
};

// Define the chart configuration
var config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
      title: {
       display: true,
       text: 'Marvel makes half their budget in the opening weekend',
       font: {
         size: 18
       }
      },
     subtitle: {
       display: true,
       text: 'Movies in Marvel franchises tend to make at least half of their budget back in the opening weekend.'
      }
      },
      scales: {
       y: {
         beginAtZero: true
       },
       x: {
         angleLines: {
         display: true, // Display angle lines
         lineWidth: 2 // Customize line width if needed
         },
         ticks: {
         minRotation: 45 // Adjust the angle of the x-axis titles
         }
        }
      } 
    }
};

// Create the chart
var myChart = new Chart(document.getElementById('myChart-1').getContext('2d'), config);

// Define the chart data
var data = {
    datasets: [{ 
      data: [
          {x: 85, y: 82.50},
        ],
        label: "Ant-Man",
        borderColor: "#AA1A2A",
        backgroundColor: "rgba(173, 21, 36, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 86.50, y: 88.50},
        ],
        label: "Avengers",
        borderColor: "#EF5B2A",
        backgroundColor: "rgba(239, 91, 41, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 90, y: 86.50},
        ],
        label: "Black Panther",
        borderColor: "#222F63",
        backgroundColor:"rgba(32, 46, 99, 0.2)",
        borderWidth:1,
      }, {
      data: [
          {x: 86.33, y: 85.33},
        ],
        label: "Captain America",
        borderColor: "#ED1C2A",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 81.50, y: 81.50},
        ],
        label: "Dr.Strange",
        borderColor: "#3DB248",
        backgroundColor: "rgba(1, 156, 73, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 88.50, y: 89.50},
        ],
        label: "Gaurdians of the Galaxy",
        borderColor: "#0B4F9E",
        backgroundColor:"rgba(30, 67, 155, 0.2)",
        borderWidth:1,
      }, {
      data: [
          {x: 81.33, y: 80},
        ],
        label: "Iron Man",
        borderColor: "#184F2F",
        backgroundColor: "rgba(10, 65, 33, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 91.67, y: 92},
        ],
        label: "Spider-Man",
        borderColor: "#008B6D",
        backgroundColor: "rgba(96, 173, 151, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 75, y: 75.25},
        ],
        label: "Thor",
        borderColor: "#F4ED17",
        backgroundColor:"rgba(244, 237, 23, 0.2)",
        borderWidth:1,
      }, { 
      data: [
          {x: 72.60, y: 72},
        ],
        label: "Unique Films",
        borderColor: "rgb(96, 32, 88)",
        backgroundColor:"rgba(96, 32, 88, 0.2)",
        borderWidth:1,
      }
    ]
};

// Define the chart configuration
var config = {
  type: 'scatter',
  data: data,
  options: {
    plugins: {
      title: {
       display: true,
       text: 'Better Reviews Makes for Better Audience Scores',
       font: {
         size: 18
        }
      },
     subtitle: {
       display: true,
       text: 'Marvel franchises received a higher audience rating on average when the critique rating had a higher average.'
      }
    },
    scales: {
     y: {
       beginAtZero: true,
       title: {
       display: true,
       text: 'Average Audience Score'
       }
      },
     x: {
       beginAtZero: true,
       title: {
       display: true,
       text: 'Average Critique Score'
       }
      }
    }
  }
};

// Create the chart
var myChart = new Chart(document.getElementById('myChart-2').getContext('2d'), config);

// Define the chart data
var data = {
  labels: ['Ant-Man', 'Avengers', 'Black Panther', 'Captain America', 'Dr.Strange', 'Guardians of the Galaxy', 'Iron Man', 'Spider-Man', 'Thor', 'Unique Films'],
  datasets: [{
    label: 'My Dataset',
    data: [438.85, 609.36, 505, 381.56, 442.85, 443.72, 429.10, 721.57, 374.72, 303.27],
    backgroundColor: [
      'rgba(173, 21, 36, 0.2)',
      'rgba(239, 91, 41, 0.2)',
      'rgba(32, 46, 99, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(1, 156, 73, 0.2)',
      'rgba(30, 67, 155, 0.2)',
      'rgba(10, 65, 33, 0.2)',
      'rgba(96, 173, 151, 0.2)',
      'rgba(244, 237, 23, 0.2)',
      'rgba(96, 32, 88, 0.2)',
    ],
    borderColor: [
      'rgb(173, 21, 36)',
      'rgb(239, 91, 41)',
      'rgb(32, 46, 99)',
      'rgb(255, 99, 132)',
      'rgb(1, 156, 73)',
      'rgb(30, 67, 155)',
      'rgb(10, 65, 33)',
      '#008B6D',
      'rgb(244, 237, 23)',
      'rgb(96, 32, 88)',
    ],
    borderWidth: 1
  }]
};

// Define the chart configuration
var config = {
  type: 'polarArea',
  data: data,
  options: {
    plugins: {
      title: {
       display: true,
       text: 'Marvel Franchises Make More Than Triple Their Budget',
       font: {
         size: 18
        }
      },
     subtitle: {
       display: true,
       text: 'Marvel franchises earn over 300% of their budget back on average.'
      }
    },
    scales: {
      r: {
        beginAtZero: true // Ensure scale starts at zero
      }
    }
  }
};

// Create the polar area chart
var myChart = new Chart(document.getElementById('myChart-3').getContext('2d'), config);


