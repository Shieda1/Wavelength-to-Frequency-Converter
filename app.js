// https://calculator.swiftutors.com/wavelength-to-frequency-converter.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const frequencyoftheLightRadio = document.getElementById('frequencyoftheLightRadio');
const velocityoftheLightRadio = document.getElementById('velocityoftheLightRadio');
const wavelengthoftheLightRadio = document.getElementById('wavelengthoftheLightRadio');

let frequencyoftheLight;
let velocityoftheLight = v1;
let wavelengthoftheLight = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

frequencyoftheLightRadio.addEventListener('click', function() {
  variable1.textContent = '(v) Velocity of the Light (m/s)';
  variable2.textContent = '(λ) Wavelength of the Light (nm)';
  velocityoftheLight = v1;
  wavelengthoftheLight = v2;
  result.textContent = '';
});

velocityoftheLightRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency of the Light (Hz)';
  variable2.textContent = '(λ) Wavelength of the Light (nm)';
  frequencyoftheLight = v1;
  wavelengthoftheLight = v2;
  result.textContent = '';
});

wavelengthoftheLightRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency of the Light (Hz)';
  variable2.textContent = '(v) Velocity of the Light (m/s)';
  frequencyoftheLight = v1;
  velocityoftheLight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(frequencyoftheLightRadio.checked)
    result.textContent = `Frequency of the Light = ${computeFrequencyoftheLight().toFixed(2)} Hz`;

  else if(velocityoftheLightRadio.checked)
    result.textContent = `Velocity of the Light = ${computeVelocityoftheLight().toFixed(2)} m/s`;

  else if(wavelengthoftheLightRadio.checked)
    result.textContent = `Wavelength of the Light = ${computeWavelengthoftheLight().toFixed(2)} nm`;
})

// calculation

function computeFrequencyoftheLight() {
  return Number(velocityoftheLight.value) / Number(wavelengthoftheLight.value);
}

function computeVelocityoftheLight() {
  return Number(frequencyoftheLight.value) * Number(wavelengthoftheLight.value);
}

function computeWavelengthoftheLight() {
  return Number(velocityoftheLight.value) / Number(frequencyoftheLight.value);
}