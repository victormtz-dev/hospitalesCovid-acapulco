var ctx = document.getElementById('myChart').getContext('2d');

const arrayHospital = []; 
const arrayCamas = [];

(function() {

    let lstNumero = document.getElementsByClassName("hospital")
    let camas = document.getElementsByClassName("camas")

        for (var i = 0; i < lstNumero.length; i++) {    
            arrayHospital[i] = lstNumero[i].value;
            console.log (lstNumero[i].value);    
            
            }
        for (var y = 0; y < camas.length; y++) {    
                arrayCamas[y] = camas[y].value;
                console.log (camas[y].value);    
                
            }   
            console.log(arrayCamas) 

})();


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayHospital,
        datasets: [{
            label: 'Numero de camillas disponibles por Hospital',
            data: arrayCamas,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

