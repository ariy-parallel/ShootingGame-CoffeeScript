$("#start").click(function() {
  var KEY, context, main, main_screen, player, pressed;
  KEY = {
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  pressed = new Array(240);
  document.onkeydown = function(key) {
    return pressed[key.keyCode] = true;
  };
  document.onkeyup = function(key) {
    return pressed[key.keyCode] = false;
  };
  $(this).attr("disabled", true);
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20);
  main = function() {
    var bullet, i, len, ref;
    context.clearRect(0, 0, main_screen.width, main_screen.height);
    if (pressed[KEY.SPACE]) {
      player.shoot();
    }
    if (pressed[KEY.LEFT] && 0 < player.position.left_x()) {
      player.left();
    }
    if (pressed[KEY.UP] && 0 < player.position.top_y()) {
      player.up();
    }
    if (pressed[KEY.RIGHT] && player.position.right_x() < main_screen.width) {
      player.right();
    }
    if (pressed[KEY.DOWN] && player.position.bottom_y() < main_screen.height) {
      player.down();
    }
    context.drawImage(player.image, player.position.x, player.position.y);
    ref = player.bullets.list;
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      if (bullet.is_dead) {
        continue;
      }
      bullet.move();
      context.fillStyle = bullet.style;
      context.fillRect(bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height);
    }
    return setTimeout(main, 20);
  };
  return main();
});
