var main = require("./main");

exports["test main"] = function(assert) {
  assert.pass("Unit test running!");
};

exports["test main async"] = function(assert, done) {
  assert.pass("async Unit test running!");
  done();
};

require("sdk/test").run(exports);

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.mozilla.org/");
}
