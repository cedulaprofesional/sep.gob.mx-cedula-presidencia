// *************** INDEX.HTML ***************

// THIS CODE CONTROLS THE SHOW/HIDE BEHAVIOR OF THE VALIDATION MODULE
const showVal = document.getElementById('showVal'); 

showVal.addEventListener('click', required);
function required()
{
let empt = document.form.folio.value;
if (empt === "")
{
    // alert("No ha ingresado un folio SEP");
    document.getElementById('dialog-box1').style.display = "flex"; 
    return;
}
if (empt.length != 8)
{
    // alert("Ingrese un folio SEP válido");
    document.getElementById('dialog-box2').style.display = "flex"; 
    return;
}
if (empt != document.getElementById("data-schedule").innerHTML)
{   
    
    document.getElementById("loader").style.display = "flex";
    setTimeout(function(){
    document.getElementById("loader").style.display = "none"; }, 2000);
    setTimeout(function(){
    document.getElementById('dialog-box3').style.display = "flex"; }, 3000);
    
    // DELETING VALUES 
    document.getElementById("data-schedule").innerHTML = "";
    document.getElementById("data-name").innerHTML = "";
    document.getElementById("data-gender").innerHTML = "";
    document.getElementById("data-profession").innerHTML = "";
    document.getElementById("data-date").innerHTML = "";       
    document.getElementById("data-university").innerHTML = ""; 
    document.getElementById("data-type").innerHTML = ""; 

    return;
}
    
setTimeout(function(){
result.style.display = "flex";
schedule.style.display = "none" 
detail.style.display = "none"
button2.style.backgroundColor = "white";
button2.style.borderBottom = "none";
button1.style.backgroundColor = "#f6f6f6fe";
button1.style.border = "1px solid rgb(202, 200, 200)";
button3.style.backgroundColor = "#f6f6f6fe";
button3.style.border = "1px solid rgb(202, 200, 200)"; }, 2100); 
};

// IT CLOSES THE DIALOG EVENT BY PUSHING "OK" BUTTON
function pushOk1() { 
    document.getElementById('dialog-box1').style.display = "none"; 
    }
function pushOk2() { 
    document.getElementById('dialog-box2').style.display = "none"; 
    }
function pushOk3() { 
    document.getElementById('dialog-box3').style.display = "none"; 
    }

// ***********************************************************

// IT DELETES THE INPUT VALUE ON ELEMENT CLICK
// const deleteInput = document.getElementById('touch');
// deleteInput.addEventListener('click', inputDeletion);
// function inputDeletion() { 
//     document.getElementById('form-data').value = "";
//     }