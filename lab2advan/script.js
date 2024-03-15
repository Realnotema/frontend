
function FirstTask() {
    let count = localStorage.getItem('pageReloadCount');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    alert('Вы загрузили/обновили эту страницу ' + count + ' раз.');
    localStorage.setItem('pageReloadCount', count);
}

function SecondTask() {
    let imageUrls = [];

    for (let i = 0; i < 5; i++) {
        let url = prompt(`Введите URL изображения ${i + 1}:`);
        if (url) {
            imageUrls.push(url);
        } else {
            alert("Вы не ввели URL изображения. Попробуйте снова.");
            i--; 
        }
    }

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onerror = function() {
            const errorPara = document.createElement('p');
            errorPara.textContent = "Can’t load image " + url;
            imageContainer.appendChild(errorPara);
        };
        imageContainer.appendChild(img);
        const emptyLine = document.createElement('br');
        imageContainer.appendChild(emptyLine);
    });
};

async function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Can’t load image ${url}`));
        img.src = url;
    });
}

async function ThirdTask() {
    let imageUrls = [];

    for (let i = 0; i < 5; i++) {
        let url = prompt(`Введите URL изображения ${i + 1}:`);
        if (url) {
            imageUrls.push(url);
        } else {
            alert("Вы не ввели URL изображения. Попробуйте снова.");
            i--; 
        }
    }

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    try {
        for (const url of imageUrls) {
            const img = await loadImage(url);
            imageContainer.appendChild(img);
            const emptyLine = document.createElement('br');
            imageContainer.appendChild(emptyLine);
        }
    } catch (error) {
        const errorPara = document.createElement('p');
        errorPara.textContent = error.message;
        imageContainer.appendChild(errorPara);
    }
}

async function FourthTask() {
    let imageUrls = [];

    for (let i = 0; i < 5; i++) {
        let url = prompt(`Введите URL изображения ${i + 1}:`);
        if (url) {
            imageUrls.push(url);
        } else {
            alert("Вы не ввели URL изображения. Попробуйте снова.");
            i--; 
        }
    }

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    try {
        for (const url of imageUrls) {
            const img = await loadImage(url);
            imageContainer.appendChild(img);
            const emptyLine = document.createElement('br');
            imageContainer.appendChild(emptyLine);
        }
    } catch (error) {
        const errorPara = document.createElement('p');
        errorPara.textContent = error.message;
        imageContainer.appendChild(errorPara);
    }
}

async function FifthTask() {
    const countries = ['Russia', 'Belarus', 'Afghanistan', 'China', 'Venezuela', 'Iran'];
    const ips = [];
    for (let i = 0; i < 5; i++) {
        const ip = prompt(`Введите IP-адрес ${i + 1}:`);
        if (ip) {
            ips.push(ip);
        } else {
            alert("Вы не ввели IP-адрес. Попробуйте снова.");
            i--;
        }
    }

    for (const ip of ips) {
        const url = `https://json.geoiplookup.io/${ip}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (countries.includes(data.country_name)) {
            alert(`Our services are not available in your country ${data.country_name}`);
            return;
        }
        }
    alert("Welcome to our website!");
        
    }