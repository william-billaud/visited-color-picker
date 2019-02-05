function onError(error) {
	  console.log(`Error: ${error}`);
}

function onGot(item) {
	  var color = "green";
	  if (item.color) {
		      color = item.color;
		    }
	//var styleEl = document.createElement('style');
//	document.head.appendChild(styleEl);
	var sheet = window.document.styleSheets[0];
	var rule =":visited{color: "+color+" !important;}\n"
	try {
		sheet.insertRule(rule,0);
	} catch (e) {
		console.error(e);
	}
}

var getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
