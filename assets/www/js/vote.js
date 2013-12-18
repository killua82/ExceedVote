$.get('https://api.github.com/users/mralexgray/repos').then(loaded);
            
    function loaded(x) {
       // data.forEach(function(x) {
        var title = $('<a class="list-group-item-heading"> </h4>');
        title.attr({
            id: x[0].id,
            name: x[0].full_name
        });
        title.html(x[0].owner.login);
        var group = $('<div class="list-group-item"> </a>');
        group.append(title);
        $('.list-group').append(group);     
      //  });
    }

$( document ).on( "click", ".list-group-item", function(e) {
    var criId = $(e.target).attr('id');
    var criName = $(e.target).attr('name');
    window.localStorage.setItem("id", criId);
    window.localStorage.setItem("name", criName);
   
    window.location.href = "voting.html";
});