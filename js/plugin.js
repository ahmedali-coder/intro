$(function ()
{
    "use strict";
    $(".header").animate
    ({
        top:"200px"
    },1000);
    $(".header").animate
    ({
        width:"500px"
    },1000);
    $(".header").animate
    ({
        height:"200px"
    },1000,function()
    {
        $(".header .content").slideDown(700,function()
        {
            $(".header img").fadeIn(500);
        });
    });
});