
console.log("hola");






d3.json("https://www.ncdc.noaa.gov/teleconnections/enso/indicators/soi/data.json",function(gato) {
    console.log(gato);
    var perro=[];
    for(i=0;i<20;i++){
        perro.push(i);
    }
    d3.select("svg")
.selectAll("rect")
.data(perro)
.enter()
.append("rect")
.attr("width", 40)
.attr("height", function(d) {return d})
.style("fill", "yellow")
.style("stroke", "black")
.style("stroke-width", "2px")
.style("opacity", .50)
.attr("x", function(d,i) {return i * 40;})
.attr("y", function(d) {return 290 - d;});
    
    });


