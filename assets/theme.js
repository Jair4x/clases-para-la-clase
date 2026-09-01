// Modularización y React / Hooks y estados — toggle de tema claro/oscuro
(function () {
  var boton = document.getElementById('temaToggle');
  if (!boton) return;

  function actualizarIcono() {
    var esOscuro = document.documentElement.getAttribute('data-theme') === 'dark';
    boton.textContent = esOscuro ? '☀️' : '🌙';
    boton.setAttribute('aria-label', esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  actualizarIcono();

  boton.addEventListener('click', function () {
    var actual = document.documentElement.getAttribute('data-theme');
    var nuevo = actual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nuevo);
    try { localStorage.setItem('tema', nuevo); } catch (e) {}
    actualizarIcono();
  });
})();
