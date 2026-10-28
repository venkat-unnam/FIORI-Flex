sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"yvui5flex1/test/integration/pages/TravelMain.gen"
], function (JourneyRunner, TravelMainGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('yvui5flex1') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelMainGenerated: TravelMainGenerated
        },
        async: true
    });

    return runner;
});

