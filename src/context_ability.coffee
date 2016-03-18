# canvas.contextの拡張
class ContextAbility
  @methods:
    # 画面内をすべて削除
    clear: ->
      this.clearRect 0, 0, Setting.SCREEN.WIDTH, Setting.SCREEN.HEIGHT

    # 画像を描画する
    drawImageOf: (actor) ->
      this.drawImage actor.image, actor.position.x, actor.position.y

    # 生きている物体のみ画像を描画する
    drawImageOfAlive: (actors) ->
      for actor in actors when actor.isAlive
        @drawImageOf actor

    # 図形を描画する
    drawRectOf: (actor) ->
      this.fillStyle = actor.style
      this.fillRect actor.position.x, actor.position.y, actor.position.width, actor.position.height

    # 生きている物体のみ図形を描画する
    drawRectOfAlive: (actors) ->
      for actor in actors when actor.isAlive
        @drawRectOf actor

    show: (text) ->
      this.textAlign = "center"
      this.textBaseline = "middle"
      this.font = "90px 'ヒラギノ角ゴ'"
      this.fillStyle = "#FFF"
      this.fillText text, Setting.SCREEN.WIDTH.center(), Setting.SCREEN.HEIGHT.center()


  # 引数にメソッドを付与する
  @giveTo: (target) ->
    target[methodName] = methodContent for methodName, methodContent of @methods