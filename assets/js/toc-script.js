$(document).ready(function () {

    y=$(window).width();
    x=$(".toc-bar").position();

    if( y > 800 && x.left == 0 ) { 
    $(".flip").css({"color":"orange"});
    };

    $(window).resize(function() {

    y=$(window).width();
    x=$(".toc-bar").position();

    if( y <= 800 && x.left == 0 ) { 
    $(".toc-bar").animate({left:'-390px'});
    $(".wrapper").animate({left:'10px'});
    $(".flip").css({"color":" #424242"});
    };

    if( y > 800 && x.left == -390 ) { 
    $(".toc-bar").animate({left:'0px'});
    $(".wrapper").animate({left:'365px'});
    $(".flip").css({"color":"orange"});
    };

    });

    $(".toc-bar").click(function () {

    y=$(window).width();
    x=$(".toc-bar").position();

    if( y <= 800 && x.left == 0 ) { 
    $(".toc-bar").animate({left:'-390px'});
    $(".wrapper").animate({left:'10px'});
    $(".flip").css({"color":" #424242"});
    };

    });

    $(".wrapper").click(function () {

    y=$(window).width();
    x=$(".toc-bar").position();

    if( y <= 800 && x.left == 0 ) { 
    $(".toc-bar").animate({left:'-390px'});
    $(".flip").css({"color":" #424242"});
    };

    });

    $(".flip").click(function () {

    y=$(window).width();
    x=$(".toc-bar").position();

    if( y <= 800 && x.left == 0 ) { 
    $(".toc-bar").animate({left:'-390px'});
    $(".wrapper").animate({left:'10px'});
    $(".flip").css({"color":" #424242"});
    };

    if( y <= 800 && x.left == -390 ) { 
    $(".toc-bar").animate({left:'0px'});
    $(".flip").css({"color":"orange"});
    };

    if( y > 800 && x.left == -390 ) { 
    $(".toc-bar").animate({left:'0px'});
    $(".wrapper").animate({left:'365px'});
    $(".flip").css({"color":"orange"});
    };

    if( y > 800 && x.left == 0 ) { 
    $(".toc-bar").animate({left:'-390px'});
    $(".wrapper").animate({left:'45px'});
    $(".flip").css({"color":" #424242"});
    };

    });

});