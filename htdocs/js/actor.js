var Actor;

Actor = (function() {
  function Actor(position, isAlive) {
    this.position = position;
    this.isAlive = isAlive;
  }

  Actor.prototype.die = function() {
    return this.isAlive = false;
  };

  Actor.prototype.hits = function(another) {
    return this.isAlive && another.isAlive && this.position.overlaps(another.position);
  };

  Actor.prototype.clearOffscreen = function() {
    if (!this.position.isInScreen()) {
      return this.die();
    }
  };

  return Actor;

})();
