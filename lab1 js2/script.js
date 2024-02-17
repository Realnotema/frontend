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
    var inputString = document.getElementById('number1').value;
    var number = inputString.split(',').map(Number);
    number.sort(function cmp(a, b){
        return a - b
    })
    var sortedString = number.join(', ');
    document.getElementById('result1').textContent = sortedString;
});

document.getElementById('task2').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputString = document.getElementById('number2').value;
    var number = inputString.split(',').map(Number);
    for (let i = 0; i < number.length; i++) {
        number[i] = number[i] % 5;
    }
    var result = number.join(', ');
    document.getElementById('result2').textContent = result;
});

function median(...numbers) {
    numbers.sort((a, b) => a - b);
    const length = numbers.length;
    const isEven = length % 2 === 0;
    
    if (isEven) {
        const midIndex = length / 2;
        return (numbers[midIndex - 1] + numbers[midIndex]) / 2;
    } else { 
        const midIndex = Math.floor(length / 2);
        return numbers[midIndex];
    }
}

document.getElementById('task3').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputString = document.getElementById('number3').value;
    var number = inputString.split(',').map(Number);
    var result1 = median.apply(null, number);
    document.getElementById('result3.1').textContent = "Классическая передача - " + result1;
    var result2 = median(...number)
    document.getElementById('result3.2').textContent = "Распаковка - " + result2;
});

document.getElementById('task3').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputString = document.getElementById('number3').value;
    var number = inputString.split(',').map(Number);
    var result1 = median.apply(null, number);
    document.getElementById('result3.1').textContent = "Классическая передача - " + result1;
    var result2 = median(...number)
    document.getElementById('result3.2').textContent = "Распаковка - " + result2;
});

function isBalanced(str) {
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (currentChar === '(') {
            stack.push(currentChar);
        } else if (currentChar === ')') {
            if (stack.length === 0) {
                return "Неправильная";
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? "Правильная" : "Неправильная";
}

document.getElementById('task4').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputString = document.getElementById('text4').value;
    var stack = [];

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            stack.push('(');
        } else if (inputString[i] === ')') {
            if (stack.length === 0) {
                document.getElementById('result4').textContent = "Неправильная";
                return;
            } else {
                stack.pop();
            }
        }
    }
    document.getElementById('result4').textContent = stack.length === 0 ? "Правильная" : "Неправильная";
});

function copy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy;
    if (Array.isArray(obj)) {
        copy = [];
        obj.forEach((item, index) => {
            copy[index] = copy(item);
        });
    } else {
        copy = {};
        Object.keys(obj).forEach((key) => {
            copy[key] = copy(obj[key]);
        });
    }

    return copy;
}

document.getElementById('task5').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputString = document.getElementById('text5').value;
    
    document.getElementById('result5').textContent = copyObject;
});