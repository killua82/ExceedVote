var username = sessionStorage.getItem("username");
$("#signed").append(username);

if (username === "Guest") {
    $("#votemenu").addClass('disabled').children().attr('href', '#');
}