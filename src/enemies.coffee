# 敵のリストクラス
class Enemies
  constructor: ->
    @list = (new Macaron for i in [0...Settings.ENEMY.COUNT])

  apear: ->
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    if Math.randomNumber(100) < Settings.ENEMY.APPEARANCE_RATE
      for enemy in @list
        unless enemy.isAlive
          enemy.comeBack()
          break

  behave: (player) ->
    for enemy in @list
      enemy.move()
      enemy.attack player
      enemy.clearOffscreen()