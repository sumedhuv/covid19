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
  fetch("https://api.covid19api.com/summary")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < 186; i++) {
        if (data.Countries[i].Country == user_country) {
          let DATA = data.Countries[i];
          country_name_element.innerHTML = DATA.Country;
          app_data.push(DATA);
          cases_list.splice(0, cases_list.length);
          cases_list.push(DATA.TotalConfirmed);
          cases_list.push(DATA.TotalRecovered);
          cases_list.push(DATA.TotalDeaths);
          console.log(cases_list);
        }
        document.getElementById(
          "tcases"
        ).innerHTML = data.Global.TotalConfirmed.toLocaleString("en");
        document.getElementById(
          "ncases"
        ).innerHTML = data.Global.NewConfirmed.toLocaleString("en");
        document.getElementById(
          "trecovered"
        ).innerHTML = data.Global.TotalRecovered.toLocaleString("en");
        document.getElementById(
          "nrecovered"
        ).innerHTML = data.Global.NewRecovered.toLocaleString("en");
        document.getElementById(
          "tdeaths"
        ).innerHTML = data.Global.TotalDeaths.toLocaleString("en");
        document.getElementById(
          "ndeaths"
        ).innerHTML = data.Global.NewDeaths.toLocaleString("en");
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
  country_name_element.innerHTML = app_data[last_entry].Country.toLocaleString(
    "en"
  );
  total_cases_element.innerHTML = app_data[
    last_entry
  ].TotalConfirmed.toLocaleString("en");
  new_cases_element.innerHTML = `+${app_data[
    last_entry
  ].NewConfirmed.toLocaleString("en")}`;
  deaths_element.innerHTML = app_data[last_entry].TotalDeaths.toLocaleString(
    "en"
  );
  new_deaths_element.innerHTML = `+${app_data[
    last_entry
  ].NewDeaths.toLocaleString("en")}`;
  recovered_element.innerHTML = app_data[
    last_entry
  ].TotalRecovered.toLocaleString("en");
  new_recovered_element.innerHTML = `+${app_data[
    last_entry
  ].NewRecovered.toLocaleString("en")}`;
}

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
