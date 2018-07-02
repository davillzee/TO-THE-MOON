
const d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month_header;
var day_number = d.getDay();
var project_count_add = 0;
var projectlist_array = [];
var project_list_obj = {};
var check_add_array = [];
var check_add_obj = {};
var dateX;


nextDay(getDate(0));

$(document).on('click', '.previous', function () {
    nextDay(getDateToday(-13, dateX));
});

$(document).on('click', '.next', function () {
    nextDay(getDateToday(1, dateX));
});

function nextDay(date_input) {
    $(".tank-header").html("");
    $(".table-tank").html("");
    month_header = "";
    var mounth_name_from_date = new Date(date_input);
    $(".month-display").html(monthNames[mounth_name_from_date.getMonth()] + " " + date_input.split('-')[0]);
    for (var i = 0; i < 7; i++) {
        var date_string = getDateToday(i, date_input);
        var name_day = new Date(date_string);
        month_header += "<td class='tank-header'>" + weekday[name_day.getDay()] + "<br>" + date_string.split('-')[2] + "</td>";
    }

    get_em("tothemoon", "select nickname , id , position from menber", function () { // GENERATE GREEN TABLE

        var table_gen = "";
        for (var i = 0; i < result["num"]; i++) {
            var str_hour = "";
            for (var j = 0; j < 7; j++) {
                var hour_time = "";
                var date_hour_id = getDateToday(j, date_input);
                for (var l = 0; l < 7; l++) {
                    hour_time += "<div id=" + result[i]["nickname"]
                        + '_' + j + '_' + l + "_" + date_hour_id +
                        " class='table-hour'></div>"
                }
                str_hour += "<td>" + hour_time + "</td>"
            }

            var table_col = "";
            for (var col_id = 0; col_id < 7; col_id++) {
                var date_col_id = getDateToday(col_id, date_input);
                table_col += "<td id = " + result[i]["nickname"] + "_" + date_col_id + " class='table-work'></td>"
            }
            table_gen += "<tr id = " + result[i]["id"] + ">" +
                "<td class = 'headerrow' rowspan='2'>" +
                "<p class='name-header'>" + result[i]["nickname"].toUpperCase() + "</p>" +
                "<p class='position-header'>" + result[i]["position"].toLowerCase() + " dev.</p>" +
                "</td>"
                + table_col +
                "</tr>" +
                "<tr id= hour_" + result[i]["nickname"] + ">"
                + str_hour +
                "</tr>"
        }
        generateTable(table_gen);

    });

    function generateTable(table_gen) {
        $(".table-tank").append(
            "<tr class='tank-header'>" +
            "<td class='week-header'>1/4" +
            "<br>WEEK" +
            "<a>" +
            "<img class='previous' src='img/icon/left-arrow.svg'>" +
            "</a>" +
            "</td>month_header"
            + month_header +
            "<td class='week-header'>" +
            "<a>" +
            "<img class='next' src='img/icon/right-arrow.svg'>" +
            "</a>" +
            "</td>" +
            "</tr>"
            + table_gen);
    }


    get_em("tothemoon", "select colum_id , project_name , feature_name , es_hour , nickname " +
        "from menber , project , feature , greentable where " +
        "greentable.id_project = project.id_project AND greentable.id_feature = feature.id_feature AND " +
        "menber.id = greentable.username_id", function () {
            console.log(result);

            for (var i = 0; i < result['num']; i++) {
                var number = 0;
                var minus = 0;
                var count = 0;
                var date_hour_id_input = result[i]['colum_id'].split("_")[1];
                console.log(date_hour_id_input);
                $("#" + result[i]['colum_id']).append(result[i]['project_name'] + " : " + result[i]['feature_name'] + " | ");
                for (var j = 0; j < result[i]['es_hour']; j++) {
                    if (count == 7) {
                        count = 0;
                        number++;
                        minus += 7;
                        date_hour_id_input = getDateToday(1, date_hour_id_input);
                    }
                    $("#" + result[i]['nickname'] + "_" + number + "_" + (j - minus) + "_" + date_hour_id_input).css("background-color", "rgb(16, 236, 0)");
                    count++;
                }
            }
        });//GET VALUE TO GREEN TABLE COLUM

    get_em("tothemoon", "select * from project ", function () {
        var project_selection_dis = "";

        project_selection_dis += "<option value=" + undefined + "> select project </option>"
        for (var i = 0; i < result["num"]; i++) {
            project_selection_dis += "<option value='" + result[i]["id_project"] + "'>"
                + result[i]["project_name"] + "</option>"
        }
        $("#project-selection").html(project_selection_dis);
        localStorage['pname'] = result[0]["project_name"]; //เก็บไว้ให้มีข้อมูล 
        //featurequery(result[0]["id_project"]);
    });

    $("#project-selection").change(function () {
        localStorage['project_id_value'] = $(this).val();
        localStorage['pname'] = $(this).find('option:selected').text();
        //featurequery(optionvalue);
        var feature_selection_dis = "";
       
        feature_selection_dis += "<option value=" + undefined + "> select feature </option>"
        get_em("tothemoon", "select * from feature where id_project = '" + localStorage['project_id_value'] + "' ", function () {
            for (var i = 0; i < result["num"]; i++) {
             feature_selection_dis += "<option value='" + result[i]["id_feature"] + "'>"
                    + result[i]["feature_name"] + "</option>"
            }
            for (var i = 0; i < check_add_array.length; i++) { //disable feature 
                $("#feature-selection option[value=" + check_add_array[i]['feature'] + "]").attr('disabled', 'disabled');
            }
            $("#feature-selection").html(feature_selection_dis);
        });
       
    });

    $("#feature-selection").change(function () {
        localStorage['feature_id_value'] = $(this).val(); //ได้ค่า id 
        localStorage['fname'] = $(this).find('option:selected').text();  //ได้ค่า text

        var task_selection_dis = "";
        task_selection_dis +="<option value=" + undefined + "> select task </option>"
        get_em("tothemoon", "select * from task where id_feature = '" + localStorage['feature_id_value'] + "' ", function () {
            for (var i = 0; i < result["num"]; i++) {
                task_selection_dis +="<option value='" + result[i]["id_task"] + "'>" + result[i]["task_name"] + "</option>"
            }
            for (var i = 0; i < check_add_array.length; i++) { //disable feature 
                $("#feature-selection option[value=" + check_add_array[i]['feature'] + "]").attr('disabled', 'disabled');
            }
            $("#task-selection").html(task_selection_dis);
        });

    });

    $("#task-selection").change(function () {
        localStorage['task_id_value'] = $(this).val();
        localStorage['tname'] = $(this).find('option:selected').text();
    });

    $(".btn-add").click(function () {
        var pname = localStorage['pname'];
        var fname = localStorage['fname'];
        var tname = localStorage['tname'];
        var timedate = getDate(0);
        var es_hour = $('#es_hour').val();

        if (tname == undefined || tname == " select task") {
            tname = "-";
        }

        if (pname == undefined || fname == undefined) {
            alert("Please select project and feature ");
        } else {
            if ($('.project-header').text() == pname) {

                $(".popup-add").append("<tr class='row'>" +
                    "<td id='col-feature' class='col'>" + fname + "</td>" +
                    "<td id='col-task' class='col'>" + tname + "</td>" +
                    "<td id='col-date' class='col'>" + timedate + "</td>" +
                    "<td id='col-eshour'class='col'>" + es_hour + "</td>" +
                    "<td class='col'>" +
                    "<button id =" + project_count_add + " class='btn-delete'>DELETE</button>" +
                    "</td>" +
                    "</tr>");
                project_count_add = project_count_add + 1;

            } else {

                $(".popup-add").append("<tr>" +
                    "<td  class='project-header' colspan='5'>" + pname + "</td>" +
                    "</tr>" +
                    "<tr class='row'>" +
                    "<td id='col-feature' class='col'>" + fname + "</td>" +
                    "<td id='col-task' class='col'>" + tname + "</td>" +
                    "<td id='col-date' class='col'>" + timedate + "</td>" +
                    "<td id='col-eshour'class='col'>" + es_hour + "</td>" +
                    "<td class='col'>" +
                    "<button id =" + project_count_add + "  class='btn-delete'>DELETE</button>" +
                    "</td>" +
                    "</tr>");
                project_count_add = project_count_add + 1;

            }
            project_list_obj = {
                col_id: localStorage['col-id'],
                user_id: localStorage['user_row_id'],
                project_id: localStorage['project_id_value'],
                feature_id: localStorage['feature_id_value'],
                task_id: localStorage['task_id_value'],
                time: timedate,
                eshour: es_hour
            };
            check_add_obj = {
                project: localStorage['project_id_value'],
                feature: localStorage['feature_id_value']
            };

            projectlist_array.push(project_list_obj);//เก็บ project ไว้ add ลง db
            check_add_array.push(check_add_obj);//เก็บ ไว้ check ว่า add ไปแล้ว เพื่อ disable selection
        }
        localStorage.removeItem('pname');
        localStorage.removeItem('fname');
        localStorage.removeItem('tname');


        localStorage.removeItem('project_id_value');
        localStorage.removeItem('feature_id_value');
        localStorage.removeItem('task_id_value');
    });

    $("#btn-ok").click(function () {
        $.ajax({
            url: "php/greentable_insert.php",
            type: "POST",
            data: { projectlist_array },
            success: function (result) {
                console.log(result);
                location.reload();
            }
        });

    });



    $(document).on('click', '.btn-delete', function () {
        $(this).closest('tr').remove();
        projectlist_array[this.id] = null;
    });

    $(document).on('click', '.table-work', function () {
        localStorage['user_row_id'] = $(this).parent().attr('id');
        localStorage['col-id'] = $(this).attr('id');


        if ($(this).html() == "") {
            $("#popup_frame_add").show();

        } else {
            $("#popup_frame_sub").show();
            getValueSubmit($(this).attr('id'));
        }
    });
    function getValueSubmit(col_id) {
        var popup_sub_display = "";
        $(".popup-sub").html('');
        get_em("tothemoon", "select * from project , feature , greentable where " +
            "greentable.id_project = project.id_project AND greentable.id_feature = feature.id_feature " +
            "AND greentable.colum_id = '" + col_id + "'", function () {
                console.log(col_id);
                localStorage['checkbox_round'] = result['num'];
                for (var i = 0; i < result['num']; i++) {
                    popup_sub_display += "<tr>" +
                        "<td class='project-header' colspan='6'> " + result[i]['project_name'] + "</td>" +
                        "</tr>" +
                        "<tr class='row'>" +
                        "<td class='check'>" +
                        "<center>" +
                        "<input id = '" + i + "'type='checkbox' value ='" + result[i]['id_project'] +
                        ":" + result[i]['id_feature'] + ":" + result[i]['id_task'] +
                        ":" + result[i]['colum_id'] + "'" +
                        "</center>" +
                        "</td>" +
                        "<td id='col-feature' class='col'> " + result[i]['feature_name'] + "</td>" +
                        "<td id='col-task' class='col'>" + result[i]['task_name'] + "</td>" +
                        "<td id='col-date' class='col'>" + result[i]['t_hour'] + " </td>" +
                        "<td id='col-eshour' class='col'>" + result[i]['es_hour'] + " </td>" +
                        "<td class='col'>" +
                        "<input type='number' class='es_hour_sumbit' id = '" + result[i]['id_project'] +
                        ":" + result[i]['id_feature'] +
                        ":" + result[i]['id_task'] + ":" + result[i]['colum_id'] + "'>"
                        + "</td>" +
                        "</tr>"
                }
                $(".popup-sub").html(popup_sub_display);
            });//GET VALUE OF COLUM TO POPUP SUBMIT
    }

    $("#btn-submit").click(function () {
        var checkbox_value = {};
        console.log(getDate(0));
        console.log(localStorage['checkbox_round']);
        for (var i = 0; i < localStorage['checkbox_round']; i++) {
            if ($("#" + i).prop('checked') == true) {
                var check_box_value = $("#" + i).val();
                checkbox_value[i] = {
                    check_box_value: check_box_value.split(":"),
                    input_value: document.getElementById($("#" + i).val()).value,
                    last_day: getDate(0)
                };
            }
        }
        console.log(checkbox_value);
        $.ajax({
            url: "php/greentable_update.php",
            type: "POST",
            data: { value_checkbox: checkbox_value },
            success: function (result) {
                var count_array_hour = JSON.parse(result);
                for (var i = 0; i < count_array_hour.length; i++) {
                    if (count_array_hour[i]['real_hour'] > count_array_hour[i]['es_hour']) {
                        $("#" + count_array_hour[i]['colum_id']).css("background-color", "rgb(255, 74, 74)");
                    } else if (count_array_hour[i]['real_hour'] < count_array_hour[i]['es_hour']) {
                        $("#" + count_array_hour[i]['colum_id']).css("background-color", "rgb(28, 166, 97)");
                    } else {
                        $("#" + count_array_hour[i]['colum_id']).css("background-color", "rgb(38, 222, 129)");
                    }
                }
            }
        });
    });
    dateX = date_string;
    $(".popup-sub").html('');
}
$(".btn-cancle").click(function () {
    $(".popup-frame").hide();
    localStorage.removeItem('id_row');
});

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
//หัวข้อ project header .text() เก็บค่าต่อกัน
//ค่าหายทุกครั้งที่ gen table ใหม่ 
//วิธีส่งค่า ไป sever เมื่อ มีการเพิ่มลดค่า ค่าที่เก็บต้องหายไป หรือ เพิ่มขึ้น ***** +
//ลบงานออกเป็นแถว ค่าแถวกับปุ่มต้องตรงกัน +
//เมื่อหมดแถวแล้วหัวโปรเจคต้องหาย

//วันที่
//เลื่อนตาราง
//ข้ามตาราง
//tank

