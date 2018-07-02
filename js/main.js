get_em('tothemoon', "select name , position from menber where username =  '" + localStorage['username'] + "'", function () {
    console.log(localStorage['username']);
    console.log(result);
    $('#username').html(result[0]['name'].toUpperCase());
    $('#position').html(result[0]['position'].toLowerCase() + " deverlop");
});

get_em('tothemoon', 'select project_name , id_project from project', function () {
    for (var i = 0; i < result['num']; i++) {

        $("#dropdown-process-content").append(
            "<a id=" + result[i]['id_project']
            + " class='submenu-link submenu-link-project' href='#'>" + result[i]['project_name'].toUpperCase() + "</a>");
    }

});

if (localStorage['project_id_sidemenu'] != undefined) {
    $("#side-menu-inprocese").show();
}

$(document).on('click', '.submenu-link-project', function () {
    localStorage['project_id_sidemenu'] = $(this).attr('id');
    location.reload();

});

$("#Btn-logout").on('click', function () {
    console.log("logout btn");
    localStorage.removeItem('username');
    localStorage.removeItem('project_id_sidemenu');
    window.location.href = 'login.html';
});