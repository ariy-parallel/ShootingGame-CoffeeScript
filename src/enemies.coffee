# 敵のリストクラス
class Enemies
  SPEED = 10
  # @appearance_rate -> 出現率 0..100で指定
  constructor: (@x_range, @count, @appearance_rate) ->
    @list = (new Enemy1 SPEED for i in [0...@count])

  behave: (player) ->
    @apear()
    @move()
    @attack player

  apear: ->
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    return if @appearance_rate < Math.random_number 100
    for enemy in @list
      unless enemy.is_alive
        enemy.come_back Math.random_number(@x_range)
        break

  move: ->
    enemy.move() for enemy in @list

  attack: (player) ->
    player.die() if @hits player

  hits: (other) ->
    @list.some (enemy) -> enemy.hits other