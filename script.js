const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const category = document.querySelector('#category');
const description = document.querySelector('#description');

const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${amount.value}</td>
        <td>${category.value}</td>
        <td>${description.value}</td>
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    console.log
    tbody.appendChild(row);

    amount.value = '';
    category.value = '';
    description.value = '';

    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

});
