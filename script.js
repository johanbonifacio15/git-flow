function mmToCm(value) {
    return value / 10;
  }
  
  function cmToMm(value) {
    return value * 10;
  }
  
  function cmToM(value) {
    return value / 100;
  }
  
  function mToCm(value) {
    return value * 100;
  }
  
  function ftToM(value) {
    return value * 0.3048;
  }
  
  function mToFt(value) {
    return value / 0.3048;
  }
  
  function inToFt(value) {
    return value / 12;
  }
  
  function ftToIn(value) {
    return value * 12;
  }
  
  function inToCm(value) {
    return value * 2.54;
  }
  
  function cmToIn(value) {
    return value / 2.54;
  }
  
  function showError(message) {
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");
  
    resultText.innerText = message;
    resultContainer.classList.add("show");
    resultContainer.style.backgroundColor = "#ffe6e6"; 
    resultContainer.style.color = "#cc0000"; 
  }
  
  function clearError() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.backgroundColor = "#e9f7ff"; 
    resultContainer.style.color = "#007BFF";
  }
  
  function convert() {
    const valueInput = document.getElementById("value");
    const conversionType = document.getElementById("conversion-type").value;
    // Validacion
    const value = parseFloat(valueInput.value);
    if (isNaN(value) || valueInput.value.trim() === "") {
        showError("Por favor, ingrese un valor numérico válido.");
        return;
      }
    // Conversiones
    let result;
    let unit;
  
    switch (conversionType) {
      case "mmToCm":
        result = mmToCm(value);
        unit = "cm";
        break;
      case "cmToMm":
        result = cmToMm(value);
        unit = "mm";
        break;
      case "cmToM":
        result = cmToM(value);
        unit = "m";
        break;
      case "mToCm":
        result = mToCm(value);
        unit = "cm";
        break;
      case "ftToM":
        result = ftToM(value);
        unit = "m";
        break;
      case "mToFt":
        result = mToFt(value);
        unit = "ft";
        break;
      case "inToFt":
        result = inToFt(value);
        unit = "ft";
        break;
      case "ftToIn":
        result = ftToIn(value);
        unit = "in";
        break;
      case "inToCm":
        result = inToCm(value);
        unit = "cm";
        break;
      case "cmToIn":
        result = cmToIn(value);
        unit = "in";
        break;
      default:
        showError("Por favor, seleccione un tipo de conversión válido.");
        return;
    }
    // Resultado
    clearError();
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");
  
    resultText.innerText = `Resultado: ${result.toFixed(2)} ${unit}`;
    resultContainer.classList.add("show");
  }
  
    document.getElementById("result").innerText = `Resultado: ${result.toFixed(2)} ${unit}`;

    resultContainer.classList.add("show");
  }
