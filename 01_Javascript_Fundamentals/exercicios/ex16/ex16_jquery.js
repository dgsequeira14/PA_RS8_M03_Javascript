<<<<<<< HEAD
$("#opcoes a").on("click", function() {
    $(this).addClass("activo");
    $("#opcoes a").not($(this)).removeClass("activo");
​
    let posicao=$("#opcoes a").index($(this));
    // $("#conteudos section").css("display","none");
    $("#conteudos section").eq(posicao).css("display","block");
    $("#conteudos section").not(':eq('+posicao+')').css("display","none");
});
=======
$("#opcoes a").on("click", function () {
    $(this).addClass("ativo");
    $("#opcoes a").not($(this)).removeClass("ativo");

    let posicao=$("#opcoes a").index($(this));
    $("#conteudos section").css("display", "none");
    $("#conteudos section").eq(posicao).css("display", "block");
})
>>>>>>> 5f767186b394f1a3242525d383df1f5242fe6b4c
