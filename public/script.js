function generateTriangle () {
    const inputNumber = document.getElementById('inputNumber').value;

    if(!/^\d+$/.test(inputNumber)) {
        alert("input harus berupa angka positif");
    };

    // ajax
    fetch('/generate-triangle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ inputNumber: inputNumber})
    })
    .then(response => response.json())
    .then(data => {
        // menampilkan result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error bro', error));
}

function generateOddNumbers () {
    const inputNumber = document.getElementById('inputNumber').value;
    if(!/^\d+$/.test(inputNumber)) {
        alert("input harus berupa angka positif");
    };

    // ajax
    fetch('/generate-ganjil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ inputNumber: inputNumber})
    })
    .then(response => response.json())
    .then(data => {
        // menampilkan result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error bro', error));
}

function generatePrimeNumbers () {
    const inputNumber = document.getElementById('inputNumber').value;
    if(!/^\d+$/.test(inputNumber)) {
        alert("input harus berupa angka positif");
    };

    // ajax
    fetch('/generate-prima', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ inputNumber: inputNumber})
    })
    .then(response => response.json())
    .then(data => {
        // menampilkan result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error bro', error));
}