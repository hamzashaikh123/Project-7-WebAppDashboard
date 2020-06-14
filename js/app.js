//CHART DATA ------------------------------------------------------------
const lineChart = document.getElementById('lineChart').getContext('2d');
const trafficChart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data:  {
         labels: ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10"],
    datasets: [{
        data: [500, 850, 2050, 250, 1500, 300, 2100, 1000],
        backgroundColor: 'rgba(116, 119, 191, .5)',
        borderColor: '#A9ACE5',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    aspectRatio: 2.75,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}
});

const barChart = document.getElementById('barChart').getContext('2d');
const DailyTrafficChart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data:  {
         labels: ["S","M",'T','W','T','F','S'],
    datasets: [{
        data: [75, 100, 175, 125, 225, 300, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    aspectRatio: 2,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}
});

const pieChart = document.getElementById('pieChart').getContext('2d');
const MobileUsersChart = new Chart(pieChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data:  {
         labels: ["Desktop","Tablet","Phones"],
    datasets: [{
        data: [65,20,15],
        backgroundColor: ['#7477bf','#74aabf','#74bf8c'],
        borderColor: '#A9ACE5',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 15,
            fontStyle: 'bold',
            fontSize: 16
        }
        
        
    }
    
}
});

//RESPONSIVE CODING  ------------------------------------------------------------
const alertClose = document.getElementById("close");
const alertBar=document.getElementsByClassName("alert")[0];



//when 'X' is clicked on alert bar//
alertClose.addEventListener('click',()=>{
    alertBar.style.display="none";
});