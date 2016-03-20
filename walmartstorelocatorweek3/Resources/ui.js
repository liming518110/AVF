var storeUI = function(storeInfo, storeInfo1, storeInfo2, storeInfo3) {
	
	var win = Ti.UI.createWindow({
		backgroundColor: "#fff",
		layout: "horizontal"
	});
	
	var storeView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 40,
		left: 20,
		backgroundColor: "#2277cc"
	});
	
	var storeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo.name,
		left: 20,
		top: 20
	});
	
	var addressLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo.address,
		left: 20,
		top: 80
	});
	
	var cityLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo.city,
		left: 20,
		top: 120
	});
	
	var zipLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo.zip,
		top: 120,
		left: 200
	});
	
	var phoneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 18,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo.phone,
		left: 20,
		top: 160
	});
	
	var storeOneView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 40,
		left: 20,
		backgroundColor: "#1d5fa8"
	});
	
	var storeOneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo1.name,
		left: 20,
		top: 20
	});
	
	var addressOneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo1.address,
		left: 20,
		top: 80
	});
	
	var cityOneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo1.city,
		left: 20,
		top: 120
	});
	
	var zipOneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo1.zip,
		top: 120,
		left: 200
	});
	
	var phoneOneLabel = Ti.UI.createLabel({
		font : {
				fontSize : 18,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo1.phone,
		left: 20,
		top: 160
	}); 
	
	var storeTwoView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 20,
		left: 20,
		backgroundColor: "#f27b37"
	});
	
	var storeTwoLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo2.name,
		left: 20,
		top: 20
	});
	
	var addressTwoLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo2.address,
		left: 20,
		top: 80
	});
	
	var cityTwoLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo2.city,
		left: 20,
		top: 120
	});
	
	var zipTwoLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo2.zip,
		top: 120,
		left: 200
	});
	
	var phoneTwoLabel = Ti.UI.createLabel({
		font : {
				fontSize : 18,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo2.phone,
		left: 20,
		top: 160
	}); 
	
	var storeThreeView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 20,
		left: 20,
		backgroundColor: "#454545"
	});
	
		var storeThreeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo3.name,
		left: 20,
		top: 20
	});
	
	var addressThreeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo3.address,
		left: 20,
		top: 80
	});
	
	var cityThreeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo3.city,
		left: 20,
		top: 120
	});
	
	var zipThreeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 24
		},
		color: "#fff",
		text: storeInfo3.zip,
		top: 120,
		left: 200
	});
	
	var phoneThreeLabel = Ti.UI.createLabel({
		font : {
				fontSize : 18,
				fontWeight: "bold"
		},
		color: "#fff",
		text: storeInfo3.phone,
		left: 20,
		top: 160
	}); 
	
	storeView.add(storeLabel);
	storeView.add(addressLabel);
	storeView.add(cityLabel);
	storeView.add(zipLabel);
	storeView.add(phoneLabel);
	win.add(storeView);
	
	storeOneView.add(storeOneLabel);
	storeOneView.add(addressOneLabel);
	storeOneView.add(cityOneLabel);
	storeOneView.add(zipOneLabel);
	storeOneView.add(phoneOneLabel);
	win.add(storeOneView);
	
	storeTwoView.add(storeTwoLabel);
	storeTwoView.add(addressTwoLabel);
	storeTwoView.add(cityTwoLabel);
	storeTwoView.add(zipTwoLabel);
	storeTwoView.add(phoneTwoLabel);
	win.add(storeTwoView);
	
	storeThreeView.add(storeThreeLabel);
	storeThreeView.add(addressThreeLabel);
	storeThreeView.add(cityThreeLabel);
	storeThreeView.add(zipThreeLabel);
	storeThreeView.add(phoneThreeLabel);
	win.add(storeThreeView);
	
	win.open();
};

exports.storeUI = storeUI;
