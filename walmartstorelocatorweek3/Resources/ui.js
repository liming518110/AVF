var storeUI = function(storeInfo) {
	
	var win = Ti.UI.createWindow({
		backgroundColor: "#fff",
		layout: "horizontal"
	});
	
	var mainScrollView = Ti.UI.ScrollView({
			
	});
	
	var storeOneView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 40,
		left: 20,
		backgroundColor: "#2277cc"
	});
	
	var storeTwoView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 40,
		left: 20,
		backgroundColor: "#1d5fa8"
	});
	
	var storeThreeView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 20,
		left: 20,
		backgroundColor: "#f27b37"
	});
	
	var storeFourView = Ti.UI.createView({
		height: 350,
		width: 350,
		top: 20,
		left: 20,
		backgroundColor: "#454545"
	});
	
	win.add(storeOneView);
	win.add(storeTwoView);
	win.add(storeThreeView);
	win.add(storeFourView);
	
	win.open();
};

exports.storeUI = storeUI;
