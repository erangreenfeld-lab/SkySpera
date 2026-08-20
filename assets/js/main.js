document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var compare = document.querySelector('.compare');
  if (compare) {
    var beforeClip = compare.querySelector('.before-clip');
    var handle = compare.querySelector('.handle');
    var setSplit = function (clientX) {
      var r = compare.getBoundingClientRect();
      var pct = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
      beforeClip.style.width = pct + '%';
      handle.style.left = pct + '%';
    };
    var dragging = false;
    compare.addEventListener('mousedown', function (e) { dragging = true; setSplit(e.clientX); });
    window.addEventListener('mouseup', function () { dragging = false; });
    window.addEventListener('mousemove', function (e) { if (dragging) setSplit(e.clientX); });
    compare.addEventListener('mousemove', function (e) { setSplit(e.clientX); });
    compare.addEventListener('touchmove', function (e) { setSplit(e.touches[0].clientX); }, { passive: true });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value || '';
      var org = form.querySelector('#org').value || '';
      var area = form.querySelector('#area') ? form.querySelector('#area').value || '' : '';
      var message = form.querySelector('#message').value || '';
      var body = 'Name: ' + name + '\nOrganisation: ' + org + '\nArea to watch: ' + area + '\n\n' + message;
      var status = form.querySelector('.contact-status');
      if (status) status.textContent = 'Opening your email client…';
      window.location.href = 'mailto:contact@skyspera.com?subject=' + encodeURIComponent('Talk to us — SkySpera') + '&body=' + encodeURIComponent(body);
    });
  }
});
