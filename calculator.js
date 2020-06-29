var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



function calculateReward(startSystem,endSystem,collateral,volume) {
	
	fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

	
	
	
	window.alert(data);
  
  
}
//https://esi.evetech.net/latest/route/30002187/30000142/?datasource=tranquility&flag=secure




getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    alert('Your query count: ' + data.query.count);
  }
});