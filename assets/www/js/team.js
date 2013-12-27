var username = sessionStorage.getItem("username");
$("#signed").append(username);

if (username === "Guest") {
    $("#votemenu").addClass('disabled').children().attr('href', '#');
}
//$.get('http://10.0.2.2:8080/exceedvote/api/v1/contestant').then(loaded);

$.ajax({
    url : "http://10.0.2.2:8080/exceedvote/api/v1/contestant",
    type : 'GET',
    error : errorHand(XMLHttpRequest, textStatus, errorThrown),
    success : loaded(data)
});

function loaded(data) {
    data.contestants.contestant.forEach(function(x) {
        var name = $('<h4 class="list-group-item-heading"> </h4>');
        name.html(x.name);
        name.attr({
            id : x.id
        });
        var des = $('<p class="list-group-item-text"> </p>');
        des.html(x.description);
        var group = $('<div class="list-group-item"> </div>');
        group.append(name);
        group.append(des);
        $('.list-group').append(group);
    });
}

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}
