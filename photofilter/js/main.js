const inputs = document.querySelectorAll('label input');
const reset = document.querySelector('.btn-reset');
const img = document.querySelector('.main__img');
const preset = document.querySelector('.preset');
const preset_1 = document.querySelector('.preset_1');
const preset_2 = document.querySelector('.preset_2');
const preset_3 = document.querySelector('.preset_3');
const preset_4 = document.querySelector('.preset_4');
const preset_5 = document.querySelector('.preset_5');
const preset_6 = document.querySelector('.preset_6');
const fileInput = document.getElementById("fileLoad");


const defaults = {
    blur: "0px",
    invert: "0%",
    "hue-rotate": "0deg",
    contrast: "100%",
    brightness: "100%",
    opacity: "100%",
  };

  function handleUpdate() {

    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 
    const output = document.querySelector(`output[name=${this.name}]`);
    output.innerHTML = this.value;
 
 
 }

  function setFilters(filters) {
    img.style.filter = '';
    filters = { ...defaults, ...filters };
    for (const key in filters) {
        document.documentElement.style.setProperty(`--${key}`, filters[key]);
      const range = document.querySelector(`input[name=${key}]`);
      const output = document.querySelector(`output[name=${key}]`);
      range.value = filters[key].match(/\d+/);
      output.value = range.value;
    }
  }
  
  function resetFilters() {
    setFilters(defaults);
  }

  function changePreset() {
    img.style.filter = '';
  }

  function changePreset_1() {
    img.style.filter = 'invert(25%) hue-rotate(140deg) contrast(145%)';
    const output = document.querySelector('output[name="invert"]');
    const output_2 = document.querySelector('output[name="contrast"]');
    const output_3 = document.querySelector('output[name="hue-rotate"]');
    
    invert.value = '25%';
    contrast.value = '145%';

    output.value = '25';
    output_2.value = '140';
    output_3.value = '145';

  }

  function changePreset_2() {
    img.style.filter = 'contrast(120%) hue-rotate(40deg)'

    const output_2 = document.querySelector('output[name="contrast"]');
    const output_3 = document.querySelector('output[name="hue-rotate"]');

    output_2.value = '120';
    output_3.value = '40';
  }

  function changePreset_3() {
      img.style.filter = 'invert(20%) contrast(120%) brightness(110%)'
      const output = document.querySelector('output[name="invert"]');
      const output_1 = document.querySelector('output[name="contrast"]');
      const output_2 = document.querySelector('output[name="brightness"]');

      output.value = '20';
      output_1.value = '120';
      output_2 .value = '110';
  }

  function changePreset_4() {
      img.style.filter = 'brightness(170%) contrast(160%)';

      const output_1 = document.querySelector('output[name="contrast"]');
      const output_2 = document.querySelector('output[name="brightness"]');

      output_1.value = '160';
      output_2 .value = '170';
  }

  function changePreset_5() {
      img.style.filter = 'hue-rotate(60deg) contrast(160%) brightness(160%)';

      const output_1 = document.querySelector('output[name="contrast"]');
      const output_2 = document.querySelector('output[name="brightness"]');
      const output_3 = document.querySelector('output[name="hue-rotate"]');

      output_1.value = '160';
      output_2 .value = '160';
      output_3.value = '60';
  }

  function changePreset_6() {
    img.style.filter = 'hue-rotate(180deg)';

    const output_3 = document.querySelector('output[name="hue-rotate"]');
    output_3.value = '180';
  }

  
  function loadImage() {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
  
  
  
    reader.onload = () => {
      img.src = reader.result;
      preset.src = reader.result;
      preset_1.src = reader.result;
      preset_2.src = reader.result;
      preset_3.src = reader.result;
      preset_4.src = reader.result;
      preset_5.src = reader.result;
      preset_6.src = reader.result;
     
    };
    reader.readAsDataURL(file);
    // reset fileinput
    fileInput.value = "";
  }


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

reset.addEventListener('click', resetFilters);
preset.addEventListener('click', changePreset);
preset_1.addEventListener('click', changePreset_1);
preset_2.addEventListener('click', changePreset_2);
preset_3.addEventListener('click', changePreset_3);
preset_4.addEventListener('click', changePreset_4);
preset_5.addEventListener('click', changePreset_5);
preset_6.addEventListener('click', changePreset_6);

fileInput.addEventListener("change", loadImage);

console.log('разобраться в коде другого проекта [+10]');
console.log('обязательный дополнительный функционал (два доп фильтра + пресеты) [+10]');
console.log('дополнительный функционал (кнопка load picture, Reset) [+20]');
console.log('Total [30]');
