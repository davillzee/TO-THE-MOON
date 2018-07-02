var VERSION = 200;
var height = "15%";


//tabbar





function blockUIOverlay(popup, top) {
    $("body").css("overflow", "hidden");

    $.blockUI({
        message: popup,
        css: {
            "border": 0,
            "border-radius": "8px",
            "top": top + "%",
            "left": "15%",
            "width": "70%",
            "height": height,

        },
        overlayCSS: { backgroundColor: '#A1A1A1' }
    });
}

function unblockUIOverlay() {
    $("body").css("overflow", "scroll");
    $.unblockUI();
}

function createConfirmPopup(title, text, okEvent, cancelEvent, okText, cancelText) {
    var popup = document.createElement("div");
    popup.className = "popup popup-confirm";
    popup.style.cssText = 'margin-top:20px; ';

    var popupTitle = document.createElement("p");
    popupTitle.className = "popup-title";
    popupTitle.innerHTML = title;
    popupTitle.style.cssText = 'margin-top:20px; font-weight:900; font-size:20px;';

    var popupline = document.createElement("p");
    popupline.className = "popup-line";
    popupline.innerHTML = '&nbsp';
    popupline.style.cssText = 'border:1px solid; height:1px; border-top:none;  border-color:#d8d8da; margin-top:28px; ';

    var popuplinev = document.createElement("p");
    popuplinev.className = "popup-linev";
    popuplinev.innerHTML = '&nbsp';
    popuplinev.style.cssText = 'position:absolute; top:80px; left:50%; border:1px solid; width:1px; height:44px;  border-top:none; border-bottom:none;  border-right:none; border-color:#d8d8da; margin-top:28px; ';

    var popupText = document.createElement("p");
    popupText.className = "popup-text";
    popupText.innerHTML = text;
    var cancel = document.createElement("span");
    cancel.style.cssText = "font-weight:900; font-size:20px; position:absolute; left:15%; color:#2ECEC8 ";
    // cancel.style.position = "absolute; ";

    if (!!okText) {
        cancel.innerHTML = cancelText;
    }
    else {
        cancel.innerHTML = "ยกเลิก";
    }

    cancel.onclick = function () {
        if (!!cancelEvent) {
            cancelEvent();
        }
        unblockUIOverlay();
    }
    var ok = document.createElement("span");
    ok.style.cssText = "font-weight:900; font-size:20px; position:absolute; right:15%; color:#2ECEC8 ";
    if (!!okText) {
        ok.innerHTML = okText;
    }
    else {
        ok.innerHTML = "ตกลง";
    }

    ok.onclick = function () {
        if (!!okEvent) {
            okEvent();
        }
        unblockUIOverlay();
    };

    popup.appendChild(popupTitle);
    popup.appendChild(popupText);
    popup.appendChild(popupline);
    popup.appendChild(popuplinev);
    popup.appendChild(cancel);
    popup.appendChild(ok);


    blockUIOverlay(popup, 37.5);
}

function createInputPopup(title, text, okEvent, cancelEvent, okText, cancelText) {
    var popup = document.createElement("div");
    popup.className = "popup popup-input";
    popup.style.cssText = 'margin-top:20px; color:#000000;';

    var popupTitle = document.createElement("p");
    popupTitle.className = "popup-title";
    popupTitle.innerHTML = title;
    popupTitle.style.cssText = 'margin-top:20px; font-weight:900; font-size:20px; color:#000000;';

    var popupline = document.createElement("p");
    popupline.className = "popup-line";
    popupline.innerHTML = '&nbsp';
    popupline.style.cssText = 'border:1px solid; height:1px; border-top:none;  border-color:#d8d8da; margin-top:28px;  color:#000000;';

    var popuplinev = document.createElement("p");
    popuplinev.className = "popup-linev";
    popuplinev.innerHTML = '&nbsp';
    popuplinev.style.cssText = 'position:absolute; top:80px; left:50%; border:1px solid; width:1px; height:44px;  border-top:none; border-bottom:none;  border-right:none; border-color:#d8d8da; margin-top:28px; color:#000000;';

    var popupText = document.createElement("p");
    popupText.className = "popup-text";
    popupText.innerHTML = text;
    var cancel = document.createElement("span");
    cancel.style.cssText = "font-weight:900; font-size:20px; position:absolute; left:15%; color:#2ECEC8;margin:-10px; color:#000000;";
    // cancel.style.position = "absolute; ";

    if (!!okText) {
        cancel.innerHTML = cancelText;
    }
    else {
        cancel.innerHTML = "ยกเลิก";
    }

    cancel.onclick = function () {
        if (!!cancelEvent) {
            cancelEvent();
        }
        unblockUIOverlay();
    }
    var ok = document.createElement("span");
    ok.style.cssText = "font-weight:900; font-size:20px; position:absolute; right:15%; color:#2ECEC8;margin:-10px; color:#000000;";
    if (!!okText) {
        ok.innerHTML = okText;
    }
    else {
        ok.innerHTML = "ตกลง";
    }

    ok.onclick = function () {
        if (!!okEvent) {
            okEvent();
        }
        unblockUIOverlay();
    };

    popup.appendChild(popupTitle);
    popup.appendChild(popupText);
    popup.appendChild(popupline);
    popup.appendChild(popuplinev);
    popup.appendChild(cancel);
    popup.appendChild(ok);


    blockUIOverlay(popup, 37.5);
}

function createAlertPopup(title, text, okEvent) {
    var popup = document.createElement("div");
    popup.className = "popup popup-confirm";
    popup.style.cssText = 'margin-top:1px;';

    var popupline = document.createElement("p");
    popupline.className = "popup-line";
    popupline.innerHTML = '&nbsp';
    popupline.style.cssText = 'border:1px solid; height:1px; border-top:none;  border-color:#29B6F6; margin-top:20px; ';

    var popuplinev = document.createElement("p");
    popuplinev.className = "popup-linev";
    popuplinev.innerHTML = '&nbsp';
    popuplinev.style.cssText = 'position:absolute; top:80px; left:50%; border:1px solid; width:1px; height:44px;  border-top:none; border-bottom:none;  border-right:none; border-color:#d8d8da; margin-top:28px; ';

    var popupText = document.createElement("p");
    popupText.className = "popup-text";
    popupText.innerHTML = text;
    popupText.style.cssText = "font-weight:50; font-size:15px;  left:50%;color:#29B6F6;";//2ECEC8

    var ok = document.createElement("p");
    ok.style.cssText = "font-weight:900; font-size:20px;color:#29B6F6;margin:-10px 0 -10px 0";
    ok.innerHTML = "ตกลง";

    if (text.length > 40) {
        height = "120px";
    }
    else {
        height = "100px";
    }
    ok.onclick = function () {
        if (!!okEvent) {
            okEvent();
        }
        unblockUIOverlay();
    };


    popup.appendChild(popupText);
    popup.appendChild(popupline);
    popup.appendChild(ok);
    blockUIOverlay(popup, 37.5);
}
function createMenuPopup() {
    var popup = document.createElement("div");
    popup.className = "popup popup-confirm";
    popup.style.cssText = 'margin-top:1px; ';
    height = "90%";

    var title = document.createElement("div");
    title.style.cssText = "position : absolute; left:15%; top : 2%;font-weight:900; font-size:20px";
    title.innerHTML = "EXPORT";

    var margin = "5%";
    var menu1 = document.createElement("div");
    menu1.style.cssText = "position : absolute; left:15%; top : 10%;";
    menu1.innerHTML = '<label class="control control--checkbox"  style = "font-size:15px; line-height:25px;">EXPORT ALL<input type="checkbox" id = "c1"><div class="control__indicator">';

    var menu2 = document.createElement("div");
    menu2.style.cssText = "position : absolute; left:15%; top : 18%;";
    menu2.innerHTML = '<label class="control control--checkbox"  style = "font-size:15px; line-height:25px;">DEMOGRAPHIC<input type="checkbox" id = "c2"><div class="control__indicator">';

    var menu3 = document.createElement("div");
    menu3.style.cssText = "position : absolute; left:15%; top : 26%;";
    menu3.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">FAMILY HISTORY<input type="checkbox" id = "c3"><div class="control__indicator">';

    var menu4 = document.createElement("div");
    menu4.style.cssText = "position : absolute; left:15%; top : 34%;";
    menu4.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">INTAKE<input type="checkbox" id = "c4"><div class="control__indicator">';

    var menu5 = document.createElement("div");
    menu5.style.cssText = "position : absolute; left:15%; top : 42%;";
    menu5.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">PREVIOUS CONDITION<input type="checkbox" id = "c5"><div class="control__indicator">';

    var menu6 = document.createElement("div");
    menu6.style.cssText = "position : absolute; left:15%; top : 50%;";
    menu6.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">SEIZURE<input type="checkbox" id = "c6"><div class="control__indicator">';

    var menu7 = document.createElement("div");
    menu7.style.cssText = "position : absolute; left:15%; top : 58%;";
    menu7.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">EPILEPSY DX<input type="checkbox" id = "c7"><div class="control__indicator">';

    var menu8 = document.createElement("div");
    menu8.style.cssText = "position : absolute; left:15%; top : 66%;";
    menu8.innerHTML = '<label class="control control--checkbox"  style = "font-size:15px; line-height:25px;">CURRENT TREATMENT<input type="checkbox" id = "c8"><div class="control__indicator">';


    var exports = document.createElement("p");
    exports.style.cssText = "font-weight:900; font-size:15px;color:#2ECEC8;margin:-10px 0 -10px 0; position :absolute; left : 65%; top : 95%; width:30%;height:5%;";
    exports.innerHTML = "EXPORT";
    exports.onclick = function () {
        var list = [];
        if (document.getElementById("c1").checked == true) {
            list.push("all");
        }
        else {
            if (document.getElementById("c2").checked == true) {
                list.push("demographic");
            }
            if (document.getElementById("c3").checked == true) {
                list.push("family_history");
            }
            if (document.getElementById("c4").checked == true) {
                list.push("intake");
            }
            if (document.getElementById("c5").checked == true) {
                list.push("previous_condition");
            }
            if (document.getElementById("c6").checked == true) {
                list.push("seizure");
            }
            if (document.getElementById("c7").checked == true) {
                list.push("epilepsy_dx");
            }
            if (document.getElementById("c8").checked == true) {
                list.push("current_treatment");
            }
        }
        if (list.length > 0) {
            var url = "http://techvernity.com/epilepsy/export_baseline.php?HN=" + localStorage.getItem("HN");
            for (var i = 0; i < list.length; i++) {
                url += "&" + list[i] + "=" + list[i];
            }
            window.location = url;
            unblockUIOverlay();
        } else {
            createAlertPopup("Epilepsy", "please select option");
        }

    }


    var cancel = document.createElement("p");
    cancel.innerHTML = "CANCEL";
    cancel.onclick = function () {
        unblockUIOverlay();
    }
    cancel.style.cssText = "font-weight:900; font-size:15px;color:#2ECEC8;margin:-10px 0 -10px 0; position :absolute; left : 33%; top : 95%; width:30%;height:5%;";

    popup.appendChild(title);
    popup.appendChild(exports);
    popup.appendChild(cancel);
    popup.appendChild(menu1);
    popup.appendChild(menu2);
    popup.appendChild(menu3);
    popup.appendChild(menu4);
    popup.appendChild(menu5);
    popup.appendChild(menu6);
    popup.appendChild(menu7);
    popup.appendChild(menu8);

    blockUIOverlay(popup, 5);
}
function createMenuPopup2() {
    var popup = document.createElement("div");
    popup.className = "popup popup-confirm";
    popup.style.cssText = 'margin-top:1px; ';
    height = "90%";

    var title = document.createElement("div");
    title.style.cssText = "position : absolute; left:5%; top : 2%;font-weight:900; font-size:20px";
    title.innerHTML = "EXPORT";

    var margin = "5%";
    var menu1 = document.createElement("div");
    menu1.style.cssText = "position : absolute; left:5%; top : 10%;";
    menu1.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;" >EXPORT ALL<input type="checkbox" id = "c1"><div class="control__indicator">';

    var menu2 = document.createElement("div");
    menu2.style.cssText = "position : absolute; left:5%; top : 18%;";
    menu2.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">DATE VISIT<input type="checkbox" id = "c2"><div class="control__indicator">';

    var menu3 = document.createElement("div");
    menu3.style.cssText = "position : absolute; left:5%; top : 26%;";
    menu3.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">CURRENT TREATMENT<input type="checkbox" id = "c3"><div class="control__indicator">';

    var menu4 = document.createElement("div");
    menu4.style.cssText = "position : absolute; left:5%; top : 34%;";
    menu4.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">SOCIAL ACTIVITY<input type="checkbox" id = "c4"><div class="control__indicator">';

    var menu5 = document.createElement("div");
    menu5.style.cssText = "position : absolute; left:5%; top : 42%;";
    menu5.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">ADVERSE REACTION<input type="checkbox" id = "c5"><div class="control__indicator">';

    var menu6 = document.createElement("div");
    menu6.style.cssText = "position : absolute; left:5%; top : 50%;";
    menu6.innerHTML = '<label class="control control--checkbox" style = "font-size:15px; line-height:25px;">PSYCHOLOGICAL FUNCTION<input type="checkbox" id = "c6"><div class="control__indicator">';


    var exports = document.createElement("p");
    exports.innerHTML = "EXPORT";
    exports.onclick = function () {
        var list = [];
        if (document.getElementById("c1").checked == true) {
            list.push("all");
        }
        else {
            if (document.getElementById("c2").checked == true) {
                list.push("date_visit");
            }
            if (document.getElementById("c3").checked == true) {
                list.push("current_treatment");
            }
            if (document.getElementById("c4").checked == true) {
                list.push("social_activity");
            }
            if (document.getElementById("c5").checked == true) {
                list.push("adverse_reaction");
            }
            if (document.getElementById("c6").checked == true) {
                list.push("phychological_function");
            }

        }
        if (list.length > 0) {
            var url = "http://techvernity.com/epilepsy/export_date_visit.php?HN=" + localStorage.getItem("HN");
            for (var i = 0; i < list.length; i++) {
                url += "&" + list[i] + "=" + list[i];
            }
            window.location = url;
            unblockUIOverlay();
        } else {
            createAlertPopup("Epilepsy", "please select option");
        }



    }
    exports.style.cssText = "font-weight:900; font-size:15px;color:#2ECEC8;margin:-10px 0 -10px 0; position :absolute; left : 65%; top : 95%; width:30%;height:5%;";

    var cancel = document.createElement("p");
    cancel.innerHTML = "CANCEL";
    cancel.onclick = function () {

        unblockUIOverlay();
    }
    cancel.style.cssText = "font-weight:900; font-size:15px;color:#2ECEC8;margin:-10px 0 -10px 0; position :absolute; left : 33%; top : 95%; width:30%;height:5%;";

    popup.appendChild(title);
    popup.appendChild(exports);
    popup.appendChild(cancel);
    popup.appendChild(menu1);
    popup.appendChild(menu2);
    popup.appendChild(menu3);
    popup.appendChild(menu4);
    popup.appendChild(menu5);
    popup.appendChild(menu6);
    blockUIOverlay(popup, 5);
}

function createPromptPopup(title, text, inputID, inputDefault, okEvent, cancelEvent) {
    var popup = document.createElement("div");
    popup.className = "popup popup-prompt";
    var popupTitle = document.createElement("p");
    popupTitle.className = "popup-title";
    popupTitle.innerHTML = title;
    var popupText = document.createElement("p");
    popupText.className = "popup-text";
    popupText.innerHTML = text;
    var popupInput = document.createElement("input");
    popupInput.className = "popup-input";
    popupInput.type = "number";
    popupInput.id = inputID;
    popupInput.value = inputDefault;
    var cancel = document.createElement("span");
    cancel.innerHTML = "ยกเลิก";
    cancel.onclick = function () {
        if (!!cancelEvent) {
            cancelEvent();
        }
        unblockUIOverlay();
    }
    var ok = document.createElement("span");
    ok.innerHTML = "ต้องการ";
    ok.onclick = function () {
        if (!!okEvent) {
            okEvent();
        }
        unblockUIOverlay();
    };

    popup.appendChild(popupTitle);
    popup.appendChild(popupText);
    popup.appendChild(popupInput);
    popup.appendChild(cancel);
    popup.appendChild(ok);

    blockUIOverlay(popup, 37.5);
}

function loadSession(type, attr, keyArray) {
    for (var i = 0; i < keyArray.length; i++) {
        var selector;

        if (attr == "id") {
            selector = $("#" + keyArray[i]);
        }
        else {
            selector = $(type + "[" + attr + "= '" + keyArray[i] + "']");
        }

        if (!!sessionStorage.getItem(keyArray[i])) {
            selector.val(sessionStorage.getItem(keyArray[i]));
        }
    }
}

function saveSession(type, attr, keyArray, event) {
    var selector;

    for (var i = 0; i < keyArray.length; i++) {
        if (attr == "id") {
            selector = $("#" + keyArray[i]);
        }
        else {
            selector = $(type + "[" + attr + "= '" + keyArray[i] + "']");
        }

        if (event == "focusout") {
            selector.focusout(function () {
                sessionStorage.setItem($(this).attr(attr), $(this).val());
            });
        }
        if (event == "change") {
            selector.change(function () {
                sessionStorage.setItem($(this).attr(attr), $(this).val());
            });
        }
    }
}

function clearSession(keyArray) {
    for (var i = 0; i < keyArray.length; i++) {
        sessionStorage.removeItem(keyArray[i]);
    }
}

function clearLocal(keyArray) {
    for (var i = 0; i < keyArray.length; i++) {
        localStorage.removeItem(keyArray[i]);
    }
}

function loginLoadLocal(username, onSuccess) {
    $.ajax({
        type: "POST",
        url: "http://www.techvernity.com/C_Heart/get_login_data.php",
        data: encodeURIComponentKeyValue("username", username),
        beforeSend: function () {
            //$("#login-submit").text("กำลังโหลด ...");
        },
        success: function (data) {
            var result = JSON.parse(data);
            if (result.status == 1) {
                if (!result.data.HN) {
                    localStorage.link = false;
                }
                else {
                    localStorage.link = true;
                }
                localStorage.username = result.data.Username;
                localStorage.HN = result.data.HN;
                localStorage.hospital = result.data.Hospital;
                localStorage.name = result.data.Name;
                localStorage.emergency_tel = result.data.Mobilesos;
                localStorage.Iden = result.data.Iden;

                onSuccess();
            }
            else {
                //createAlertPopup("ข้อผิดพลาด", data);
            }
        }
    });
}

function encodeURIComponentKeyValue(key, value, isFirstValue) {
    if (!isFirstValue) {
        return "&" + key + "=" + encodeURIComponent(value);
    }
    else {
        return key + "=" + encodeURIComponent(value);
    }
}

function ajaxError(jqXHR, exception) {
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
    } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
    } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
    } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
    } else if (exception === 'timeout') {
        msg = 'Time out error.';
    } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
    } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
    }

    return msg;
}

function emergencyTel() {
    tel = localStorage.emergency_tel;
    if (!!tel) {
        if (typeof device == 'undefined') {
            createConfirmPopup("โทรออกฉุกเฉิน ?", tel, function () {
                window.location.href = "tel:" + tel;
            });
        }
        else if (device.platform != 'Android') {
            createConfirmPopup("โทรออกฉุกเฉิน ?", tel, function () {
                window.location.href = "tel:" + tel;
            });
        }
        else {
            window.location.href = "tel:" + tel;
        }
    }

    else {
        createConfirmPopup("คุณยังไม่ได้กรอกเบอร์ฉุกเฉิน ระบบจะพาไปยังหน้าโทรศัพท์", "", function () {
            window.location.href = "tel:";
        });
    }
}

function versionCheck(target) {
    var lastVersion = "";

    $.ajax({
        type: "POST",
        url: "http://www.techvernity.com/C_Heart/app_version.php",
        beforeSend: function () {

        },
        success: function (data) {
            var result = JSON.parse(data);

            if (result.status == 1) {
                lastVersion = result.version;

                if (VERSION < lastVersion) {
                    setTimeout(function () {
                        createConfirmPopup("พบแอปพลิเคชัน Version ใหม่", "คุณจำเป็นต้อง Update Version ก่อน", function () {
                            if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                                window.location.href = 'market://details?id=kanin.lamatechvernity.HeartProTechV1';
                            }
                            if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
                                window.location.href = 'itms-apps://itunes.apple.com/app/id1131963252';
                            }
                        });
                    }, 300);
                }
                else {
                    window.location.href = target;
                }
            }
            else {
                //createAlertPopup("ข้อผิดพลาด", "ไม่สามารถเชื่อมต่อ Internet ได้", null);
            }
        },
        error: function (jqXHR, exception) {
            var msg = ajaxError(jqXHR, exception);
            
        },
        complete: function () {
        }
    });
}
function get_all_data(name) {

    var num = 0;
    var obs = [];
    for (var i = 1; document.getElementsByName(name + i)[0] != undefined; i++) {
        var ob = [];
        var temp = document.getElementsByName(name + i);
        if (temp[0] != undefined && temp[0].type == "checkbox") {
            ob.push("checkbox");
        }
        for (var j = 0; temp[j] != undefined; j++) {
            if (temp[j].type == "radio" && temp[j].checked == true) {
                if (document.getElementsByName(temp[j].value + "_etc").length >= 2) {
                    ob.push("no_data_access");
                }
                else if (document.getElementsByName(temp[j].value + "_etc")[0] != undefined) {
                    ob.push(document.getElementsByName(temp[j].value + "_etc")[0].value);
                } else {
                    ob.push(temp[j].value);
                }
            } else if (temp[j].type == "checkbox" && temp[j].checked == true) {
                if (document.getElementsByName(temp[j].value + "_etc").length >= 2) {
                    ob.push("no_data_access");
                }
                else if (document.getElementsByName(temp[j].value + "_etc")[0] != undefined) {
                    ob.push(document.getElementsByName(temp[j].value + "_etc")[0].value);
                } else {
                    ob.push(temp[j].value);
                }
            } else if (temp[j].type != "radio" && temp[j].type != "checkbox") {
                ob.push(temp[j].value);
            }
            num++;
        }
        obs.push(ob);
    }
    //alert(obs);
    return obs;
}
function printData(name) {
    var temp = get_all_data(name);
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp[i].length; j++) {
            alert(temp[i][j]);
        }
    }
}
//only heart_proteh_standalone
function fade() {
    document.getElementById("alert").hidden = true;
}
function alertx(text, okFunction) {
     
   if(document.getElementById("alert_popup")){
        //alert("yes");
   }else{
       // alert("no");
       var container = document.createElement("div");
       document.getElementsByTagName("body")[0].appendChild(container);
       
       container.innerHTML += '<section class="popup_box" hidden id = "alert_popup"><div class="content_box">'
            +'<div class="title" style="color: black;">Teen\'s mind</div>'
            +'<div class="des" id = "text_popup">เราจะส่งรหัสยืนยันไปยังหมายเลขโทรศัพท์ 0989424146 ทาง SMS</div>'
            +'<section class="btn_sec_group"><div class="content_box">'
                +'<div class="btn_popup_1" id = "ok_popup">ตกลง</div>'
         
               
                +'</div>'
            +'</div></section>'
        +'</div></section>';
   }

   document.getElementById("text_popup").innerHTML = text;
   
   if(!!okFunction){
       
        document.getElementById("ok_popup").onclick = function(){
            animate_out($("#alert_popup"));
            
            okFunction();
        };
        
   }else{
       document.getElementById("ok_popup").onclick = function(){
          animate_out($("#alert_popup"));
        
       }
   }
   
  
   animate_in($("#alert_popup"));
}
function confirmx(text, okFunction) {
     
   if(document.getElementById("confirm_popup")){
        //alert("yes");
   }else{
       // alert("no");
        var container = document.createElement("div");
        document.getElementsByTagName("body")[0].appendChild(container);

        container.innerHTML += '<section class="popup_box" hidden id = "confirm_popup"><div class="content_box">'
            +'<div class="title" style="color: black;">Teen\'s mind</div>'
            +'<div class="des" id = "confirm_text_popup"></div>'
            +'<section class="btn_sec_group"><div class="content_box">'
               
                +'<div class="btn_popup_2_1" id= "confirm_cancel">ยกเลิก'
                +'</div><div class="btn_popup_2_2" id = "confirm_ok_popup">ตกลง'
               
                +'</div>'
            +'</div></section>'
        +'</div></section>';
   }

   document.getElementById("confirm_text_popup").innerHTML = text;
  
   if(!!okFunction){
       
        document.getElementById("confirm_ok_popup").onclick = function(){
            animate_out($("#confirm_popup"));
            okFunction();};
        
   }else{
       document.getElementById("confirm_ok_popup").onclick = function(){
           animate_out($("#confirm_popup"));
       }
   }
   document.getElementById("confirm_cancel").onclick = function(){
       animate_out($("#confirm_popup"));
   }
   
   animate_in($("#confirm_popup"));
}
function promptx(text, okFunction) {
     
   if(document.getElementById("alert_popup")){
        //alert("yes");
   }else{
       // alert("no");
        var container = document.createElement("div");
        document.getElementsByTagName("body")[0].appendChild(container);
        
        container.innerHTML += '<section class="popup_box" hidden id = "alert_popupY"><div class="content_box" style="text-align:center;">'
            +'<div class="title" style="color: black;">Teen\'s mind</div>'
            +'<div class="des" id = "text_popupY">เราจะส่งรหัสยืนยันไปยังหมายเลขโทรศัพท์ 0989424146 ทาง SMS</div>'
            +'<input type = "text" placeholder = "ชื่อครอบครัว" id = "text_inputY">'
            +'<section class="btn_sec_group"><div class="content_box">'
                +'<div class="btn_popup_1" hidden>ตกลง</div>'
                +'<div class="btn_popup_2_1" id = "cancel_popupY">ยกเลิก'
                +'</div><div class="btn_popup_2_2" id = "ok_popupY">เรียบร้อย ' 
                +'</div>'
            +'</div></section>'
        +'</div></section>';
   }

   document.getElementById("text_popupY").innerHTML = text;
   if(localStorage.getItem("family_name")!=undefined){
     document.getElementById("text_inputY").value = localStorage.getItem("family_name");
   }
   if(!!okFunction){
       
        document.getElementById("ok_popupY").onclick = function(){
            animate_out($("#alert_popupY"));
            okFunction();
        };
        
   }else{
       document.getElementById("ok_popupY").onclick = function(){
           animate_out($("#alert_popupY"));
           
       }
   }
   document.getElementById("cancel_popupY").onclick = function(){
       animate_out($("#alert_popupY"));
        
   }
   document.getElementById("alert_popupY").hidden = false;
   animate_in($("#alert_popupY"));
}
function animate_in(jq){
     document.getElementById(jq.prop("id")).hidden = false;
    jq.transition({
        scale: 0.75,
        opacity: 0
    }, 0, "easeInQuart", function() {
        
    });
   jq.transition({
        scale: 1,
        opacity: 1
    }, 250, "easeOutQuart", function() {
        
    });
   $('.bg_popup2').fadeIn(150);
}
function animate_out(jq){
     jq.transition({
            scale: 0.75,
            opacity: 0
        }, 250, "easeInQuart", function() {
            
            document.getElementById(jq.prop("id")).hidden = true;
        });
        $('.bg_popup2').fadeOut(250);
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
    return a.getFullYear() + "-" + month + "-" + day ;//+ " " + a.getHours() + ":" + a.getMinutes();
}
function setNotification(id, title, message, time) {
    var noti_time = new Date();

    noti_time.setHours(time.split(":")[0]);
    noti_time.setMinutes(time.split(":")[1]);
    noti_time.setSeconds(0);
    noti_time.setMilliseconds(0);

    //alert(noti_time);

    cordova.plugins.notification.local.schedule({
        id: id,
        title: title,
        message: message,
        every: "day",
        firstAt: noti_time,
        icon: "http://sciactive.com/pnotify/includes/github-icon.png",
        smallIcon: "http://sciactive.com/pnotify/includes/github-icon.png",
        led: "49B9E3"
    });
}
function setNotification2(id, title, message, date) {
    var noti_time = new Date(date);

    noti_time.setHours(7);
    noti_time.setMinutes(0);
    noti_time.setSeconds(0);
    noti_time.setMilliseconds(0);

    //alert(noti_time);

    cordova.plugins.notification.local.schedule({
        id: id,
        title: title,
        message: message,
        //every: "day",
        firstAt: noti_time,
        icon: "http://sciactive.com/pnotify/includes/github-icon.png",
        smallIcon: "http://sciactive.com/pnotify/includes/github-icon.png",
        led: "49B9E3"
    });
}
function updateNotification(id, time) {
    var noti_time = new Date();

    noti_time.setHours(time.split(":")[0]);
    noti_time.setMinutes(time.split(":")[1]);
    noti_time.setSeconds(0);
    noti_time.setMilliseconds(0);

    //alert(noti_time);

    cordova.plugins.notification.local.update({
        id: id,
        firstAt: noti_time
    });
}
function cancelNotification(id) {
    cordova.plugins.notification.local.cancel(id, function () {
        //alert("done");
    });
}
function showBottom(message) {
    window.plugins.toast.showWithOptions({
        message: message,
        duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
        position: "bottom",
        addPixelsY: -40  // added a negative value to move it up a bit (default 0)
    }
    );
}
function get_thai_date(date) {
    var month_list = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    return date.getDate() + " " + month_list[date.getMonth()] + " " + date.getFullYear();
}
function get_em(db_name,sql,func){
   // var result = "test";
     $.ajax({
        type: "POST",
        url: "php/get_em.php",
        data: encodeURIComponentKeyValue("db_name", db_name)
            + encodeURIComponentKeyValue("sql",sql),
        success: function (data) {
            result = JSON.parse(data);
            func();
        }
    });
}
function subscribePremium(success, error) {
    inAppPurchase
        .getProducts(['tech.techvernity.heartprotechs.premium.monthly'])
        .then(function (products) {

            inAppPurchase
                .subscribe('tech.techvernity.heartprotechs.premium.monthly')
                .then(function (data) {
                    success();
                })
                .catch(function (err) {
                    if (!!error) {
                        error(err);
                    }
                    console.log(err);
                });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function restorePremium(success, error) {
    inAppPurchase
        .restorePurchases()
        .then(function (data) {
            if (data.length >= 1) {
                //Restore success
                success();
            }
        })
        .catch(function (err) {
            if (!!error) {
                error(err);
            }
            console.log(err);
        });
}

function subscribePlus(success, error) {
    inAppPurchase
        .getProducts(['tech.techvernity.heartprotechs.plus.monthly'])
        .then(function (products) {

            inAppPurchase
                .subscribe('tech.techvernity.heartprotechs.plus.monthly')
                .then(function (data) {
                    success();
                })
                .catch(function (err) {
                    if (!!error) {
                        error(err);
                    }
                    console.log(err);
                });
        })
        .catch(function (err) {
            console.log(err);
        });
}

// function change_page(page){
   
//     window.location = page;
// }
function back(){
    window.location = localStorage.getItem("prepage");
    transition_page_back();

}
