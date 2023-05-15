$("#opcoes a").on("click", function () {
    $(this).addClass("ativo");
    $("#opcoes a").not($(this)).removeClass("ativo");

    let posicao=$("#opcoes a").index($(this));
    $("#conteudos section").css("display", "none");
    $("#conteudos section").eq(posicao).css("display", "block");
})