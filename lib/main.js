var data = require("sdk/self").data;

// var { setInterval } = require("sdk/timers");
// setInterval(function() { }, 1000)

// var { MatchPattern } = require("sdk/util/match-pattern");
// var pattern = new MatchPattern(/https:\/\/cryptostorm\.is/favicon(-yes|-no)\.ico/);
// var pattern = new MatchPattern("https://cryptostorm.is/favicon*");

var csPanel = require("sdk/panel").Panel({
	width:420,
	height:37,
	contentURL: data.url("https://cryptostorm.is/test"),
});

require("sdk/widget").Widget({
	id: "cstormc",
	label: "Cryptostorm Checker",
	contentURL: data.url("https://cryptostorm.is/favicon.ico"),
	// contentURL: data.url(pattern),
	panel: csPanel,
});


