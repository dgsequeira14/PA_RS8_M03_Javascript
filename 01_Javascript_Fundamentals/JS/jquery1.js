$("#accordion > h2").on("click", function (){
    // $(this).next().show();
    // if ($(this).next().is(":visible")){
    //     $(this).next().hide();
    // } else {
    //     $(this).next().show();
    // }
    $("#accordion > h2").not($(this)).next().slideUp();
    $(this).next().slideToggle("slow");

})