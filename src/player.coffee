# プレイヤークラス
class Player extends Actor
  constructor: ->
    @image = new Image
    @image.src = Settings.PLAYER.IMAGE
    @bullets = new Bullets
    @command = new Command
    super(
      new Position(
        Settings.SCREEN.WIDTH.center() - @image.width.half(),
        Settings.SCREEN.HEIGHT - @image.height,
        @image.width,
        @image.height,
        Settings.PLAYER.SPEED
      ),
      true
    )

  behave: (enemyList) ->
    # 弾を撃つ
    @bullets.shoot @position if @command.isRequested Command.SPACE
    # 移動する
    @position.moveLeft() if @command.isRequested(Command.LEFT) and not @position.isLeftEnd()
    @position.moveUp() if @command.isRequested(Command.UP) and not @position.isTopEnd()
    @position.moveRight() if @command.isRequested(Command.RIGHT) and not @position.isRightEnd()
    @position.moveDown() if @command.isRequested(Command.DOWN) and not @position.isBottomEnd()

    # 弾の操作
    @bullets.behave enemyList