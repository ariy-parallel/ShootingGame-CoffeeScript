class Setting
  @INTERVAL: 20

  @SCREEN:
    WIDTH: 800
    HEIGHT: 600
    SCORE:
      PADDING: 20

  @PLAYER:
    IMAGE: "img/player.png"
    SPEED: 20
    HIT_POINT: 1
    BULLET:
      WIDTH: 1
      HEIGHT: 20
      COUNT: 10
      SPEED: 20
      HIT_POINT: 1
      STYLE: "rgb(255, 255, 255)"

  @ENEMY:
    APPEARANCE_RATE: 3
    YELLOW_MACARON:
      COUNT: 7
      IMAGE: "img/yellowMacaron.png"
      SPEED: 10
      HIT_POINT: 1
      EXP: 100
    BLUE_MACARON:
      COUNT: 2
      IMAGE: "img/blueMacaron.png"
      SPEED: 30
      HIT_POINT: 10
      EXP: 500
    GREEN_MACARON:
      COUNT: 5
      IMAGE: "img/greenMacaron.png"
      SPEED: 10
      HIT_POINT: 3
      EXP: 200
    PINK_MACARON:
      COUNT: 3
      IMAGE: "img/pinkMacaron.png"
      SPEED: 25
      HIT_POINT: 1
      EXP: 300
    PANCAKE:
      IMAGE: "img/pancake.png"
      SPEED: 5
      HIT_POINT: 500
      EXP: 10000
      SWING:
        SPEED: 10
        RANGE: 5