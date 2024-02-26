$(document).ready(function(){
    $('.right').on("click",function(){
        $('#Car-01').animate({left:'+=300px'},500);
        $("#Car-01").attr("src","rt.jpg")
    }),
    
    $('.left').on("click",function(){
    $('#Car-01').animate({left: '-=300px'},500);
    $("#Car-01").attr("src","lf.jpg")
    
}); 

});









    
    
      