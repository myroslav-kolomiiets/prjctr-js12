'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() === '') {
        taskInput.value = '';
        return;
    }

    createSingleTaskElement(taskInput.value);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
})

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        tasksList.innerHTML = '';
    }
})

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(deleteElement);

    tasksList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
