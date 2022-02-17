Las 4 etiquetas <p> tienen 4 formas de anexar unos estilos
los cuales son:

1) para el primer <p> debes usar el selector por defecto para
indicarle que sea de color rojo: #ff0000

2) esta segunda etiqueta <p> de forma embedida, aplicar que sea cursiva / italic

3) la tercera etiqueta <p> con el id agregar el siguiente estilo de fuente:
<style>
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');
</style>
font-family: 'Syne Tactile', cursive;

4) la ultima etiqueta <p> con el selector de clases, aplicar un fondo azul: #ccccff



<div>
<p>Nulla eu ea consequat incididunt dolor excepteur labore irud.</p>
</div>

<div>
<p style="">Nulla eu ea consequat incididunt dolor excepteur labore irud.</p>
</div>

<div id="idx">
<p>Nulla eu ea consequat incididunt dolor excepteur labore irud.</p>
</div>

<div>
<p class="content">Nulla eu ea consequat incididunt dolor excepteur labore irud.</p>
</div>