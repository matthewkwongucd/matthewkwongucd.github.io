
const apiKey = "ZziyfZIZplQ1ryLkR4yGcSM93JTcnpZJ";
const q = ["bullying", "bully"];
console.log(q);
// const path = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&q=${q[Math.floor(Math.random()*q.length)]}`;
const path = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&q=${q}`;
console.log(path);

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
	// console.log(json.data[Math.floor(Math.random()*json.data.length)].images.fixed_width.url); //gets RANDOM image

	const background = document.getElementById('background');
	let resultsHTML = '';

	// json.data.forEach(function(obj){
		// console.log(obj.images.fixed_width.url); //img url

		const url = json.data[Math.floor(Math.random()*json.data.length)].images.fixed_width.url; //img url
		// list.push(url);

		resultsHTML += `<img src = "${url}"
		 								width = "100%"
										alt = "${json.data.title}">` //append to background


	background.innerHTML = resultsHTML;

}).catch(function(error){
	console.log(error.message);
});