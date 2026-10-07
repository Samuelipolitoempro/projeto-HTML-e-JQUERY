$(function () {
    $('#sanfona .conteudo:not(:first)').hide();

    $('#sanfona h2').click(function () {
        var conteudo = $(this).next('.conteudo');
        var icone = $(this).find('.icone');
        if (conteudo.is(':visible')) {
            conteudo.slideUp();
            icone.html('+');
        } else {
            $('#sanfona .conteudo').slideUp();
            $('#sanfona .icone').text('+');
            conteudo.slideDown();
            icone.text('-');
        }
    })

    $('#acoes-tabela input').keyup(function () {
        var valor = $(this).val().toLowerCase();

        $('#tabela-corpo tr').each(function () {
            var nome = $(this).text().toLowerCase()
            if (nome.indexOf(valor) != -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })


    $('#slide img:first').addClass('ativo').show();
    $('#proximo').click(function () {


        if ($('.ativo').next('img').length != 0) {
            $('.ativo').hide().removeClass('ativo').next('img').show().addClass('ativo');
        } else {
            $('.ativo').hide().removeClass('ativo');
            $('#slide img:first').show().addClass('ativo');
        }
        var texto = $('.ativo').attr('alt');
        $('#slide p').html(texto);
    })

    $('#anterior').click(function () {
        if ($('.ativo').prev('img').length != 0) {
            $('.ativo').hide().removeClass('ativo').prev('img').show().addClass('ativo');
        } else {
            $('.ativo').hide().removeClass('ativo');
            $('#slide img:last').show().addClass('ativo');
        }
        var texto = $('.ativo').attr('alt');
        $('#slide p').html(texto);
    })


});
