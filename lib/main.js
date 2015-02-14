var data = require("sdk/self").data;

var csPanel = require("sdk/panel").Panel({
  width:420,
  height:98,
  contentURL: data.url("https://cryptostorm.is/test.cgi")
});

require("sdk/widget").Widget({
  id: "cstormc",
  label: "Cryptostorm Checker",
  contentURL: data.url("https://cryptostorm.is/test.cgi"),
  panel: csPanel
});
