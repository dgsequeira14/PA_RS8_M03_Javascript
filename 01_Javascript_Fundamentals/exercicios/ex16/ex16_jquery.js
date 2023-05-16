$("#opcoes a").on("click", function() {
    $(this).addClass("activo");
    $("#opcoes a").not($(this)).removeClass("activo");
​
    let posicao=$("#opcoes a").index($(this));
    // $("#conteudos section").css("display","none");
    $("#conteudos section").eq(posicao).css("display","block");
    $("#conteudos section").not(':eq('+posicao+')').css("display","none");
});