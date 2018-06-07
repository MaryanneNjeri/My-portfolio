$(document).ready(function() {
  $( '.menu-btn' ).click(function(){
  $('.responsive-menu').toggleClass('expand')
});
});
	function openPage(pageName,elmnt,color) {
    var i,tabcontent,tablinks;
    tabcontent =
    document.getElementsByClassName("tabcontent");
    for (i=0;i< tabcontent.length;i++) {
      tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for (i=0; i< tablinks.length; i++){
      tablinks[i].style.backgroundColor="";
    }
    document.getElementById(pageName).style.display="block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();
console.error("Error!!");
console.log("hello world");
