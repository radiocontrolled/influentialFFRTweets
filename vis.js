var w = $(window).width();
var h = w/2.5;
var scale = [];
var min; 
var max; 
var padding = $(window).width()/15;
var data;

var svg = d3.select("article")
	.append("svg")
	.attr({
		width: w*.9, 
		height: h*.9
	});
	
//alternative? https://dev.twitter.com/discussions/14145 - would be to embed the 'html' from the response - see https://dev.twitter.com/docs/embedded-tweets

d3.json('https://free-ec2.scraperwiki.com/g2zvoly/02a36c16f1e142e/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20retweet_count%2C%0A%20%20%20%20screen_name%2C%0A%20%20%20%20text%2C%0A%20%20%20%20url%0Afrom%20tweets%0Awhere%20retweet_count%20%3E%200%0Aorder%20by%20tweet_url%0Alimit%2020', function(error, json) {	
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
				return d.retweet_count * 2;
			})
			.attr("stroke", "rgb(44,162,102)")
			.attr("fill","none")
			.attr("stroke-width",2)
			.on("mouseover", function(d){
				d3.select(".tweet").style("display","none");
				
				//http://chimera.labs.oreilly.com/books/1230000000345/ch10.html#_html_div_tooltips
		    });
	
		 var force = d3.layout.force()
     		.nodes(data)
     		.size([w*.8, h*.8])
        	.linkDistance([100]) 
        	.charge([-100])       
    		.start();

    	  force.on("tick", function() {
		  	nodes.attr("cx", function(d) { return d.x; })
		      .attr("cy", function(d) { return d.y; })
		      .call(force.drag);
			});	
			

		
		
		nodes.on("mouseout", function(d){
			
		});
};


	


