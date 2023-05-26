'use strict';

const btnToggle=document.querySelector('.toggle-btn');
const sidebar=document.querySelector('.collapse-nav');

/////////////////////
//// Navbar /////////

const openNavbar = function (e) {
  e.preventDefault();
  sidebar.classList.remove('show');
};

const closeNavbar = function () {
  sidebar.classList.add('hidden');;
};

btnToggle.addEventListener('click', function(){
  sidebar.classList.toggle('show');
});

btnToggle.addEventListener('click', closeNavbar);

///////////////////////
/////  Line Chart /////

const ctxl = document.getElementById('line-chart').getContext('2d');
const chartl = new Chart(ctxl, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June',
      'July','August','September','October','November','December'],
      datasets: [{
        label: 'No. of Passengers in lakhs',
        data: [109, 150, 70, 48, 90, 13, 170, 100,7,134, 120, 16],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  ///////////////////////
  //// Bar chart ///////

  const ctxb = document.getElementById('bar-chart').getContext('2d');
  var chartb = new Chart(ctxb, {
    type: 'bar',
    data: {
      labels: ['Entrance', 'Check-in-counter', 'Security Point', 'Gate', 'Airport Bus', 'Exit'],
      datasets: [{
        label: 'Average waiting time at each counter',
        data: [3, 15, 15, 5, 10, 2],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });