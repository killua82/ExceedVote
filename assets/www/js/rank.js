var username = sessionStorage.getItem("username");
$("#signed").append(username);

if (username === "Guest") {
    $("#votemenu").addClass('disabled').children().attr('href', '#');
}

$.ajax({
    url : "http://10.0.2.2:8080/exceedvote/api/v1/rank",
    type : 'GET',
    error : errorHand(XMLHttpRequest, textStatus, errorThrown),
    success : loaded(data)
});

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}

function loaded(data) {
    data.rank.criteria.criterion.forEach(function(x) {
        
        var question = $('<h4 class="list-group-item-heading"> </h4>');
        var criQuestion = x.question;
        var contestants;
        question.html(criQuestion);
        $('.list-group').append(question);
        
        x.contestants.contestant.forEach(function(y){
            name = y.name;
            score = y.score;
            
            var head = $('<h4 class="list-group-item-heading"> </h4>');
            var des = $('<p class="list-group-item-text"> </p>');
            head.html("Team: " +name);
            des.html("Score: " +score);
            
            contestants = $('<div class="list-group-item"> </div>');
            contestants.append(head);
            contestants.append(des);
            
            $('.list-group').append(contestants);
        });

       
    });
}