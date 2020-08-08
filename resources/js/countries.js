let country_list = [
  { name: "Afghanistan" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "Andorra" },
  { name: "Angola" },
  { name: "Antigua and Barbuda" },
  { name: "Argentina" },
  { name: "Armenia" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Bahamas" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Barbados" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Belize" },
  { name: "Benin" },
  { name: "Bhutan" },
  { name: "Bolivia" },
  { name: "Bosnia and Herzegovina" },
  { name: "Botswana" },
  { name: "Brazil" },
  { name: "Brunei Darussalam" },
  { name: "Bulgaria" },
  { name: "Burkina Faso" },
  { name: "Burundi" },
  { name: "Cambodia" },
  { name: "Cameroon" },
  { name: "Canada" },
  { name: "Cape Verde" },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Chile" },
  { name: "China" },
  { name: "Colombia" },
  { name: "Comoros" },
  { name: "Congo (Brazzaville)" },
  { name: "Congo (Kinshasa)" },
  { name: "Costa Rica" },
  { name: "Croatia" },
  { name: "Cuba" },
  { name: "Cyprus" },
  { name: "Czech Republic" },
  { name: "Côte d'Ivoire" },
  { name: "Denmark" },
  { name: "Djibouti" },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Ecuador" },
  { name: "Egypt" },
  { name: "El Salvador" },
  { name: "Equatorial Guinea" },
  { name: "Eritrea" },
  { name: "Estonia" },
  { name: "Ethiopia" },
  { name: "Fiji" },
  { name: "Finland" },
  { name: "France" },
  { name: "Gabon" },
  { name: "Gambia" },
  { name: "Georgia" },
  { name: "Germany" },
  { name: "Ghana" },
  { name: "Greece" },
  { name: "Grenada" },
  { name: "Guatemala" },
  { name: "Guinea" },
  { name: "Guinea-Bissau" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Holy See (Vatican City State)" },
  { name: "Honduras" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Iran, Islamic Republic of" },
  { name: "Iraq" },
  { name: "Ireland" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Jamaica" },
  { name: "Japan" },
  { name: "Jordan" },
  { name: "Kazakhstan" },
  { name: "Kenya" },
  { name: "Korea (South)" },
  { name: "Kuwait" },
  { name: "Kyrgyzstan" },
  { name: "Lao PDR" },
  { name: "Latvia" },
  { name: "Lebanon" },
  { name: "Lesotho" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Liechtenstein" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Macedonia, Republic of" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mali" },
  { name: "Malta" },
  { name: "Mauritania" },
  { name: "Mauritius" },
  { name: "Mexico" },
  { name: "Moldova" },
  { name: "Monaco" },
  { name: "Mongolia" },
  { name: "Montenegro" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Myanmar" },
  { name: "Namibia" },
  { name: "Nepal" },
  { name: "Netherlands" },
  { name: "New Zealand" },
  { name: "Nicaragua" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Norway" },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Palestinian Territory" },
  { name: "Panama" },
  { name: "Papua New Guinea" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Qatar" },
  { name: "Republic of Kosovo" },
  { name: "Romania" },
  { name: "Russian Federation" },
  { name: "Rwanda" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and Grenadines" },
  { name: "San Marino" },
  { name: "Sao Tome and Principe" },
  { name: "Saudi Arabia" },
  { name: "Senegal" },
  { name: "Serbia" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Singapore" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Somalia" },
  { name: "South Africa" },
  { name: "South Sudan" },
  { name: "Spain" },
  { name: "Sri Lanka" },
  { name: "Sudan" },
  { name: "Suri" },
  { name: "Swaziland" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Syrian Arab Republic (Syria)" },
  { name: "Taiwan, Republic of China" },
  { name: "Tajikistan" },
  { name: "Tanzania, United Republic of" },
  { name: "Thailand" },
  { name: "Timor-Leste" },
  { name: "Togo" },
  { name: "Trinidad and Tobago" },
  { name: "Tunisia" },
  { name: "Turkey" },
  { name: "Uganda" },
  { name: "Ukraine" },
  { name: "United Arab Emirates" },
  { name: "United Kingdom" },
  { name: "United States of America" },
  { name: "Uruguay" },
  { name: "Uzbekistan" },
  { name: "Venezuela (Bolivarian Republic)" },
  { name: "Viet Nam" },
  { name: "Western Sahara" },
  { name: "Yemen" },
  { name: "Zambia" },
  { name: "Zimbabwe" },
];

const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const change_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById("search-input");

function createCountryList() {
  const num_countries = country_list.length;
  let i = 0,
    ul_list_id;
  country_list.forEach((country, index) => {
    if (index % Math.ceil(num_countries / num_of_ul_lists) == 0) {
      ul_list_id = `list-${i}`;
      country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
      i++;
    }
    document.getElementById(`${ul_list_id}`).innerHTML += `
    <li onclick="fetchData('${country.name}')"id="${country.name}">
    ${country.name}
    </li>
    `;
  });
}

let num_of_ul_lists = 3;
createCountryList();

//Show/Hide country list

change_country_btn.addEventListener("click", () => {
  input.value = "";
  resetCountryList();
  search_country_element.classList.toggle("hide");
  search_country_element.classList.add("fadeIn");
});
close_list_btn.addEventListener("click", () => {
  search_country_element.classList.toggle("hide");
});
country_list_element.addEventListener("click", () => {
  search_country_element.classList.toggle("hide");
});

//Country Filter

input.addEventListener("input", () => {
  let value = input.value.toUpperCase();

  country_list.forEach((country) => {
    if (country.name.toUpperCase().startsWith(value)) {
      document.getElementById(country.name).classList.remove("hide");
    } else {
      document.getElementById(country.name).classList.add("hide");
    }
  });
});

// RESET COUNTRY LIST
function resetCountryList() {
  country_list.forEach((country) => {
    document.getElementById(country.name).classList.remove("hide");
  });
}
