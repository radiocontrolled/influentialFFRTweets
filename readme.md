first draft of work visualising influence of @ffregister on Twitter using D3.JS. 
http://www.paulund.co.uk/using-the-new-twitter-api-v1-1
http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/
Is it possible to use a PHP library that would output a request as a json? e.g. https://dev.twitter.com/docs/twitter-libraries
<a href="https://scraperwiki.com/">Scraper Wiki</a> gets tweets by influence (retweet_count) and delivers that data in <a href="https://free-ec2.scraperwiki.com/g2zvoly/02a36c16f1e142e/sql/?q=select%20%0A%09id_str%2C%0A%09tweet_url%2C%0A%09created_at%2C%0A%20%20%20%20retweet_count%2C%0A%20%20%20%20screen_name%0Afrom%20tweets%0A--%20where%20created_at%20%3E%20%0Aorder%20by%20tweet_url%0Alimit%2020">JSON format</a>



