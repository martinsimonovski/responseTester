$(document).ready(function(){
    $('.page-size').on('click', function(){
        var size = $(this).attr('data-viewport');
        changeSize(size, '.page-container', this);
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
    $('.icon').on('click', function(){
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

function changeSize(size, elem, t){
    var s = size.split('x');
    $(elem).css('width', s[0]);
    $(elem).css('height', s[1]);
    var icon = $(t).find('i');

    //console.log(icon);
    changeIcons(null);
    if ( $(t).attr('data') != 'Widescreen' ){
        $(t).attr('data-viewport', (s[1] + 'x'+ s[0]));
    }
    var container_size = (parseInt(s[1])+50).toString();
    $('.container').css('height', container_size);


    var classes = {
        "1" : "icon-phone-portrait-s-white",
        "2" : "icon-phone-landscape-s-white",
        "3" : "icon-phone-portrait-white",
        "4" : "icon-phone-landscape-white",
        "5" : "icon-tablet-portrait-s-white",
        "6" : "icon-tablet-landscape-s-white",
        "7" : "icon-tablet-portrait-white",
        "8" : "icon-tablet-landscape-white"
    };


    if( icon.hasClass(classes[1]) ){
        icon.removeClass(classes[1]);
        icon.addClass(classes[2]);
    }else if( icon.hasClass(classes[2]) ){
        icon.removeClass(classes[2]);
        icon.addClass(classes[1]);
    }else if( icon.hasClass(classes[3]) ){
        icon.removeClass(classes[3]);
        icon.addClass(classes[4]);
    }else if( icon.hasClass(classes[4]) ){
        icon.removeClass(classes[4]);
        icon.addClass(classes[3]);
    }else if( icon.hasClass(classes[5]) ){
        icon.removeClass(classes[5]);
        icon.addClass(classes[6]);
    }else if( icon.hasClass(classes[6]) ){
        icon.removeClass(classes[6]);
        icon.addClass(classes[5]);
    }else if( icon.hasClass(classes[7]) ){
        icon.removeClass(classes[7]);
        icon.addClass(classes[8]);
    }else if( icon.hasClass(classes[8]) ){
        icon.removeClass(classes[8]);
        icon.addClass(classes[7]);
    }


}

function changeIcons(elem){
    var s = {
        "1" : "icon-phone-portrait-s-white",
        "2" : "icon-phone-landscape-s-white",
        "3" : "icon-phone-portrait-white",
        "4" : "icon-phone-landscape-white",
        "5" : "icon-tablet-portrait-s-white",
        "6" : "icon-tablet-landscape-s-white",
        "7" : "icon-tablet-portrait-white",
        "8" : "icon-tablet-landscape-white"
    };

    $('.pl').each(function(index){

        if( index == 0){
            $(this).find('i').removeClass(s[2]);
            $(this).find('i').addClass(s[1]);
        }else if ( index == 1 ){
            $(this).find('i').removeClass(s[4]);
            $(this).find('i').addClass(s[3]);
        }else if ( index == 2 ){
            $(this).find('i').removeClass(s[6]);
            $(this).find('i').addClass(s[5]);
        }else if ( index == 3 ){
            $(this).find('i').removeClass(s[8]);
            $(this).find('i').addClass(s[7]);
        }

    });
}