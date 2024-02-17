const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

document.getElementById('task1').addEventListener('submit', function(event) {
    event.preventDefault();
    var monthNumber = parseInt(document.getElementById('monthNumber').value);

    if (monthNumber >= 1 && monthNumber <= 12) {
        var months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ];
        var monthName = months[monthNumber - 1];
        document.getElementById('result1').textContent = "Месяц: " + monthName;
    } else {
        document.getElementById('result1').textContent = "Некорректный номер месяца";
    }
});

document.getElementById('task2').addEventListener('submit', function(event) {
    event.preventDefault(); 
	var numb = parseInt(document.getElementById('count').value);
    let list = [];

    for (let num = 2; list.length < n; num++) {
        if (checkPrime(num)) list.push(num);
    }

    alert(list.join(" "));

    function checkPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false; 
        return num > 1;
    }
});

const Counter = {
	count: 0,

	add: function(value) {
		this.count += value;
	},

	sub: function(value) {
		this.count -= value;
	}
};

document.getElementById('task3').addEventListener('submit', function(event) {
        event.preventDefault();
		var cntAdd = parseInt(document.getElementById('cntAdd').value);
        const action = event.submitter.value;

        if (action === 'add') {
            Counter.add(cntAdd);
        } else if (action === 'sub') {
            Counter.sub(cntAdd);
        }

        document.getElementById('result3').textContent = "Текущее значение счетчика: " + Counter.count;
});

document.getElementById('task4').addEventListener('submit', function(event) {
	event.preventDefault();
	var inputString = document.getElementById('textik').value;
	let wordsArray = inputString.split(',');
	let resultString = wordsArray.join('.');
	document.getElementById('result4').textContent = "Результат: " + resultString;
});

document.getElementById('task5').addEventListener('submit', function(event) {
	event.preventDefault();
	var inputString = document.getElementById('palindrome').value;
	var reverseString = inputString.split('').reverse().join('');
	if (inputString === reverseString) {
		document.getElementById('result5').textContent = "Да";
	} else
		document.getElementById('result5').textContent = "Нет";
});
