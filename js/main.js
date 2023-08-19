console.log('Raman is live now');

function calculate() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    h = h * 0.01;
    let r = w / Math.pow(h, 2);

    r = r.toFixed(1);
    if (r === 'Infinity' || r === '-Infinity' || r === 'NaN') {
        document.getElementById('result').innerHTML = '0.0';
    } else {
        document.getElementById('result').innerHTML = r;
    }


}