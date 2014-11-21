(function(RADataScraper) {
	'use strict';

	var config = {};

	RADataScraper.init = function (APIKey) {
		config.apiKey = APIKey;
	}

	RADataScraper.getEventsByDJ = function (name, callback) {
		var url = 'http://api.phantomjscloud.com/single/browser/v1/' + config.apiKey + '/?targetUrl=http://www.residentadvisor.net/dj/' + name + '/dates';
		request(url, function (err, $response) {
			if (err) return callback(err);

			var events = [];
			var $tourWrapper = $response.getElementById('items');
			var $tourDates = $tourWrapper.getElementsByTagName('li');

			for (var i = 0; i < $tourDates.length; i++) {
				var $date = $tourDates[i].getElementsByTagName('time')[0];
				var date = $date.getAttribute('datetime');
				var $title = $tourDates[i].getElementsByClassName('title')[0];
				var title = $title.getElementsByTagName('a')[0].innerHTML;
				var venue = $title.getElementsByTagName('a')[1].innerHTML;
				var country = $title.getElementsByTagName('a')[2].innerHTML;

				events.push({ date: date, name: title, venue: venue, country: country });
			}

			callback(null, events);
		});
	}

	var request = function (url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var $response = parser.parseFromString(JSON.parse(xhr.responseText).pageContent, 'text/html');
					callback(null, $response);

				} catch (e) {
					callback(e);
				}
				
			}
		};
		xhr.send();
	}

}(window.RADataScraper = window.RADataScraper || {}));