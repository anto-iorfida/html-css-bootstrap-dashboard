// riferimento al canvas
  var ctx = document.getElementById('myChart').getContext('2d');

//  dati del grafico
  var data = {
    labels: ['Never', 'Every few hours', 'Every hour', 'Multiple times per hours', 'constantly'],
    datasets: [{
      label: 'Share of Responders',
      data: [6, 17, 3, 5, 2],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
        
      ],
      borderColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderWidth: 1
    }]
  };
 
// Configurazione grafico
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });