;(function(){
	"use strict";

	var playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"            
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"            
	},
	{
		author: "bon jovi",
		song: "livin' on a prayer",
		duration: "3:40"            
	}
	];

	var playListEl = document.getElementById('playlist');
	var playListTemplate = document.getElementById('playlist-li').innerHTML;
	var playListHTML = '';

	playList.forEach(function(audio) {
		// console.log(audio);
		playListHTML += playListTemplate
			.replace(/{{author}}/ig, audio.author)
			.replace(/{{duration}}/ig, audio.duration)
			.replace(/{{song}}/ig, audio.song);
	});

	playListEl.innerHTML = playListHTML;

})();
