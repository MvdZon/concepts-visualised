document.addEventListener("DOMContentLoaded", mainJs);

function mainJs(){
    const ctx = document.getElementById('russia-and-others-chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'United States',
                'China',
                'Japan',
                'Germany',
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
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}