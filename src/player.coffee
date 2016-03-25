# プレイヤークラス
class Player extends Actor
  constructor: ->
    @image = new Image
    @image.src = Setting.PLAYER.IMAGE
    @bullets = new PlayerBullets
    @command = new Command
    super(
      new Position(
        0,
        0,
        @image.width,
        @image.height,
        Setting.PLAYER.SPEED
      ),
      Setting.PLAYER.HIT_POINT
    )

  reset: ->
    @hitPoint = Setting.PLAYER.HIT_POINT
    @isDamaged = false
    @position.moveTo Setting.SCREEN.WIDTH.center() - @image.width.half(), Setting.SCREEN.HEIGHT - @image.height
    @command.reset()
    @bullets.reset()

  behave: (enemyList) ->
    # 弾を撃つ
    @bullets.shoot @position if @command.isRequested Command.SPACE
    # 移動する
    @move()
    # 弾の操作
    @bullets.behave enemyList

  move: ->
    @position.moveLeft() if @command.isRequested(Command.LEFT) and not @position.isLeftEnd()
    @position.moveUp() if @command.isRequested(Command.UP) and not @position.isTopEnd()
    @position.moveRight() if @command.isRequested(Command.RIGHT) and not @position.isRightEnd()
    @position.moveDown() if @command.isRequested(Command.DOWN) and not @position.isBottomEnd()
