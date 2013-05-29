<!DOCTYPE html>
<?php //dragar http://jsfiddle.net/gaby/Bek9L/186/ ?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Responsive tester</title>
        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
        <link href="css/normalize.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet">
        <script  src="js/jquery-1.10.0.js"></script>
        <script  src="js/custom.js"></script>
    </head>
    <body>
        <header>
            <ul>
                <li><a href="#" class="page-size-full" data-viewport="100%x100%" data="Full screen"><i class="icon icon-full-size-white icon-transparent"></i></a></li>
                <li><a href="#" class="page-size pl" data-viewport="320x480" data-index="0" data="Apple iPhone"><i class="icon icon-phone-portrait-s-white icon-transparent"></i></a></li>
                <li><a href="#" class="page-size pl" data-viewport="320x568" data-index="1" data="Apple iPhone 5"><i class="icon icon-phone-portrait-white icon-transparent"></i></a></li>
                <li><a href="#" class="page-size pl" data-viewport="600x800" data-index="2" data="Small tablet"><i class="icon icon-tablet-portrait-s-white icon-transparent"></i></a></li>
                <li><a href="#" class="page-size pl" data-viewport="768x1024" data-index="3" data="Tablet"><i class="icon icon-tablet-portrait-white icon-transparent"></i></a></li>
                <li><a href="#" class="page-size" data-viewport="1280x800" data="Widescreen"><i class="icon icon-widescreen-white icon-transparent"></i></a></li>
                <li><a href="#" class="custom-page-size" data-viewport="" data="Custom"><i class="icon icon-plus-white icon-transparent"></i></a></li>
            </ul>

            <p class="icon-description">Apple iPhone "320x480"</p>
            <button class="add_http http_active" value="http://">http://</button>
            <input type="text" class="page-link" value="" placeholder="Insert page link..."/>
            <button class="load-page btn" value="Load Page">Load page</button>
        </header>
        <div class="custom-size-container">
              <input type="text" class="custom-width" value="" /><span>x</span>
              <input type="text" class="custom-height" value="" />
              <button class="custom-btn"><i class="icon-crop-white icon-transparent"></i></button>
        </div>
        <div class="container">
                <div class="page-container">
                    <iframe class="page" src=""></iframe>
                </div>
                <!--<div class="dragbar"></div>-->
        </div>


    </body>
</html>