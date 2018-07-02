
$(function () {

    get_em("tothemoon", "select * from project", function () {
        for (var i = 0; i < result["num"]; i++) {

            $("#dropdown-process-content").html('<a id = ' + result[i]['project_name'] + ' class="submenu-link" href="">' + result[i]['project_name'] + '</a>');
            localStorage['result1' + i + ''] = result[i]['project_name'];
            // checkvalue1(result1);

        }
    });

    // function checkvalue1(result1) {
    // while (localStorage['result1' + i + ''] != undefined) {
    //     $("#dropdown-process-content").html('<a id = ' + result1
    //         + ' class="submenu-link" href="">' +
    //         result1 + '</a>');
    // }
    // }
    $(document).on('click', '.submenu-link', function () {
        var ts1 = $(this).attr('id');
        console.log(" ID = " + ts1);
    })

    $("#new_menu").click(function () {
        localStorage['P2_name'] = undefined;
        localStorage['C2_name'] = undefined;
        localStorage['ID_name'] = undefined;
        localStorage.removeItem('P2_name');
        localStorage.removeItem('C2_name');
        localStorage.removeItem('ID_name');
        // localStorage['valueFeature' + i + ''] = undefined;
        // localStorage['valueDes' + i + ''] = undefined;

    })

    $("#spaceshift").click(function () {
        localStorage['P2_name'] = undefined;
        localStorage['C2_name'] = undefined;
        localStorage['ID_name'] = undefined;
        localStorage.removeItem('P2_name');
        localStorage.removeItem('C2_name');
        localStorage.removeItem('ID_name');
        // localStorage['valueFeature' + i + ''] = undefined;
        // localStorage['valueDes' + i + ''] = undefined;

    })




});