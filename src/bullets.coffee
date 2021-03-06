class Bullets
  constructor: ->
    @list = []

  reset: ->
    bullet.hide() for bullet in @list

  shoot: (position) ->
    for bullet in @list
      # 死亡判定されている弾があれば画面内に呼び戻し、復活させる
      unless bullet.isAlive()
        bullet.shoot position
        break
      # なければ、弾は撃てない

  behave: (opponents) ->
    for bullet in @list
      bullet.behave opponents