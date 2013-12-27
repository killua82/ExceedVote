var id = window.localStorage.getItem("id");
var name = window.localStorage.getItem("name");
window.localStorage.removeItem("id");
window.localStorage.removeItem("name");

var username = sessionStorage.getItem("username");
$("#signed").append(username);

$("#criteriaName").text(name);

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
        var scoreInput = $('<input name="" id="score" placeholder="" value="" type="text">');
        var button = $('<button type="button" id="vote" class="btn btn-default navbar-btn">Vote</button>');
        group.append(name);
        group.append(des);
        group.append(scoreInput);
        group.append(button);
        $('.list-group').append(group);
    });
}

function errorHand(XMLHttpRequest, textStatus, errorThrown){
    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
}

$(document).on("click", "#vote", function(e) {
    var voteScore = $( "#score" ).val();
    var teamId = $(e.target).attr('id');
    var voteData =   
            {
                "vote": {
                  "contestants": {
                    "contestant": {
                      "id": "2",
                      "score": "7"
                    }
                  }
                }
              };
     voteData.vote.contestants.contestant.id = teamId;  
     voteData.vote.contestants.contestant.score = voteScore;
    
    $.ajax({
        url: "http://10.0.2.2:8080/exceedvote/api/v1/criterion/"+id+"/vote",
        type: 'post',
        dataType: "json",
        data: voteData,
        error: errorHand(XMLHttpRequest, textStatus, errorThrown),
        success: function(data){
            alert("Vote Success!");
        }
    });
});

