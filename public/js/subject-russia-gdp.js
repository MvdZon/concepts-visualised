document.addEventListener('DOMContentLoaded', () => {
   const isMobile = window.visualViewport.width < 600
   const documentStyles = getComputedStyle(document.documentElement)
   const colors = [
      documentStyles.getPropertyValue('--pastel-color-lime'),
      documentStyles.getPropertyValue('--pastel-color-purple'),
      documentStyles.getPropertyValue('--pastel-color-light-blue'),
      documentStyles.getPropertyValue('--pastel-color-blue'),
      documentStyles.getPropertyValue('--pastel-color-dark-blue'),
      documentStyles.getPropertyValue('--pastel-color-red'),
      documentStyles.getPropertyValue('--pastel-color-green'),
      documentStyles.getPropertyValue('--pastel-color-gray'),
      documentStyles.getPropertyValue('--pastel-color-light-gray'),
      documentStyles.getPropertyValue('--pastel-color-orange'),
      documentStyles.getPropertyValue('--pastel-color-light-orange'),
      documentStyles.getPropertyValue('--pastel-color-dark-orange')
   ]

   Chart.register(ChartDataLabels)

   setIntersectionObserver()
   iniLargestGDPchart()
   iniEuropeanGDPTreemap()
   iniRussiaUSAComparionPie()
   iniAmericanStatesGDPChart()
   iniPuertoRicoGDPChart()

   function setIntersectionObserver(){
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if(entry.isIntersecting) {
               entry.target.classList.add('fade-in-effect')
            }
         })
      }, {
         threshold: 0.7
      })

      document.querySelectorAll('article').forEach(article => {
         observer.observe(article)
      })
   }

   function iniPuertoRicoGDPChart() {
      const ctx = document.getElementById('puerto-rico-gdp-chart')
      const labels = [
         'USA',
         'Russia',
         'Puerto Rico'
      ]

      new Chart(ctx, {
         type: 'pie',
         plugins: [ChartDataLabels],
         data: {
            labels: labels,
            datasets: [{
               label: 'GDP in 2023',
               data: [
                  26949643,
                  1862470,
                  117515
               ],
               backgroundColor: [colors[5], colors[6], colors[7]]
            }]
         },
         options: {
            elements: {
               arc: {
                  borderWidth: 0
               }
            },
            scales: {
               y: {
                  beginAtZero: true,
                  display: false
               },
               x: {
                  display: false,
                  grid: {
                     display: false
                  }
               }
            },
            barPercentage: 1,
            plugins: {
               legend: {
                  labels: {
                      color: '#fff'
                  }
               },
               datalabels: {
                  display: isMobile === false,
                  color: 'white',
                  font: {
                     weight: 'bold'
                  },
                  formatter: (value, context, i ,b) => {
                     return labels[context.dataIndex] + '\n' + value.toLocaleString()
                  }
               }
            }
         }
      })
   }

   function iniAmericanStatesGDPChart(){
      const ctx = document.getElementById('american-states-gdp-chart')
      const labels = [
         'California',
         'Texas',
         'New York',
         'Russia',
         'Florida',
         'Illinois'
      ]

      new Chart(ctx, {
         type: 'bar',
         plugins: [ChartDataLabels],
         data: {
            labels: labels,
            datasets: [{
               label: 'GDP in 2023',
               data: [
                  3755487,
                  2436346,
                  2135672,
                  1862470,
                  1468015,
                  1071552
               ],
               backgroundColor: colors[2]
            }]
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true,
                  display: false
               },
               x: {
                  display: false,
                  grid: {
                     display: false
                  }
               }
            },
            barPercentage: 1,
            plugins: {
               legend: {
                  display: false
               },
               datalabels: {
                  display: isMobile === false,
                  color: 'white',
                  font: {
                     weight: 'bold'
                  },
                  formatter: (value, context, i ,b) => {
                     return labels[context.dataIndex] + '\n' + value.toLocaleString()
                  }
               }
            }
         }
      })
   }

   function iniRussiaUSAComparionPie(){
      const ctx = document.getElementById('russia-USA-comparison-chart')
      const labels = ['USA', 'Russia']

      new Chart(ctx, {
         type: 'pie',
         plugins: [ChartDataLabels],
         data: {
            labels: labels,
            datasets: [
               {
                  label: 'GDP',
                  data: [26949643, 1862470],
                  backgroundColor: [colors[11], colors[2]]
               }
            ]
         },
         options: {
            elements: {
               arc: {
                  borderWidth: 0
               }
            },
            plugins: {
               legend: {
                  display: false
               },
               datalabels: {
                  display: isMobile === false,
                  color: 'white',
                  font: {
                     weight: 'bold'
                  },
                  formatter: (value, context, i ,b) => {
                     return labels[context.dataIndex] + '\n' + value.toLocaleString()
                  }
               }
            }
         }
      })
   }

   function iniEuropeanGDPTreemap(){
      const ctx = document.getElementById('european-gdp-treemap')

      new Chart(ctx, {
         type: 'treemap',
         maintainAspectRatio: false,
         data: {
            datasets: [
               {
                  tree: [
                     {
                        what: 'Germany',
                        GDP: 4429838,
                        color: colors[0]
                     },
                     {
                        what: 'UK',
                        GDP: 3332059,
                        color: colors[1]
                     },
                     {
                        what: 'France',
                        GDP: 3049016,
                        color: colors[2] 
                     },
                     {
                        what: 'Italy',
                        GDP: 2186082,
                        color: colors[3]
                     },
                     {
                        what: 'Russia',
                        GDP: 1862470,
                        color: colors[4]
                     },
                     {
                        what: 'Spain',
                        GDP: 1582054,
                        color: colors[5]
                     },
                     {
                        what: 'Turkey',
                        GDP: 1154600,
                        color: colors[7]
                     },
                     {
                        what: 'Netherlands',
                        GDP: 1092748,
                        color: colors[8]
                     },
                     {
                        what: 'Switzerland',
                        GDP: 905684,
                        color: colors[0]
                     },
                     {
                        what: 'Poland',
                        GDP: 842172,
                        color: colors[1]
                     },
                     {
                        what: 'Belgium',
                        GDP: 627511,
                        color: colors[2]
                     },
                     {
                        what: 'Sweden',
                        GDP: 597110,
                        color: colors[3]
                     },
                     {
                        what: 'Ireland',
                        GDP: 589569,
                        color: colors[4]
                     },
                     {
                        what: 'Norway',
                        GDP: 546768,
                        color: colors[5]
                     },
                     {
                        what: 'Austria',
                        GDP: 526182,
                        color: colors[6]
                     },
                     {
                        what: 'Denmark',
                        GDP: 420800,
                        color: colors[7]
                     },
                     {
                        what: 'Rest of Europe',
                        GDP: 2844075,
                        color: colors[5]
                     }
                  ],
                  key: 'GDP',
                  borderRadius: 0,
                  backgroundColor(ctx) {
                     if (ctx.type !== 'data') return 'transparent';
                     return ctx.raw._data.color;
                  },
                  labels: {
                     align: 'left',
                     padding: 8,
                     display: true,
                     formatter(ctx) {
                        if (ctx.type !== 'data') return;
                        return [ctx.raw._data.what, ctx.raw.v.toLocaleString()];
                     },
                     color: ['white', 'whiteSmoke'],
                     font: [{size: 17, weight: 'bold'}, {size: 12}],
                     position: 'top'
                  }
               }
            ],
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true,
                  display: false
               }
            },
            plugins: {
               legend: {
                  display: false
               },
               datalabels: {
                  display: false
               },
               enable: {
                  display: false
               }
            }
         }
      })
   }

   function iniLargestGDPchart(){
      const ctx = document.getElementById('largest-gdp-chart')
      
      new Chart(ctx, {
         type: 'bar',
         plugins: [ChartDataLabels],
         data: {
            labels: [
               'Usa',
               'China',
               'Germany',
               'Japan',
               'India',
               'Uk',
               'France',
               'Italy',
               'Brazil',
               'Canada',
               'Russia'
            ],
            datasets: [{
               label: 'GDP in 2023',
               data: [
                  26949643,
                  17700899,
                  4429838,
                  4230862,
                  3732224,
                  3332059,
                  3049016,
                  2186082,
                  2126809,
                  2117805,
                  1862470 
               ],
               backgroundColor: colors[10]
            }]
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true,
                  display: false
               },
               x: {
                  display: false,
                  grid: {
                     display: false
                  }
               }
            },
            barPercentage: 1,
            plugins: {
               legend: {
                  display: false
               },
               datalabels: {
                  display: isMobile === false,
                  align: 'end',
                  anchor: 'end',
                  color: function(context) {
                     return context.dataset.backgroundColor;
                  },
                  font: function(context) {
                     var w = context.chart.width;
                     return {
                        size: w < 512 ? 12 : 14,
                        weight: 'bold',
                     };
                  },
                  formatter: function(value, context) {
                     return context.chart.data.labels[context.dataIndex];
                  }
                }
            }
         }
      })
   }
})