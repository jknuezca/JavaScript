btnFind.onclick = findName;

function findName() {
  fetch("https://api.nationalize.io/" + "?name=" + txtName.value)
  .then(response => response.json())
  .then(data => showResult(data));
}

function showResult(data) {
  const countries = data.country;
  let ol = document.createElement("ol");
  
  for (let country of countries) {
    let li = document.createElement("li");
    li.innerText = regionName.of(country.country_id);
    ol.appendChild(li);
  }
  divResult.innerHTML = "";
  divResult.append(ol);
}

const regionName = new Intl.DisplayNames(['en'], {type: 'region'});