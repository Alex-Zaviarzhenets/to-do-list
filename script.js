const task = document.body.getElementsByTagName('input')[0];
const containerTasks = document.body.getElementsByTagName('div')[0];
const buttonAdd = document.body.getElementsByTagName('button')[0];
const containerInProgress = document.body.getElementsByTagName('div')[1];
const containerDone = document.body.getElementsByTagName('div')[2];

buttonAdd.onclick = () => {
  if (task.value.trim() !== "") {
    // Создаем контейнер для задачи
    const taskContainer = document.createElement('div'); // Родитель для задачи

    // Добавляем текст задачи
    taskContainer.innerHTML = `
      <span>${task.value}</span>
      <button class="move">Move to 'In Progress'</button>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;

    // Добавляем задачу в контейнер "To Do"
    containerTasks.appendChild(taskContainer);

    // Очищаем поле ввода
    task.value = "";

    // Находим созданные кнопки
    const editButton = taskContainer.querySelector('.edit');
    const deleteButton = taskContainer.querySelector('.delete');
    const moveButton = taskContainer.querySelector('.move');

    // Назначаем обработчик для перемещения
    moveButton.onclick = () => {
      if (containerTasks.contains(taskContainer)) {
        containerTasks.removeChild(taskContainer);
        containerInProgress.appendChild(taskContainer);
        moveButton.innerText = "Move to 'Done'";
      } else if (containerInProgress.contains(taskContainer)) {
        containerInProgress.removeChild(taskContainer);
        containerDone.appendChild(taskContainer);
        moveButton.innerText = "Task Completed ✅";
        moveButton.disabled = true; // Блокируем кнопку после завершения задачи
      }
    };

    // Назначаем обработчик для редактирования
    editButton.onclick = () => {
      const newText = prompt("Edit your task:", taskContainer.querySelector('span').innerText);
      if (newText !== null) {
        taskContainer.querySelector('span').innerText = newText;
      }
    };

    // Назначаем обработчик для удаления
    deleteButton.onclick = () => {
      if (taskContainer.parentElement) {
        taskContainer.parentElement.removeChild(taskContainer);
      }
    };
  }
};
