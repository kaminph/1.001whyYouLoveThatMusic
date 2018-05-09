function graph(){


    // clean up
    document.getElementById('target').innerHTML = '';

    // ------------- GRAPHING -------------

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .html(function(d) { return '<span>' + scores[d.word].name + '<br>' + scores[d.word].songs + ' songs' +'</span>' })
      .offset([-12, 0])

    var padding = 6,
        radius = d3.scale.log().range([12, 100]).domain([2, 82]), //range 15-70 originially
        color = d3.scale.category10().domain([0, 15]);

    var nodes = [];
    var circle = [];
    var force;

    var svg = d3.select("div[id=target]").append("svg")
        .attr("width", windowWidth)
        .attr("height", 800)
        .attr("class", "vis shadow");
    
    svg.append("g");
    
    var g = svg.append("defs")
    
    g.append("pattern")
    .attr("id", "attachedImage1")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/3aae68e363871095051f421dff0203cb9084805b")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage2")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/6bd672a0f33705eda4b543c304c21a152f393291")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage3")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/e21f791b600f04f9dd8ad2b6d9b3304a82e048ca")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage4")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/f31fe04e6bfd7d154cc6434cbec87483b8d2d46e")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage5")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/6477b1188b0a70dbd1ffa34aa0407261fa168723")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage6")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/25b1026ea50d9d6ec565c32f4c81bf6b5d45a5d9")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage7")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/965cf721405a34bb12f098ff66527babeef6b1bc")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");
    
    g.append("pattern")
      .attr("id", "attachedImage8")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/5259c0496329b3f608a1ae0edb799cd2f8451acc")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage9")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/df9086189e64ad3f3dec425f53b0c5f595a787b5")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage10")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/997be88b275a7ed113d48c5ff9f50aa16445c2b1")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");






    g.append("pattern")
      .attr("id", "attachedImage11")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/8dfb733a23f3aa7c95be20b409feec30bec61f17")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage12")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/cec43c2fb746ea2a0c7546aa3408fe2f94887fe4")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage13")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/f759994946aa42851e5293083f472c96c1753105")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage14")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/c2e33f4e9eab29bfb1e8ab2e36928e5891ee5088")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");
      
    g.append("pattern")
      .attr("id", "attachedImage15")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/7dce1aa42eed23fe5bba6085babc98ac760b3947")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage16")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/ae8b76c87273307b365e41c5de76f0f47dd50f39")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage17")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/622c13394c3cf2ed8197edb6f0121b7f3ce8912f")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage18")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/3e078572245ba8875cc2f04fa9ac817d1aaccaff")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage19")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/ca2e7772dcdfd03401cdd0c66aeee1bea8ea3904")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    g.append("pattern")
      .attr("id", "attachedImage20")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
        .attr("xlink:href", "https://i.scdn.co/image/7f71d18bf087f8b3ee0dfb1c75af20d510d1e2be")
        .attr("preserveAspectRatio", "none")
        .attr("width", "1")
        .attr("height", "1");

    svg.call(tip);

    for (var word in scores) {
      nodes.push({radius: radius(scores[word].songs), color: color(scores[word]), word: word, score: scores[word], image: scores[word].image});  
    }

    force = d3.layout.force()
      .nodes(nodes)
      .size([windowWidth, 800])
      .gravity(1)
      .charge(1)
      .on("tick", tick)
      .start();

    circle = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", function(d) { return d.radius; })
      // .style("fill", function(d) { return d.color; })  
      .style("fill", function(d) { return "url(#attachedImage" + d.image + ")" })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .call(force.drag);

    function tick(e) {
      circle
          .each(cluster(10 * e.alpha * e.alpha))
          .each(collide(.5))
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    }

    // Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      var max = {};

      // Find the largest node for each cluster.
      nodes.forEach(function(d) {
        if (!(d.color in max) || (d.radius > max[d.color].radius)) {
          max[d.color] = d;
        }
      });

      return function(d) {
        var node = max[d.color],
            l,
            r,
            x,
            y,
            i = -1;

        if (node == d) return;

        x = d.x - node.x;
        y = d.y - node.y;
        l = Math.sqrt(x * x + y * y);
        r = d.radius + node.radius;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          node.x += x;
          node.y += y;
        }
      };
    }

    // Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
        var r = d.radius + radius.domain()[1] + padding,
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
                y = d.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2
              || x2 < nx1
              || y1 > ny2
              || y2 < ny1;
        });
      };
    }


}
