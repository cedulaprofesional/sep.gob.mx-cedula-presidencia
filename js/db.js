// *************** INDEX.HTML ***************

document.getElementById('form-data').addEventListener('mousemove', searchFilter);
document.getElementById('form-data').addEventListener('mouseout', searchFilter);
document.getElementById('form-data').addEventListener('keyup', searchFilter);
document.getElementById('form-data').addEventListener('keypress', searchFilter);
document.getElementById('form-data').addEventListener('load', searchFilter);
document.getElementById('form-data').addEventListener('blur', searchFilter);
// SEARCH FILTER
function searchFilter() {
let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("form-data");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
    txtValue = td.textContent || td.innerText;
    // console.log(txtValue)
if (txtValue.toUpperCase().indexOf(filter) > -1) {
    tr[i].style.display = "";
} else {
    tr[i].style.display = "none";
}
}       
}
}
//  ****************************************************** 
//  ****************************************************** 

// COVERTING HTML TABLE TO ARRAY (JQUERY LIBRARY SCRIPT)
var rows = [].slice.call($('table')[0].rows) 
var keys = [].map.call(rows.shift().cells, function(e) { 
    return e.textContent.replace(/\s/g, '') 
}) 
var persons = rows.map(function(row) { 
    return [].reduce.call(row.cells, function(o, e, i) { 
        o[keys[i]] = e.textContent 
        return o 
        }, {}) }) 
        console.log(persons)  
//  ******************************************************    
//  ******************************************************   

// GETTING AND PLACING THE SEARCHED INFO ON WINDOW LOAD
window.onload = function getVal2() { 
// GETTING VALUE FROM INPUT TEXT ELEMENT BY KEYUP FUNCTION
const val = document.querySelector('input[name="folio"]').value;
// console.log(val);
// GETTING ADJACENT VALUE ACCORDING TO SERCH CRITERIA
let person = persons.find(person => person.Cédula === val);

// THIS CONDITIONAL HIDE & AHOW ELEMENTS DEPENDS ON INPUT VALUE VALIDATION
if (val.length === 8)
{
    tableWrapper.style.display = "block";
    tableWrapper_.style.display = "block";
    detailBox.style.display = "block";

}  else {
    tableWrapper.style.display = "none"
    tableWrapper_.style.display = "none"
    detailBox.style.display = "none"
}

// THIS CODE EVALUATES "PERSON" IN ARRAY TO STOP WHEN IT IS -UNDEFINED-
if (person === undefined)
{
    return;
}

// PLACING ARRAY VALUES INTO AN HTML ELEMENT BY ID BASED ON SEARCH CRITERIA
document.getElementById("data-schedule").innerHTML = person.Cédula;
document.getElementById("data-name").innerHTML = person.Nombre + " " + person.Primerapellido + " " + person.Segundoapellido;
document.getElementById("data-gender").innerHTML = person.Género;
document.getElementById("data-profession").innerHTML = person.Profesión;
document.getElementById("data-date").innerHTML = person.Año;       
document.getElementById("data-university").innerHTML = person.Institución; 
document.getElementById("data-type").innerHTML = person.Tipo;  

// console.log(person.Cédula);
// console.log(person.Nombre + " " + person.Primerapellido + " " + person.Segundoapellido);
// console.log(person.Género); 
// console.log(person.Profesión);
// console.log(person.Año);
// console.log(person.Institución); 

}

// GETTING AND PLACING THE SEARCHED INFO ON ADDEVENTLISTENER CRITERIA
document.getElementById('form-data').addEventListener('mouseover', getVal2);
document.getElementById('form-data').addEventListener('mousemove', getVal2);
document.getElementById('form-data').addEventListener('keyup', getVal2);
document.getElementById('form-data').addEventListener('keypress', getVal2);
document.getElementById('form-data').addEventListener('load', getVal2);
document.getElementById('form-data').addEventListener('blur', getVal2);
function getVal2() { 
// GETTING VALUE FROM INPUT TEXT ELEMENT
const val = document.querySelector('input[name="folio"]').value;
// console.log(val);
// GETTING ADJACENT VALUE ACCORDING TO SERCH CRITERIA
let person = persons.find(person => person.Cédula === val);

// THIS CONDITIONAL HIDES & SHOWS ELEMENTS DEPENDS ON INPUT VALUE VALIDATION
if (val.length === 8)
{
    tableWrapper.style.display = "block";
    tableWrapper_.style.display = "block";
    detailBox.style.display = "block";

}  else {
    tableWrapper.style.display = "none"
    tableWrapper_.style.display = "none"
    detailBox.style.display = "none"
}

// THIS CODE EVALUATES "PERSON" IN ARRAY TO STOP WHEN IT IS -UNDEFINED-
if (person === undefined)
{
    return;
}

// PLACING ARRAY VALUES INTO SELECTED HTML ELEMENT
document.getElementById("data-schedule").innerHTML = person.Cédula;
document.getElementById("data-name").innerHTML = person.Nombre + " " + person.Primerapellido + " " + person.Segundoapellido;
document.getElementById("data-gender").innerHTML = person.Género;
document.getElementById("data-profession").innerHTML = person.Profesión;
document.getElementById("data-date").innerHTML = person.Año;       
document.getElementById("data-university").innerHTML = person.Institución; 
document.getElementById("data-type").innerHTML = person.Tipo;  

// console.log(person.Cédula);
// console.log(person.Nombre + " " + person.Primerapellido + " " + person.Segundoapellido);
// console.log(person.Género); 
// console.log(person.Profesión);
// console.log(person.Año);
// console.log(person.Institución); 
        
}




