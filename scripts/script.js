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