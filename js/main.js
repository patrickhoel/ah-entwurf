(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var form = document.getElementById('termin-form');
  var done = document.getElementById('form-done');
  if (form && done) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      done.classList.add('show');
    });
  }
})();
