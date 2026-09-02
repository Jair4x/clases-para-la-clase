// Inyecta el widget de comentarios (giscus) en #giscus-container,
// usando la config de assets/giscus-config.js.
(function () {
  var contenedor = document.getElementById('giscus-container');
  if (!contenedor) return;

  var cfg = window.GISCUS_CONFIG;

  if (!cfg || !cfg.enabled) {
    contenedor.innerHTML = '<p class="comentarios-nota">Los comentarios se van a habilitar acá pronto.</p>';
    return;
  }

  var script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', cfg.repo);
  script.setAttribute('data-repo-id', cfg.repoId);
  script.setAttribute('data-category', cfg.category);
  script.setAttribute('data-category-id', cfg.categoryId);
  script.setAttribute('data-mapping', cfg.mapping || 'pathname');
  script.setAttribute('data-strict', cfg.strict || '0');
  script.setAttribute('data-reactions-enabled', cfg.reactionsEnabled || '1');
  script.setAttribute('data-input-position', cfg.inputPosition || 'top');
  script.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  script.setAttribute('data-lang', cfg.lang || 'es');
  script.crossOrigin = 'anonymous';
  script.async = true;
  contenedor.appendChild(script);

  // si cambian el tema de la página, avisarle también al iframe de giscus
  var botonTema = document.getElementById('temaToggle');
  if (botonTema) {
    botonTema.addEventListener('click', function () {
      setTimeout(function () {
        var nuevoTema = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        var iframe = document.querySelector('iframe.giscus-frame');
        if (iframe) {
          iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: nuevoTema } } }, 'https://giscus.app');
        }
      }, 50);
    });
  }
})();
