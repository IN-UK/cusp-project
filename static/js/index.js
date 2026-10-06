// Copy BibTeX to clipboard
function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const copyText = button.querySelector('.copy-text');
  if (!bibtexElement) return;

  const done = function () {
    button.classList.add('copied');
    copyText.textContent = 'Copied!';
    setTimeout(function () {
      button.classList.remove('copied');
      copyText.textContent = 'Copy';
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(bibtexElement.textContent).then(done).catch(function () { fallbackCopy(bibtexElement, done); });
  } else {
    fallbackCopy(bibtexElement, done);
  }
}

function fallbackCopy(el, cb) {
  const textArea = document.createElement('textarea');
  textArea.value = el.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  try { document.execCommand('copy'); } catch (e) { /* ignore */ }
  document.body.removeChild(textArea);
  cb();
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) return;
  if (window.pageYOffset > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});

// Pause the supplementary video when it scrolls out of view
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.result-video video');
  if (!videos.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting && !entry.target.paused) entry.target.pause();
    });
  }, { threshold: 0.25 });
  videos.forEach(function (v) { observer.observe(v); });
});
