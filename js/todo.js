var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};
function myFunction() {
  var value = document.getElementById("todo-text").value;
  // alert(value);
  var list = document.getElementById("AnwenList");
  var elem = document.createElement('li');
  elem.innerHTML = value;
  elem.className = 'list-group-item';
  list.appendChild(elem);

}

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
