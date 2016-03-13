//gets api data from wunderground

var apiData = function(lat, lng) {
	console.log(apiData);

	var url = "http://api.wunderground.com/api/2ea7d8e37d25e57a/conditions/q/" + lat + "," + lng + ".json";
	console.log(url);
	var client = Ti.Network.createHTTPClient({

		onload : function(e) {
			var json = JSON.parse(this.responseText);
			console.log(json);
			var apiInfo = {
				city : json.current_observation.display_location.city,
				temp : json.current_observation.temp_f,
				weather : json.current_observation.weather,
				humidity : json.current_observation.relative_humidity,
				wind: json.current_observation.wind_mph,
				feelslike : json.current_observation.feelslike_f,
				wind_dir: json.current_observation.wind_dir,
				wind_gust_mph: json.current_observation.wind_gust_mph,
				wind_degrees: json.current_observation.wind_degrees,
				visibility: json.current_observation.visibility_mi,
				pressure: json.current_observation.pressure_in,
				dewpoint: json.current_observation.dewpoint_f,
				windchill: json.current_observation.windchill_f,
				rain: json.current_observation.precip_today_in,
				heat_index: json.current_observation.heat_index_f
			};
			
			var cleanModule = require("db");
				cleanModule.cleandb(); 
			console.log(apiInfo);
			var dbModule = require("db");
				dbModule.save(apiInfo);
		},

		onerror : function(e) {
			alert("The api is not connected.");
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();

};

exports.apiData = apiData;
