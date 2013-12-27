var username = sessionStorage.getItem("username");
$("#signed").append(username);

if (username === "Guest") {
    $("#votemenu").addClass('disabled').children().attr('href', '#');
} else {
    $.ajax({
        url : "http://10.0.2.2:8080/exceedvote/api/v1/myvote",
        type : 'GET',
        error : errorHand(XMLHttpRequest, textStatus, errorThrown),
        success : loaded(data)
    });
}

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}

function loaded(data) {
    data.myvote.votes.forEach(function(x) {
        
        var criQuestion = getCri(x[0].criterion.id);
        
        var head = $('<h4 class="list-group-item-heading"> </h4>');
        head.html(criQuestion);
        head.attr({
            id : x[0].criterion.id
        });
        
        var conName = getCon(x[0].contestant.id);
        var des = $('<p class="list-group-item-text"> </p>');
        des.html("Team: "+conName);
        des.attr({
            id : x[0].contestant.id
        });
        var score = $('<p class="list-group-item-text"> </p>');
        score.html("Score: "+x[0].contestant.score)

        var group = $('<div class="list-group-item"> </div>');
        group.append(head);
        group.append(des);
        group.append(score);

        $('.list-group').append(group);
    });
}

function getCri(id){
    var question;
    $.ajax({
        url : "http://10.0.2.2:8080/exceedvote/api/v1/criterion/"+id,
        type : 'GET',
        error : errorHand(XMLHttpRequest, textStatus, errorThrown),
        success : function(data){
            question = data.criterion.question;
        }
    });
    
    return question;
}
function getCon(id){
    var name;
    $.ajax({
        url : "http://10.0.2.2:8080/exceedvote/api/v1/contestant/"+id,
        type : 'GET',
        error : errorHand(XMLHttpRequest, textStatus, errorThrown),
        success : function(data){
            name = data.contestant.name;
        }
    });
    
    return name;
}