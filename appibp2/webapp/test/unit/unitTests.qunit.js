/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appibp2/appibp2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
