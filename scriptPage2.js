// $(function() {
//   $('.navbar').affix({
//     offset: {
//       /* Affix the navbar after scroll below header */
//       top: $("header").outerHeight(true)
//     }
//   });
// });
// Sticky navbar
// =========================

$(document).ready(function() {
  // Custom
  // var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
  //   var stickyHeight = sticky.outerHeight();
  //   var stickyTop = stickyWrapper.offset().top;
  //   if (scrollElement.scrollTop() >= stickyTop) {
  //     stickyWrapper.height(stickyHeight);
  //     sticky.addClass("is-sticky");
  //   } else {
  //     sticky.removeClass("is-sticky");
  //     stickyWrapper.height('auto');
  //   }
  // };
  //
  // // Find all data-toggle="sticky-onscroll" elements
  // $('[data-toggle="sticky-onscroll"]').each(function() {
  //   var sticky = $(this);
  //   var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
  //   sticky.before(stickyWrapper);
  //   sticky.addClass('sticky');
  //
  //   // Scroll & resize events
  //   $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
  //     stickyToggle(sticky, stickyWrapper, $(this));
  //   });
  //
  //   // On page load
  //   stickyToggle(sticky, stickyWrapper, $(window));
  // });




  // Custom
  // function which toggles between sticky class(is - sticky)
  // var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
  //   var stickyHeight = sticky.outerHeight();
  //   var stickyTop = stickyWrapper.offset().top;
  //   if (scrollElement.scrollTop() >= stickyTop) {
  //     stickyWrapper.height(stickyHeight);
  //     sticky.addClass("is-sticky");
  //   } else {
  //     sticky.removeClass("is-sticky");
  //     stickyWrapper.height('auto');
  //   }
  // };

  // $(document).ready(function() {
  // var navHeight = $('#navbar').height();
  // $(window).bind('scroll', function() {
  //   var navTop = $('#navbar').offset().top;
  //   if ($(window).scrollTop() >= navTop) {
  //     $('navbar').addClass('goToTop');
  //     $('#content').css('top', navHeight);
  //   } else {
  //     $('navbar').removeClass('goToTop');
  //     $('#content').css('top', 'auto');
  //   }
  // });
  // });

  // When the user scrolls the page, execute myFunction
  // window.onscroll = function() {
  //   myFunction()
  // };

  // Get the navbar
  // var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  // var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }

  $('.see').click(function() {
    var $this = $(this);
    if (this.innerHTML == "VIEW MORE") {
      this.innerHTML = "VIEW LESS";
    } else {
      this.innerHTML = "VIEW MORE"
    }
  });

  // var h = $(window).height() / 4;
  // console.log("window.height = " + h);
  // $('#navbar').css('height', h + 'px');

  // Returns height of HTML document
  // $(document).height();
  // Find all data-toggle="sticky-onscroll" elements


  // $('[data-toggle="sticky-onscroll"]').each(function() {
  //   var sticky = $(this);
  //   var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
  //   sticky.before(stickyWrapper);
  //   sticky.addClass('sticky');
  //
  //   // Scroll & resize events
  //   $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
  //     stickyToggle(sticky, stickyWrapper, $(this));
  //   });
  //
  //   // On page load
  //   stickyToggle(sticky, stickyWrapper, $(window));
  // });
});