var Enemy,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Enemy = (function(superClass) {
  extend(Enemy, superClass);

  function Enemy(setting) {
    this.setting = setting;
    this.totalEXP = 0;
    this.image = new Image;
    this.image.src = this.setting.IMAGE;
    Enemy.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, this.setting.SPEED), 0);
  }

  Enemy.prototype.isBoss = function() {
    return false;
  };

  Enemy.prototype.reset = function() {
    this.totalEXP = 0;
    this.hitPoint = 0;
    return this.isDamaged = false;
  };

  Enemy.prototype.damage = function() {
    Enemy.__super__.damage.apply(this, arguments);
    if (!this.isAlive()) {
      this.totalEXP += this.setting.EXP;
      return this.clear();
    }
  };

  Enemy.prototype.comeBack = function() {
    this.position.moveTo(Math.randomNumber(Setting.SCREEN.WIDTH), 1 - this.image.height);
    return this.hitPoint = this.setting.HIT_POINT;
  };

  Enemy.prototype.attack = function(another) {
    if (this.hits(another)) {
      return another.damage();
    }
  };

  return Enemy;

})(Actor);