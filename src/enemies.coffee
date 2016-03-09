# 敵のリストクラス
class Enemies
  SPEED = 5
  # @appearance_rate -> 出現率 0..100で指定
  constructor: (@x_range, @count, @appearance_rate) ->
    @list = (new Enemy1(0, 0, SPEED) for i in [0...@count])

  action: ->
    @apear()
    @move()

  apear: ->
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    return if @appearance_rate <= Math.random_number 100
    for enemy in @list
      if enemy.is_dead
        enemy.apear Math.random_number(@x_range)
        break

  move: ->
    enemy.move() for enemy in @list