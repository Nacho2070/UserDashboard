

//import data from './data.json'; 


let allRows = 
    [
        {
          "id": 1,
          "first_name": "Kathie",
          "last_name": "Turvey",
          "email": "kturvey0@umich.edu",
          "gender": "Female",
          "ip_address": "209.106.76.85",
          "country": "Sudan"
        },
        {
          "id": 2,
          "first_name": "Chadd",
          "last_name": "Kempshall",
          "email": "ckempshall1@cyberchimps.com",
          "gender": "Male",
          "ip_address": "157.190.193.237",
          "country": "China"
        },
        {
          "id": 3,
          "first_name": "Hillel",
          "last_name": "Mannie",
          "email": "hmannie2@dagondesign.com",
          "gender": "Male",
          "ip_address": "52.214.101.244",
          "country": "Philippines"
        },
        {
          "id": 4,
          "first_name": "Zonnya",
          "last_name": "Gosnold",
          "email": "zgosnold3@weebly.com",
          "gender": "Female",
          "ip_address": "91.181.41.106",
          "country": "Indonesia"
        },
        {
          "id": 5,
          "first_name": "Drake",
          "last_name": "Denyukhin",
          "email": "ddenyukhin4@hexun.com",
          "gender": "Male",
          "ip_address": "253.11.103.200",
          "country": "Thailand"
        },
        {
          "id": 6,
          "first_name": "Karisa",
          "last_name": "Watkiss",
          "email": "kwatkiss5@bluehost.com",
          "gender": "Female",
          "ip_address": "159.222.114.96",
          "country": "Philippines"
        },
        {
          "id": 7,
          "first_name": "Bambie",
          "last_name": "MacTrustie",
          "email": "bmactrustie6@tumblr.com",
          "gender": "Female",
          "ip_address": "160.196.94.70",
          "country": "Czech Republic"
        },
        {
          "id": 8,
          "first_name": "Gabrila",
          "last_name": "Brill",
          "email": "gbrill7@amazonaws.com",
          "gender": "Bigender",
          "ip_address": "231.250.47.77",
          "country": "Sweden"
        },
        {
          "id": 9,
          "first_name": "Rriocard",
          "last_name": "Sconce",
          "email": "rsconce8@uol.com.br",
          "gender": "Male",
          "ip_address": "9.247.1.46",
          "country": "Brazil"
        },
        {
          "id": 10,
          "first_name": "Hermie",
          "last_name": "Lillico",
          "email": "hlillico9@flavors.me",
          "gender": "Male",
          "ip_address": "201.13.187.67",
          "country": "Panama"
        },
        {
          "id": 11,
          "first_name": "Pierette",
          "last_name": "Barritt",
          "email": "pbarritta@behance.net",
          "gender": "Female",
          "ip_address": "23.152.0.176",
          "country": "Thailand"
        },
        {
          "id": 12,
          "first_name": "Lamar",
          "last_name": "Jory",
          "email": "ljoryb@lycos.com",
          "gender": "Male",
          "ip_address": "37.102.18.188",
          "country": "Poland"
        },
        {
          "id": 13,
          "first_name": "Jilleen",
          "last_name": "Jelleman",
          "email": "jjellemanc@google.de",
          "gender": "Female",
          "ip_address": "110.253.146.255",
          "country": "Portugal"
        },
        {
          "id": 14,
          "first_name": "Joannes",
          "last_name": "Grishenkov",
          "email": "jgrishenkovd@goo.gl",
          "gender": "Female",
          "ip_address": "30.128.52.38",
          "country": "Brazil"
        },
        {
          "id": 15,
          "first_name": "Velma",
          "last_name": "Barta",
          "email": "vbartae@xrea.com",
          "gender": "Female",
          "ip_address": "123.151.86.115",
          "country": "Bulgaria"
        },
        {
          "id": 16,
          "first_name": "Ermina",
          "last_name": "Ruslin",
          "email": "eruslinf@wikia.com",
          "gender": "Non-binary",
          "ip_address": "254.87.79.70",
          "country": "China"
        },
        {
          "id": 17,
          "first_name": "Sutton",
          "last_name": "Holworth",
          "email": "sholworthg@google.es",
          "gender": "Male",
          "ip_address": "241.89.120.173",
          "country": "Brazil"
        },
        {
          "id": 18,
          "first_name": "Luigi",
          "last_name": "Laydon",
          "email": "llaydonh@infoseek.co.jp",
          "gender": "Male",
          "ip_address": "92.41.36.214",
          "country": "Russia"
        },
        {
          "id": 19,
          "first_name": "Layne",
          "last_name": "Barthropp",
          "email": "lbarthroppi@sciencedaily.com",
          "gender": "Female",
          "ip_address": "159.239.81.244",
          "country": "China"
        },
        {
          "id": 20,
          "first_name": "Glynda",
          "last_name": "Marzele",
          "email": "gmarzelej@globo.com",
          "gender": "Female",
          "ip_address": "150.152.150.68",
          "country": "France"
        },
        {
          "id": 21,
          "first_name": "Carr",
          "last_name": "Reolfi",
          "email": "creolfik@symantec.com",
          "gender": "Genderfluid",
          "ip_address": "178.41.31.65",
          "country": "Indonesia"
        },
        {
          "id": 22,
          "first_name": "Maddy",
          "last_name": "Raggitt",
          "email": "mraggittl@joomla.org",
          "gender": "Female",
          "ip_address": "128.129.188.67",
          "country": "Portugal"
        },
        {
          "id": 23,
          "first_name": "Dre",
          "last_name": "Whitland",
          "email": "dwhitlandm@kickstarter.com",
          "gender": "Female",
          "ip_address": "205.205.117.228",
          "country": "Indonesia"
        },
        {
          "id": 24,
          "first_name": "Gherardo",
          "last_name": "Howsley",
          "email": "ghowsleyn@webnode.com",
          "gender": "Male",
          "ip_address": "96.216.143.154",
          "country": "Indonesia"
        },
        {
          "id": 25,
          "first_name": "Mady",
          "last_name": "McGenn",
          "email": "mmcgenno@fema.gov",
          "gender": "Female",
          "ip_address": "25.31.170.45",
          "country": "Colombia"
        },
        {
          "id": 26,
          "first_name": "Mick",
          "last_name": "Laphorn",
          "email": "mlaphornp@amazonaws.com",
          "gender": "Male",
          "ip_address": "202.83.39.146",
          "country": "Greece"
        },
        {
          "id": 27,
          "first_name": "Willette",
          "last_name": "Rudge",
          "email": "wrudgeq@homestead.com",
          "gender": "Female",
          "ip_address": "153.62.106.95",
          "country": "Azerbaijan"
        },
        {
          "id": 28,
          "first_name": "Wilmette",
          "last_name": "Pitway",
          "email": "wpitwayr@squarespace.com",
          "gender": "Female",
          "ip_address": "47.0.106.245",
          "country": "Russia"
        },
        {
          "id": 29,
          "first_name": "Griffie",
          "last_name": "Stanbro",
          "email": "gstanbros@xinhuanet.com",
          "gender": "Male",
          "ip_address": "121.20.136.56",
          "country": "Russia"
        },
        {
          "id": 30,
          "first_name": "Taite",
          "last_name": "Wogden",
          "email": "twogdent@google.ca",
          "gender": "Male",
          "ip_address": "72.195.208.201",
          "country": "Japan"
        },
        {
          "id": 31,
          "first_name": "Vance",
          "last_name": "Vasilic",
          "email": "vvasilicu@xinhuanet.com",
          "gender": "Male",
          "ip_address": "170.23.57.152",
          "country": "China"
        },
        {
          "id": 32,
          "first_name": "Merle",
          "last_name": "Tiffany",
          "email": "mtiffanyv@tripod.com",
          "gender": "Male",
          "ip_address": "2.255.77.65",
          "country": "France"
        },
        {
          "id": 33,
          "first_name": "Maje",
          "last_name": "Cristol",
          "email": "mcristolw@omniture.com",
          "gender": "Male",
          "ip_address": "227.93.245.80",
          "country": "Poland"
        },
        {
          "id": 34,
          "first_name": "Blinnie",
          "last_name": "Badrick",
          "email": "bbadrickx@free.fr",
          "gender": "Female",
          "ip_address": "76.142.230.249",
          "country": "China"
        },
        {
          "id": 35,
          "first_name": "Salomon",
          "last_name": "Earey",
          "email": "seareyy@wordpress.org",
          "gender": "Male",
          "ip_address": "54.252.37.157",
          "country": "China"
        },
        {
          "id": 36,
          "first_name": "Alisa",
          "last_name": "Edwardson",
          "email": "aedwardsonz@washingtonpost.com",
          "gender": "Female",
          "ip_address": "121.128.181.69",
          "country": "Hungary"
        },
        {
          "id": 37,
          "first_name": "Con",
          "last_name": "Angove",
          "email": "cangove10@oaic.gov.au",
          "gender": "Male",
          "ip_address": "192.148.218.21",
          "country": "South Korea"
        },
        {
          "id": 38,
          "first_name": "Gerrie",
          "last_name": "Baroux",
          "email": "gbaroux11@hubpages.com",
          "gender": "Male",
          "ip_address": "196.171.244.146",
          "country": "Philippines"
        },
        {
          "id": 39,
          "first_name": "Shanie",
          "last_name": "Watkinson",
          "email": "swatkinson12@vistaprint.com",
          "gender": "Female",
          "ip_address": "21.220.247.191",
          "country": "France"
        },
        {
          "id": 40,
          "first_name": "Mick",
          "last_name": "Tibbs",
          "email": "mtibbs13@nifty.com",
          "gender": "Male",
          "ip_address": "244.95.39.214",
          "country": "Thailand"
        },
        {
          "id": 41,
          "first_name": "Buiron",
          "last_name": "Blunderfield",
          "email": "bblunderfield14@t.co",
          "gender": "Male",
          "ip_address": "194.216.130.227",
          "country": "Japan"
        },
        {
          "id": 42,
          "first_name": "Bernice",
          "last_name": "Blampy",
          "email": "bblampy15@cbslocal.com",
          "gender": "Female",
          "ip_address": "243.85.125.199",
          "country": "Indonesia"
        },
        {
          "id": 43,
          "first_name": "Leshia",
          "last_name": "Curtain",
          "email": "lcurtain16@patch.com",
          "gender": "Female",
          "ip_address": "173.43.203.130",
          "country": "Indonesia"
        },
        {
          "id": 44,
          "first_name": "Burlie",
          "last_name": "Dollen",
          "email": "bdollen17@feedburner.com",
          "gender": "Male",
          "ip_address": "90.186.188.157",
          "country": "Tunisia"
        },
        {
          "id": 45,
          "first_name": "Deny",
          "last_name": "Bunting",
          "email": "dbunting18@amazon.co.uk",
          "gender": "Female",
          "ip_address": "244.65.251.26",
          "country": "France"
        },
        {
          "id": 46,
          "first_name": "Bjorn",
          "last_name": "Adcock",
          "email": "badcock19@hibu.com",
          "gender": "Male",
          "ip_address": "190.75.142.52",
          "country": "France"
        },
        {
          "id": 47,
          "first_name": "Robert",
          "last_name": "Kemer",
          "email": "rkemer1a@wordpress.org",
          "gender": "Male",
          "ip_address": "39.99.42.10",
          "country": "China"
        },
        {
          "id": 48,
          "first_name": "Ossie",
          "last_name": "Curgenuer",
          "email": "ocurgenuer1b@mayoclinic.com",
          "gender": "Male",
          "ip_address": "9.186.182.77",
          "country": "China"
        },
        {
          "id": 49,
          "first_name": "Faber",
          "last_name": "Drissell",
          "email": "fdrissell1c@youtu.be",
          "gender": "Male",
          "ip_address": "143.158.58.93",
          "country": "Paraguay"
        },
        {
          "id": 50,
          "first_name": "Torrance",
          "last_name": "Wilkisson",
          "email": "twilkisson1d@youtube.com",
          "gender": "Male",
          "ip_address": "158.120.193.4",
          "country": "Mexico"
        },
        {
          "id": 51,
          "first_name": "Chiquita",
          "last_name": "Impey",
          "email": "cimpey1e@elpais.com",
          "gender": "Female",
          "ip_address": "29.7.213.216",
          "country": "Tajikistan"
        },
        {
          "id": 52,
          "first_name": "Ester",
          "last_name": "Weale",
          "email": "eweale1f@simplemachines.org",
          "gender": "Genderqueer",
          "ip_address": "5.186.172.134",
          "country": "Nigeria"
        },
        {
          "id": 53,
          "first_name": "Bellina",
          "last_name": "Coning",
          "email": "bconing1g@walmart.com",
          "gender": "Female",
          "ip_address": "251.112.247.236",
          "country": "France"
        },
        {
          "id": 54,
          "first_name": "Vivia",
          "last_name": "Shelf",
          "email": "vshelf1h@1688.com",
          "gender": "Female",
          "ip_address": "253.193.48.195",
          "country": "Russia"
        },
        {
          "id": 55,
          "first_name": "Sheela",
          "last_name": "Chadbourn",
          "email": "schadbourn1i@angelfire.com",
          "gender": "Female",
          "ip_address": "9.207.4.111",
          "country": "Panama"
        },
        {
          "id": 56,
          "first_name": "Warner",
          "last_name": "Duplan",
          "email": "wduplan1j@parallels.com",
          "gender": "Male",
          "ip_address": "92.138.0.5",
          "country": "China"
        },
        {
          "id": 57,
          "first_name": "Tymon",
          "last_name": "Dureden",
          "email": "tdureden1k@alibaba.com",
          "gender": "Male",
          "ip_address": "32.73.56.7",
          "country": "Russia"
        },
        {
          "id": 58,
          "first_name": "Angela",
          "last_name": "Jennions",
          "email": "ajennions1l@exblog.jp",
          "gender": "Female",
          "ip_address": "234.196.93.94",
          "country": "Moldova"
        },
        {
          "id": 59,
          "first_name": "Peadar",
          "last_name": "Hubber",
          "email": "phubber1m@qq.com",
          "gender": "Male",
          "ip_address": "86.46.68.57",
          "country": "Egypt"
        },
        {
          "id": 60,
          "first_name": "Devin",
          "last_name": "Cohan",
          "email": "dcohan1n@cnn.com",
          "gender": "Female",
          "ip_address": "70.187.112.88",
          "country": "Indonesia"
        },
        {
          "id": 61,
          "first_name": "Sherilyn",
          "last_name": "Fones",
          "email": "sfones1o@irs.gov",
          "gender": "Female",
          "ip_address": "184.100.94.2",
          "country": "Poland"
        },
        {
          "id": 62,
          "first_name": "Jonell",
          "last_name": "Walbrook",
          "email": "jwalbrook1p@newsvine.com",
          "gender": "Female",
          "ip_address": "229.107.168.155",
          "country": "China"
        },
        {
          "id": 63,
          "first_name": "Marcellus",
          "last_name": "Firebrace",
          "email": "mfirebrace1q@washingtonpost.com",
          "gender": "Male",
          "ip_address": "248.235.41.150",
          "country": "Indonesia"
        },
        {
          "id": 64,
          "first_name": "Terri-jo",
          "last_name": "Guerrero",
          "email": "tguerrero1r@mtv.com",
          "gender": "Female",
          "ip_address": "233.26.131.20",
          "country": "United States"
        },
        {
          "id": 65,
          "first_name": "Barbi",
          "last_name": "Eydel",
          "email": "beydel1s@drupal.org",
          "gender": "Female",
          "ip_address": "5.167.96.13",
          "country": "China"
        },
        {
          "id": 66,
          "first_name": "Shanie",
          "last_name": "Capner",
          "email": "scapner1t@geocities.jp",
          "gender": "Female",
          "ip_address": "244.156.166.37",
          "country": "Estonia"
        },
        {
          "id": 67,
          "first_name": "Gabriell",
          "last_name": "Harty",
          "email": "gharty1u@wsj.com",
          "gender": "Female",
          "ip_address": "152.37.120.183",
          "country": "Afghanistan"
        },
        {
          "id": 68,
          "first_name": "Kelby",
          "last_name": "Bumby",
          "email": "kbumby1v@t-online.de",
          "gender": "Male",
          "ip_address": "164.45.241.60",
          "country": "China"
        },
        {
          "id": 69,
          "first_name": "Danie",
          "last_name": "Douthwaite",
          "email": "ddouthwaite1w@cyberchimps.com",
          "gender": "Agender",
          "ip_address": "56.169.113.9",
          "country": "Philippines"
        },
        {
          "id": 70,
          "first_name": "Oralle",
          "last_name": "Yell",
          "email": "oyell1x@mozilla.com",
          "gender": "Female",
          "ip_address": "117.149.10.32",
          "country": "Norway"
        },
        {
          "id": 71,
          "first_name": "Jacenta",
          "last_name": "Riccio",
          "email": "jriccio1y@ibm.com",
          "gender": "Female",
          "ip_address": "127.20.42.70",
          "country": "Philippines"
        },
        {
          "id": 72,
          "first_name": "Franchot",
          "last_name": "Blasio",
          "email": "fblasio1z@globo.com",
          "gender": "Male",
          "ip_address": "68.201.40.78",
          "country": "Portugal"
        },
        {
          "id": 73,
          "first_name": "Kristo",
          "last_name": "Mabbott",
          "email": "kmabbott20@java.com",
          "gender": "Male",
          "ip_address": "255.239.17.6",
          "country": "Belize"
        },
        {
          "id": 74,
          "first_name": "Melonie",
          "last_name": "Safe",
          "email": "msafe21@theglobeandmail.com",
          "gender": "Female",
          "ip_address": "193.13.34.72",
          "country": "France"
        },
        {
          "id": 75,
          "first_name": "Margalo",
          "last_name": "Permain",
          "email": "mpermain22@ucoz.ru",
          "gender": "Female",
          "ip_address": "196.252.164.129",
          "country": "Canada"
        },
        {
          "id": 76,
          "first_name": "Gaspard",
          "last_name": "Laverenz",
          "email": "glaverenz23@reddit.com",
          "gender": "Male",
          "ip_address": "37.168.92.183",
          "country": "China"
        },
        {
          "id": 77,
          "first_name": "Jerrold",
          "last_name": "Vennard",
          "email": "jvennard24@timesonline.co.uk",
          "gender": "Male",
          "ip_address": "237.51.153.183",
          "country": "Romania"
        },
        {
          "id": 78,
          "first_name": "Michel",
          "last_name": "Poole",
          "email": "mpoole25@mac.com",
          "gender": "Male",
          "ip_address": "111.150.47.92",
          "country": "United Kingdom"
        },
        {
          "id": 79,
          "first_name": "Jonah",
          "last_name": "Espadero",
          "email": "jespadero26@icq.com",
          "gender": "Male",
          "ip_address": "234.2.49.52",
          "country": "Sweden"
        },
        {
          "id": 80,
          "first_name": "Trudy",
          "last_name": "McArthur",
          "email": "tmcarthur27@multiply.com",
          "gender": "Female",
          "ip_address": "8.140.22.90",
          "country": "Peru"
        },
        {
          "id": 81,
          "first_name": "Gunther",
          "last_name": "Missen",
          "email": "gmissen28@macromedia.com",
          "gender": "Male",
          "ip_address": "198.196.173.69",
          "country": "Peru"
        }
]

const pageNumberInput = document.querySelector("#page-number");


const userCount = document.getElementById("countDiv")
let filteredRows = [...allRows];
let currentPage = 0;
const rowsPerPage = 10;

//Render Table
function renderTable(data) {
  const dataTable = document.getElementById("table-id");
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const paginatedRows = data.slice(startIndex, endIndex);

  let output = "";
  paginatedRows.forEach(row => {
      output += `
          <tr>
              <td>${row.id}</td>
              <td>${row.first_name}</td>
              <td>${row.last_name}</td>
              <td>${row.email}</td>
              <td>${row.gender}</td>
              <td>${row.ip_address}</td>
              <td>${row.country}</td>
          </tr>
      `;
  });
  pageNumberInput.innerHTML = currentPage
  dataTable.querySelector("tbody").innerHTML = output;
}

// Search by input
export function filterAllRows(event) {
  event.preventDefault();
  
  if(!event){
    return;
  }

  const input = document.getElementById("myInput").value.toUpperCase();
  console.log(`Buscando: ${input}`);
  
  filteredRows = allRows.filter(row => {
      return (
          row.first_name.toUpperCase().includes(input) ||
          row.last_name.toUpperCase().includes(input) ||
          row.email.toUpperCase().includes(input) ||
          row.gender.toUpperCase().includes(input) ||
          row.country.toUpperCase().includes(input) 
      );
  });
  
  console.log(`Resultados encontrados: ${filteredRows.length}`);
  currentPage = 0;
  
  const totalFound = filteredRows.length;
  userCount.innerHTML = `<h1 >Se encontraron: <b>${totalFound}</b> coincidencias</h1>`; 
  userCount.style.display = "block"
  // ResetButton
  var button =  document.getElementById("buttonReset");
  button.style.display= "block"

  renderTable(filteredRows);
};

// ResetFilter
export function resetFilter() {
  console.log("Reiniciando filtros...");
  currentPage = 0;

  filteredRows = [...allRows];
  userCount.style.display = "none"

  renderTable(allRows);
}

// Prev paginator 
document.getElementById("prev").addEventListener("click", function () {
  if (currentPage > 0) {
      currentPage--;
      renderTable(filteredRows);
  }
});

// Next Paginator
document.getElementById("next").addEventListener("click", function () {
  if ((currentPage + 1) * rowsPerPage < filteredRows.length) {
      currentPage++;
      renderTable(filteredRows);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  renderTable(filteredRows);
});



export function sortTable(columnIndex) {

  let dir = "asc";
  const tableHeader = document.querySelectorAll(".table-class th")[columnIndex];
  if (tableHeader.dataset.sortDir === "asc") {
    dir = "desc";
    tableHeader.dataset.sortDir = "desc";
  } else {
    dir = "asc";
    tableHeader.dataset.sortDir = "asc";
  }

  filteredRows.sort((a, b) => {
    const valA = Object.values(a)[columnIndex]?.toString().toLowerCase() || "";
    const valB = Object.values(b)[columnIndex]?.toString().toLowerCase() || "";

    if (dir === "asc") {
      return valA > valB ? 1 : valA < valB ? -1 : 0;
    } else {
      return valA < valB ? 1 : valA > valB ? -1 : 0;
    }
  });

  currentPage = 0;
  renderTable(filteredRows);
}

