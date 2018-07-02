$(function () {

    get_em("benz", "select * from projectna", function () {
        for (var i = 0; i < result["num"]; i++) {
            $("#dropdown-process-content").append('<a id = ' + result[i]['ProjectNamena']
                + ' class="submenu-link" href="#">' +
                result[i]['ProjectNamena'] + '</a>');
        }
    });

});