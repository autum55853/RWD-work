"use strict";

var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(document).ready(function () {
  $(".moveUp").on('click', function () {
    //console.log('click');
    //     $('html,body').scrollTop(0);
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  });
  $(window).on('scrollTop', function () {
    console.log($(this).scrollTop());

    if ($(this).scrollTop() > 200) {
      $('.moveUp').fadeIn("fast");
    } else {
      $('.moveUp').stop().fadeOut("fast");
    }
  });
}); // form validation  by 助教

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    }, false);
  });
})();
//# sourceMappingURL=all.js.map
