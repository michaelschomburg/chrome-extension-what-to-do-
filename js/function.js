$(document).ready(function(){
  $(".to-remember").hide();


  $("div.header .what-to-do").click(function(){
    $("div.header .what-to-remember a").removeClass('current');
    $("div.header .what-to-do a").addClass('current');
    $(".to-remember").hide();
    $(".to-do").show();
  })

  $("div.header .what-to-remember").click(function(){
    $("div.header .what-to-do a").removeClass('current');
    $("div.header .what-to-remember a").addClass('current');
    $(".to-do").hide();
    $(".to-remember").show();
  })
})
