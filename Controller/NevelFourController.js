var cartas = new Array( 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false}, 
    {nombre: '9', seleccion: false}, {nombre: '10', seleccion: false}, 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false},
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false},
    {nombre: '9', seleccion: false}, {nombre: '10', seleccion: false} );
          
  var intentos = 0;
  var jugada1 = "";
  var jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego () {  
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;
  
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 20 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
    }
  };
  
  function resetearJuego () {
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 20 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
      colorCambio( i, 'black', '??');
    } 
  }
  
  function girarCarta () {
    var evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
  
    if ( jugada1 !== "" ) {
  
      if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "blue", jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        var self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "#3498DB", "??")
          colorCambio(self.identificadorJ2, "#3498DB", "??")
          vaciar()
        },200); 
  
        colorCambio(identificadorJ2, "blue", jugada2);
      }
    } else if(jugada2 !== "valor") {
  
      colorCambio(identificadorJ2, "blue", jugada2);
  
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2;
    }
  };
  
  function vaciar ()  {
    jugada1 = ""; 
    jugada2 = ""; 
  
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio (posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  }   
  
  function comprobar () {
    var aciertos = 0;
    for( var i = 0 ; i < 20 ; i++ ){
      if ( cartas[i].seleccion == true ) {
        aciertos ++;
      }
  
    }
  
    if(aciertos == 20){
      document.getElementById("juego").innerHTML = "<section id='DivControl'><div class='row justify-content-center'><div class='col-sm-12 '><div class='jumbotron'><h1 class='display-4'>Descubre los animales</h1> <p class='lead'>Desliza el mouse sobre tu color favorito</p><hr class='my-4'><a  class='btn btn-primary' data-toggle='modal' data-target='#Logro' >Siguiente</a></div></div></div> </div><div class='row'><div class='col-sm-10  h-75'><div class='modal fade' id='Logro' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content' id='fondoL'><div class='modal-header offset-1'><div class='offset-4'><h5 class='modal-title offset-4' id='exampleModalCenterTitle'>Rango</h5></div></div><div class='modal-body'><h1 class='display-4  icon-star mb-5 offset-1'>Avanzado</h1><h3 class=' icon-emo-sunglasses mb-4 offset-4'>A Continuación pondremos al limite tu memoria, espero que te guste</h3></div><div><div class='row justify-content-center mb-5'> <a href='../Data_Web/NevelFive.html' class='btn btn-success mr-4 icon-right-1' >Siguiente</a> <a href='../Data_Web/NevelFour.html' class='btn btn-warning  icon-ccw mr-4' >Jugar de nuevo</a><a href='../Index/index.html'class='btn btn-danger  icon-cancel' >Salir</a></div> </div></div></div></div></div></div>";
      document.getElementById('T').style.display='none';
      document.getElementById('I').style.display='none';
    }
  }
  
  function resetearJuego () {
              cartas.sort(function() { return Math.random() - 0.5});
              for ( var i = 0; i < 20 ; i++ ) {
                  var carta = cartas[i].nombre;
                  var dato = document.getElementById( i.toString() );
                  dato.dataset.valor = carta;
                  colorCambio(i, '#3498DB', '??');
              }
          };

     
