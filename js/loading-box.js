// *************** INDEX.HTML ***************

// THIS CODE CONTROLS THE BEHAVIOR OF SEARCH DIALOG
const dialogBox = document.getElementById('loader'); 
showVal.addEventListener('click', load);
function load() {

    let empt = document.form.folio.value;
    if (empt === "")
    {
        return;
    }
    if (empt.length != 8)
    {
        return;
    }
    if (empt != document.getElementById("data-schedule").innerHTML)
    {
        return;
    }
    
    dialogBox.style.display = "flex";
    setTimeout(function(){
    dialogBox.style.display = "none"; }, 2000);
    
    }
 



  