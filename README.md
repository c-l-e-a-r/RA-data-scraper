RA-data-scraper
===============

###Note:
This library uses PhantomJS to capture all data - it an increadibly hacky solution to the lack of API in place. It makes a lot of assumptions about the current layout and can easily break with any updates that RA makes to their templates. Use with caution.

###Prerequisites:
An account with https://phantomjscloud.com

###Documentation:
####init(key)
#####Arguments
`key` PhantomJS Cloud API key
#####Example
````
RADataScraper.init('b03092cbc3b322f02375c24319c596318bc7ze0d');
````

####getEventsByDJ(name, callback)
Request event data based on a DJ. 

#####Arguments
- `name` readonly dj name found in the url
- `callback(err, data)` data is an array of event objects with properties `date`, `name`, `venue`, and `country`
#####Example
````
RADataScraper.getEventsByDJ('supercooldj', function (err, data) {
  // data is an array of all events
});
````
