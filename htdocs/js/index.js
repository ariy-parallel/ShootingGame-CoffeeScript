$(function() {
  var context, main_screen;
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  ScreenAbility.give_to(main_screen);
  ContextAbility.give_to(context);
  main_screen.width = Settings.SCREEN.WIDTH;
  main_screen.height = Settings.SCREEN.HEIGHT;
  return $("#start").click(function() {
    var enemies, main, player;
    $(this).attr("disabled", true);
    player = new Player;
    enemies = new Enemies;
    document.onkeydown = function(key) {
      return player.command.request(key.keyCode);
    };
    document.onkeyup = function(key) {
      return player.command.cancel(key.keyCode);
    };
    main = function() {
      enemies.apear();
      player.behave(enemies.list);
      enemies.behave(player);
      main_screen.clear_out_of_range([player.bullets.list, enemies.list]);
      context.clearRect(0, 0, Settings.SCREEN.WIDTH, Settings.SCREEN.HEIGHT);
      context.draw_image_of_alive([player]);
      context.draw_rect_of_alive(player.bullets.list);
      context.draw_image_of_alive(enemies.list);
      return setTimeout(main, Settings.INTERVAL);
    };
    return main();
  });
});
