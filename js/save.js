$(document).ready(function () {


    ///////////---------CHECK AND SHOW---------//////////////////////////////////////////
    $.ajax({
        url: "php/Showecon.php",
        type: "POST",

        data: { comname2: localStorage['C2_name'], Proname2: localStorage['P2_name'] },
        success: function (data) {

            var x = JSON.parse(data);
            console.log(" SHOWE DATA " + data);

            $('.project-name').val(x.PJname2);
            $('.text-comment').val(x.Comment2);

            console.log(" localStorage " + localStorage);
        }
    });
    ////////////------------SAVE-------///////////////////////////////////////

    $("#savena").click(function () {
        var pname = $(".project-name").val();
        console.log(" ProName : " + pname);
        var conmentname = $(".text-comment").val();

        console.log(" Come Name : " + conmentname);
        if (pname && pname != localStorage['P2_name']) {
            $.ajax({
                url: "php/Save.php",
                type: "POST",
                data: { Proname: pname, comname: conmentname },

                success: function (data) {

                    console.log(" SAVE JS PROJECT ADD : " + data);
                    var coback = JSON.parse(data);

                    localStorage['P2_name'] = coback.project_name2;//project name
                    localStorage['ID_name'] = coback.IDor;//id project
                    localStorage['C2_name'] = coback.text;//conceptual

                    console.log(" Conceptual 1 : " + localStorage['C2_name']);
                    console.log(" Project name : " + localStorage['P2_name']);
                    console.log(" ID project name : " + localStorage['ID_name']);

                    if (result = coback.NONE) {
                        alert(coback.NONE);
                    }

                }
            });
        }
        else if (conmentname != localStorage['C2_name']) {
            var conmentnaja = $(".text-comment").val();
            console.log(" Conceptual : " + conmentnaja);
            $.ajax({
                url: "php/updatecon.php",
                type: "POST",
                data: { comname: conmentnaja, ID_project: localStorage['ID_name'] },

                success: function (data) {

                    console.log(" SAVE JS CONCEPTUAL ADD : " + data);
                    var coback = JSON.parse(data);

                    localStorage['C2_name'] = coback.text;//conceptual
                    console.log(" Conceptual 2 : " + localStorage['C2_name']);

                }
            });
        }
        if (conmentname == localStorage['C2_name'] && pname == localStorage['P2_name']) {
            alert(" Project name or Conceptual Is the same. ");
        }


    });


});



