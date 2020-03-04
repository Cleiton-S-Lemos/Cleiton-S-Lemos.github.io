'use strict'

// Não é obrigatória quando for no final, somente no início    /*  //Função inicializadora
    //$(document).ready(function(){

      $('.slider').slick({
         autoplay: true,
         autoplaySpeed: 5000,
         arrows: false,
         dots: true
        });
    //});
    
    //Ativação do JQuery Mask
    $("#telefone").mask("(00) 0000-0000");
    $("#celular").mask("(00) 00000-0000");


/* Script para o contador de caracteres */
var spanMaximo = $("#maximo")
var bCaracteres = $("#caracteres")
var textMensagem = $("#mensagem")

//Determinando a qtdo de caracteres
var quantidade = 300

//Evento para detectar entrada (digitação) no campo
textMensagem.on("input", function(){
    //capiturar em tempo real
    //console.log(textMensagem.val())

    var conteudo = textMensagem.val();

    var contagem = quantidade - conteudo.length;

    console.log(contagem);
    
    //Exibindo a contagem no HTML
    bCaracteres.text(contagem);

    /* Se a contagemchegar no zero exibir o span em vermelho. Caso contrério, exibir em preto */
    if(contagem == 0){
        spanMaximo.css("color", "red");
    } else {
        spanMaximo.css("color", "black");
    }

});
