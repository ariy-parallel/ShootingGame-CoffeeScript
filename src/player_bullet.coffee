class PlayerBullet extends Actor
  constructor: ->
    @style = Setting.PLAYER.BULLET.COLOR
    super new Position(
      0,
      0,
      Setting.PLAYER.BULLET.WIDTH,
      Setting.PLAYER.BULLET.HEIGHT,
      Setting.PLAYER.BULLET.SPEED
    ), 0

  move: ->
    @position.moveUp()

  shoot: (shooter) ->
    @position.moveTo shooter.centerX() - @position.width.half(), shooter.topY()
    @hitPoint = Setting.PLAYER.BULLET.HIT_POINT

  attack: (enemyieList) ->
    for enemy in enemyieList
      if @hits enemy
        enemy.damage()
        @clear()
      if enemy.bullets?
        @attack enemy.bullets.list