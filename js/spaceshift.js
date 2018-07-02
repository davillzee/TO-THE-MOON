var img_array_description = ["mars.svg", "moon.svg", "planet-earth.svg", "jupiter.svg", "planet.svg", "uranus.svg", "venus.svg"];

if (localStorage['username'] == undefined) {
  alert("PLEASE LOGIN");
  window.location.href = 'login.html';
} else {
  get_em('tothemoon', 'select id_project , project_name , hour , finish_hour from project', function () {
    console.log(result);
    for (let i = 0; i < result['num']; i++) {
      var spaceship_per = Math.round(parseInt((result[i]['finish_hour'] / result[i]['hour']) * 100));
      console.log(i+ " : "+spaceship_per);

      $('.spaceship-content').append("<div class='space-project'>" +
        "<center>" +
        "<a>" +
        "<div class='header-project'>" + result[i]['project_name'].toUpperCase() + "</div>" +
        "<img id = plant_" + result[i]['id_project'] + " class='planet-project' src='img/planet/" + img_array_description[i] + "'>" +
        "</a>" +
        "<div id = spaceship_" + result[i]['id_project'] + " class='spaceship-percent'>" +
        "<label class='percent-project'>" + spaceship_per + "%</label>" +
        "<img class='spaceship-project' src='img/spaceship/rocket.svg'>" +
        "</center>" +
        "</div>" +
        "</div>");

      if (spaceship_per == 0) {
        $("#spaceship_" + result[i]['id_project']).css('top', '280px');
      } else if (spaceship_per >= 0 && spaceship_per < 10) {
        $("#spaceship_" + result[i]['id_project']).css('top', '250px');
      } else if (spaceship_per >= 10 && spaceship_per < 20) {
        $("#spaceship_" + result[i]['id_project']).css('top', '220px');
      } else if (spaceship_per >= 20 && spaceship_per < 30) {
        $("#spaceship_" + result[i]['id_project']).css('top', '180px');
      } else if (spaceship_per >= 30 && spaceship_per < 40) {
        $("#spaceship_" + result[i]['id_project']).css('top', '150px');
      } else if (spaceship_per >= 40 && spaceship_per < 50) {
        $("#spaceship_" + result[i]['id_project']).css('top', '120px');
      } else if (spaceship_per >= 50 && spaceship_per < 60) {
        $("#spaceship_" + result[i]['id_project']).css('top', '90px');
      } else if (spaceship_per >= 60 && spaceship_per < 70) {
        $("#spaceship_" + result[i]['id_project']).css('top', '60px');
      } else if (spaceship_per >= 70 && spaceship_per < 80) {
        $("#spaceship_" + result[i]['id_project']).css('top', '30px');
      } else if (spaceship_per >= 80 && spaceship_per < 90) {
        $("#spaceship_" + result[i]['id_project']).css('top', '10px');
      } else {
        $("#spaceship_" + result[i]['id_project']).css('top', '0px');
      }
    }
  });
}

$(document).on('click' , '.planet-project' , function(){
  localStorage['project_id_sidemenu'] = $(this).attr('id').split('_')[1];
  window.location.href = 'tank.html';
});
