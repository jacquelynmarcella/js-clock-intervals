var secondsHand = document.getElementById("second");
var minutesHand = document.getElementById("minute");
var hoursHand = document.getElementById("hour");

var seconds = 0;
var minutes = 0;
var hours = 0;

var updateSeconds = function () {
	var secondsDegree = (seconds / 60) * 360;
	secondsHand.style.transform = "rotate(" + secondsDegree + "deg)";
};

var updateMinutes = function() {
	var minutesDegree = (minutes / 60) * 360;
	minutesHand.style.transform = "rotate(" + minutesDegree + "deg)";
};

var updateHours = function() {
	var hoursDegree = (hours / 12) * 360;
	hoursHand.style.transform = "rotate(" + hoursDegree + "deg)";
};


// INITIAL CODE TO SET UP CLOCK WITHOUT CURRENT TIME (STARTS AT ZERO):

// var startClock = function() {
// 	var secondsCounter = function() {
// 		seconds++;
// 		updateSeconds();
// 	};
// 	var minutesCounter = function() {
// 		minutes++;
// 		updateMinutes();
// 	};
// 	var hoursCounter = function() {
// 		hours++;
// 		updateHours();
// 	};
// 	setInterval(secondsCounter, 1000);
// 	setInterval(minutesCounter, 60000);
// 	setInterval(hoursCounter, 3600000);
// };

// startClock();


// CLOCK WITH CURRENT TIME:

var checkCurrentTime = function() {
	var now = new Date();
	seconds = now.getSeconds();
	minutes = now.getMinutes();
	hours = now.getHours();
	updateMinutes();
	updateHours();
	updateSeconds();
};

checkCurrentTime();
setInterval(checkCurrentTime, 1000);








