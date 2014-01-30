var beers = {
	'angry monk' : {
		hops : ['northern brewer', 'us liberty']
		// malt : ['pale malt', 'special b','honey malt','crystal malt 15','crystal malt 45']
		// flavor : ['spicy','yeasty','wheat','caramel','dried fruit']
	},
	'black immaculate' : {
		hops : ['dry hopped','northern brewer','cascade','columbus','falconers flight']
		// malt : ['pale malt','munich','crystal malt 45','black malt'],
		// flavor : ['roasty']
	},
	'canniption' : {
		hops : ['northern brewer','cascade','columbus','centennial']
	},
	'es bueno' : {
		hops : ['northern brewer','us liberty','cascade','goldings']
	},
	'hoffmeister' : {
		hops : ['saaz']
	},
	'lion heart' : {
		hops : ['northern brewer','us liberty','goldings']
	},
	'obsfucation' : {
		hops : ['goldings','saaz']
	},
	'st marks' : {
		hops : ['northern brewer','goldings']
	},
	'third kingdom' : {
		hops : ['dry hopped','northern brewer','us liberty','cascade','centennial','goldings']
	},
	'trippel lutz' : {
		hops : ['northern brewer','goldings','saaz']
	},
	'recretional smoke' : {
		hops : ['northern brewer','us liberty','goldings']
	},
	'daisy cutter' : {
		hops : ['northern brewer','saaz']
	}
}

var beerList = [
	{name:'angry monk',hops : ['northern brewer', 'us liberty']},
	{name:'black immaculate',hops : ['dry hopped','northern brewer','cascade','columbus','falconers flight']},
	{name:'canniption',hops : ['northern brewer','cascade','columbus','centennial']},
	{name:'es bueno',hops : ['northern brewer','us liberty','cascade','goldings']},
	{name:'hoffmeister',hops : ['saaz']},
	{name:'lion heart',hops : ['northern brewer','us liberty','goldings']},
	{name:'obsfucation',hops : ['goldings','saaz']},
	{name:'st marks',hops : ['northern brewer','goldings']},
	{name:'third kingdom',hops : ['dry hopped','northern brewer','us liberty','cascade','centennial','goldings']},
	{name:'trippel lutz',hops : ['northern brewer','goldings','saaz']},
	{name:'recretional smoke',hops : ['northern brewer','us liberty','goldings']},
	{name:'daisy cutter',hops : ['northern brewer','saaz']}
]
ratings = []
for (var i=0;i<beerList.length;i++){
	beerList[i].rating = (parseInt(prompt('Rate ' + beerList[i].name + ' from 1 to 10')))
}



beerList.sort(function(a,b){ 
	return b.rating - a.rating 
})

var faveHops = {
	'dry hopped' : 0,
	'northern brewer' : 0,
	'us liberty' : 0,
	'cascade' : 0,
	'columbus' : 0,
	'falconers flight' : 0,
	'centennial' : 0,
	'goldings' : 0,
	'saaz' : 0,
}

for(var i=0; i<5;i++){
	for(var hop=0;hop<beerList[i].hops.length;hop++){
		console.log(beerList[i].hops[hop])
		faveHops[beerList[i].hops[hop]]++
	}
}

var hopList = []
for (hop in faveHops){
	hopList.push({name:hop,rating:faveHops[hop]})
}

hopList.sort(function(a,b){
	return b.rating - a.rating
})
// for (var beer=0; i<5; i++){
// 	for(var hop=0; hop<beers[beerList[beer].name].hops.length;hop++){
// 		faveHops[beers[beerList[beer].name].hops[hop]]++
// 	}
// }

$(document).ready(function(){
    setInterval(function(){
        // $('.buck-wild').css('font-size', Math.floor(Math.random()*100))
        $('.buck-wild').css('background-color', '#' + Math.floor(Math.random()*1000))
    },100)
	var newHopList = []
	for(var i=0;i<3;i++){
		newHopList.push(hopList[i])
		$('body').append($('<h2>' + hopList[i].name + '</h2>'))
	}
	hopList = newHopList

})