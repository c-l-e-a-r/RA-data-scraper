RA-data-scraper
===============

###Note:
This library uses PhantomJS to capture all data - it makes a lot of assumptions about the current layout and can easily break with any updates that RA makes to their templates. It acts nothing more than a bandaid for the lack of API in place at the moment.

###Prerequisites
An account with https://phantomjscloud.com

###Documentation
####init(key)
Initialize using your PhantomJS Cloud key
````
RADataScraper.init('phantomjs_api_key');
````

####getEventsByDJ(name, callback)
Request event data based on a DJ. 

#####Arguments
`name` readonly dj name found in the url
`callback(err, data)` data is an array of event objects with properties `date`, `name`, `venue`, and `country`
````
RADataScraper.getEventsByDJ('djname', function (err, data) {
  // data is an array of all events
});
````
