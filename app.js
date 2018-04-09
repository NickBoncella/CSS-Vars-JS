// Store inputs in var
const inputs = document.querySelectorAll('.controls input');

// Add event listeners to each input element
inputs.forEach(input => input.addEventListener('change', updateInputs));
inputs.forEach(input => input.addEventListener('mousemove', updateInputs));

// UPDATE INPUTS function
function updateInputs() {
  // store data-sizing attr in var for suffix to CSS style
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
