$('button').hover(function(){
   var $this = $(this);
   var $prevAll = $(this).prevAll();

   var className = $this.attr("class") + "-hover";

   $this.addClass(className);
   $prevAll.addClass(className);
}, function() {
   var $this = $(this);
   var $prevAll = $(this).prevAll();

   $this.removeClass("detractor-hover passive-hover promoter-hover");
   $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
});
console.log("esta cargando")

// Función para mostrar u ocultar el resto de la encuesta de acuerdo
// a si recibió el pedido
function funRecibirPedido() {
   var si = parseFloat(document.getElementById('x').value);
   var no = parseFloat(document.getElementById('y').value);
   
  if (si >= no) {
    document.getElementById("boton").style.display = "block";
  } else {
    document.getElementById("boton").style.display = "none";
  }
}