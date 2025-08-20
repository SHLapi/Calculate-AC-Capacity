document.addEventListener('DOMContentLoaded', () => {

  
  const heightInput = document.getElementById('height_value');
  const widthInput = document.getElementById('width_value');
  const depthInput = document.getElementById('depth_value');
  const output = document.getElementById('output_value');
  const roofCheck = document.getElementById('exposed');
  const unitSelect = document.getElementById('unit');
  const submitBtn = document.getElementById('submit-btn');

  
  const BTU_MULTIPLIER = 250;
  const BTU_MULTIPLIER_EXPOSED = 300;
  const BTU_TO_HORSEPOWER = 8000;
  const BTU_TO_TON = 12000;

  
  submitBtn.addEventListener('click', getCapacity);
  function getCapacity() {
    
    const height = parseFloat(heightInput.value);
    const width = parseFloat(widthInput.value);
    const depth = parseFloat(depthInput.value);

    
    if (isNaN(height) || isNaN(width) || isNaN(depth)) {
      output.innerHTML = "Please enter valid numbers in all fields";
      return;
    }
    
    if (unitSelect.value === "") {
      output.innerHTML = "Please select a unit";
      return;
    }

    
    const multiplier = roofCheck.checked ? BTU_MULTIPLIER_EXPOSED : BTU_MULTIPLIER;
    
    
    const volumeInBTU = height * width * depth * multiplier;

    let result = "";

    
    switch (unitSelect.value) {
      case '1': // BTU
        result = `${volumeInBTU.toFixed(1)} BTU`;
        break;
      case '2': // Horse
        result = `${(volumeInBTU / BTU_TO_HORSEPOWER).toFixed(1)} Horse`;
        break;
      case '3': // Ton
        result = `${(volumeInBTU / BTU_TO_TON).toFixed(1)} Ton`;
        break;
    }
    output.innerHTML = result;
  }
});