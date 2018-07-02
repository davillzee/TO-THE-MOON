const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
const weekday = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const table_discript_header = ["UX/UI", "FRONTEND", "BACKEND", "INTERGRATION", "TEST-BUG", "HOUR"];
var month_header;
var dateX;

nextDay(getDate(0));

$(document).on('click', '.previous', function () {
    nextDay(getDateToday(-13, dateX));
});

$(document).on('click', '.next', function () {
    nextDay(getDateToday(1, dateX));
});
//---------------------------------------------------------- GENNAERLATE TABLE ------------------------------------------------------------
function nextDay(date_input) {
    console.log(date_input);

    $(".tank-header").html("");
    month_header = "";
    var mounth_name_from_date = new Date(date_input);
    $(".month-display").html(monthNames[mounth_name_from_date.getMonth()] + " " + date_input.split('-')[0]);
    for (var i = 0; i < 7; i++) {
        var date_string = getDateToday(i, date_input);
        var name_day = new Date(date_string);
        month_header += "<td class='tank-header'>" + weekday[name_day.getDay()] + "<br>" + date_string.split('-')[2] + "</td>";
    }
    var dis_header = "";
    for (var i = 0; i < table_discript_header.length; i++) {
        var td_body = "";

        for (var j = 0; j < 7; j++) {
            var date = getDateToday(j, date_input);
            td_body += "<td id = " + table_discript_header[i] + "_" + date + "></td>";
        }
        dis_header += "<tr id = " + table_discript_header[i] + ">" +
            "<td class='colheader'>" + table_discript_header[i] + "</td>"
            + td_body +
            "</tr>"
    }
    $(".table-tank").html(
        "<tr class='tank-header'>" +
        "<td class='tank-header'>1/4" +
        "<br>WEEK" +
        "<a href='#'>" +
        "<img class='previous' src='img/icon/left-arrow.svg'>" +
        "</a>" +
        "</td>"
        + month_header +
        "<td class='tank-header'>" +
        "<a href='#'>" +
        "<img class='next' src='img/icon/right-arrow.svg'>" +
        "</a>" +
        "</td>" +
        "</tr>"
        + dis_header

    );
    //------------------------------------------------- QUERY DATA TO TABLE -------------------------------------------------------------------
    get_em("tothemoon", "select project_name , hour from project where id_project = " + localStorage['project_id_sidemenu'], function () {
        $("#graph_project_name").html(result[0]['project_name'].toUpperCase());
        $("#graph_max_hour").html("MAX HOUR : " + result[0]['hour']);
    });

    get_em('tothemoon', 'select es_hour from greentable ' +
        ' where status_work = 1 AND id_project = ' + localStorage['project_id_sidemenu'] + ' group by last_date', function () {
            console.log(result);
        });

    get_em('tothemoon', 'select id , position , last_date , es_hour , feature_name from menber , greentable , feature '
        + 'where menber.id = greentable.username_id AND feature.id_feature = greentable.id_feature AND status_work = 1 ' +
        ' AND greentable.id_project = ' + localStorage['project_id_sidemenu'], function () {
            console.log(result);
            for (var i = 0; i < result['num']; i++) {
                $("#" + result[i]['position'].toUpperCase() + "_" + result[i]['last_date']).append(result[i]['feature_name'] + "  ");
            }
        });
    //------------------------------------------------ CALCULATE DATA  -----------------------------------------------------------------
    get_em('tothemoon', 'select t_hour ,  hour , finish_hour , es_hour from project , greentable where '
        + 'project.id_project = greentable.id_project AND greentable.id_project = '
        + localStorage['project_id_sidemenu'] + ' AND status_work = 1 ORDER BY t_hour ASC', function () {
            console.log(result);
            var project_hour = result[0]['hour'];
            var completehour = 0;
            var arrayX = [];
            for (var i = 0; i < result['num']; i++) {
                completehour = (completehour + parseInt(result[i]['es_hour']));
                project_hour = (project_hour - parseInt(result[i]['es_hour']));
                var a = new Date(i, result[0]['t_hour']);
                a.setDate(a.getDate() + i);
                arrayX.push(Array(getDateToday(i, result[0]['t_hour']), project_hour));
            }
            $("#graph_complete_hour").html("COMPLETE : " + completehour);
            $("#graph-left_hour").html("LEFT : " + project_hour);
            $.ajax({
                url: "php/tank_update.php",
                type: "POST",
                data: { tank_complete_hour: completehour, project_id: localStorage['project_id_sidemenu'] },
                success: function (result) {
                    console.log(result);
                    google.charts.load('current', { 'packages': ['corechart'] });
                    google.charts.setOnLoadCallback(drawChart);
                    function drawChart() {
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'Date');
                        data.addColumn('number', 'Left Hour');
                        data.addRows(arrayX);
                        var options = {
                            'width': 590,
                            'height': 280,
                            
                        };
                        var chart = new google.visualization.ColumnChart(document.getElementById('graph'));
                        chart.draw(data, options);
                    }

                }
            })
        });

    dateX = date_string;

}
function getDateToday(i, today) {
    var a = new Date(today);
    if (!!i) {
        a.setDate(a.getDate() + i);
    }
    var month = "";
    var day = "";
    if (a.getDate() < 10) {
        day = "0";
    }
    if (a.getMonth() + 1 < 10) {
        month = "0";
    }
    day += a.getDate();
    month += a.getMonth() + 1;
    return a.getFullYear() + "-" + month + "-" + day;
}
function getDate(i) {
    var a = new Date();
    if (!!i) {
        a.setDate(a.getDate() + i);
    }
    var month = "";
    var day = "";
    if (a.getDate() < 10) {
        day = "0";
    }
    if (a.getMonth() + 1 < 10) {
        month = "0";
    }
    day += a.getDate();
    month += a.getMonth() + 1;
    return a.getFullYear() + "-" + month + "-" + day;//+ " " + a.getHours() + ":" + a.getMinutes();
}



