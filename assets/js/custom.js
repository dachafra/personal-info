(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");
  var mobileMenuQuery = window.matchMedia("(max-width: 845px)");

  var updateMenuAccessibility = function() {
    if (mobileMenuQuery.matches) {
      var isOpen = menu.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-hidden", String(!isOpen));
      menu.inert = !isOpen;
    } else {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.removeAttribute("aria-hidden");
      menu.inert = false;
    }
  };

  var closeMenu = function(returnFocus) {
    menu.classList.remove("open");
    updateMenuAccessibility();
    if (returnFocus && mobileMenuQuery.matches) {
      toggle.focus();
    }
  };

  var openMenu = function() {
    menu.classList.add("open");
    updateMenuAccessibility();
    close.focus();
  };

  toggle.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  close.addEventListener("click", function() {
    closeMenu(true);
  });

  // Close menu after click on smaller screens
  $(".main-menu a").on("click", function() {
    if (mobileMenuQuery.matches) {
      closeMenu(false);
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      closeMenu(true);
    }
  });

  window.addEventListener("resize", updateMenuAccessibility);
  updateMenuAccessibility();

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);
