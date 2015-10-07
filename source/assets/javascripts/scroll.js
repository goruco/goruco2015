$(function() {
  var $nav = $('.js-nav')
    , $navLinks = $nav.find('a.js-nav-link')
    , didScroll = false
    , offset = $nav.offset().top
    , $window = $(window)
    , activeNavIndex
    , $activeLink = false
    , resizeNav = function() {
      $nav.css('height', $nav.children().height());
    }
    , checkStickyNav = function() {
      if ($window.scrollTop() > offset) {
        $nav.children().addClass('state-fixed')
      } else {
        $nav.children().removeClass('state-fixed');
        removeActiveNav()
      }
    }
    , removeActiveNav = function() {
      $navLinks.removeClass('active')
    }
    , isInView = function(elem) {
        var docTop = $window.scrollTop()
          , docBottom = docTop + $window.height()
          , elTop = $(elem).offset().top
          , elBottom = elTop + $(elem).height()
          ;

        return (elBottom > docTop)
        //return ((elBottom <= docBottom) && (elTop >= docTop));
      }
    , setActiveNav = function(index) {
        if (index !== undefined) {
          $prevActiveLink = $activeLink;
          $activeLink = $($navLinks.get(index))
          if ($prevActiveLink) {
            if ($prevActiveLink.get(0) !== $activeLink.get(0)) {
              $navLinks.removeClass('active')
              removeActiveNav();
            }
          }
          $activeLink.addClass('active');
        }
      }
    ;


	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

      var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - $nav.height()
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  checkStickyNav();

  // set up sticky nav height

  $window.on('resize', function() {
    resizeNav();
  });

  setTimeout(function() {
    resizeNav();
  }, 500);

  $window.on('scroll', function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll === true) {
      didScroll = false;
      $('.js-home-section').each(function() {
        if (isInView(this)) {
          activeNavIndex = $('.js-home-section').index(this);
          setActiveNav(activeNavIndex);
          return false;
        }
      });
      checkStickyNav();
    }
  }, 25);

});
