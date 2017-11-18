var WIDTH = window.innerWidth / 2
    var HEIGHT = window.innerHeight
    
    var translate = 'translate(' + (WIDTH / 2) + ',' + (HEIGHT / 2) + ')'

    var svg = d3.select("#sticky").append("svg")
    	.attr('width', WIDTH)
    	.attr('height', HEIGHT)

    var currentScrollTop = d3.select('#currentScrollTop')
    
    var hourLayer = svg.append('g')
    	.attr('transform', translate)
    
    var hourRect = hourLayer.append('rect')
    	.attr('x', -3)
    	.attr('y', -87)
    	.attr('width', 6)
    	.attr('height', 90)
    	.attr('fill', '#333')
    
    var minuteLayer = svg.append('g')
    	.attr('transform', translate)
    
    var minuteRect = minuteLayer.append('rect')
    	.attr('x', -2)
    	.attr('y', -118)
    	.attr('width', 4)
    	.attr('height', 120)
    	.attr('fill', '#333')
    
    var body = d3.select('body').node()
    var container = d3.select('#container')
    var content = d3.select('#content')
    
    var SCROLL_LENGTH = content.node().getBoundingClientRect().height - HEIGHT
    var hourHandRotation = d3.scale.linear()
    	.domain([0, SCROLL_LENGTH])
    	.range([0, 360])
    	.clamp(true)
    
    var minuteHandRotation = d3.scale.linear()
    	.domain([0, SCROLL_LENGTH])
    	.range([0, 360 * 12])
	    .clamp(true)
    
    var scrollTop = 0
    var newScrollTop = 0
    
		container
  		.on("scroll.scroller", function() {
      	newScrollTop = container.node().scrollTop
	    });

    var setDimensions = function() {
      WIDTH = window.innerWidth / 2
			HEIGHT = window.innerHeight
      SCROLL_LENGTH = content.node().getBoundingClientRect().height - HEIGHT
      
      hourHandRotation.domain([0, SCROLL_LENGTH])
      minuteHandRotation.domain([0, SCROLL_LENTH])
    }
    
    var render = function() {
      if (scrollTop !== newScrollTop) {
        scrollTop = newScrollTop
        
        var hourHandRotate = hourHandRotation(scrollTop)        
      	hourLayer.attr('transform', translate + ' rotate(' + hourHandRotate + ')')
        
        var minuteHandRotate = minuteHandRotation(scrollTop)        
      	minuteLayer.attr('transform', translate + ' rotate(' + minuteHandRotate + ')')
        
        currentScrollTop.text(scrollTop)
      }
      
      window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)
    
    window.onresize = setDimensions