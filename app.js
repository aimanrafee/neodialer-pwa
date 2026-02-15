let currentNumber = "";

function press(num) {
    currentNumber += num;
    document.getElementById('phone-number').innerText = currentNumber;
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    document.getElementById('phone-number').innerText = currentNumber;
}

function makeCall() {
    if(currentNumber) {
        window.location.href = `tel:${currentNumber}`;
    }
}

// Daftarkan Service Worker untuk PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
