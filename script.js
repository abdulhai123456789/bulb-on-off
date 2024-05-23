const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (bulb.src.includes('vector-bulb-on-off-mode-260nw-668906899.jpg')) {
        bulb.src = 'vector-bulb-on-off-mode-260nw-668906899.png';
        toggleButton.textContent = 'Turn Off';
    } else {
        bulb.src = 'vector-bulb-on-off-mode-260nw-668906899.jpg';
        toggleButton.textContent = 'Turn On';
    }
});
