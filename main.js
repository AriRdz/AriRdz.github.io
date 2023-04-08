let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#564473">Soy estudiante de ingeniería en robótica y desarrollo páginas web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
