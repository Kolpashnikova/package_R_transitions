HTMLWidgets.widget({

  name: 'transitions',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        var newSvg = document.getElementById(el.id);
        newSvg.innerHTML += '<div id="chordChartContainer" style="height: 80vh; margin-top: 50px;"><div id="tooltip"></div><svg id="chordChart" style="overflow: visible;"></svg></div>';

        (function(){
            drawChords();

            //

            function drawChords() {
                var matrix = x.data;

                var width = d3.select("#chordChartContainer").style('width'),
                    height = d3.select("#chordChartContainer").style('height');

                var total = arrSum(matrix);

                var names = x.names;

                var colors = d3.scale.category20();

                var res = d3.chordDirected()
                    .padAngle(0.05)
                    .sortSubgroups(d3.descending)
                    (matrix)

                document.getElementById("chordChart").innerHTML = "";

                var chordSvg = d3.select("#chordChart")
                    .attr("width", width)
                    .attr("height", height)
                    .datum(res);

                var radius = parseInt(width) > parseInt(height) ? parseInt(height) / 2 : parseInt(width) / 2

                var innerRadius = radius - 10,
                    outerRadius = innerRadius + 10;

                var outerArc = chordSvg
                    .append("g")
                    .attr("class", "outAreas")
                    .selectAll("g")
                    .data(function (d) {
                        return d.groups;
                    })
                    .enter()
                    .append("g")
                    .append("path")
                    .attr("class", "path")
                    .style("fill", function (d, i) {
                        return colors(i)
                    })
                    .style("stroke", null)
                    .attr("id", function (d, i) {
                        return "path" + i
                    })
                    .attr("d", d3v4.arc()
                        .innerRadius(innerRadius)
                        .outerRadius(outerRadius)
                    )
                    .attr("transform", "translate(" + parseInt(width) / 2 + "," + innerRadius / 1.2 + ")");


                var div = d3.select("#tooltip")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

                /*        var div = chordSvg.append("text")
                            .attr("id", "tooltip")
                            .attr("class", "tooltip")
                            .style("opacity", 0);*/

                var path = chordSvg
                    .append("g")
                    .attr("class", "inAreas")
                    .attr("transform", "translate(" + parseInt(width) / 2 + "," + innerRadius / 1.2 + ")")
                    .selectAll("path")
                    .data(function (d) {
                        return d;
                    })
                    .enter()
                    .append("path")
                    .attr("d", d3.ribbonArrow()
                        .radius(innerRadius)
                    )
                    .attr("class", "ribbon")
                    .style("fill", function (d) {
                        return colors(d.source.index)
                    })
                    .style("stroke", null)
                    .on("mouseover", function (d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", 1);
                        div.html(((d.source.value / total) * 100).toFixed(2) + "%")
                            .style("left", (d3.event.pageX - document.getElementById('chordChartContainer').offsetLeft + 2) + "px")
                            .style("top", (d3.event.pageY - document.getElementById('chordChartContainer').offsetTop - 28) + "px");
                    })
                    .on("mouseout", function (d) {
                        div.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });


                var text = chordSvg
                    .selectAll("text")
                    .data(names)
                    .enter()
                    .append("text")
                    .attr("x", 2)
                    .attr("dy", (outerRadius - innerRadius) - 2)
                    .append("textPath")
                    .attr('class', 'chordLabel')
                    .attr("xlink:href", function (d, i) {
                        return "#path" + i
                    })
                    .text(function (d, i) {
                        return names[i];
                    });

                return () => window.removeEventListener('resize', drawChords());
            }

            window.addEventListener('resize', drawChords());


            function arrSum(arr) {
                var sum = 0;
                arr.forEach(function(v) {
                    if (typeof v == 'object')
                        sum += arrSum(v);
                    else
                        sum += v
                })
                return sum;
            }
        })();

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
