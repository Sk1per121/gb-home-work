$(function() {
    $('.filter_group').click(function() {
        $(this).toggleClass('active');
    });

    $('.filter_title').click(function() {
        $('.filter').toggleClass('active');
    });

    $('.img_menu, .menu_close .cross').click(function() {
        $('.header_menu').toggleClass('active');
    });

    $('.pag_page_numb').click(function() {
        $('.pag_page_numb').removeClass('active');
        $(this).toggleClass('active');
    });
})