<a href="https://scraperwiki.com/">Scraper Wiki</a> gets tweets by influence (retweet_count) and delivers that data in <a href="https://free-ec2.scraperwiki.com/g2zvoly/02a36c16f1e142e/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20retweet_count%2C%0A%20%20%20%20screen_name%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%2020">JSON format</a>

<a href="https://github.com/tmcw">TMCW's</a> D3 plugin for <a href="https://github.com/d3/d3-plugins/tree/master/jsonp">supporting the JSONP technique of requesting cross-domain JSON data</a>. Found via @timruffles 
<a href="https://github.com/timruffles/d3-live-viz-demo">work here</a>

