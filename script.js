const task = document.body.getElementsByTagName('input')[0]
const containerTasks = document.body.getElementsByTagName('div')[0]
const buttonAdd = document.body.getElementsByTagName('button')[0]


buttonAdd.onclick = () => {
  containerTasks.innerHTML += `${task.value} 
  <button>move to 'in progress'</button>
  <button>edit</button>
  <button>delete</button>
`
}
