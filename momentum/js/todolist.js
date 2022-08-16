function todolist() {
    const myNodelist = document.querySelectorAll(".item");
    const taskBox = document.querySelector("#myUL");

    for (let i = 0; i < myNodelist.length; i++) {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            taskBox.offsetHeight >= 250 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
            this.parentElement.remove();
        }
    }

    const list = document.querySelector('#myUL');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    taskBox.offsetHeight >= 250 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}


function newElement() {
    const li = document.createElement("li");
    li.className = 'item';
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("myInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}


const toDoList = document.querySelector('.to-do-list-button');
const wrapper = document.querySelector('.to-do-list-wrapper');
const button = document.querySelector('.addBtn');

toDoList.addEventListener('click', () => {
    wrapper.classList.toggle('open-todo');
});

button.addEventListener('click', () => {
    newElement();
    todolist();
});


export { todolist };