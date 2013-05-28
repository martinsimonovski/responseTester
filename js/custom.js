$(document).ready(function(){
    $('.page-size').on('click', function(){
        var size = $(this).attr('data-viewport');
        changeSize(size, '.page-container');
    });
    $('.page-size-full').on('click', function(){
        $('.page-container').css('width', '100%');
        $('.page-container').css('height', '100%');
    });

    $('.custom-page-size').on('click', function(){
         $('.custom-size-container').toggleClass('visible-container');
    });

    $('.icon').on('mouseover', function(){
        var device = $(this).parent().first().attr('data');
        var size = $(this).parent().first().attr('data-viewport');
        $('.icon-description').text( device + ' "' + size + '"' );
    });

    $('.load-page').on('click', function(){
        var pl = $('.page-link').val();
        var http = $('.add_http');

        if ( http.hasClass( 'http_active' ) ){
            $('.page').attr('src',( 'http://' + pl));
        }else{
            $('.page').attr('src', pl);
        }
    });

    $('.add_http').on('click', function(){
        $(this).toggleClass( 'http_active' );
    });


    $('.custom-btn').on('click', function(){
        var size = $(this).attr('data-viewport');
        var w = $('.custom-width').val();
        var h = $('.custom-height').val();

        $('.page-container').css('width', w);
        $('.page-container').css('height', h);
        var container_size = (parseInt(h)+50).toString();
        $('.container').css('height', container_size);

        $('.icon-description').text('Custom "' + w + 'x'+h+'"' );
        $('.custom-size-container').removeClass('visible-container');
    });

    $('.custom-size-container input').on('keypress', function(e){
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            $('#letters-error-add').removeClass('letters-display');
            return false;
        }
    });

    $('.page-link').keypress(function(e) {
        if (e.which == 13) {
            var pl = $(this).val();
            var http = $('.add_http');

            if ( http.hasClass( 'http_active' ) ){
                $('.page').attr('src',( 'http://' + pl));
            }else{
                $('.page').attr('src', pl);
            }
        }
    });
});

function changeSize(size, elem){
    var s = size.split('x');
    $(elem).css('width', s[0]);
    $(elem).css('height', s[1]);
    var container_size = (parseInt(s[1])+50).toString();
    $('.container').css('height', container_size);

}