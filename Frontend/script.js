document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('companyChart').getContext('2d');
  const companyChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Data 1', 'Data 2', 'Data 3'],
          datasets: [{
              label: 'Company Data',
              data: [],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
              }]
          }
      }
  });

  document.getElementById('companyList').addEventListener('click', function(e) {
      if (e.target && e.target.matches('a.nav-link')) {
          const company = e.target.getAttribute('data-company');
          updateChart(company);
      }
  });

  function updateChart(company) {
      // Fetch the data for the selected company (this can be from a backend API)
      let data = [];
      if (company === 'company1') {
          data = [10, 20, 30];
        } else if (company === 'company2') {
          data = [15, 25, 35];
      } else if (company === 'company3') {
        data = [15, 25, 35];
    }
      // Update the chart data and re-render
      companyChart.data.datasets[0].data = data;
      companyChart.update();
        }
});

function updateChart(company) {
    fetch(`http://localhost:3000/data/$ {company}` )
        .then(response => response.json())
        .then(data => {
            companyChart.data.datasets[0].data = data;
            companyChart.update();
        });
}


