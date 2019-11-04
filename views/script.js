function createItem(){

}

function getAllItems(){
    $.get("/items/itemList", function(data) {
        console.log( "Foo function result:", data );
    });
}