var ls=localStorage;
/* To add input in a list by calling get_list method */
function addElement() {
    var text = document.getElementById('text').value;
    var todos = get_list();
    todos.push(text);
    ls.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
document.getElementById('addElement').addEventListener('click', addElement);
show();

 /* to delete an item from list */
function remove() {
    
    /* getting the value of current object that we want to delete */
    var id = this.getAttribute('id');
    var todos = get_list();
    
    /* to remove the element from array */
    todos.splice(id, 1);
    alert("Press OK to delete");
   
    ls.setItem('todo', JSON.stringify(todos));
    show();
 
    return false;
  }
  
/* To make an array ,,,to store values in database */
function get_list() {
    var todos = new Array;
    var array_string = ls.getItem('todo');
    if (array_string !== null || array_string !== undefined) {
        todos = JSON.parse(array_string); 
    }
    return todos;
}
 
function show() {
    var todos = get_list();
 
     var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<pre><strike class="remove" id="' + i  + '">remove</strike></pre></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
