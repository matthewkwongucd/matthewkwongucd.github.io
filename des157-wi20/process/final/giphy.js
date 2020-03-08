
const apiKey = "ZziyfZIZplQ1ryLkR4yGcSM93JTcnpZJ";
const q = "bullying";
const type =  "random";

const path = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&q=${q}`;

// makes connection to server
// const promise = fetch(path); //Promise 1
//
// const promise2 = promise.then(function(response) { // Response is Promise 2
// 	return response.json() // Returns promise2
// });
//
// // gets JSON data from promise2
// promise2.then(function(json){
// 	console.log(json);
// });
// promise2.catch(function(error){
// 	console.log(error.message);
// }); //catches errors

// simplified version of above:
fetch(path).then(function(response) {
	return response.json()
}).then(function(json){

	// console.log(json.data); //array of gif results
	console.log(json.data); //array of gif results

	console.log(json.data[Math.floor(Math.random()*json.data.length)].images.fixed_width.url); //gets RANDOM image

	const background = document.getElementById('background');
	let resultsHTML = '';


	// const obj = json.parse(json);
	json.data.forEach(function(obj){


		const url = obj.images.fixed_width.url; //img url

		resultsHTML += `<img src = "${url}"
		 								width = "100%"
										alt = "${obj.title}">` //append to background
	});

	background.innerHTML = resultsHTML;

}).catch(function(error){
	console.log(error.message);
});
