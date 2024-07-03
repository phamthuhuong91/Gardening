class info {
  constructor (name, bontanical, type, sun, soil, bloom, color) {
    this.name = name;
    this.bontanical = bontanical;
    this.type = type;
    this.sun = sun;
    this.soil = soil;
    this.bloom = bloom;
    this.color = color;
    this.source = `assets/${name}.jpg`;
  }
}

let mint = new info ("Mint","Mentha","Herb","Full Sun");
let oregano = new info ("Oregano","Origanum","Herb","Full Sun",[],"Summer","Pink, Purple, White");
let tomato = new info ("Tomato","Solanum lycopersicum","Vetgetatble","Full Sun","Acidic to Neutral","Summer","Yellow")
let rose = new info("Rose","Rosa spp.","Flower","Full Sun","Slightly Acidic to Neutral","Spring, Summer, Fall","Varies");

data1 = [mint, oregano,tomato,rose];
data2 = ["mint","oregano","tomato","rose"];

function myFunction1() {
  let x = document.getElementById("herbs").value;
  
  //Clear previous text
  document.getElementById("col1").innerHTML='';
  document.getElementById("note1").innerHTML = '';
  
  i = data2.indexOf(x);
  console.log(i);

  // Plant summary
  let tag = document.createElement("div");
  tag.setAttribute("id",data1[i].name);
  
  let bontanical = document.createElement("p");
  bontanical.textContent = "Bontanical Name: "+ data1[i].bontanical;
  tag.appendChild(bontanical);

  let sun = document.createElement("p");
  sun.textContent = "Sun Exposure: " + data1[i].sun;
  tag.appendChild(sun);

  if (!(data1[i].soil === undefined)) {
    let soil = document.createElement("p");
    soil.textContent = "Soil Condition: " + data1[i].soil;
    tag.appendChild(soil);
  }

  if (!(data1[i].bloom === undefined)) {
    let bloom = document.createElement("p");
    bloom.textContent = "Bloom Time: " + data1[i].bloom;
    tag.appendChild(bloom);}

  if (!(data1[i].color === undefined)) {
    let color = document.createElement("p");
    color.textContent = "Color: " + data1[i].color;
    tag.appendChild(color);} 

  var img = document.createElement("img");
  img.src = data1[i].source;
  img.width = 300;
  img.alt = data1[i].name;
  tag.appendChild(img);

  // This next line will just add it to the <p id=demo> tag
  document.getElementById("col1").appendChild(tag);
}

function myFunction2() {
  let x = document.getElementById("veggie").value;
  
  //Clear previous text
  document.getElementById("col2").innerHTML='';
  document.getElementById("note2").innerHTML = '';
  
  i = data2.indexOf(x);
  console.log(i);

  // Plant summary
  let tag = document.createElement("div");
  tag.setAttribute("id",data1[i].name);
  
  let bontanical = document.createElement("p");
  bontanical.textContent = "Bontanical Name: " + data1[i].bontanical;
  tag.appendChild(bontanical);

  let sun = document.createElement("p");
  sun.textContent = "Sun Exposure: " + data1[i].sun;
  tag.appendChild(sun);

  if (!(data1[i].soil === undefined)) {
    let soil = document.createElement("p");
    soil.textContent = "Soil Condition: " + data1[i].soil;
    tag.appendChild(soil);
  }

  if (!(data1[i].bloom === undefined)) {
    let bloom = document.createElement("p");
    bloom.textContent = "Bloom Time: " + data1[i].bloom;
    tag.appendChild(bloom);}

  if (!(data1[i].color === undefined)) {
    let color = document.createElement("p");
    color.textContent = "Color: " + data1[i].color;
    tag.appendChild(color);} 

  var img = document.createElement("img");
  img.src = data1[i].source;
  img.width = 300;
  img.alt = data1[i].name;
  tag.appendChild(img);

  // This next line will just add it to the <p id=demo> tag
  document.getElementById("col2").appendChild(tag);
}

function myFunction3() {
  let x = document.getElementById("flower").value;
  
  //Clear previous text
  document.getElementById("col3").innerHTML='';
  document.getElementById("note3").innerHTML = '';
  
  i = data2.indexOf(x);
  console.log(i);

  // Plant summary
  let tag = document.createElement("div");
  tag.setAttribute("id",data1[i].name);
  
  let bontanical = document.createElement("p");
  bontanical.textContent = "Bontanical Name: " + data1[i].bontanical;
  tag.appendChild(bontanical);

  let sun = document.createElement("p");
  sun.textContent = "Sun Exposure: " + data1[i].sun;
  tag.appendChild(sun);

  if (!(data1[i].soil === undefined)) {
    let soil = document.createElement("p");
    soil.textContent = "Soil Condition: " + data1[i].soil;
    tag.appendChild(soil);
  }

  if (!(data1[i].bloom === undefined)) {
    let bloom = document.createElement("p");
    bloom.textContent = "Bloom Time: " + data1[i].bloom;
    tag.appendChild(bloom);}

  if (!(data1[i].color === undefined)) {
    let color = document.createElement("p");
    color.textContent = "Color: " + data1[i].color;
    tag.appendChild(color);} 

  var img = document.createElement("img");
  img.src = data1[i].source;
  img.width = 300;
  img.alt = data1[i].name;
  tag.appendChild(img);

  // This next line will just add it to the <p id=demo> tag
  document.getElementById("col3").appendChild(tag);
}