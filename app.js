function getCapacity(){
  let h = document.getElementById('height_value').value;
  let w = document.getElementById('width_value').value;
  let d = document.getElementById('depth_value').value;
  let output = document.getElementById('output_value');
  let roof = document.getElementById('ck-btn');
  let unit = document.getElementById('unit')

  if (unit.value == 1){
    roof.checked ? output.innerHTML = (h*w*d*300) + " Unit" : output.innerHTML = (h*w*d*250) + " Unit";
  }
  if (unit.value == 2){
    roof.checked ? output.innerHTML = (h*w*d*300/8000) + " Horse" : output.innerHTML = (h*w*d*250/8000) + " Horse";
  }
  if (unit.value == 3){
    roof.checked ? output.innerHTML = (h*w*d*300/12000) + " Ton" : output.innerHTML = (h*w*d*250/12000) + " Ton";
  }
}