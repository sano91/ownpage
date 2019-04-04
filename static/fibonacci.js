const data = [1, 1, 2, 3, 5, 8, 13, 21];  // Fibonacci ❤

document.querySelector('#fibonacci-container').innerHTML = `
    <ul class="fibonacci-list">
        ${data.map(item => 
            `<li class="number-${item % 2 === 0 ? 'even': 'odd'}">${item}</li>`
        ).join('')}
    </ul>
`;

document.querySelectorAll('.fibonacci-list li').forEach(listItem =>
    listItem.addEventListener('click', function() {
        this.classList.toggle('selected');
    })
);