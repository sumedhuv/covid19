const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

let app_data = [],
  cases_list = [];

let user_country = "India";

function fetchData(user_country) {
  fetch("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.regionData[0]);
      for (let i = 0; i < 186; i++) {
        if (data.regionData[i].country == user_country) {
          let DATA = data.regionData[i];
          country_name_element.innerHTML = DATA.country;
          app_data.push(DATA);
          cases_list.splice(0, cases_list.length);
          cases_list.push(DATA.totalCases);
          cases_list.push(DATA.totalRecovered);
          cases_list.push(DATA.totalDeaths);
          console.log(cases_list);
        }
        document.getElementById(
          "tcases"
        ).innerHTML = data.regionData[0].totalCases.toLocaleString("en");
        document.getElementById(
          "ncases"
        ).innerHTML = data.regionData[0].newCases.toLocaleString("en");
        document.getElementById(
          "trecovered"
        ).innerHTML = data.regionData[0].totalRecovered.toLocaleString("en");
        document.getElementById(
          "nrecovered"
        ).innerHTML = data.regionData[0].activeCases.toLocaleString("en");
        document.getElementById(
          "tdeaths"
        ).innerHTML = data.regionData[0].totalDeaths.toLocaleString("en");
        document.getElementById(
          "ndeaths"
        ).innerHTML = data.regionData[0].newDeaths.toLocaleString("en");
      }
    })

    .then(() => {
      updateUI();
    })
    .catch((error) => {
      alert(error);
    });
}

fetchData(user_country);

function updateUI() {
  updateStats();
  barChartDisplay();
}

function updateStats() {
  let last_entry = app_data.length - 1;
  console.log(app_data);
  country_name_element.innerHTML = app_data[last_entry].country.toLocaleString(
    "en"
  );
  total_cases_element.innerHTML = app_data[
    last_entry
  ].totalCases.toLocaleString("en");
  new_cases_element.innerHTML = `+${app_data[
    last_entry
  ].newCases.toLocaleString("en")}`;
  deaths_element.innerHTML = app_data[last_entry].totalDeaths.toLocaleString(
    "en"
  );
  
  recovered_element.innerHTML = app_data[
    last_entry
  ].totalRecovered.toLocaleString("en");
  
}
console.log(cases_list);

let my_chart;
var countries = document.getElementById("myChart").getContext("2d");
function barChartDisplay() {
  my_chart = new Chart(countries, {
    type: "bar",
    data: {
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "People",
          backgroundColor: ["#EB984E ", "#5DADE2 ", "#C0392B "],
          data: cases_list,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
      },
    },
  });
}
