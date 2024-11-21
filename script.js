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
  
  function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.getElementById("conversion-type").value;
  
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
        document.getElementById("result").innerText = "Por favor, seleccione una conversión válida.";
        return;
    }
  
    document.getElementById("result").innerText = `Resultado: ${result.toFixed(2)} ${unit}`;
  }
