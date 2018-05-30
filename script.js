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

  $('.SeeMore').click(function() {
    var $this = $(this);
    // $this.toggleClass('SeeMore2');
    if ($this.hasClass('.SeeMore')) {
      // console.log("aaa");
      $this.removeClass('.SeeMore')
      $this.addClass('.SeeMore2')
      $this.text('READ MORE');
    } else {
      // console.log("bbb");
      $this.removeClass('.SeeMore2')
      $this.addClass('.SeeMore')
      $this.text('READ LESS');
    }
  });

  $('.SMore').click(function() {
    var $this = $(this);
    // $this.toggleClass('SMore2');
    if ($this.hasClass('.SMore')) {
      // console.log("aaa");
      $this.removeClass('.SMore')
      $this.addClass('.SMore2')
      $this.text('SEE MORE');
    } else {
      // console.log("bbb");
      $this.removeClass('.SMore2')
      $this.addClass('.SMore')
      $this.text('SEE LESS');
    }
  });


  var data = [{
      "category": "Bogland",
      "name": "Fuschia",
      "subname": "Fuchsia Magellanica",
      "url": "Flowers/Bogland/Meadow-Sweet/Meadow-Sweet.png"
    },
    {
      "category": "Bogland",
      "name": "Knapweed",
      "subname": "Knapweed Centaurea",
      "url": "Flowers/Bogland/Knapweed/Knapweed-Centaurea.png"
    },
    {
      "category": "Bogland",
      "name": "Meadow Sweet",
      "subname": "Meadow Sweet",
      "url": "Flowers/Bogland/Meadow-Sweet/Meadow-Sweet.png"
    },
    {
      "category": "Bogland",
      "name": "Redshank",
      "subname": "Persicariamaculosa",
      "url": "Flowers/Bogland/Redshank/RedShank-Persicariamaculosa.png"
    },
    {
      "category": "Bogland",
      "name": "Scarley Pimperwell",
      "subname": "Anagallis Arvensis",
      "url": "Flowers/Bogland/scarlet-Pimperwell/ScarletPimpernel-AnagallisArvensis.png"
    },
    {
      "category": "Bogland",
      "name": "Speedwell",
      "subname": "",
      "url": "Flowers/Bogland/speedwell/Speedwell-Veronica.png"
    },
    {
      "category": "Bogland",
      "name": "Toad Flax",
      "subname": "Speedwell Veronica",
      "url": "Flowers/Bogland/toad-Flax/ToadFlax-Linariavulgaris.png"
    },
    {
      "category": "Bogland",
      "name": "Water Mint",
      "subname": "Mentha Aquatica",
      "url": "Flowers/Bogland/Water-Mint/WaterMint-MenthaAquatica.png"
    },
    {
      "category": "Bogland",
      "name": "Willow Herb",
      "subname": "WilowHerb Epilobium",
      "url": "Flowers/Bogland/willow-herb/WilowHerb-Epilobium.png"
    },
    {
      "category": "Coastal",
      "name": "Blackberry Flower",
      "subname": "",
      "url": "Flowers/Coastal/blackberryflower/BlackberryFlower-RubusUrsinus.png"
    },
    {
      "category": "Coastal",
      "name": "Chamomile",
      "subname": "Rubus Ursinus",
      "url": "Flowers/Woodland/purpleloosestrife/PurpleLoosestrife-LythrumSalicaria-.png"
    },
    {
      "category": "Coastal",
      "name": "Meadow Sweet",
      "subname": "",
      "url": "Flowers/Coastal/MeadowSweet/Meadow-Sweet-.png"
    },
    {
      "category": "Coastal",
      "name": "Redshank",
      "subname": "Meadow Sweet",
      "url": "Flowers/Coastal/Redshank/RedShank-Persicariamaculosa.png"
    },
    {
      "category": "Coastal",
      "name": "Smooth Hawksbeard",
      "subname": "Crepis Capillaris",
      "url": "Flowers/Coastal/smoothhawksbeard/SmoothHawksbeard-CrepisCapillaris.png"
    },
    {
      "category": "Coastal",
      "name": "Willow Herb",
      "subname": "Epilobium",
      "url": "Flowers/Coastal/willowherb/WillowHerb-Epilobium.png"
    },
    {
      "category": "Grassland",
      "name": "Blackberry Flower",
      "subname": "RubusUrsinus",
      "url": "Flowers/Grassland/blackberryflower/BlackberryFlower-RubusUrsinus.png"
    },
    {
      "category": "Grassland",
      "name": "Cuckoo Flower",
      "subname": "Cardamine Pratensis",
      "url": "Flowers/Grassland/cuckooflower/cuckooFlower-CardaminePratensis.png"
    },
    {
      "category": "Grassland",
      "name": "Lords and Ladies",
      "subname": "Arummaculatum",
      "url": "Flowers/Grassland/lordandladies/LordsandLadies-Arummaculatum.png"
    },
    {
      "category": "Grassland",
      "name": "Scarlet Pimperwell",
      "subname": "Anagallis Arvensis",
      "url": "Flowers/Grassland/scarletPimperwell/ScarletPimpernel-AnagallisArvensis.png"
    },
    {
      "category": "Grassland",
      "name": "Speedwell",
      "subname": "Speedwell Veronica",
      "url": "Flowers/Grassland/speedwell/Speedwell-Veronica.png"
    },
    {
      "category": "Grassland",
      "name": "Yarrow",
      "subname": "Achillea Millefolium",
      "url": "Flowers/Grassland/Yarrow/Yarrow-Achillea-millefolium.png"
    },
    {
      "category": "Woodland",
      "name": "Blackberry Flower",
      "subname": "Rubus Ursinus",
      "url": "Flowers/Woodland/blackberryflower/BlackberryFlower-RubusUrsinus.png"
    },
    {
      "category": "Woodland",
      "name": "Cuckoo Flower",
      "subname": "CardamineP ratensis",
      "url": "Flowers/Woodland/cuckooflower/cuckooFlower-CardaminePratensis.png"
    },
    {
      "category": "Woodland",
      "name": "Fuschsia",
      "subname": "Magellanica",
      "url": "Flowers/Woodland/Fuchsia/Fuschia-Fuchsia-magellanica.png"
    },
    {
      "category": "Woodland",
      "name": "Purple Loose Strife",
      "subname": "Lythrum Salicaria",
      "url": "Flowers/Woodland/purpleloosestrife/PurpleLoosestrife-LythrumSalicaria-.png"
    },
    {
      "category": "Woodland",
      "name": "Willow Herb",
      "subname": "Epilobium",
      "url": "Flowers/Woodland/willowherb/WillowHerb-Epilobium.png"
    },
    {
      "category": "Woodland",
      "name": "Yarrow",
      "subname": "Achillea Millefolium",
      "url": "Flowers/Woodland/Yarrow/Yarrow-Achillea-millefolium.png"
    }
  ];

  // var newdata = [];
  // var category = null;
  //
  // $(".filter").click(function() {
  //   var $this = $(this);
  //   if ($this.hasClass("coastal")) {
  //     category = "Coastal";
  //   } else if ($this.hasClass("bogland")) {
  //     category = "Bogland";
  //   } else if ($this.hasClass("woodland")) {
  //     category = "Woodland";
  //   } else if ($this.hasClass("grassland")) {
  //     category = "Grassland";
  //   } else {
  //     category = "catgeory not defined";
  //   }
  //   filter(category);
  // });
  //
  // function filter(category) {
  //   console.log(category);
  // if (category == "Bogland") {
  var c = false;
  var b = false;
  var w = false;
  var g = false;

  $(".coastal").click(function() {
    //initially show all others
    // c = false;
    b = false;
    w = false;
    g = false;

    if (c == false) {
      $(".showBogland").hide();
      $(".showCoastal").show();
      $(".showWoodland").hide();
      $(".showGrassland").hide();
      c = true;
      $(".coastal").addClass("keepcolor");
      $(".bogland").removeClass("keepcolor");
      $(".woodland").removeClass("keepcolor");
      $(".grassland").removeClass("keepcolor");
    } else {
      $(".showBogland").show();
      $(".showCoastal").show(); //unnecessary it is already shown
      $(".showWoodland").show();
      $(".showGrassland").show();
      c = false;
      $(".coastal").removeClass("keepcolor");
    }
  });

  $(".bogland").click(function() {
    //initially show all others
    c = false;
    // b = false;
    w = false;
    g = false;

    if (b == false) {
      $(".showBogland").show();
      $(".showCoastal").hide();
      $(".showWoodland").hide();
      $(".showGrassland").hide();
      b = true;
      //add keepcolor class
      $(".bogland").addClass("keepcolor");
      $(".coastal").removeClass("keepcolor");
      $(".woodland").removeClass("keepcolor");
      $(".grassland").removeClass("keepcolor");
    } else {
      $(".showBogland").show(); //unnecessary it is already shown
      $(".showCoastal").show();
      $(".showWoodland").show();
      $(".showGrassland").show();
      b = false;
      //remove keepcolor class
      $(".bogland").removeClass("keepcolor");
    }
  });

  $(".woodland").click(function() {
    //initially show all others
    c = false;
    b = false;
    // w = false;
    g = false;

    if (w == false) {
      $(".showBogland").hide();
      $(".showCoastal").hide();
      $(".showWoodland").show();
      $(".showGrassland").hide();
      w = true;
      $(".woodland").addClass("keepcolor");
      $(".bogland").removeClass("keepcolor");
      $(".coastal").removeClass("keepcolor");
      $(".grassland").removeClass("keepcolor");
    } else {
      $(".showBogland").show();
      $(".showCoastal").show(); //unnecessary it is already shown
      $(".showWoodland").show();
      $(".showGrassland").show();
      w = false;
      $(".woodland").removeClass("keepcolor");
    }
  });

  $(".grassland").click(function() {
    //initially show all others
    c = false;
    b = false;
    w = false;
    // g = false;

    if (g == false) {
      $(".showBogland").hide();
      $(".showCoastal").hide();
      $(".showWoodland").hide();
      $(".showGrassland").show();
      g = true;
      $(".grassland").addClass("keepcolor");
      $(".bogland").removeClass("keepcolor");
      $(".woodland").removeClass("keepcolor");
      $(".coastal").removeClass("keepcolor");
    } else {
      $(".showBogland").show();
      $(".showCoastal").show(); //unnecessary it is already shown
      $(".showWoodland").show();
      $(".showGrassland").show();
      g = false;
      $(".grassland").removeClass("keepcolor");
    }
  });

  // $(".bogland").click(function() {
  //   $(".togglebogland").toggle();
  // });
  //
  // $(".woodland").click(function() {
  //   $(".togglewoodland").toggle();
  // });
  //
  // $(".grassland").click(function() {
  //   $(".togglegrassland").toggle();
  // });

  // var x = document.getElementById("bogland");
  // if (x.style.display === "none") {
  //   console.log("111 are we here?");
  //   x.style.display = "block";
  // } else {
  //   console.log("222 are we here?");
  //   x.style.display = "none";
  // }
  // }


  // }
  // function filter(category) {
  //   console.log("----" + category + "----");
  //   // console.log("outside: " + category); //works
  //   data.forEach(function(element) {
  //     // console.log("current category: " + element.category); // works
  //     if (element.category == category) {
  //       newdata.push({
  //         "name": element.name,
  //         "subname": element.subname,
  //         "url": element.url
  //       })
  //     }
  //   });
  //   newdata.forEach(function(element) {
  //     console.log(element);
  //   });
  //   //append to html using newdata element values
  //   newdata = [];
  // };



  // $this.toggleClass('SeeMore2');
  // if ($this.hasClass('.SeeMore')) {


  // function filter(cat) {
  //   console.log(cat);
  // }
  // filter('Bogland');
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