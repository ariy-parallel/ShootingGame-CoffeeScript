var Enemies;

Enemies = (function() {
  function Enemies() {
    var bullet, i, j, k, l, len, m, n, ref, ref1, ref2, ref3, ref4;
    this.frameCount = 0;
    this.list = [];
    for (i = j = 0, ref = Setting.ENEMY.YELLOW_MACARON.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      this.list.push(new YellowMacaron);
    }
    for (i = k = 0, ref1 = Setting.ENEMY.BLUE_MACARON.COUNT; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      this.list.push(new BlueMacaron);
    }
    for (i = l = 0, ref2 = Setting.ENEMY.GREEN_MACARON.COUNT; 0 <= ref2 ? l < ref2 : l > ref2; i = 0 <= ref2 ? ++l : --l) {
      this.list.push(new GreenMacaron);
    }
    for (i = m = 0, ref3 = Setting.ENEMY.PINK_MACARON.COUNT; 0 <= ref3 ? m < ref3 : m > ref3; i = 0 <= ref3 ? ++m : --m) {
      this.list.push(new PinkMacaron);
    }
    this.boss = new Pancake;
    this.list.push(this.boss);
    ref4 = this.boss.bullets.list;
    for (n = 0, len = ref4.length; n < len; n++) {
      bullet = ref4[n];
      this.list.push(bullet);
    }
  }

  Enemies.prototype.reset = function() {
    var enemy, j, len, ref, results;
    this.frameCount = 0;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      results.push(enemy.reset());
    }
    return results;
  };

  Enemies.prototype.totalEXP = function() {
    var enemy;
    return ((function() {
      var j, len, ref, results;
      ref = this.list;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        enemy = ref[j];
        results.push(enemy.totalEXP);
      }
      return results;
    }).call(this)).reduce(function(a, b) {
      return a + b;
    });
  };

  Enemies.prototype.apear = function() {
    this.apearMob();
    return this.apearBoss();
  };

  Enemies.prototype.apearMob = function() {
    var enemy, j, len, ref, results;
    if (Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE) {
      this.list.sort(function() {
        return Math.randomBoolean();
      });
      ref = this.list;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        enemy = ref[j];
        if (!(enemy.isBoss() === false && enemy.isAlive() === false)) {
          continue;
        }
        enemy.comeBack();
        break;
      }
      return results;
    }
  };

  Enemies.prototype.apearBoss = function() {
    this.frameCount++;
    if (this.frameCount === this.boss.appearanceFrame) {
      return this.boss.comeBack();
    }
  };

  Enemies.prototype.behave = function(player) {
    var enemy, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      results.push(enemy.behave(player));
    }
    return results;
  };

  return Enemies;

})();
