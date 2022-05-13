let input = document.getElementById('textInput');

let addBtn = input.nextElementSibling;


console.log(addBtn) 

addBtn.onclick = function(){

    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    newLi.className = 'list-group-item';

    let closeSpan = document.createElement('span');
    closeSpan.innerText = 'X';
    closeSpan.style.float = 'right';
    closeSpan.style.cursor = 'pointer';
    closeSpan.style.color = 'red';
    closeSpan.style.fontWeight = '700';

    closeSpan.onclick = function(){
        newLi.remove();
    }

    newLi.appendChild(closeSpan);

    document.getElementById('itemList').appendChild(newLi);

    input.value = '';
}

