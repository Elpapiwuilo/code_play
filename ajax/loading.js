
    var layer = new collie.Layer({
        width : 300,
        height : 300
    });
     
    var tileSize = 20;
    var tileCount = 20;
    var angle = 0;
    var rad = 0;
    var radius = 120;
    var centerX = 150;
    var centerY = 150;
    var tile;
     
    // Create a sensor instance
    var sensor = new collie.Sensor({
        frequency : 0
    });
     
    // Add tiles
    for (var i = 0; i < tileCount; i++) {
        angle = (360 / tileCount) * i;
        rad = collie.util.toRad(angle);
         
        tile = new collie.DisplayObject({
            x : centerX + Math.cos(rad) * radius,
            y : centerY + Math.sin(rad) * radius,
            width : tileSize,
            height : tileSize,
            backgroundColor : "green    ",
            angle : angle
        }).addTo(layer);
         
        sensor.add(tile, "all");
    }
     
    // Add an object
    var box = new collie.DisplayObject({
        x : centerX,
        y : centerY,
        width : tileSize,
        height : tileSize,
        backgroundColor : "white"
    }).addTo(layer);
     
    sensor.addListener(box, "all", function (a, b) {
        b.set("backgroundColor", "green");
    }, function (a, b) {
        b.set("backgroundColor", "crimson");
    });
     
    // Set a timer
    collie.Timer.transition(function (e) {
        var rad = collie.util.toRad(e.value);
        box.set({
            x : centerX + Math.cos(rad) * radius,
            y : centerY + Math.sin(rad) * radius,
            angle : e.value
        });
    }, 360 * 12, {
        from : 0,
        to : 360,
        loop : 0
    });
     
    // Start the sensor
    sensor.start();
 
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("container"));
    collie.Renderer.start();
