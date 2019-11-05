function getAllItems(){
    var items = document.getElementById('available-items');

    $.get("/library/itemList", function(data) {
        console.log( data );
        for (var item in data) {
            console.log(item);
            items.appendChild(createBook(item.name, item.loan_period));
            
        }
    });



}

function createBook(name, dueDate){
    var item = document.createElement('li');
    var text = document.createElement('p');
    var altText = document.createElement('p');
    var due = document.createElement('p');

    item.className= "item-book"
    text.textContent = name;
    due.textContent = 'Due in ' + dueDate + ' Days';

    item.appendChild(text);
    item.appendChild(altText);
    item.appendChild(due);
    return item;
}

function sayHello(){
    alert("Hello!");
}