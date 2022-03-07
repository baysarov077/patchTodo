const todoItems = [
    {
        text: 'Первое дело',
        done: true
    },
    {
        text: 'Купить хлеб',
        done: false
    },
    {
        text: 'Сдать экзамен в Интукод',
        done: true
    },
    {
        text: 'Устроиться на работу',
        done: false
    },
    {
        text: 'закончить это задание',
        done: false
    }
]
//Основная функция для рендера всех элементов
function render(todoItems) {
    const list = document.getElementById('list')
//Очищаем содержимое
    list.innerHTML = ' '
//Перебор массива через цикл
    for(let i = 0; i < todoItems.length; i++){
//Создал необходимые узлы
        const ul = document.createElement('ul')
        const delBtn = document.createElement('button')
        const listItem = document.createElement('li')
        const checkBox = document.createElement('input')
//Задал классы элементам
        ul.classList = 'list'
        listItem.classList = 'list_item'
        listItem.textContent = todoItems[i].text
        delBtn.textContent = 'X'
//Создал слушатель события для кнопки "delBtn", что бы она удаляла элемент массива
//вызывая функцию "remove"
        delBtn.addEventListener('click', (e) => {
         listItem.remove(e.target)
         remove(e.target)
         console.log(i)
        })
        checkBox.type = 'checkbox'
        checkBox.checked = todoItems[i].done
        checkBox.checked ? listItem.style.opacity = '0.5' : listItem.style.opacity = '1'
        checkBox.addEventListener('click', () => {
           checkTodo(i)
        })
        listItem.prepend(checkBox)
        listItem.append(delBtn)
        ul.append(listItem)
        list.append(ul)
    }
}
render(todoItems)
//добавил возможность удаления элемента массива по индексу
function remove(i) {
    todoItems.splice(i, 1)
    return render(todoItems)
}
//функция добавляет новый элемент в массив через консоль
const addTodo = (val) => {
    todoItems.push({text: val, done: false})
    return render(todoItems)
}
//доработал предыдущую функцию, так, что юы новый элемент добавлялся при нажатии кнопки "addBtn" 
addBtn.addEventListener('click', () => {
    const text = document.querySelector('.input')
    const val = text.value
    addTodo(val)
})
//создаем функцию, которая будет менять значение "done" на противоположное
function checkTodo(num) {
   todoItems[num].done = !todoItems[num].done
   render(todoItems)
}
