function formatNumber(num) {
    return num.toLocaleString('de-DE');
}

function berechne() {
    let betrag = parseFloat(document.getElementById('betrag').value);
    let abzug15 = parseFloat(document.getElementById('abzug15').value) / 100;
    let familie = document.getElementById('familienname').value;
    
    if (isNaN(betrag) || betrag <= 0) {
        alert("Bitte eine gültige Zahl eingeben.");
        return;
    }
    
    let nach10Prozent = Math.round(betrag * 0.90);
    let nach15Prozent = Math.round(betrag * (1 - abzug15));
    let umsatz = nach10Prozent - nach15Prozent;
    let einnahmen = Math.round(umsatz * 0.80);
    let abgabe = umsatz - einnahmen;
    let timestamp = new Date().toLocaleString();
    
    document.getElementById('nach10').innerText = formatNumber(nach10Prozent) + " €";
    document.getElementById('nach15').innerText = formatNumber(nach15Prozent) + " €";
    document.getElementById('umsatz').innerText = formatNumber(umsatz) + " €";
    document.getElementById('einnahmen').innerText = formatNumber(einnahmen) + " €";
    document.getElementById('abgabe').innerText = formatNumber(abgabe) + " €";
    document.getElementById('nach15-label').innerText = "Bekommt " + familie + ": " + formatNumber(nach15Prozent) + " €";
    
    let logList = document.getElementById('log-list');
    let logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    logEntry.innerHTML = `<span>${timestamp} - ${familie} | Schwarzgeld: ${formatNumber(betrag)} € | Gewinn: ${formatNumber(einnahmen)} € | Abgabe an La Morte: ${formatNumber(abgabe)} €</span>
                          <button class='delete-button' onclick='deleteEntry(this)'>X</button>`;
    logList.appendChild(logEntry);
}

function deleteEntry(button) {
    if (button.parentElement) {
        button.parentElement.remove();
    }
}

function showLog() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('log-container').style.display = 'block';
}

function showCalculator() {
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('log-container').style.display = 'none';
}
