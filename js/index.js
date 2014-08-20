$(document).ready(function($) {
	var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis:true});
	var testCharge = board.create('point',[0,0], {name: 'Test Charge'});
	var p1 = board.create('point',[1,1], {face:'^'});
	var line = board.create('line', [testCharge, p1], {straightFirst:false, straightLast:false});
	var q1 = 2 * Math.pow(10, -6);

	//Constants
	var K = 8.99 * Math.pow(10, 9);

	function calculateField(p1, p2, charge){
		var x1 = p1.X(),
		    y1 = p1.Y(),
		    x2 = p2.X(),
		    y2 = p2.Y();

		    var R = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
		    $('#radius-1').html(R);

		    var E = ((K * charge)/Math.pow(R, 2));
		    $('#elec-field-1').html(E);
	}

	p1.on('drag', function(){
		calculateField(testCharge, p1, q1);
	});

	$('#calculate-button').click(function(event) {
		calculateField(testCharge, p1, q1);
	});
});