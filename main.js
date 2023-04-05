let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy Ingeniera En Robótica Y Desarrollo Páginas Web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
