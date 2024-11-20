function mmToCm(value) {
    return value / 10;
  }
  
  function cmToM(value) {
    return value / 100;
  }
  
  function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.getElementById("conversion-type").value;
  
    let result;
    let unit;
  
    if (conversionType === "mmToCm") {
      result = mmToCm(value);
      unit = "cm"; //
    } else if (conversionType === "cmToM") {
      result = cmToM(value);
      unit = "m";
    }
  
    document.getElementById("result").innerText = `Resultado: ${result} ${unit}`;
  }
