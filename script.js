const task = document.body.getElementsByTagName('input')[0];
const containerTasks = document.body.getElementsByTagName('div')[0];
const buttonAdd = document.body.getElementsByTagName('button')[0];

buttonAdd.onclick = () => {
  if (task.value.trim() !== "") {
    // Создаем контейнер для задачи
    const taskContainer = document.createElement('div'); // Родитель для задачи

    // Добавляем текст задачи
    taskContainer.innerHTML = `${task.value} 
      <button>move to 'in progress'</button>
      <button>edit</button>
      <button onclick='deleteTask(this)'>delete</button>
    `;

    // Добавляем задачу в контейнер
    containerTasks.appendChild(taskContainer);

    // Очищаем поле ввода
    task.value = "";
  }
};

function deleteTask(button) {
  const taskContainer = button.parentElement; // Находим родительский элемент (div с задачей)
  taskContainer.remove(); // Удаляем контейнер задачи
}
