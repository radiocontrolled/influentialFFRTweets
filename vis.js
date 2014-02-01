var w = window.innerWidth;
var h =  window.innerHeight;
var data, width, height;
var svg = d3.select("article#vis")
	.append("svg")
	.attr({
		width: w/2, 
		height: h/2
	});
var div = d3.select("article").attr("width",function(){return w;}).append("div")
	.attr({
		width: function(){
			return w/2;
		},
		height: h/2,
		id: "tooltip"
	})
d3.json('https://free-ec2.scraperwiki.com/bv4m6pi/1bce30f136514ea/sql/?q=select%20%0A%20%20%20%20text%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20retweet_count%2C%0A%20%20%20%20screen_name%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20retweet_count%0Alimit%2020', function(error, json) {	
	if(json){
		doVis(json);
	}
	else{
		console.warn(error);
	}
})
var doVis = function (data){
	var nodes = svg.selectAll("circle")
			.data(data)
			.enter()
			.append("circle").attr("r",function(d){
				return 2 + (d.retweet_count * 4);
			})
			.attr({
				"stroke":"rgb(44,162,102)",
				"fill": "#FBFBFB",
				"stroke-width":4,
				"tabindex": function(d,i){
					return i; 
				}
			})
		
		 var force = d3.layout.force()
     		.nodes(data)
     		.size([w/2, h/2])
        	.linkDistance([200]) 
        	.charge([-100])       
    		.start(10000);

    	  force.on("tick", function() {
		  	nodes.attr("cx", function(d) { return d.x; })
		      .attr("cy", function(d) { return d.y; })
		      .call(force.drag);
			});	
		
		var initText = d3.select("#tooltip").text(function(){
					return  data[1]["text"];
				})
				.append("a").attr("href", function(){
					return data[1]["tweet_url"];
				})
				.text(function(){
					return "@"+data[1]["screen_name"];
				})
				.append("i").classed({
					"fa": true,
					"fa-retweet": true
				})
				.text(function(){
					return data[1]["retweet_count"];
				})
						
		nodes.on("mouseover", function(d,i){
		
			d3.select(this).classed("highlight",true);
			d3.select("#tooltip")
				.text(function(){
					return d.text;
				})
				.append("a").attr("href", function(){
					return d.tweet_url;
				})
				.text(function(){
					return "@"+d.screen_name;
				})
				.append("i").classed({
					"fa": true,
					"fa-retweet": true
				})
				.text(function(){
					return + " " + d.retweet_count;
				})	
			});	
		
		nodes.on("mouseout", function(d,i){
				d3.select(this).classed("highlight",false);
				d3.select("#tooltip text").remove();
			})
		
};


	


