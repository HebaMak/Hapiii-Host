/* global $ */

$(function (){
  'use strict';

// deal with tabs 

   // 1- select the item when clicked add function ...
  $('.info-list li').click(function(){

     // 2- the function will add class to clicked item and remove it from other siblings
  	 $(this).addClass('selected').siblings('li').removeClass('selected');
  
     // 3- the hide all divs to show the div related to the clicked item
     $('.info-content div').hide();
   
     // 4- show the div related to the clicked item by its data-class
     $('.' + $(this).data('class')).fadeIn();

  });


  // add the class active to selected li in navbar
  $('.navbar-links li').click( function () {
    $(this).addClass('active').siblings('li').removeClass('active');
  });


  $('.navbar .btn').click(function(){

    $('.navbar-links ul').slideToggle();

  });





  //syncSection

  $(window).scroll(function () {

    //.syncSection class occures in all sections in html
    $('.syncSection').each(function () {

      if($(window).scrollTop() > $(this).offset().top +1) {

        //get the id of current section
        var currentId = $(this).attr('id');

        //remove active from all a in navbar
        $('.navbar li').removeClass('active');

        //search for a that its data value == the current id and add active
        $('.navbar li a[data-scroll= "'+ currentId +'"]').parent().addClass('active');
      }

    });
  });

});





