(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var burger = document.querySelector('.burger'), nav = document.querySelector('.nav');
  if (burger && nav) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Reveal sections as they scroll into view
  function reveal(scope) {
    var els = (scope || document).querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }
  var news = (window.MIS_NEWS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });

  function card(p, i) {
    return '<a class="card rv d' + (i % 3) + '" href="post.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="zoom"><div class="ph" style="background-image:url(\'' + esc(p.image) + '\')"></div></div>' +
      '<div class="body"><div class="meta">' + esc(p.category) + ' · ' + esc(p.dateLabel) + '</div>' +
      '<h3>' + esc(p.title) + '</h3><p class="sm">' + esc(p.summary) + '</p><span class="more">Read more</span></div></a>';
  }

  // Latest news on the home page
  var latest = document.getElementById('latest-news');
  if (latest) latest.innerHTML = news.slice(0, 3).map(card).join('');

  // News list with category filter
  var list = document.getElementById('news-list');
  if (list) {
    var chips = document.querySelectorAll('.chip');
    var draw = function (cat) {
      var items = news.filter(function (p) { return cat === 'All' || p.category === cat; });
      list.innerHTML = items.length ? items.map(card).join('') : '<p>No posts in this category yet.</p>';
      reveal(list);
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
        c.classList.add('on'); c.setAttribute('aria-pressed', 'true');
        draw(c.getAttribute('data-cat'));
      });
    });
    draw('All');
  }

  // Single post
  var post = document.getElementById('post');
  if (post) {
    var id = new URLSearchParams(location.search).get('id');
    var p = news.filter(function (x) { return x.id === id; })[0];
    if (!p) { post.innerHTML = '<h1>Post not found</h1><p><a class="more" href="news.html">Back to all news</a></p>'; }
    else {
      document.title = p.title + ' – MiS';
      var html = '<div class="meta">' + esc(p.category) + ' · ' + esc(p.dateLabel) + '</div><h1>' + esc(p.title) + '</h1><div class="rule"></div>' +
        '<img src="' + esc(p.image) + '" alt="">' + (p.body || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
      if (p.source && p.source.url) html += '<p class="sm">Source: <a href="' + esc(p.source.url) + '" rel="noopener">' + esc(p.source.label || p.source.url) + '</a></p>';
      html += '<p><a class="more" href="news.html">Back to all news</a></p>';
      post.innerHTML = html;
    }
  }

  reveal();

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var body = 'Name: ' + f.name.value + '\nCompany: ' + f.company.value + '\nEmail: ' + f.email.value +
      '\nTopic: ' + f.topic.value + '\n\n' + f.message.value;
    location.href = 'mailto:info@mi-energies.com?subject=' + encodeURIComponent('Website enquiry: ' + f.topic.value) +
      '&body=' + encodeURIComponent(body);
  });
})();
