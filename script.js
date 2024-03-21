 document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const resetBtn = document.getElementById('reset-btn');
    let hoverCount = 0;

    function createGrid(size) {
        container.innerHTML = '';
        container.style.setProperty('--grid-size', size);

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }

    function hoverEffect(event) {
        if (event.target.classList.contains('square')) {
            // Randomize RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            // Progressive darkening effect
            hoverCount++;
            if (hoverCount <= 10) {
                const opacity = 1 - (hoverCount * 0.1);
                event.target.style.opacity = opacity;
            }
        }
    }

    function resetGrid() {
        let newSize = prompt('Enter the number of squares per side for the new grid (max 100):');
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
        hoverCount = 0; // Reset hover count
    }

    container.addEventListener('mouseover', hoverEffect);
    resetBtn.addEventListener('click', resetGrid);

    createGrid(16); // Initial grid size
});
