var username = sessionStorage.getItem("username");
$("#signed").append(username);
//$.get('http://10.0.2.2:8080/exceedvote/api/v1/criterion').then(loaded);

if (username === "Guest") {
    $("#votemenu").addClass('disabled').children().attr('href', '#');
}

$.ajax({
    url : "http://10.0.2.2:8080/exceedvote/api/v1/criterion",
    type : 'GET',
    error : errorHand(XMLHttpRequest, textStatus, errorThrown),
    success : loaded(data)
});

function loaded(data) {
    data.criteria.criterion.forEach(function(x) {
        var question = $('<h4 class="list-group-item-heading"> </h4>');
        question.html(x.question);
        question.attr({
            id : x.id,
            type : x.type
        });

        var group = $('<div class="list-group-item"> </div>');
        group.append(question);

        $('.list-group').append(group);
    });
}

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}

