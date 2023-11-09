document.addEventListener('DOMContentLoaded', () => {
   const documentStyles = getComputedStyle(document.documentElement)
   const mainColor = documentStyles.getPropertyValue('--pastel-color-orange')
   const fontColor = documentStyles.getPropertyValue('--font-color')

   setIntersectionObserver()
   createLargestGDPchart()
   createEuropeanGDPTreemap()

   function setIntersectionObserver(){
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if(entry.isIntersecting) {
               entry.target.classList.add('fade-in-effect')
            } else {
               entry.target.classList.remove('fade-in-effect')
            }
         })
      }, {
         threshold: 0.5
      })

      document.querySelectorAll('article').forEach(article => {
         observer.observe(article)
      })
   }

   function createEuropeanGDPTreemap(){
      const ctx = document.getElementById('russia-in-europe-chart')

      new Chart(ctx, {
         type: 'treemap',
         data: {
            datasets: [
               {
                  label: 'Fruits',
                  tree: [
                     {
                        what: 'Apples',
                        value: 98,
                        color: 'rgb(191, 77, 114)'
                     },
                     {
                        what: 'Orange',
                        value: 75,
                        color: 'rgb(228, 148, 55)'
                     },
                     {
                        what: 'Lime',
                        value: 69,
                        color: 'rgb(147, 119, 214)'
                     },
                     {
                        what: 'Grapes',
                        value: 55,
                        color: 'rgb(80, 134, 55)'
                     },
                     {
                        what: 'Apricots',
                        value: 49,
                        color: 'rgb(90, 97, 110)'
                     },
                     {
                        what: 'Blackberries',
                        value: 35,
                        color: 'rgb(34, 38, 82)'
                     }
                  ],
                  key: 'value',
                  borderWidth: 0,
                  borderRadius: 6,
                  spacing: 1,
                  backgroundColor(ctx) {
                     if (ctx.type !== 'data') {
                        return 'transparent';
                     }
                     return ctx.raw._data.color;
                  },
                  labels: {
                     align: 'left',
                     display: true,
                     formatter(ctx) {
                        if (ctx.type !== 'data') {
                           return;
                        }
                        return [ctx.raw._data.what, 'Value is ' + ctx.raw.v];
                     },
                     color: ['white', 'whiteSmoke'],
                     font: [{size: 20, weight: 'bold'}, {size: 12}],
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
            }
         }
      })
   }

   function createLargestGDPchart(){
      const ctx = document.getElementById('russia-and-others-chart')
      
      new Chart(ctx, {
         type: 'bar',
         data: {
            labels: [
               'United States',
               'China',
               'Japan',
               'India',
               'United Kingdom',
               'France',
               'Canada',
               'Russia',
               'Italy'
            ],
            datasets: [{
               label: 'GDP in 2022',
               data: [
                  25035164,
                  18321197,
                  4300621,
                  4031149,
                  3468566,
                  3198470,
                  2778090,
                  2200352,
                  2133092,
                  1996934
               ],
               borderWidth: 1,
               backgroundColor: mainColor
            }]
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true,
                  display: false
               }
            }
         }
      })
   }
})