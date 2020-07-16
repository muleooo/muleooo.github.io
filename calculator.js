alert("This alert box was called with the onload event");

function calculateReward(var startSystem,var endSystem, var collateral, var volume){
	var startSystem = 30002187;
	var endSystem = 30000142;
	var route;
	
	$.getJSON('https://esi.evetech.net/latest/route/'+startSystem+'/'+endSystem+'/?datasource=tranquility&flag=secure', function(route) {
		console.log(route);
	});

	for (var i = 0; i < route.length; i++) {
		console.log(route[i]);
	}
  //fetch('https://esi.evetech.net/latest/route/'+startSystem+'/'+endSystem+'/?datasource=tranquility&flag=secure')
  //https://esi.evetech.net/latest/universe/systems/30003491/?datasource=tranquility&language=en-us
  
  
  
  //https://esi.evetech.net/latest/universe/system_jumps/?datasource=tranquility
  //https://esi.evetech.net/latest/universe/system_kills/?datasource=tranquility
}

var startSystem = 30002187;
var endSystem = 30000142;
$.getJSON('https://esi.evetech.net/latest/route/'+startSystem+'/'+endSystem+'/?datasource=tranquility&flag=secure', function(route) {
	console.log(route);
	for (var i = 0; i < route.length; i++) {
		console.log(route[i]);
	}
});