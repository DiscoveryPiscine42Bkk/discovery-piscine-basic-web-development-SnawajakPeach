$('#newBtn').click(function() {
    var text = prompt("What do you want to do?");
    if (text && text.trim() !== "") {
        addTodo(text);
        saveCookie(); 
    }
});

function addTodo(text) {
    var $div = $('<div>').addClass('todo-item').text(text);

    $div.click(function() {
        if (confirm("Remove this?")) {
            $(this).remove(); 
            saveCookie();
        }
    });

    $('#ft_list').prepend($div);
}