first draft of work visualising influence of @ffregister on Twitter using D3.JS. 
<a href="https://scraperwiki.com/">Scraper Wiki</a> gets tweets by influence (retweet_count) and delivers that data in <a href="https://free-ec2.scraperwiki.com/g2zvoly/02a36c16f1e142e/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20retweet_count%2C%0A%20%20%20%20screen_name%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%2020">JSON format</a>



