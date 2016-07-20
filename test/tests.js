/*
toss unit tests - using qUnit
*/

window.onload = function(){

	var testElem = document.getElementById( "testelem" );




		/* TESTS HERE */
		test( 'API Properties: toss is defined', function() {
			ok( toss );
		});

		test( 'API Properties: toss is an object', function() {
			ok( typeof( toss ) === "object" );
		});

		test( 'API Properties: toss.toss is defined', function() {
			ok( toss.toss );
		});

		test( 'API Properties: toss.toss is a function', function() {
			ok( typeof( toss.toss ) === "function" );
		});


		test( 'toss.toss method returns object of values', function(){
			var to = toss.toss(testElem);
			ok( typeof to === "object", "Object returned from toss method" );
		});

		test( 'toss.toss methods return includes top value', function(){
			var to = toss.toss(testElem);
			ok( to.top !== undefined, "Top is defined" );
		});

		test( 'toss.toss methods return top value is a number', function(){
			var to = toss.toss(testElem);
			ok( typeof to.top === "number", "Top is a number" );
		});

		test( 'toss.toss methods return includes left value', function(){
			var to = toss.toss(testElem);
			ok( to.left !== undefined, "Left is defined" );
		});

		test( 'toss.toss methods return left value is a number', function(){
			var to = toss.toss(testElem);
			ok( typeof to.left === "number", "Left is a number" );
		});


		test( "toss.toss returns overridden top absolute value", function(){
			var to = toss.toss( testElem, { top: 500 } );
			ok(  to.top === 500, "Top equals 500" );
		});

		test( "toss.toss returns expected overridden top relative value", function(){
			testElem.scrollTop = 10;
			var newtop = "+10",
				expected = testElem.scrollTop + 10;

			var to = toss.toss( testElem, { top: newtop } );
			ok(  to.top === expected, "Top returns expected value" );
		});

		test( "toss.toss returns expected overridden left relative value", function(){
			testElem.scrollLeft = 10;
			var newleft = "+10",
				expected = testElem.scrollLeft + 10;

			var to = toss.toss( testElem, { left: newleft } );
			ok(  to.left === expected, "Left returns expected value" );
		});

		test( "toss.toss returns expected overridden top negative relative value", function(){
			testElem.scrollTop = 10;
			var newtop = "-10",
				expected = testElem.scrollTop - 10;

			var to = toss.toss( testElem, { top: newtop } );
			ok(  to.top === expected, "Top returns expected value" );
		});

		test( "toss.toss returns expected overridden left negative relative value", function(){
			testElem.scrollLeft = 10;
			var newleft = "-10",
				expected = testElem.scrollLeft - 10;

			var to = toss.toss( testElem, { left: newleft } );
			ok(  to.left === expected, "Left returns expected value" );
		});




		test( "toss.toss returns overridden left absolute value", function(){
			var to = toss.toss( testElem, { left: 200 } );
			ok(  to.left === 200, "Left equals 200" );
		});

		asyncTest( "toss.toss returns callback after completed", function(){
			newTestElem.scrollLeft = 0;
			expect(1);
			toss.toss( newTestElem, { left: 100, finished: function(){
				ok( "Toss is complete" );
				start();
			} } );
		});





};
