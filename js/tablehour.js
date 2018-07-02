
$(document).ready(function () {

    ///////////---------CHECK AND SHOW---------//////////////////////////////////////////
    // $.ajax({
    //     url: "php/Showefeature.php",
    //     type: "POST",
    //     data: { ID_project: localStorage['ID_name'] },
    //     success: function (data) {
    //         var x = JSON.parse(data);
    //         console.log(" SHOWE DATA " + data);
    //         // for (x.PJname2) {
    //         //     // $('.project-name').val(x.PJname2);
    //         //     // $('.text-comment').val(x.Comment2);
    //         // }
    //         console.log(" localStorage " + localStorage);
    //     }
    // });
    get_em("tothemoon", "select * from feature where id_project = " + localStorage['ID_name'] + "", function () {
        for (let i = 0; i < result["num"]; i++) {

            localStorage['valueFeature' + i + ''] = result[i]['feature_name']

        }
    });

    get_em("tothemoon", "select * from task where id_project = " + localStorage['ID_name'] + "", function () {
        for (let i = 0; i < result["num"]; i++) {
            var e = parseInt(localStorage["x"]);
            var x = e + 1;
            loe_1 = "<tr>" +
                '<td id=1_' + x + '_1 class=hour>' + localStorage['valueFeature' + i + ''] + '</td>' +
                '<td id=1_' + x + '_2 class=hour>' + result[i]['task_name'] + '</td>' +
                '<td id=1_' + x + '_3 class=hour>' + localStorage['valueDes' + i + ''] + '</td>' +
                '</tr>';
            $(loe_1).insertAfter($("#T1_row_1"));

            document.getElementById("TANK1").rowSpan = document.getElementById("TANK1").rowSpan + 1;
            localStorage["x"] = x;
            console.log(" GET SHOWE F :" + localStorage['valueFeature' + i + ''] + "  TASK : " + localStorage['valueTask' + i + ''] + "  Description : " + localStorage['valueDes' + i + ''] + "   ID:" + localStorage['ID_name'] + "   result" + result[i]['project_name']);

        }
    });
    get_em("tothemoon", "select * from task where id_project = " + localStorage['ID_name'] + "", function () {
        for (let i = 0; i < result["num"]; i++) {

            // $("#T1_row_1").html('<a id =1_' + result[i]['project_name']
            //     + '_1 class=hour href="">' +
            //     result[i]['project_name'] + '</a>');
            localStorage['valueDes' + i + ''] = result[i]['Descriptiona'];

        }
    });
   
    ///////////---------SAVE DATA---------//////////////////////////////////////////
    $(document).on('click', '.hour', function () {

        var ts = $(this).attr('id');
        console.log(" ID = " + ts);
        var res = ts.split("_");
        console.log(" split = " + "#" + res[0] + "_" + (parseInt(res[1]) + parseInt(+ 1)) + "_" + (res[2] - 1));

        var t2 = prompt("test");
        console.log("DESCRIPYION = " + t2);

        localStorage['Description'] = t2;
        console.log("localStorage = " + localStorage['Description']);
        $('#' + ts).html(localStorage['Description']);

    })

    /////////////////// ADD TABLE ////////////////////////////////////////////////
    localStorage["x"] = "0";
    localStorage["x1"] = "0";
    localStorage["x2"] = "0";
    var loe_1 = " ";

    // $("#TANK1").click(function () {
    //     var e = parseInt(localStorage["x"]);
    //     var x = e + 1;
    //     loe_1 = "<tr>" +
    //         "<td id=1_" + x + "_1 class=hour></td>" +
    //         "<td id=1_" + x + "_2 class=hour></td>" +
    //         "<td id=1_" + x + "_3 class=hour></td>" +
    //         "</tr>";
    //     $(loe_1).insertAfter($("#T1_row_1"));
    //     document.getElementById("TANK1").rowSpan = document.getElementById("TANK1").rowSpan + 1;
    //     localStorage["x"] = x;
    // });

    $("#addd").click(function () {
        var e = parseInt(localStorage["x"]);
        var x = e + 1;
        loe_1 = "<tr>" +
            "<td id=1_" + x + "_1 class=hour></td>" +
            "<td id=1_" + x + "_2 class=hour></td>" +
            "<td id=1_" + x + "_3 class=hour></td>" +
            "</tr>";
        $(loe_1).insertAfter($("#T1_row_1"));
        document.getElementById("TANK1").rowSpan = document.getElementById("TANK1").rowSpan + 1;
        localStorage["x"] = x;
    });
    // $("#TANK2").click(function () {
    //     var e1 = parseInt(localStorage["x1"]);
    //     var x1 = e1 + 1;
    //     loe_2 = " <tr>" +
    //         "<td id=2_" + x1 + "_1 class=hour></td>" +
    //         "<td id=2_" + x1 + "_2 class=hour></td>" +
    //         "<td id=2_" + x1 + "_3 class=hour></td>" +
    //         "</tr>";
    //     $(loe_2).insertAfter($("#T2_row_1"));
    //     document.getElementById("TANK2").rowSpan = document.getElementById("TANK2").rowSpan + 1;
    //     localStorage["x1"] = x1;
    // });
    // $("#TANK3").click(function () {
    //     var e2 = parseInt(localStorage["x2"]);
    //     var x2 = e2 + 1;
    //     loe_3 = " <tr>" +
    //         "<td id=3_" + x2 + "_1 class=hour></td>" +
    //         "<td id=3_" + x2 + "_2 class=hour></td>" +
    //         "<td id=3_" + x2 + "_3 class=hour></td>" +
    //         "</tr>";
    //     $(loe_3).insertAfter($("#T3_row_1"));
    //     document.getElementById("TANK3").rowSpan = document.getElementById("TANK3").rowSpan + 1;
    //     localStorage["x2"] = x2;
    // });



    ////////////////////// ADD-FEATURE-TASK TO DATA Base ////////////////////////////////////////////////
    $("#save_hour").click(function () {

        // ajax({
        //     url: "php/clear.php",
        //     type: "POST",
        //     data: { ID_project: localStorage['ID_name'] },
        // })

        non();

        function non() {

            for (var j = 1; document.getElementById("1_" + j + "_1") != undefined; j++) {

                var feture_NAME = $("#" + "1_" + j + "_1").text();
                console.log(" ดึงค่ามา FEATURE " + feture_NAME + " j " + j + " ID project " + localStorage['ID_name']);

                $.ajax({
                    url: "php/tablehour.php",
                    type: "POST",
                    data: { featureB: feture_NAME, ID_project: localStorage['ID_name'] },

                    success: function (data) {

                        console.log(" แอด SAVE FEATURE JS : " + data);
                    }
                });
                { continue; }
            }



            for (var j = 1; document.getElementById("1_" + j + "_2") != undefined; j++) {
                var task_NAME = $("#" + "1_" + j + "_2").html();
                var Description = $("#" + "1_" + j + "_3").text();
                var feture_get_id = $("#" + "1_" + j + "_1").text();
                console.log(" show Task " + task_NAME + " j " + j + " ช่อง 1 " + feture_get_id + " Description " + Description);
                checkvalue(task_NAME, j);

            }

            function checkvalue(task_NAME, j) {

                if (task_NAME != "") {

                    for (var j = 1; document.getElementById("1_" + j + "_1") != undefined; j++) {

                        console.log(" IF FO R GET : " + $("#" + "1_" + j + "_1").text() + " TASk " + task_NAME);

                        if ($("#" + "1_" + j + "_1").text() != "") {

                            console.log(" IF FO R GET : " + feture_get_id1 + " TASk " + task_NAME);
                            var feture_get_id1 = $("#" + "1_" + j + "_1").text();
                            console.log(" IF FO R GET : 1 " + feture_get_id1 + " TASk " + task_NAME);
                            $.ajax({
                                url: "php/tablehour_addtask.php",
                                type: "POST",
                                data: { taskB: task_NAME, ID_project: localStorage['ID_name'], Descriptionnaa: Description, get_id_feature: feture_get_id1 },

                                success: function (data) {

                                    console.log(" ค่าตีกลับ SAVE TASK JS : " + data);
                                    var cull = JSON.parse(data);
                                    localStorage['ID_feature2'] = cull.ID_featuree;
                                    localStorage['taskna'] = cull.taskk;
                                    localStorage['Descriptionco'] = cull.Descriptionnew;
                                    console.log(" ID FEATURE  : " + localStorage['ID_feature2']);
                                    console.log(" TASK  : " + localStorage['taskna']);
                                    console.log(" Description  : " + localStorage['Descriptionco']);
                                }
                            });
                            break;

                        }

                    }
                }

            }
        }
        ////////////////////////////////    TANK-2     /////////////////////////////////////////////////////////////////////////////
        non2();

        function non2() {

            for (var j = 1; document.getElementById("2_" + j + "_1") != undefined; j++) {

                var feture_NAME = $("#" + "2_" + j + "_1").text();
                console.log(" ดึงค่ามา FEATURE " + feture_NAME + " j " + j + " ID project " + localStorage['ID_name']);

                $.ajax({
                    url: "php/tablehour.php",
                    type: "POST",
                    data: { featureB: feture_NAME, ID_project: localStorage['ID_name'] },

                    success: function (data) {

                        console.log(" แอด SAVE FEATURE JS : " + data);
                    }
                });
                { continue; }
            }



            for (var j = 1; document.getElementById("2_" + j + "_2") != undefined; j++) {
                var task_NAME = $("#" + "2_" + j + "_2").html();
                var Description = $("#" + "2_" + j + "_3").text();
                var feture_get_id = $("#" + "2_" + j + "_1").text();
                console.log(" show Task " + task_NAME + " j " + j + " ช่อง 1 " + feture_get_id + " Description " + Description);
                checkvalue(task_NAME, j);

            }

            function checkvalue(task_NAME, j) {

                if (task_NAME != "") {

                    for (var j = 1; document.getElementById("2_" + j + "_1") != undefined; j++) {

                        console.log(" IF FO R GET : " + $("#" + "2_" + j + "_1").text() + " TASk " + task_NAME);

                        if ($("#" + "2_" + j + "_1").text() != "") {
                            console.log(" IF FO R GET : " + feture_get_id1 + " TASk " + task_NAME);
                            var feture_get_id1 = $("#" + "2_" + j + "_1").text();
                            console.log(" IF FO R GET : 1 " + feture_get_id1 + " TASk " + task_NAME);
                            $.ajax({
                                url: "php/tablehour_addtask.php",
                                type: "POST",
                                data: { taskB: task_NAME, ID_project: localStorage['ID_name'], Descriptionnaa: Description, get_id_feature: feture_get_id1 },

                                success: function (data) {

                                    console.log(" ค่าตีกลับ SAVE TASK JS : " + data);
                                    var cull = JSON.parse(data);
                                    localStorage['ID_feature2'] = cull.ID_featuree;
                                    localStorage['taskna'] = cull.taskk;
                                    localStorage['Descriptionco'] = cull.Descriptionnew;
                                    console.log(" ID FEATURE  : " + localStorage['ID_feature2']);
                                    console.log(" TASK  : " + localStorage['taskna']);
                                    console.log(" Description  : " + localStorage['Descriptionco']);
                                }
                            });
                            break;

                        }

                    }
                }
            }
        }

        ////////////////////////      TANK-3            ////////////////////////////////////////////////
        non3();

        function non3() {

            for (var j = 1; document.getElementById("3_" + j + "_1") != undefined; j++) {

                var feture_NAME = $("#" + "3_" + j + "_1").text();
                console.log(" ดึงค่ามา FEATURE " + feture_NAME + " j " + j + " ID project " + localStorage['ID_name']);

                $.ajax({
                    url: "php/tablehour.php",
                    type: "POST",
                    data: { featureB: feture_NAME, ID_project: localStorage['ID_name'] },

                    success: function (data) {

                        console.log(" แอด SAVE FEATURE JS : " + data);
                    }
                });
                { continue; }
            }



            for (var j = 1; document.getElementById("3_" + j + "_2") != undefined; j++) {
                var task_NAME = $("#" + "3_" + j + "_2").html();
                var Description = $("#" + "3_" + j + "_3").text();
                var feture_get_id = $("#" + "3_" + j + "_1").text();
                console.log(" show Task " + task_NAME + " j " + j + " ช่อง 1 " + feture_get_id + " Description " + Description);
                checkvalue(task_NAME, j);

            }

            function checkvalue(task_NAME, j) {

                if (task_NAME != "") {

                    for (var j = 1; document.getElementById("3_" + j + "_1") != undefined; j++) {

                        console.log(" IF FO R GET : " + $("#" + "3_" + j + "_1").text() + " TASk " + task_NAME);

                        if ($("#" + "3_" + j + "_1").text() != "") {
                            console.log(" IF FO R GET : " + feture_get_id1 + " TASk " + task_NAME);
                            var feture_get_id1 = $("#" + "3_" + j + "_1").text();
                            console.log(" IF FO R GET : 1 " + feture_get_id1 + " TASk " + task_NAME);
                            $.ajax({
                                url: "php/tablehour_addtask.php",
                                type: "POST",
                                data: { taskB: task_NAME, ID_project: localStorage['ID_name'], Descriptionnaa: Description, get_id_feature: feture_get_id1 },

                                success: function (data) {

                                    console.log(" ค่าตีกลับ SAVE TASK JS : " + data);
                                    var cull = JSON.parse(data);
                                    localStorage['ID_feature2'] = cull.ID_featuree;
                                    localStorage['taskna'] = cull.taskk;
                                    localStorage['Descriptionco'] = cull.Descriptionnew;
                                    console.log(" ID FEATURE  : " + localStorage['ID_feature2']);
                                    console.log(" TASK  : " + localStorage['taskna']);
                                    console.log(" Description  : " + localStorage['Descriptionco']);
                                }
                            });
                            break;

                        }

                    }
                }
            }
        }
    });
    // if (res[2] == 1) {

    //     console.log(" ช่อง 1 " + $("#" + res[0] + "_" + res[1] + "_" + res[2]).text() + " ts " + ts);
    //     var feature_na = $("#" + res[0] + "_" + res[1] + "_" + res[2]).text();
    //     obj = feature_na;
    //     for (var j = 1; document.getElementById("1_" + j + "_1") == t2; j++) {
    //         ar[j] = obj;
    //         console.log(" ARR " + ar);
    //     }
    //     console.log(" ARR " + ar.length + " obj " + obj + " value " + feature_na);

    //     // for (i = 0; ar[i] < ar[10]; i++) {
    //     //     i = i + 1;
    //     //     ar[0] = obj;
    //     //     console.log(" for : " + ar[i] + " lo " + localStorage[' arr ']);
    //     //     i++;
    //     // }

    // }

    // console.log("ARRAY OBJ : " + ar.length);
    // if (res[2] == 2) {
    //     console.log(" ช่อง 2 " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() + " ID : " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).id);

    //     if ($("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() == "") {
    //         console.log(" ID " + document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id);

    //         while (document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id == undefined) {

    //             console.log(" ไม่มีไอดี =" + localStorage['x'].length + "=" + document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1)).id);


    //             if ($("#" + res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1)).text() == "") {

    //                 console.log(" ไม่มีค่า 2 " + "#" + res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1));
    //             }
    //             else {

    //                 console.log(" แอดเลย นะ ");
    //             }
    //             localStorage['x'] = (parseInt(localStorage['x']) + parseInt(1));

    //             console.log(" X " + localStorage['x']);
    //         }

    //         console.log(" แอกเลยนะ " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text());


    //     }
    //     else {
    //         console.log(" แอดเลย " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text());

    //     }
    // }
    // if (res[2] == 3) {
    //     console.log(" ช่อง 3 " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).id + " X " + localStorage['x']);

    //     if ($("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() == "") {

    //         console.log(" ID " + $(res[0] + "_" + res[1] + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id);

    //     }
    //     else {
    //         console.log(" add ");
    //     }
    // }
    // if (res[2] == 1) {

    //     console.log(" ช่อง 1 " + $("#" + res[0] + "_" + res[1] + "_" + res[2]).text() + " ts " + ts);
    //     var feature_na = $("#" + res[0] + "_" + res[1] + "_" + res[2]).text();
    //     obj = feature_na;
    //     for (var j = 1; document.getElementById("1_" + j + "_1") == t2; j++) {
    //         ar[j] = obj;
    //         console.log(" ARR " + ar);
    //     }
    //     console.log(" ARR " + ar.length + " obj " + obj + " value " + feature_na);

    //     // for (i = 0; ar[i] < ar[10]; i++) {
    //     //     i = i + 1;
    //     //     ar[0] = obj;
    //     //     console.log(" for : " + ar[i] + " lo " + localStorage[' arr ']);
    //     //     i++;
    //     // }

    // }

    // console.log("ARRAY OBJ : " + ar.length);
    // if (res[2] == 2) {
    //     console.log(" ช่อง 2 " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() + " ID : " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).id);

    //     if ($("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() == "") {
    //         console.log(" ID " + document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id);

    //         while (document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id == undefined) {

    //             console.log(" ไม่มีไอดี =" + localStorage['x'].length + "=" + document.getElementById(res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1)).id);


    //             if ($("#" + res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1)).text() == "") {

    //                 console.log(" ไม่มีค่า 2 " + "#" + res[0] + "_" + (parseInt(res[1]) + parseInt(+ localStorage['x'].length)) + "_" + (res[2] - 1));
    //             }
    //             else {

    //                 console.log(" แอดเลย นะ ");
    //             }
    //             localStorage['x'] = (parseInt(localStorage['x']) + parseInt(1));

    //             console.log(" X " + localStorage['x']);
    //         }

    //         console.log(" แอกเลยนะ " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text());


    //     }
    //     else {
    //         console.log(" แอดเลย " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text());

    //     }
    // }
    // if (res[2] == 3) {
    //     console.log(" ช่อง 3 " + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() + $("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).id + " X " + localStorage['x']);

    //     if ($("#" + res[0] + "_" + res[1] + "_" + (res[2] - 1)).text() == "") {

    //         console.log(" ID " + $(res[0] + "_" + res[1] + "_" + (parseInt(res[2]) + parseInt(- localStorage['x'].length))).id);

    //     }
    //     else {
    //         console.log(" add ");
    //     }
    // }

    //     else {
    //         // function waiteAjax(feature_input) {

    //         //     $.ajax({
    //         //         url: "php/tablehour_addtask.php",
    //         //         type: "POST",
    //         //         data: { get_id_feature: feature_input },

    //         //         success: function (data) {
    //         //             console.log(" data get ID " + data);
    //         //             var cull1 = JSON.parse(data);
    //         //             localStorage['get_id_co_feature'] = cull1.IDcofeature;
    //         //             console.log(" ID FEATURE GET " + localStorage['get_id_co_feature']);
    //         //         }

    //         //     });
    //         // }

    //         // $.when(waiteAjax(feture_get_id)).done(function () {

    //         console.log(" log " + localStorage['get_id_co_feature'] + " TASk " + task_NAME + " Des " + Description + " ID " + localStorage['ID_name']);

    //         $.ajax({
    //             url: "php/tablehour_addtask.php",
    //             type: "POST",
    //             data: { taskB: task_NAME, id_featureH: localStorage['get_id_co_feature'], ID_project: localStorage['ID_name'], Descriptionnaa: Description, get_id_feature: feture_get_id },
    //             timeout: 3000,
    //             success: function (data) {

    //                 console.log(" SAVE TASK JS : " + data);

    //                 var cull = JSON.parse(data);

    //                 localStorage['ID_feature2'] = cull.ID_feature;
    //                 localStorage['taskna'] = cull.task;
    //                 localStorage['Descriptionco'] = cull.Descriptionnew;

    //                 console.log(" ID FEATURE 2  : " + localStorage['ID_feature2']);
    //                 console.log(" TASK 2 : " + localStorage['taskna']);
    //                 console.log(" Description 2  : " + localStorage['Descriptionco']);

    //             }
    //         });
    //         // });

    //     }
    // } else {

    //     console.log(" else ");
    // }


    // }

    // localStorage['ID_feature1'];
    // var feture_NAME = localStorage['feature_name'];
    // console.log(" FETURE name : " + feture_NAME);
    // var task_NAME = localStorage['task_name'];
    // console.log(" TASK name : " + task_NAME);
    // console.log(" Description : " + localStorage['Description']);

    // if (localStorage['feature_name'] || localStorage['task_name'] || localStorage['Description']) {

    //     if (localStorage['feature_name'] != undefined && localStorage['feature_name'] != localStorage['feature1']) {

    //         $.ajax({
    //             url: "php/tablehour.php",
    //             type: "POST",
    //             data: { featureB: feture_NAME, ID_project: localStorage['ID_name'] },

    //             success: function (data) {

    //                 console.log(" SAVE FEATURE JS : " + data);

    //                 var cull = JSON.parse(data);

    //                 localStorage['feature1'] = cull.feature;
    //                 localStorage['ID_feature1'] = cull.ID_feature;
    //                 console.log(" FEATURE 1 : " + localStorage['feature1']);
    //                 console.log(" ID_FEATURE 1 : " + localStorage['ID_feature1']);

    //                 if (data = cull.NONE) {
    //                     alert(cull.NONE);
    //                 }

    //             }
    //         });

    //     }
    //     if (localStorage['task_name'] != undefined && localStorage['task_name'] != localStorage['taskna']) {

    //         console.log(" Test : id_fe " + localStorage['ID_feature1']);
    //         $.ajax({
    //             url: "php/tablehour.php",
    //             type: "POST",
    //             data: { taskB: task_NAME, Descriptionnaa: localStorage['Description'], id_featureH: localStorage['ID_feature1'], ID_project: localStorage['ID_name'] },

    //             success: function (data) {

    //                 console.log(" SAVE TASK JS : " + data);

    //                 var cull = JSON.parse(data);

    //                 localStorage['ID_feature2'] = cull.ID_feature;
    //                 localStorage['taskna'] = cull.task;
    //                 localStorage['Descriptionco'] = cull.Descriptionnew;
    //                 // localStorage['Descriptionnew'] = cull.Descriptiona;


    //                 console.log(" ID FEATURE 2  : " + localStorage['ID_feature2']);
    //                 console.log(" TASK 2 : " + localStorage['taskna']);
    //                 console.log(" Description 2  : " + localStorage['Descriptionco']);

    //             }
    //         });

    //     }
    // }
    // else {
    //     alert(" NO = DATA ");
    // }


});