// *************** INDEX.HTML ***************

// THIS CODE CONTROLS THE BEHAVIOR OF INFO TABS (BUTTONS) 
// AND OTHER SELECTED HTML ELEMENTS 
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const tableWrapper = document.getElementById('tablewrapper');
const tableWrapper_ = document.getElementById('tablewrapper_');
const scheduleTag = document.getElementById('scheduletag');
const detailBox = document.getElementById('detailwrapper');
    
button1.addEventListener('click', searchBtn1);
function searchBtn1() {
    schedule.style.display = "flex";
    result.style.display = "none";
    detail.style.display = "none";
    button1.style.backgroundColor = "white";
    button1.style.borderBottom = "none";
    button2.style.backgroundColor = "#f6f6f6fe";
    button2.style.border = "1px solid rgb(202, 200, 200)";
    button3.style.backgroundColor = "#f6f6f6fe";
    button3.style.border = "1px solid rgb(202, 200, 200)";
};

button2.addEventListener('click', searchBtn2);
function searchBtn2() {
let empt = document.form.folio.value;
if (empt.length === 8 && empt != document.getElementById("data-schedule").innerHTML)
{
    result.style.display = "flex";
    tableWrapper.style.display = "none";
    tableWrapper_.style.display = "none";
    detailBox.style.display = "none";
    schedule.style.display = "none"; 
    detail.style.display = "none";
    button2.style.backgroundColor = "white";
    button2.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button3.style.backgroundColor = "#f6f6f6fe";
    button3.style.border = "1px solid rgb(202, 200, 200)"; 
    return;

} else if (empt.length === 8) {
setTimeout(function(){
    result.style.display = "flex";
    schedule.style.display = "none";
    detail.style.display = "none";
    button2.style.backgroundColor = "white";
    button2.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button3.style.backgroundColor = "#f6f6f6fe";
    button3.style.border = "1px solid rgb(202, 200, 200)"; }, 1100);
    dialogBox.style.display = "flex";
    setTimeout(function(){
    dialogBox.style.display = "none"; }, 1000);
    return;
}
    result.style.display = "flex";
    schedule.style.display = "none" ;
    detail.style.display = "none";
    button2.style.backgroundColor = "white";
    button2.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button3.style.backgroundColor = "#f6f6f6fe";
    button3.style.border = "1px solid rgb(202, 200, 200)"; 
};

button3.addEventListener('click', searchBtn3);
function searchBtn3() {
let empt = document.form.folio.value;
if (empt.length === 8 && empt != document.getElementById("data-schedule").innerHTML)
{
    detail.style.display = "flex"
    detailBox.style.display = "none";
    result.style.display = "none";
    schedule.style.display = "none"; 
    tableWrapper.style.display = "none"
    tableWrapper_.style.display = "none"
    button3.style.backgroundColor = "white";
    button3.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button2.style.backgroundColor = "#f6f6f6fe";
    button2.style.border = "1px solid rgb(202, 200, 200)";
    return;

} else if (empt.length === 8) {
setTimeout(function(){
    detail.style.display = "flex";
    schedule.style.display = "none";
    result.style.display = "none";
    button3.style.backgroundColor = "white";
    button3.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button2.style.backgroundColor = "#f6f6f6fe";
    button2.style.border = "1px solid rgb(202, 200, 200)"; }, 1100);
    dialogBox.style.display = "flex";
    setTimeout(function(){
    dialogBox.style.display = "none"; }, 1000);
    return;
}
    detail.style.display = "flex";
    schedule.style.display = "none";
    result.style.display = "none";
    button3.style.backgroundColor = "white";
    button3.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button2.style.backgroundColor = "#f6f6f6fe";
    button2.style.border = "1px solid rgb(202, 200, 200)";
};

tableWrapper.addEventListener('click', redirecting);
function redirecting() {
    setTimeout(function(){
    result.style.display = "none";
    schedule.style.display = "none";
    detail.style.display = "flex";
    button3.style.backgroundColor = "white";
    button3.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button2.style.backgroundColor = "#f6f6f6fe";
    button2.style.border = "1px solid rgb(202, 200, 200)"; }, 1100);
    dialogBox.style.display = "flex";
    setTimeout(function(){
    dialogBox.style.display = "none"; }, 1000);
    return;
};

scheduleTag.addEventListener('click', redirecting_);
function redirecting_() {
    setTimeout(function(){
    result.style.display = "flex";
    schedule.style.display = "none";
    detail.style.display = "none";
    button2.style.backgroundColor = "white";
    button2.style.borderBottom = "none";
    button1.style.backgroundColor = "#f6f6f6fe";
    button1.style.border = "1px solid rgb(202, 200, 200)";
    button3.style.backgroundColor = "#f6f6f6fe";
    button3.style.border = "1px solid rgb(202, 200, 200)"; }, 1100);
    dialogBox.style.display = "flex";
    setTimeout(function(){
    dialogBox.style.display = "none"; }, 1000);
    return;
};