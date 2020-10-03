function calcDays() {
	const days = {};
	var date1 = new Date('09/01/2018'); 
	var date2 = new Date();
	
	// To calculate the time difference of two dates 
	var Difference_In_Time = date2.getTime() - date1.getTime(); 
	
	// To calculate the no. of days between two dates 
	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
	
	//To display the final no. of days (result) 
	const daysRes = Difference_In_Days;
	const sayDays = function() { 
		console.log('Total number of days between dates  <br>'
							 + date1 + '<br> and <br>'
							 + date2 + ' is: <br> '
							 + Difference_In_Days);
	};
	days.daysRes = daysRes;
	days.sayDays = sayDays;
	return days;
}

const myDays = calcDays();
const outDays = document.querySelector('#outDays');
const btnGetDays = document.querySelector('#btnGetDays');

btnGetDays.onclick = () => {
	outDays.textContent = 'Total number of days is '
							 + myDays.daysRes + ' Days';
};
