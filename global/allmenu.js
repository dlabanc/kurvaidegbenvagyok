$(function(){
    $(".openbtn").on("click",openNav);
    $(".closebtn").on("click",closeNav);

    function openNav() {
        document.getElementById("mySidenav").style.width = "240px";
        $(".container").css("opacity","0.3");
        
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
        $(".container").css("opacity","1");
      }
});