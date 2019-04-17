
function addNewItem(list, itemText) {
    let listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);

}

let inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function (event) {
    if(event.which ===13){
        let itemText = inputText.value;
        addNewItem(document.getElementById('todolist'),itemText);
        inputText.focus();
        inputText.select();
    }
};