(function () {
  var carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(function (el) {
    var track = el.querySelector('.carousel-track');
    var slides = el.querySelectorAll('.carousel-slide');
    var prev = el.querySelector('.carousel-prev');
    var next = el.querySelector('.carousel-next');
    var status = el.querySelector('.carousel-status');
    var index = 0;

    function update() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      if (status) {
        status.textContent = 'Photo ' + (index + 1) + ' of ' + slides.length;
      }
    }

    function go(delta) {
      index = (index + delta + slides.length) % slides.length;
      update();
    }

    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });

    el.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    });

    update();
  });
})();
