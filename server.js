const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.json());

app.post('/generate-triangle', (req, res) => {
    const inputNumber = parseInt(req.body.inputNumber);

    let result = '';
    for (let i = 1; 1 <= inputNumber; i++){
        result += '0'.repeat(inputNumber - i) + i.toString().repeat(i)
    } 
    res.json({result : result})

});

app.post('/generate-ganjil', (req, res) => {
    const inputNumber = parseInt(req.body.inputNumber);
    
    let result = '';
    for (let i = 0; 1 <= inputNumber; i++) {
        if (i % 2 !== 0) {
            result += i + '\n';
        }
    }
    res.json({ result: result});
});

function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sor(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

app.post('/generate-prima', (req, res) => {
    const inputNumber = parseInt(req.body.inputNumber);
    
    let result = '';
    for (let i = 2; i <= inputNumber; i++) {
        if(isPrime(i)) {
            result += i + '\n'
        }
    }
    res.json({result : result})

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})