var walMartApiData = function(lat, lon) {
	
	console.log(walMartApiData);

	var url = "http://api.walmartlabs.com/v1/stores?format=json" + "&" + "lat=" + lat + "&" + "lon=" + lon + "&" + "apiKey=" + "7k8cyr9ccesq4c6wxmaascse";
	console.log(url);
	
	var client = Ti.Network.createHTTPClient({

		onload : function(e) {
			var json = JSON.parse(this.responseText);
			console.log(json);
			var storeInfo = {
				name: json[0].name,
				zip: json[0].zip,
				phone: json[0].phoneNumber,
				address: json[0].streetAddress,
				city: json[0].city
			};
			
			var storeInfo1 = {
				name: json[1].name,
				zip: json[1].zip,
				phone: json[1].phoneNumber,
				address: json[1].streetAddress,
				city: json[1].city
			};
			
			var storeInfo2 = {
				name: json[2].name,
				zip: json[2].zip,
				phone: json[2].phoneNumber,
				address: json[2].streetAddress,
				city: json[2].city
			};
			
			var storeInfo3 = {
				name: json[3].name,
				zip: json[3].zip,
				phone: json[3].phoneNumber,
				address: json[3].streetAddress,
				city: json[3].city
			};
			
			console.log(storeInfo);
			var ui = require("ui");
				ui.storeUI(storeInfo, storeInfo1, storeInfo2, storeInfo3);
			
		},

		onerror : function(e) {
			alert("There is a error with your api.  Please check the connection.");
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();

		
};

exports.walMartApiData = walMartApiData;
