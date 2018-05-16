/* global $ */

//element selectors
// $('h3').css({border: '3px solid blue'});

//class selectors
// $('.wrapper').css({border: '3px solid red'});

//id selectors
// $('#clients').css({border: '3px solid yellow'});

// first and last
// $('header nav li:first').css({border: '2px solid red'});
// $('header nav li:last').css({border: '2px solid red'});

// first-child and last-child
// $('#contact ul:first-child').css({border: '2px solid red'});
// $('#contact ul:last-child').css({border: '2px solid red'});

//even and odd
// $('header nav li:even').css({border: '2px solid blue'});
// $('header nav li:odd').css({border: '2px solid yellow'});

//not 
// $('section:not("#contact")').css({border: '2px solid green'});

//less than greater than
// $('#social-nav li:lt(3)').css({border: '2px solid blue'});
// $('#social-nav li:gt(2)').css({border: '2px solid blue'});

//attribute filters
// $('div[class]').css({border: '2px solid pink'});

// $('img[alt=quote]').css({border: '2px solid purple'});

// -----------

// next
// $('#contact-methods').next().css({border: '3px solid red'});

// prev
// $('#social-nav').prev().css({border: '3px solid blue'});

// parent
// $('.banner-title').parent().css({border: '3px solid pink'}); //first parent
// $('.banner-title').parents().css({border: '3px solid pink'}); //all parents

// children
// $('#social-nav').children().css({border: '3px solid green'});

// find
// $('#contact').find('.facebook').css({border: '3px solid purple'});

// closest
// $('#social-nav').closest('.wrapper').css({border: '3px solid orange'});

// ----------

// $('#contact-methods').css({border: '2px solid red'})
// .next().css({border: '2px solid green'})
// .closest('section').css({border: '2px solid blue'});

// ----------

var tweet = "<div style ='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs. Cheese</div>"

// $('#tweets div').append(tweet);

// $('#tweets div').prepend(tweet);

// $('#tweets div p').before(tweet);

// $('#tweets div p').after(tweet);

// $('#tweets div').html(tweet);

// $('#tweets div p').text(tweet);



// Adding & Changing Content

// .append() adds content to bottom of the element
// .prepend() adds content to top of the element
// .before() adds content before element
// .after() adds content after element
// .html() changes the whole html of the element
// .text() changes the text of an element

//----------

// $('section').wrap('<div>');
// $('section').unwrap();
// $('section').wrapAll('<div>');


// .wrap() //wraps all matched elements individually
// .unwrap() //unwraps all matched elements
// .wrapAll() //wraps all elements combined with one single element

var wrapper = "<div class='wrapper'>";
var button = $('.button');
var wrapped = true;

button[0].onclick = function(){
    
  if(wrapped){
      $('section').unwrap();
      wrapped = false;
      button.text('Wrap');
  } else {
      $('section').wrapAll(wrapper);
      wrapped = true;
      button.text('Unwrap');

  } 
};

//----------

// $('.button').empty();

// $('#points-of-sale').empty();

// $('.button').remove();

// $('#contact img').remove();


// .empty() //empties the inner HTML of an element
// .remove() //removes the element completely


//----------

// $('#contact img').removeAttr('alt');

// $('#contact img').attr('alt', 'location');

// console.log($('#contact img').attr('alt'));

// .removeAttr() //removes attribute completely
// .attr() //can read or set any attribute

//----------

// console.log($('#social-nav').css('position'));

// console.log($('#social-nav').css('top'));

// $('#social-nav').css('top', '-200px').css('left', '100px');

// $('#social-nav').css({
//     'top': '-400px',
//     'left': '150px',
//     'opacity': '0.5',
//     'border-top': '4px solid red'
// });

// ----------

// $('header .wrapper').removeClass('wrapper');
// $('header > div').removeClass('wrapper');

// .removeClass() // removes a class from matched element(s)
// .addClass() // adds a class to the matched elements
// .toggleClass() // toggles the class of the matched elements on and off

// var button = $('#lead-banner a');

// button[0].onclick = function(){
  
//   $('#points-of-sale').toggleClass('open');
//   return false;
  
// };

// ----------


// var myLis = $('#points-of-sale li');

// myLis.on('click', function(){
  
//   $(this).css({'background': 'pink'});
  
//   myLis.off('click');
  
// });


// .on() //binds an event to matched element(s)
// .off() //unbinds event from matched element(s)

// ----------

// $('#lead-banner').click(function(){
//   alert('You clicked me')
// });

// $('#lead-banner').dblclick(function(){
//   alert('You double-clicked me');
//   $('#lead-banner').off('dblclick');
// });


// ----------

// $(document).ready(function(){
  
// });

// $(function(){ //shorthand version of the above
  
// });

// $(window).on('load', function(){ //better when images need to be loaded, etc.
  
// });

// $(window).load(function(){ //shorthand of the above
  
// });


// -----------

// $(document).ready(function(){
  
//   $('*').on('click', function(e){
//     console.log('The event target is:', e.target);
//     console.log('The event type is:', e.type);
//     console.log('The X coordinate of the event is:', e.pageX);
//     console.log('The Y coordinate of the event is:', e.pageY);
//     e.stopPropagation(); //stops bubbling
//   });  
  
// });


// ----------

// function complete(){
//       alert('animation complete');
//     };

// $(document).ready(function(){
  
//   $('section > h2').on('click', function(){
    
//     $(this).animate({'width':'500px', 'height':'100px'}, 1000, 'linear', complete); //default animation speed is 400, default motion is 'swing'
  
//   });

// });

// ----------

// $(document).ready(function(){
  
//   $('section > h2').on('click', function(){
    
//     $(this).animate({'opacity':'0.5'});
  
//   });

// });

// $(document).ready(function(){
  
//   $('section > h2').on('click', function(){
    
//     // $(this).fadeOut(2000).fadeIn(500);
//     // $(this).fadeTo(1000, 0.2).fadeTo(1000, 0.8);
//     $(this).fadeTo(1000, 0.2)
//           .fadeTo(1000, 0.8)
//           .fadeTo(1000, 0.2)
//           .fadeTo(1000, 0.8)
//           .fadeTo(1000, 0.2)
//           .fadeTo(1000, 0.8)
  
//   });

// });

// ----------

// $(document).ready(function(){
  
//   $('section > h2').on('click', function(){
    
//     // $(this).hide(1000).show(1000);
//     $(this).toggle(1000);
  
//   });

// });

$(document).ready(function(){
  
  $('img[alt=map]').on('click', function(){

    $('section > h2').toggle(1000);
  
  });

});