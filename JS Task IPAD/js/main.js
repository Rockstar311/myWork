function sel(a) {
    return document.querySelector(a);
}

var ipod = document.forms.ipod;
var checkbox = ipod.checkbox;
var newTask = ipod.newTask;
var button = ipod.button;
var left = sel('.left');

function deleteTask(task) {
    task.addEventListener('change', function () {
        this.parentElement.remove();
    })

}

for (var i = 0; i < checkbox.length; i++) {
    deleteTask(checkbox[i]);
}

button.addEventListener('click', function () {
    if (newTask.value) {
        var task = document.createElement('span');
        var newLabel = document.createElement('label');
        var newCheckbox = document.createElement('input');
        task.textContent = newTask.value;
        newLabel.className = "text"
        newCheckbox.type = "checkbox";
        newLabel.appendChild(newCheckbox);
        newLabel.appendChild(task);
        deleteTask(newCheckbox);
        left.appendChild(newLabel);
    }
})