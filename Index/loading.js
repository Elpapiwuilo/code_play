function DisableCharger(){
    document.getElementById('click').style.display="none";
    document.getElementById("Menu").innerHTML ="<section><div class='row justify-content-center mt-5'><div class='col-8'><div class='jumbotron'><h1 class='display-4'>Descubre los Numeros</h1><p class='lead'>Tienes que unir la pareja que coincida y ganaras</p><hr class='my-4'><a class='btn btn-success btn-lg  icon-googleplay' href='../Data_Web/NevelOne.html' role='button'>Jugar</a> </div> </div></div>" ;


}
    var layer = new collie.Layer({
        width : 300,
        height : 300
    });
     
    var tileSize = 15;
    var tileCount = 15;
    var angle = 0;
    var rad = 0;
    var radius = 90;
    var centerX = 150;
    var centerY = 150;
    var tile;
     
    // Instancia del sensor
    var sensor = new collie.Sensor({
        frequency : 0
    });

    //Funcion desactivar cargador..
  
     
    // agregando propiedades a ciclo
    for (var i = 0; i < tileCount; i++) {
        angle = (360 / tileCount) * i;
        rad = collie.util.toRad(angle);
         
        tile = new collie.DisplayObject({
            x : centerX + Math.cos(rad) * radius,
            y : centerY + Math.sin(rad) * radius,
            width : tileSize,
            height : tileSize,
            backgroundColor : "green",
            angle : angle
        }).addTo(layer);
         
        sensor.add(tile, "all");
    }
     
    // agregando al obejeto acciones
    var box = new collie.DisplayObject({
        x : centerX,
        y : centerY,
        width : tileSize,
        height : tileSize,
        backgroundColor : "green"
    }).addTo(layer);
     
    sensor.addListener(box, "all", function (a, b) {
        b.set("backgroundColor", "green");
    }, function (a, b) {
        b.set("backgroundColor", "white");
    });
     
    // Set a timer
    collie.Timer.transition(function (e) {
        var rad = collie.util.toRad(e.value);
        box.set({
            x : centerX + Math.cos(rad) * radius,
            y : centerY + Math.sin(rad) * radius,
            angle : e.value
        });
    }, 360 * 9, {
        from : 0,
        to : 360,
        loop : 0
    });
     
    // Start the sensor
    sensor.start();

    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("container"));
    collie.Renderer.start();

    