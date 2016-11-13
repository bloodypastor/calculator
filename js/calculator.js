
function calculate () {
	var amount = document.getElementById('amout');
	var apr = document.getElementById('apr');
	var years = document.getElementById('years');
	var zipcode = document.getElementById('zipcode');
	var payment = document.getElementById('payment');
	var total =document.getElementById('total');
	var totalinterest = document.getElementById('totalinterest');

// переведення періода платежів в роках в кількість місячних платежів

	var principal = parseFloat(amount.value);
	var interest = parseFloat(apr.value) / 100 / 12;
	var payments = parseFloat(years.value) * 12;

// вираховуємо суму щомісячного платежу
	
	var x = Math.pow( 1 + interest, payments); // Math.pow() вираховує степінь
	var monthly = (principal * x * interest) / (x - 1);

	if (isFinite(monthly)) {
		payment.innerHTML = monthly.toFixed(2);
		total.innerHTML = (monthly * payments).toFixed(2);
		totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

		save(amount.value, apr.value, years.value, zipcode.value);

		try {
			getLenders(amount.value, apr.value, years.value, zipcode.value);
		}
	catch(e) {/* Ignore errors */ }

	chart(principal, interest, monthly, payments);
	}
	else {
		payment.innerHTML = '';
		total.innerHTML = '';
		totalinterest.innerHTML = '';
		chart();
	}
};

function save(amount, apr, years, zipcode) {
	if (window.localStorage) {
		localStorage.loan_amount = amount;
	localStorage.loan_apr = apr;
	localStorage.loan_years = years;
	localStorage.loan_zipcode = zipcode;
	}
	
};

window.onload = function() {
	if (window.localStorage && localStorage.loan_amount) {
		document.getElementById('amount').value = localStorage.loan_amount;
		document.getElementById('apr').value = localStorage.loan_apr;
		document.getElementById('years').value = localStorage.loan_years;
		document.getElementById('zipcode').value = localStorage.loan_zipcode;
	}
};
