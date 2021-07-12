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

// Función mostrar y ocultar las opciones

function MostrarTiendas(){
  document.getElementById("encuestaTiendas").style.display = "block";
}

function OcultarTiendas(){
  document.getElementById("encuestaTiendas").style.display = "none";
}

function npsTienda(){
  var opTiendas = document.getElementById("encuestaTiendas");

  if(opTiendas.style.display == "none"){
    MostrarTiendas();
  }else{
    OcultarTiendas();
  }
}