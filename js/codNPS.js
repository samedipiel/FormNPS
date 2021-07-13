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

// Función para tiendas
function mostrarTiendas(){
  document.getElementById("encuestaTiendas").style.display = "block";
}

function ocultarTiendas(){
  document.getElementById("encuestaTiendas").style.display = "none";
}

function npsTienda(){
  var opTiendas = document.getElementById("encuestaTiendas");

  if(opTiendas.style.display == "none"){
    mostrarTiendas();
    ocultarEnviosNacionales();
    ocultarCallWhatsapp();
    ocultarSAC();
  }else{
    ocultarTiendas();
  }
}

// Función para Envíos Nacionales
function mostrarEnviosNacionales(){
  document.getElementById("encuestaEnviosNacionales").style.display = "block";
}

function ocultarEnviosNacionales(){
  document.getElementById("encuestaEnviosNacionales").style.display = "none";
}

function npsEnviosNacionales(){
  var opTiendas = document.getElementById("encuestaEnviosNacionales");

  if(opTiendas.style.display == "none"){
    mostrarEnviosNacionales();
    ocultarTiendas();
    ocultarCallWhatsapp();
    ocultarSAC();
  }else{
    ocultarEnviosNacionales();
  }
}

// Función para ventas por WP
function mostrarCallWhatsapp(){
  document.getElementById("encuestaCallWhatsapp").style.display = "block";
}

function ocultarCallWhatsapp(){
  document.getElementById("encuestaCallWhatsapp").style.display = "none";
}

function npsVentasWhatsapp(){
  var opTiendas = document.getElementById("encuestaCallWhatsapp");

  if(opTiendas.style.display == "none"){
    mostrarCallWhatsapp();
    ocultarTiendas();
    ocultarSAC();
    ocultarEnviosNacionales();
  }else{
    ocultarCallWhatsapp();
  }
}

// Función para ventas por SAC
function mostrarSAC(){
  document.getElementById("encuestaSAC").style.display = "block";
}

function ocultarSAC(){
  document.getElementById("encuestaSAC").style.display = "none";
}

function npsSAC(){
  var opTiendas = document.getElementById("encuestaSAC");

  if(opTiendas.style.display == "none"){
    mostrarSAC();
    ocultarTiendas();
    ocultarEnviosNacionales();
    ocultarCallWhatsapp();
  }else{
    ocultarSAC();
  }
}

$('.svg-inject').svgInject();