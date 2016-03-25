var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player() {
    this.image = new Image;
    this.image.src = Setting.PLAYER.IMAGE;
    this.bullets = new PlayerBullets;
    this.command = new Command;
    Player.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, Setting.PLAYER.SPEED), Setting.PLAYER.HIT_POINT);
  }

  Player.prototype.reset = function() {
    this.hitPoint = Setting.PLAYER.HIT_POINT;
    this.isDamaged = false;
    this.position.moveTo(Setting.SCREEN.WIDTH.center() - this.image.width.half(), Setting.SCREEN.HEIGHT - this.image.height);
    this.command.reset();
    return this.bullets.reset();
  };

  Player.prototype.behave = function(enemyList) {
    if (this.command.isRequested(Command.SPACE)) {
      this.bullets.shoot(this.position);
    }
    this.move();
    return this.bullets.behave(enemyList);
  };

  Player.prototype.move = function() {
    if (this.command.isRequested(Command.LEFT) && !this.position.isLeftEnd()) {
      this.position.moveLeft();
    }
    if (this.command.isRequested(Command.UP) && !this.position.isTopEnd()) {
      this.position.moveUp();
    }
    if (this.command.isRequested(Command.RIGHT) && !this.position.isRightEnd()) {
      this.position.moveRight();
    }
    if (this.command.isRequested(Command.DOWN) && !this.position.isBottomEnd()) {
      return this.position.moveDown();
    }
  };

  return Player;

})(Actor);
