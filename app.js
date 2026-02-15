let currentNumber = "";

/**
 * Menambah nombor ke paparan
 * @param {string} num 
 */
function press(num) {
    // Memberi kesan getaran (haptic feedback) 50ms jika disokong oleh peranti
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    currentNumber += num;
    updateDisplay();
}

/**
 * Memadam nombor terakhir (Backspace)
 */
function backspace() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
    
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

/**
 * Fungsi untuk mengemaskini elemen paparan di HTML
 */
function updateDisplay() {
    const displayElement = document.getElementById('phone-number');
    if (displayElement) {
        displayElement.innerText = currentNumber;
    }
}

/**
 * Melancarkan aplikasi panggilan peranti
 */
function makeCall() {
    if (currentNumber) {
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]); // Getaran corak berkembar
        }
        window.location.href = `tel:${currentNumber}`;
    } else {
        alert("Sila masukkan nombor telefon terlebih dahulu.");
    }
}

/**
 * Pendaftaran Service Worker untuk keupayaan PWA (Offline & Installable)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker: Berjaya didaftarkan (Scope: ' + reg.scope + ')'))
            .catch(err => console.log('Service Worker: Gagal didaftarkan', err));
    });
}
