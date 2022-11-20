// *************** INDEX.HTML ***************

// THIS JAVASCRIPT CODE IS COMBINED WITH JQUERY TO IMPROVE THE HIDE/SHOW BEHAVIOR
const showBox1 = document.getElementById('start-info')
const dbox1 = document.getElementById('dropdown-box1')
const showBox2 = document.getElementById('search-info')
const dbox2 = document.getElementById('dropdown-box2')

showBox1.addEventListener('click', showInfo1);
function showInfo1() {
    if (dbox1.style.display === "block") 
{   dbox2.style.display = "none"
} else {
    dbox2.style.display = "none"
}
}

showBox2.addEventListener('click', showInfo2);
function showInfo2() {
    if (dbox2.style.display === "block") 
{   dbox1.style.display = "none"
} else {
    dbox1.style.display = "none"
}
}

// THIS JQUERY CODE HELPS TO SHOW/HIDE HTML ELEMENT TO CREATE A DROPDOWN MENU
$(document).ready(function(){
    // Show hide popover
    $(".block-wrapper").click(function(){
        $(this).find(".dropdown-box").slideToggle("slow");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".block-wrapper");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-box").slideUp("slow");
    }            
});

// THIS JQUERY CODE HELPS TO SHOW/HIDE HTML ELEMENT TO CREATE A DROPDOWN MENU
$(document).ready(function(){
    // Show hide popover
    $(".block-wrapper_").click(function(){
        $(this).find(".dropdown-box_").slideToggle("slow");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".block-wrapper_");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-box_").slideUp("slow");
    }            
});