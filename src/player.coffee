# プレイヤークラス
class Player extends Solid
  constructor: (x, y, speed) ->
    @image = new Image
    @image.src = "img/player.png"
    @bullets = new Bullets 10
    @command = new Command
    super(
      new Position(
        x - @image.width.half(),
        y - @image.height.half(),
        @image.width,
        @image.height,
        speed
      ),
      false
    )

  action: ->
    # プレイヤーの操作
    @bullets.shoot @position.center_x(), @position.top_y() if @command.is_requested(Command.SPACE)
    @position.left() if @command.is_requested(Command.LEFT)
    @position.up() if @command.is_requested(Command.UP)
    @position.right() if @command.is_requested(Command.RIGHT)
    @position.down() if @command.is_requested(Command.DOWN)

    # 弾の操作
    @bullets.action()