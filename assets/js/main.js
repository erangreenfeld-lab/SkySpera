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

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.querySelector('#name').value || '');
      var org = encodeURIComponent(form.querySelector('#org').value || '');
      var message = encodeURIComponent(form.querySelector('#message').value || '');
      var body = 'Name: ' + decodeURIComponent(name) + '%0D%0AOrganisation: ' + decodeURIComponent(org) + '%0D%0A%0D%0A' + decodeURIComponent(message);
      window.location.href = 'mailto:contact@skyspera.com?subject=' + encodeURIComponent('Talk to us — SkySpera') + '&body=' + body;
    });
  }
});
