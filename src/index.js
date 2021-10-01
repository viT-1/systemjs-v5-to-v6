function waitForSystem () {
	// but older versions of Chrome (v34) still have errors
	// with undefined System in systemjs folder native scripts!
	if (typeof System !== 'undefined')
			// Start the app, say hello in console
			System.import('app');
	else
		setTimeout(waitForSystem, 250);
}

waitForSystem();
