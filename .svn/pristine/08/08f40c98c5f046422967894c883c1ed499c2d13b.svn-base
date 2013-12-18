
        $(".navbar-link").text(sessionStorage.getItem("username"));
        function loaded(x) {
          //  data.forEach(function(x) {
                var title = $('<h4 class="list-group-item-heading"> </h4>');
                title.html(x[0].owner.login);
                var des = $('<p class="list-group-item-text"> </p>');
                des.html(x[0].full_name);
                var group = $('<div class="list-group-item"> </div>');
                group.append(title);
                group.append(des);
                $('.list-group').append(group);
         //   });
        }
        $.get('https://api.github.com/users/mralexgray/repos').then(loaded);