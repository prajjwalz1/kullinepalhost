window.addEventListener('load', function() {
  // your code here

  const countries = [
  {name: "Afghanistan",code: "AF"},
    {name: "Åland Islands",code: "AX"},
    {name: "Albania",code: "AL"},
    {name: "Algeria",code: "DZ"},
    {name: "American Samoa",code: "AS"},
    {name: "Andorra",code: "AD"},
    {name: "Angola",code: "AO"},
    {name: "Anguilla",code: "AI"},
    {name: "Antarctica",code: "AQ"},
    {name: "Antigua & Barbuda",code: "AG"},
    {name: "Argentina",code: "AR"},
    {name: "Armenia",code: "AM"},
    {name: "Aruba",code: "AW"},
    {name: "Australia",code: "AU"},
    {name: "Austria",code: "AT"},
    {name: "Azerbaijan",code: "AZ"},
    {name: "Bahamas",code: "BS"},
    {name: "Bahrain",code: "BH"},
    {name: "Bangladesh",code: "BD"},
    {name: "Barbados",code: "BB"},
    {name: "Belarus",code: "BY"},
    {name: "Belgium",code: "BE"},
    {name: "Belize",code: "BZ"},
    {name: "Benin",code: "BJ"},
    {name: "Bermuda",code: "BM"},
    {name: "Bhutan",code: "BT"},
    {name: "Bolivia",code: "BO"},
    {name: "Caribbean Netherlands",code: "BQ"},
    {name: "Bosnia & Herzegovina",code: "BA"},
    {name: "Botswana",code: "BW"},
    {name: "Bouvet Island",code: "BV"},
    {name: "Brazil",code: "BR"},
    {name: "British Indian Ocean Territory",code: "IO"},
    {name: "Brunei",code: "BN"},
    {name: "Bulgaria",code: "BG"},
    {name: "Burkina Faso",code: "BF"},
    {name: "Burundi",code: "BI"},
    {name: "Cambodia",code: "KH"},
    {name: "Cameroon",code: "CM"},
    {name: "Canada",code: "CA"},
    {name: "Cape Verde",code: "CV"},
    {name: "Cayman Islands",code: "KY"},
    {name: "Central African Republic",code: "CF"},
    {name: "Chad",code: "TD"},
    {name: "Chile",code: "CL"},
    {name: "China",code: "CN"},
    {name: "Christmas Island",code: "CX"},
    {name: "Cocos (Keeling) Islands",code: "CC"},
    {name: "Colombia",code: "CO"},
    {name: "Comoros",code: "KM"},
    {name: "Congo - Brazzaville",code: "CG"},
    {name: "Congo - Kinshasa",code: "CD"},
    {name: "Cook Islands",code: "CK"},
    {name: "Costa Rica",code: "CR"},
    {name: "Côte d’Ivoire",code: "CI"},
    {name: "Croatia",code: "HR"},
    {name: "Cuba",code: "CU"},
    {name: "Curaçao",code: "CW"},
    {name: "Cyprus",code: "CY"},
    {name: "Czechia",code: "CZ"},
    {name: "Denmark",code: "DK"},
    {name: "Djibouti",code: "DJ"},
    {name: "Dominica",code: "DM"},
    {name: "Dominican Republic",code: "DO"},
    {name: "Ecuador",code: "EC"},
    {name: "Egypt",code: "EG"},
    {name: "El Salvador",code: "SV"},
    {name: "Equatorial Guinea",code: "GQ"},
    {name: "Eritrea",code: "ER"},
    {name: "Estonia",code: "EE"},
    {name: "Ethiopia",code: "ET"},
    {name: "Falkland Islands (Islas Malvinas)",code: "FK"},
    {name: "Faroe Islands",code: "FO"},
    {name: "Fiji",code: "FJ"},
    {name: "Finland",code: "FI"},
    {name: "France",code: "FR"},
    {name: "French Guiana",code: "GF"},
    {name: "French Polynesia",code: "PF"},
    {name: "French Southern Territories",code: "TF"},
    {name: "Gabon",code: "GA"},
    {name: "Gambia",code: "GM"},
    {name: "Georgia",code: "GE"},
    {name: "Germany",code: "DE"},
    {name: "Ghana",code: "GH"},
    {name: "Gibraltar",code: "GI"},
    {name: "Greece",code: "GR"},
    {name: "Greenland",code: "GL"},
    {name: "Grenada",code: "GD"},
    {name: "Guadeloupe",code: "GP"},
    {name: "Guam",code: "GU"},
    {name: "Guatemala",code: "GT"},
    {name: "Guernsey",code: "GG"},
    {name: "Guinea",code: "GN"},
    {name: "Guinea-Bissau",code: "GW"},
    {name: "Guyana",code: "GY"},
    {name: "Haiti",code: "HT"},
    {name: "Heard & McDonald Islands",code: "HM"},
    {name: "Vatican City",code: "VA"},
    {name: "Honduras",code: "HN"},
    {name: "Hong Kong",code: "HK"},
    {name: "Hungary",code: "HU"},
    {name: "Iceland",code: "IS"},
    {name: "India",code: "IN"},
    {name: "Indonesia",code: "ID"},
    {name: "Iran",code: "IR"},
    {name: "Iraq",code: "IQ"},
    {name: "Ireland",code: "IE"},
    {name: "Isle of Man",code: "IM"},
    {name: "Israel",code: "IL"},
    {name: "Italy",code: "IT"},
    {name: "Jamaica",code: "JM"},
    {name: "Japan",code: "JP"},
    {name: "Jersey",code: "JE"},
    {name: "Jordan",code: "JO"},
    {name: "Kazakhstan",code: "KZ"},
    {name: "Kenya",code: "KE"},
    {name: "Kiribati",code: "KI"},
    {name: "North Korea",code: "KP"},
    {name: "South Korea",code: "KR"},
    {name: "Kosovo",code: "XK"},
    {name: "Kuwait",code: "KW"},
    {name: "Kyrgyzstan",code: "KG"},
    {name: "Laos",code: "LA"},
    {name: "Latvia",code: "LV"},
    {name: "Lebanon",code: "LB"},
    {name: "Lesotho",code: "LS"},
    {name: "Liberia",code: "LR"},
    {name: "Libya",code: "LY"},
    {name: "Liechtenstein",code: "LI"},
    {name: "Lithuania",code: "LT"},
    {name: "Luxembourg",code: "LU"},
    {name: "Macao",code: "MO"},
    {name: "North Macedonia",code: "MK"},
    {name: "Madagascar",code: "MG"},
    {name: "Malawi",code: "MW"},
    {name: "Malaysia",code: "MY"},
    {name: "Maldives",code: "MV"},
    {name: "Mali",code: "ML"},
    {name: "Malta",code: "MT"},
    {name: "Marshall Islands",code: "MH"},
    {name: "Martinique",code: "MQ"},
    {name: "Mauritania",code: "MR"},
    {name: "Mauritius",code: "MU"},
    {name: "Mayotte",code: "YT"},
    {name: "Mexico",code: "MX"},
    {name: "Micronesia",code: "FM"},
    {name: "Moldova",code: "MD"},
    {name: "Monaco",code: "MC"},
    {name: "Mongolia",code: "MN"},
    {name: "Montenegro",code: "ME"},
    {name: "Montserrat",code: "MS"},
    {name: "Morocco",code: "MA"},
    {name: "Mozambique",code: "MZ"},
    {name: "Myanmar (Burma)",code: "MM"},
    {name: "Namibia",code: "NA"},
    {name: "Nauru",code: "NR"},
    {name: "Nepal",code: "NP"},
    {name: "Netherlands",code: "NL"},
    {name: "Curaçao",code: "AN"},
    {name: "New Caledonia",code: "NC"},
    {name: "New Zealand",code: "NZ"},
    {name: "Nicaragua",code: "NI"},
    {name: "Niger",code: "NE"},
    {name: "Nigeria",code: "NG"},
    {name: "Niue",code: "NU"},
    {name: "Norfolk Island",code: "NF"},
    {name: "Northern Mariana Islands",code: "MP"},
    {name: "Norway",code: "NO"},
    {name: "Oman",code: "OM"},
    {name: "Pakistan",code: "PK"},
    {name: "Palau",code: "PW"},
    {name: "Palestine",code: "PS"},
    {name: "Panama",code: "PA"},
    {name: "Papua New Guinea",code: "PG"},
    {name: "Paraguay",code: "PY"},
    {name: "Peru",code: "PE"},
    {name: "Philippines",code: "PH"},
    {name: "Pitcairn Islands",code: "PN"},
    {name: "Poland",code: "PL"},
    {name: "Portugal",code: "PT"},
    {name: "Puerto Rico",code: "PR"},
    {name: "Qatar",code: "QA"},
    {name: "Réunion",code: "RE"},
    {name: "Romania",code: "RO"},
    {name: "Russia",code: "RU"},
    {name: "Rwanda",code: "RW"},
    {name: "St. Barthélemy",code: "BL"},
    {name: "St. Helena",code: "SH"},
    {name: "St. Kitts & Nevis",code: "KN"},
    {name: "St. Lucia",code: "LC"},
    {name: "St. Martin",code: "MF"},
    {name: "St. Pierre & Miquelon",code: "PM"},
    {name: "St. Vincent & Grenadines",code: "VC"},
    {name: "Samoa",code: "WS"},
    {name: "San Marino",code: "SM"},
    {name: "São Tomé & Príncipe",code: "ST"},
    {name: "Saudi Arabia",code: "SA"},
    {name: "Senegal",code: "SN"},
    {name: "Serbia",code: "RS"},
    {name: "Serbia",code: "CS"},
    {name: "Seychelles",code: "SC"},
    {name: "Sierra Leone",code: "SL"},
    {name: "Singapore",code: "SG"},
    {name: "Sint Maarten",code: "SX"},
    {name: "Slovakia",code: "SK"},
    {name: "Slovenia",code: "SI"},
    {name: "Solomon Islands",code: "SB"},
    {name: "Somalia",code: "SO"},
    {name: "South Africa",code: "ZA"},
    {name: "South Georgia & South Sandwich Islands",code: "GS"},
    {name: "South Sudan",code: "SS"},
    {name: "Spain",code: "ES"},
    {name: "Sri Lanka",code: "LK"},
    {name: "Sudan",code: "SD"},
    {name: "Suriname",code: "SR"},
    {name: "Svalbard & Jan Mayen",code: "SJ"},
    {name: "Eswatini",code: "SZ"},
    {name: "Sweden",code: "SE"},
    {name: "Switzerland",code: "CH"},
    {name: "Syria",code: "SY"},
    {name: "Taiwan",code: "TW"},
    {name: "Tajikistan",code: "TJ"},
    {name: "Tanzania",code: "TZ"},
    {name: "Thailand",code: "TH"},
    {name: "Timor-Leste",code: "TL"},
    {name: "Togo",code: "TG"},
    {name: "Tokelau",code: "TK"},
    {name: "Tonga",code: "TO"},
    {name: "Trinidad & Tobago",code: "TT"},
    {name: "Tunisia",code: "TN"},
    {name: "Turkey",code: "TR"},
    {name: "Turkmenistan",code: "TM"},
    {name: "Turks & Caicos Islands",code: "TC"},
    {name: "Tuvalu",code: "TV"},
    {name: "Uganda",code: "UG"},
    {name: "Ukraine",code: "UA"},
    {name: "United Arab Emirates",code: "AE"},
    {name: "United Kingdom",code: "GB"},
    {name: "USA",code: "US"},
    {name: "U.S. Outlying Islands",code: "UM"},
    {name: "Uruguay",code: "UY"},
    {name: "Uzbekistan",code: "UZ"},
    {name: "Vanuatu",code: "VU"},
    {name: "Venezuela",code: "VE"},
    {name: "Vietnam",code: "VN"},
    {name: "British Virgin Islands",code: "VG"},
    {name: "U.S. Virgin Islands",code: "VI"},
    {name: "Wallis & Futuna",code: "WF"},
    {name: "Western Sahara",code: "EH"},
    {name: "Yemen",code: "YE"},
    {name: "Zambia",code: "ZM"},
    {name: "Zimbabwe",code: "ZW"}
];





const countryInput = document.querySelector('#country');
const weightInput = document.querySelector('#weight');

const calculateButton = document.querySelector('#calculate');

function filterCountries(query) {
  return countries.filter(country => {
    const regex = new RegExp(query, "gi");
    return country.name.match(regex);
  });
}

function renderAutocompleteOptions(options) {
  const optionElements = options.slice(0, 3).map(option => {
    const element = document.createElement("li");
    const formattedName = option.name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    element.textContent = formattedName;
    element.dataset.code = option.code;
    element.addEventListener("click", handleAutocompleteClick);
    return element;
  });

  const autocompleteDropdown = document.getElementById("autocomplete-dropdown");
  autocompleteDropdown.innerHTML = "";
  optionElements.forEach(option => autocompleteDropdown.appendChild(option));
}

function handleCountryInput(event) {
  const query = event.target.value;
  if (query.length >= 2) {
    const matchingCountries = filterCountries(query);
    renderAutocompleteOptions(matchingCountries);
  } else {
    const autocompleteDropdown = document.getElementById("autocomplete-dropdown");
    autocompleteDropdown.innerHTML = "";
  }
}

function handleAutocompleteClick(event) {
  if (event.target.tagName === "LI") {
    const selectedCountry = event.target.textContent;
    const selectedCode = event.target.dataset.code;
    countryInput.value = selectedCountry;
    countryselect=selectedCountry;
    countryInput.dataset.code = selectedCode;
    renderAutocompleteOptions([]);
  }
}

function calculateRate(code, weight) {
  // logic to calculate rate based on country code and weight
  return 10; // dummy rate for example purposes
}

countryInput.addEventListener("input", handleCountryInput);
//document.addEventListener("click", handleAutocompleteClick);





calculateButton.addEventListener("click",





    // Call the function with user input values as arguments



    function calculateShippingCost(countryselect, weightInGrams) {
      parceltype= document.querySelector('#parcel-type').value
      console.log(parceltype);
      const country = countryInput.value.toUpperCase();
      const weight = weightInput.value;
      const docrates = [  { zone: "Zone 1", rate: 2210.5, additionalCost: 979.0, countries: ["INDIA"] },
      { zone: "Zone 2", rate: 2628.5, additionalCost: 1262.8, countries: ["BAHRAIN", "BANGLADESH", "BHUTAN", "JORDAN", "OMAN", "PAKISTAN", "QATAR", "SRI LANKA", "UAE", "SAUDI ARABIA", "KUWAIT"] },
      { zone: "Zone 3", rate: 3023.5, additionalCost: 1262.8, countries: ["BRUNEI", "CHINA", "HONG KONG", "LAOS", "INDONESIA", "MACAU", "MALAYSIA", "PHILIPPINES", "KOREA", "SINGAPORE", "TAIWAN", "THAILAND", "VIETNAM"] },
      { zone: "Zone 4", rate: 3683.8, additionalCost: 1544.4, countries: ["AUSTRALIA", "NEW ZEALAND"] },
      { zone: "Zone 5", rate: 3827.4, additionalCost: 1262.8, countries: ["AUSTRIA", "BELGIUM", "BULGARIA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "ESTONIA", "GERMANY", "GREECE", "FRANCE", "HUNGARY", "ITALY", "IRELAND", "LATVIA", "ISRAEL", "LITHUANIA", "MALTA", "NETHERLANDS", "NORWAY", "POLAND", "PORTUGAL", "ROMANIA", "SLOVAKIA", "SPAIN", "SWEDEN", "SWITZERLAND", "TURKEY", "VATICAN CITY", "UK"] },
      { zone: "Zone 6", rate: 4104.5, additionalCost: 1262.8, countries: ["CANADA", "MEXICO", "USA"] },
      { zone: "Zone 7", rate: 5520.8, additionalCost: 1658.2, countries: ["AFGHANISTAN", "BAHAMAS", "BELARUS", "BRAZIL", "CANARY ISLAND", "EGYPT", "GHANA", "HAITI", "ICELAND", "IRAQ", "IRAN", "KENYA", "LEBANON", "MAURITIUS", "NAMIBIA", "NIGERIA", "PANAMA", "PERU", "PUERTO RICO", "SENEGAL", "PARAGUAY", "SEYCHELLES", "SOUTH AFRICA", "SYRIA", "TUNISIA", "UGANDA", "UKRAINE", "UERUGUAY", "VIRGIN ISLANDS", "YEMEN", "ZAMBIA", "MONGOLIA"] },
      { zone: "Zone 8", rate: 3378.8, additionalCost: 1207.5, countries: ["JAPAN"] }
    ];
    const otherrates = [  { zone: "Zone 1", rate: 2145.5, additionalCost:329, countries: ["INDIA"] },
      { zone: "Zone 2", rate: 3007.7, additionalCost: 561, countries: ["BAHRAIN", "BANGLADESH", "BHUTAN", "JORDAN", "OMAN", "PAKISTAN", "QATAR", "SRI LANKA", "UAE", "SAUDI ARABIA", "KUWAIT"] },
      { zone: "Zone 3", rate: 3208.3, additionalCost: 871, countries: ["BRUNEI", "CHINA", "HONG KONG", "LAOS", "INDONESIA", "MACAU", "MALAYSIA", "PHILIPPINES", "KOREA", "SINGAPORE", "TAIWAN", "THAILAND", "VIETNAM"] },
      { zone: "Zone 4", rate: 3768.9, additionalCost: 641, countries: ["AUSTRALIA", "NEW ZEALAND", "JAPAN"] },
      { zone: "Zone 5", rate: 4209.9, additionalCost: 704, countries: ["AUSTRIA", "BELGIUM", "BULGARIA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "ESTONIA", "GERMANY", "GREECE", "FRANCE", "HUNGARY", "ITALY", "IRELAND", "LATVIA", "ISRAEL", "LITHUANIA", "MALTA", "NETHERLANDS", "NORWAY", "POLAND", "PORTUGAL", "ROMANIA", "SLOVAKIA", "SPAIN", "SWEDEN", "SWITZERLAND", "TURKEY", "VATICAN CITY", "UK"] },
      { zone: "Zone 6", rate: 4411.9, additionalCost: 760, countries: ["CANADA", "MEXICO", "USA"] },
      { zone: "Zone 7", rate: 6008.83, additionalCost: 881, countries: ["AFGHANISTAN", "BAHAMAS", "BELARUS", "BRAZIL", "CANARY ISLAND", "EGYPT", "GHANA", "HAITI", "ICELAND", "IRAQ", "IRAN", "KENYA", "LEBANON", "MAURITIUS", "NAMIBIA", "NIGERIA", "PANAMA", "PERU", "PUERTO RICO", "SENEGAL", "PARAGUAY", "SEYCHELLES", "SOUTH AFRICA", "SYRIA", "TUNISIA", "UGANDA", "UKRAINE", "UERUGUAY", "VIRGIN ISLANDS", "YEMEN", "ZAMBIA", "MONGOLIA"] },
      { zone: "Zone 8", rate: 3768.9, additionalCost: 1207.5, countries: [] }
    ];

        if (parceltype == "document") {
          // find matching rate for document
          matchingRate = docrates.find(rate => rate.countries.includes(country));
          console.log(matchingRate)
          if (matchingRate) {
            if (weight <= 500) {
          shippingCost = matchingRate.rate;
        } else if (weight <= 1000) {
          shippingCost = matchingRate.rate + matchingRate.additionalCost;
        } else if (weight <= 1500) {
          shippingCost = matchingRate.rate + matchingRate.additionalCost * 2;
        } else if (weight <= 2000) {
          shippingCost = matchingRate.rate + matchingRate.additionalCost * 3;
        } else {
          console.log(`Sorry, shipping weight over 2000gm is not available.`);
          return null;

        }

        console.log(`Shipping cost to ${country} is ${shippingCost.toFixed(2)}`);

        const resultContainer1 = document.getElementById('result-container');
                  // Add flipped class to form-container
          document.querySelector('.contact-form').classList.add('flipped');

          // Show result container
          resultContainer1.style.display = 'block';
          resultContainer1.innerHTML = "Shipping cost to &nbsp" + country + "&nbspfor a &nbsp" + parceltype +"&nbspof weight &nbsp" + weight/1000 +  "kg&nbsp  will be &nbspRs." + shippingCost.toFixed(2);

          // Hide form container after a delay
          setTimeout(() => {
            document.querySelector('.contact-form').style.display = 'none';
          }, 500);
          return shippingCost;
        }





      }

       else {
          // find matching rate for other parcel types
          matchingRate = otherrates.find(rate => rate.countries.includes(country));
           if (matchingRate) {
            if (weight <= 500) {
                shippingCost = matchingRate.rate;
            } else if (weight <= 1000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost;
            } else if (weight <= 1500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 2;
            } else if (weight <= 2000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 3;
            } else if (weight <= 2500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 4;
            } else if (weight <= 3000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 5;
            } else if (weight <= 3500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 6;
            } else if (weight <= 4000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 7;
            } else if (weight <= 4500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 8;
            } else if (weight <= 5000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 9;
            } else if (weight <= 5500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 10;
            } else if (weight <= 6000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 11;
            } else if (weight <= 6500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 12;
            } else if (weight <= 7000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 13;
            } else if (weight <= 7500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 14;
            } else if (weight <= 8000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 15;
            } else if (weight <= 8500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 16;
            } else if (weight <= 9000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 17;
            } else if (weight <= 9500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 18;
            } else if (weight <= 10000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 19;
            } else if (weight <= 10500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 21;
            } else if (weight <= 11000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 23;
            } else if (weight <= 11500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 25;
            } else if (weight <= 12000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 27;
            } else if (weight <= 12500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 29;
            } else if (weight <= 13000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 31;
            } else if (weight <= 13500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 32;
            } else if (weight <= 14000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 33;
              } else if (weight <= 14500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 34;
              } else if (weight <= 15000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 35;
              } else if (weight <= 15500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 36;
              } else if (weight <= 16000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 37;
              } else if (weight <= 16500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 38;
              } else if (weight <= 17000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 39;
              } else if (weight <= 17500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 40;
              } else if (weight <= 18000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 41;
              } else if (weight <= 18500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 42;
              } else if (weight <= 19000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 43;
              } else if (weight <= 19500) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 44;
              } else if (weight <= 20000) {
                shippingCost = matchingRate.rate + matchingRate.additionalCost * 45;
              }else {
                console.log(`Sorry, shipping weight over 20000gm is not available.`);
                return null;
                }
                console.log(`Shipping cost to ${country} is ${shippingCost.toFixed(2)}`);
                console.log("flip is opened");
                   const resultContainer = document.getElementById('result-container');
                  // Add flipped class to form-container
                  document.querySelector('.contact-form').classList.add('flipped');

                  // Show result container
                  resultContainer.style.display = 'block';


               const spinner= `<div class="spinner-border" role="status"> <span class="sr-only">Loading...</span> </div>`;





                  resultContainer.innerHTML=spinner;
                  resultContainer.innerHTML = "Shipping cost to &nbsp" + country + "&nbspfor a &nbsp" + parceltype +"&nbspof weight &nbsp" + weight/1000 +  "kg&nbsp  will be &nbspRs." + shippingCost.toFixed(2);

                  // Hide form container after a delay
                  setTimeout(() => {
                    document.querySelector('.contact-form').style.display = 'none';
                  }, 500);




//                calculate.addEventListener('click', (e) => {
//                  e.preventDefault();
//                  console.log("flip is opened");
//
//                  // Add flipped class to form-container
//                  document.querySelector('.contact-form').classList.add('flipped');
//
//                  // Show result container
//                  resultContainer.style.display = 'block';
//                  resultContainer.innerHTML = "Shipping cost to &nbsp" + country + "&nbspfor a &nbsp" + parceltype +"of weight &nbsp" + weight/1000 +  "kg&nbsp  will be &nbspRs." + shippingCost.toFixed(2);
//
//                  // Hide form container after a delay
//                  setTimeout(() => {
//                    document.querySelector('.contact-form').style.display = 'none';
//                  }, 500);
//                });


}


}




});
});
