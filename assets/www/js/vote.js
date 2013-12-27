var username = sessionStorage.getItem("username");
$("#signed").append(username);

$.ajax({
    url : "http://10.0.2.2:8080/exceedvote/api/v1/criterion",
    type : 'GET',
    error : errorHand(XMLHttpRequest, textStatus, errorThrown),
    success : loaded(data)
});

function loaded(data) {
    data.forEach(function(x) {
        var question = $('<a class="list-group-item-heading"> </a>');
        question.html(x[0].question);
        question.attr({
            question : x[0].question,
            id : x[0].id,
            type : x[0].type
        });

        var group = $('<div class="list-group-item"> </div>');
        group.append(question);

        $('.list-group').append(group);
    });
}

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}

$( document ).on( "click", ".list-group-item", function(e) {
    var criId = $(e.target).attr('id');
    var criName = $(e.target).attr('question');
    window.localStorage.setItem("id", criId);
    window.localStorage.setItem("name", criName);
   
    window.location.href = "voting.html";
});