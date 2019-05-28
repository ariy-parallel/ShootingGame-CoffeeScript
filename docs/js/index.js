var Setting;Setting=function(){function t(){}return t.INTERVAL=20,t.SCREEN={WIDTH:1e3,HEIGHT:750,BACKGROUND:{IMAGE:"img/background.gif"},PADDING:20,FONT:{COLOR:"#FFFFFF"},SHADOW:{COLOR:"#FF6DBE",BLUR:30}},t.PLAYER={IMAGE:"img/player.png",SPEED:20,HIT_POINT:1,BULLET:{WIDTH:3,HEIGHT:20,COUNT:10,SPEED:20,HIT_POINT:1,COLOR:"#FFFFFF"}},t.ENEMY={APPEARANCE_RATE:3,YELLOW_MACARON:{COUNT:7,IMAGE:"img/yellowMacaron.png",SPEED:10,HIT_POINT:1,EXP:100},BLUE_MACARON:{COUNT:2,IMAGE:"img/blueMacaron.png",SPEED:20,HIT_POINT:10,EXP:500},GREEN_MACARON:{COUNT:5,IMAGE:"img/greenMacaron.png",SPEED:10,HIT_POINT:3,EXP:200},PINK_MACARON:{COUNT:3,IMAGE:"img/pinkMacaron.png",SPEED:25,HIT_POINT:1,EXP:300},PANCAKE:{IMAGE:"img/pancake.png",SPEED:5,HIT_POINT:400,EXP:1e4,APPEARANCE_FRAME:2e3,SWING:{SPEED:10,RANGE:5},BULLET:{SHOOT_RATE:3,COUNT:20,SPEED:10,IMAGE:"img/pancakeBullet.png",HIT_POINT:1,EXP:0}}},t}(),Math.randomBoolean=function(){return this.round(this.random())},Math.randomSort=function(){return this.random()<.5?-1:1},Math.randomNumber=function(t){return this.floor(this.random()*t)},Number.prototype.center=function(){return this.half()},Number.prototype.half=function(){return this/2},Number.prototype.sin=function(){return Math.sin(this*Math.PI/180).toFixed(15)};var ContextAbility;ContextAbility=function(){function t(){}return t.methods={initialize:function(){return this.rect(0,0,Setting.SCREEN.WIDTH,Setting.SCREEN.HEIGHT),this.shadowColor=Setting.SCREEN.SHADOW.COLOR,this.shadowBlur=Setting.SCREEN.SHADOW.BLUR},clear:function(){return this.clearRect(0,0,Setting.SCREEN.WIDTH,Setting.SCREEN.HEIGHT)},drawImageOf:function(t){return this.drawImage(t.image,t.position.x,t.position.y)},drawImageOfActive:function(t){var e,n,o,i;for(i=[],n=0,o=t.length;o>n;n++)e=t[n],e.isActive()&&(this.drawImageOf(e),null!=e.bullets?i.push(this.drawImageOfActive(e.bullets.list)):i.push(void 0));return i},drawRectOf:function(t){return this.fillStyle=t.style,this.fillRect(t.position.x,t.position.y,t.position.width,t.position.height)},drawRectOfActive:function(t){var e,n,o,i;for(i=[],n=0,o=t.length;o>n;n++)e=t[n],e.isActive()&&i.push(this.drawRectOf(e));return i},showCenter:function(t){return this.textAlign="center",this.textBaseline="middle",this.font="70px 'ヒラギノ角ゴ'",this.fillStyle=Setting.SCREEN.FONT.COLOR,this.fillText(t,Setting.SCREEN.WIDTH.center(),Setting.SCREEN.HEIGHT.center())},showUpperLeft:function(t){return this.textAlign="left",this.textBaseline="top",this.font="30px 'ヒラギノ角ゴ'",this.fillStyle=Setting.SCREEN.FONT.COLOR,this.fillText(t,Setting.SCREEN.PADDING,Setting.SCREEN.PADDING)},showUpperRight:function(t){return this.textAlign="right",this.textBaseline="top",this.font="30px 'ヒラギノ角ゴ'",this.fillStyle=Setting.SCREEN.FONT.COLOR,this.fillText(t,Setting.SCREEN.WIDTH-Setting.SCREEN.PADDING,Setting.SCREEN.PADDING)}},t.giveTo=function(t){var e,n,o;o=this.methods;for(n in o)e=o[n],t[n]=e;return t.initialize()},t}();var HorizontallyReboundAbility;HorizontallyReboundAbility=function(){function t(){}return t.methods={moveHorizontally:function(){return this.goesToRight?this.moveRight():this.moveLeft()},moveRight:function(){return this.position.moveRight(),this.position.isRightEnd()?this.goesToRight=!1:void 0},moveLeft:function(){return this.position.moveLeft(),this.position.isLeftEnd()?this.goesToRight=!0:void 0}},t.giveTo=function(t){var e,n,o;o=this.methods;for(n in o)e=o[n],t[n]=e;return t.goesToRight=Math.randomBoolean()},t}();var Command;Command=function(){function t(){this.requested=new Array(240)}return t.ENTER=13,t.SPACE=32,t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.prototype.reset=function(){return this.requested[t.ENTER]=!1,this.requested[t.SPACE]=!1,this.requested[t.LEFT]=!1,this.requested[t.UP]=!1,this.requested[t.RIGHT]=!1,this.requested[t.DOWN]=!1},t.prototype.request=function(t){return this.requested[t]=!0},t.prototype.cancel=function(t){return this.requested[t]=!1},t.prototype.isRequested=function(t){return this.requested[t]},t}();var Position;Position=function(){function t(t,e,n,o,i){this.x=t,this.y=e,this.width=n,this.height=o,this.speed=i}return t.prototype.moveLeft=function(t){return null==t&&(t=this.speed),this.x-=t},t.prototype.moveUp=function(t){return null==t&&(t=this.speed),this.y-=t},t.prototype.moveRight=function(t){return null==t&&(t=this.speed),this.x+=t},t.prototype.moveDown=function(t){return null==t&&(t=this.speed),this.y+=t},t.prototype.moveTo=function(t,e){this.x=t,this.y=e},t.prototype.leftX=function(){return this.x},t.prototype.rightX=function(){return this.x+this.width},t.prototype.topY=function(){return this.y},t.prototype.bottomY=function(){return this.y+this.height},t.prototype.isLeftEnd=function(){return this.leftX()<0},t.prototype.isTopEnd=function(){return this.topY()<0},t.prototype.isRightEnd=function(){return Setting.SCREEN.WIDTH<this.rightX()},t.prototype.isBottomEnd=function(){return Setting.SCREEN.HEIGHT<this.bottomY()},t.prototype.centerX=function(){return(this.leftX()+this.rightX()).center()},t.prototype.centerY=function(){return(this.topY()+this.bottomY()).center()},t.prototype.isInScreen=function(){return 0<this.rightX()&&this.leftX()<Setting.SCREEN.WIDTH&&0<this.bottomY()&&this.topY()<Setting.SCREEN.HEIGHT},t.prototype.overlaps=function(t){return this.leftX()<t.rightX()&&t.leftX()<this.rightX()&&this.topY()<t.bottomY()&&t.topY()<this.bottomY()},t}();var Bullets;Bullets=function(){function t(){this.list=[]}return t.prototype.reset=function(){var t,e,n,o,i;for(o=this.list,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.hide());return i},t.prototype.shoot=function(t){var e,n,o,i,r;for(i=this.list,r=[],n=0,o=i.length;o>n;n++){if(e=i[n],!e.isAlive()){e.shoot(t);break}r.push(void 0)}return r},t.prototype.behave=function(t){var e,n,o,i,r;for(i=this.list,r=[],n=0,o=i.length;o>n;n++)e=i[n],r.push(e.behave(t));return r},t}();var Actor;Actor=function(){function t(t,e){this.position=t,this.hitPoint=e,this.isDamaged=!1}return t.prototype.reset=function(){},t.prototype.hide=function(){return this.hitPoint=0},t.prototype.takeDamage=function(){return this.hitPoint--,this.isDamaged=!0},t.prototype.isAlive=function(){return 0<this.hitPoint},t.prototype.isActive=function(){return this.isAlive()&&!this.isDamaged},t.prototype.behave=function(t){return this.isDamaged=!1,this.move(),this.attack(t),this.hideOffscreen()},t.prototype.move=function(){},t.prototype.attack=function(t){},t.prototype.hits=function(t){return this.isAlive()&&t.isAlive()&&this.position.overlaps(t.position)},t.prototype.hideOffscreen=function(){return this.position.isInScreen()?void 0:this.hide()},t}();var Player,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;Player=function(t){function e(t){this.command=t,this.image=new Image,this.image.src=Setting.PLAYER.IMAGE,this.bullets=new PlayerBullets,e.__super__.constructor.call(this,new Position(0,0,this.image.width,this.image.height,Setting.PLAYER.SPEED),Setting.PLAYER.HIT_POINT)}return extend(e,t),e.prototype.reset=function(){return this.hitPoint=Setting.PLAYER.HIT_POINT,this.isDamaged=!1,this.position.moveTo(Setting.SCREEN.WIDTH.center()-this.image.width.half(),Setting.SCREEN.HEIGHT-this.image.height),this.command.reset(),this.bullets.reset()},e.prototype.behave=function(t){return this.command.isRequested(Command.SPACE)&&this.bullets.shoot(this.position),this.move(),this.bullets.behave(t)},e.prototype.move=function(){return this.command.isRequested(Command.LEFT)&&!this.position.isLeftEnd()&&this.position.moveLeft(),this.command.isRequested(Command.UP)&&!this.position.isTopEnd()&&this.position.moveUp(),this.command.isRequested(Command.RIGHT)&&!this.position.isRightEnd()&&this.position.moveRight(),this.command.isRequested(Command.DOWN)&&!this.position.isBottomEnd()?this.position.moveDown():void 0},e}(Actor);var PlayerBullet,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;PlayerBullet=function(t){function e(){this.style=Setting.PLAYER.BULLET.COLOR,e.__super__.constructor.call(this,new Position(0,0,Setting.PLAYER.BULLET.WIDTH,Setting.PLAYER.BULLET.HEIGHT,Setting.PLAYER.BULLET.SPEED),0)}return extend(e,t),e.prototype.move=function(){return this.position.moveUp()},e.prototype.shoot=function(t){return this.position.moveTo(t.centerX()-this.position.width.half(),t.topY()),this.hitPoint=Setting.PLAYER.BULLET.HIT_POINT},e.prototype.attack=function(t){var e,n,o,i;for(i=[],n=0,o=t.length;o>n;n++)e=t[n],this.hits(e)&&(e.takeDamage(),this.hide()),null!=e.bullets?i.push(this.attack(e.bullets.list)):i.push(void 0);return i},e}(Actor);var PlayerBullets,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;PlayerBullets=function(t){function e(){var t;this.list=function(){var e,n,o;for(o=[],t=e=0,n=Setting.PLAYER.BULLET.COUNT;n>=0?n>e:e>n;t=n>=0?++e:--e)o.push(new PlayerBullet);return o}()}return extend(e,t),e}(Bullets);var Enemy,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;Enemy=function(t){function e(t){this.setting=t,this.totalEXP=0,this.image=new Image,this.image.src=this.setting.IMAGE,e.__super__.constructor.call(this,new Position(0,0,this.image.width,this.image.height,this.setting.SPEED),0)}return extend(e,t),e.prototype.isBoss=function(){return!1},e.prototype.reset=function(){return this.totalEXP=0,this.hitPoint=0,this.isDamaged=!1},e.prototype.takeDamage=function(){return e.__super__.takeDamage.apply(this,arguments),this.isAlive()?void 0:(this.totalEXP+=this.setting.EXP,this.hide())},e.prototype.comeBack=function(){return this.position.moveTo(Math.randomNumber(Setting.SCREEN.WIDTH),1-this.image.height),this.hitPoint=this.setting.HIT_POINT},e.prototype.attack=function(t){return this.hits(t)?t.takeDamage():void 0},e}(Actor);var YellowMacaron,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;YellowMacaron=function(t){function e(){e.__super__.constructor.call(this,Setting.ENEMY.YELLOW_MACARON)}return extend(e,t),e.prototype.move=function(){return Math.randomBoolean()?this.position.moveLeft():this.position.moveRight(),Math.randomBoolean()?this.position.moveDown():void 0},e}(Enemy);var BlueMacaron,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;BlueMacaron=function(t){function e(){e.__super__.constructor.call(this,Setting.ENEMY.BLUE_MACARON)}return extend(e,t),e.prototype.move=function(){return Math.randomBoolean()&&Math.randomBoolean()?this.position.moveDown():void 0},e}(Enemy);var GreenMacaron,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;GreenMacaron=function(t){function e(){HorizontallyReboundAbility.giveTo(this),e.__super__.constructor.call(this,Setting.ENEMY.GREEN_MACARON)}return extend(e,t),e.prototype.move=function(){return this.moveHorizontally(),this.position.moveDown()},e}(Enemy);var PinkMacaron,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;PinkMacaron=function(t){function e(){e.__super__.constructor.call(this,Setting.ENEMY.PINK_MACARON)}return extend(e,t),e.prototype.move=function(){return this.position.moveDown()},e}(Enemy);var PancakeBullet,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;PancakeBullet=function(t){function e(){e.__super__.constructor.call(this,Setting.ENEMY.PANCAKE.BULLET)}return extend(e,t),e.prototype.move=function(){return this.position.moveDown()},e.prototype.shoot=function(t){return this.position.moveTo(t.centerX()-this.position.width.half(),t.bottomY()),this.hitPoint=Setting.ENEMY.PANCAKE.BULLET.HIT_POINT},e}(Enemy);var PancakeBullets,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;PancakeBullets=function(t){function e(){var t;this.list=function(){var e,n,o;for(o=[],t=e=0,n=Setting.ENEMY.PANCAKE.BULLET.COUNT;n>=0?n>e:e>n;t=n>=0?++e:--e)o.push(new PancakeBullet);return o}()}return extend(e,t),e.prototype.shoot=function(t){return Math.randomNumber(100)<Setting.ENEMY.PANCAKE.BULLET.SHOOT_RATE?e.__super__.shoot.call(this,t):void 0},e}(Bullets);var Angle;Angle=function(){function t(t,e){this.speed=t,this.rate=e,this.angle=0}return t.prototype.nextSin=function(){return this.angle+=this.speed,this.angle.sin()*this.rate},t}();var Pancake,extend=function(t,e){function n(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;Pancake=function(t){function e(){this.angle=new Angle(Setting.ENEMY.PANCAKE.SWING.SPEED,Setting.ENEMY.PANCAKE.SWING.RANGE),this.untilAppearance=Setting.ENEMY.PANCAKE.APPEARANCE_FRAME,this.bullets=new PancakeBullets,HorizontallyReboundAbility.giveTo(this),e.__super__.constructor.call(this,Setting.ENEMY.PANCAKE)}return extend(e,t),e.prototype.isBoss=function(){return!0},e.prototype.move=function(){return this.isAlive()?this.isCompletedAppearance()?(this.swingVertically(),this.moveHorizontally()):this.position.moveDown():void 0},e.prototype.reset=function(){return e.__super__.reset.apply(this,arguments),this.untilAppearance=Setting.ENEMY.PANCAKE.APPEARANCE_FRAME,this.bullets.reset()},e.prototype.isCompletedAppearance=function(){return 0<this.position.topY()},e.prototype.swingVertically=function(){return this.position.moveDown(this.angle.nextSin())},e.prototype.appear=function(){return this.untilAppearance--,0===this.untilAppearance?this.comeBack():void 0},e.prototype.comeBack=function(){return this.position.moveTo((Setting.SCREEN.WIDTH-this.image.width).center(),1-this.image.height),this.hitPoint=this.setting.HIT_POINT},e.prototype.behave=function(t){return e.__super__.behave.call(this,t),this.isCompletedAppearance()&&this.isAlive()?(this.bullets.shoot(this.position),this.bullets.behave(t)):void 0},e.prototype.isKilled=function(){return 0<this.totalEXP},e}(Enemy);var Enemies;Enemies=function(){function t(){var t,e,n,o,i,r,s,h,u;for(this.list=[],t=e=0,r=Setting.ENEMY.YELLOW_MACARON.COUNT;r>=0?r>e:e>r;t=r>=0?++e:--e)this.list.push(new YellowMacaron);for(t=n=0,s=Setting.ENEMY.BLUE_MACARON.COUNT;s>=0?s>n:n>s;t=s>=0?++n:--n)this.list.push(new BlueMacaron);for(t=o=0,h=Setting.ENEMY.GREEN_MACARON.COUNT;h>=0?h>o:o>h;t=h>=0?++o:--o)this.list.push(new GreenMacaron);for(t=i=0,u=Setting.ENEMY.PINK_MACARON.COUNT;u>=0?u>i:i>u;t=u>=0?++i:--i)this.list.push(new PinkMacaron);this.boss=new Pancake,this.list.push(this.boss)}return t.prototype.reset=function(){var t,e,n,o,i;for(this.frameCount=0,o=this.list,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.reset());return i},t.prototype.totalEXP=function(){var t;return function(){var e,n,o,i;for(o=this.list,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.totalEXP);return i}.call(this).reduce(function(t,e){return t+e})},t.prototype.appear=function(){return this.showMob(),this.showBoss()},t.prototype.showMob=function(){var t,e,n,o,i;if(Math.randomNumber(100)<Setting.ENEMY.APPEARANCE_RATE){for(this.list.sort(function(){return Math.randomSort()}),o=this.list,i=[],e=0,n=o.length;n>e;e++)if(t=o[e],t.isBoss()===!1&&t.isAlive()===!1){t.comeBack();break}return i}},t.prototype.showBoss=function(){return this.boss.appear()},t.prototype.behave=function(t){var e,n,o,i,r;for(i=this.list,r=[],n=0,o=i.length;o>n;n++)e=i[n],r.push(e.behave(t));return r},t}(),function(){var t,e,n,o,i,r;for(n=["img/player.png","img/yellowMacaron.png","img/blueMacaron.png","img/greenMacaron.png","img/pinkMacaron.png","img/pancake.png","img/pancakeBullet.png"],o=$("#images"),r=[],t=0,i=n.length;i>t;t++)e=n[t],r.push(o.append("<img src="+e+' class="invisible">'));return r}(),$(window).load(function(){var t,e,n,o,i,r,s,h,u,p,a;return t=$("#background"),t.css("width",Setting.SCREEN.WIDTH),t.css("height",Setting.SCREEN.HEIGHT),h=$("#screen")[0],h.width=Setting.SCREEN.WIDTH,h.height=Setting.SCREEN.HEIGHT,o=h.getContext("2d"),ContextAbility.giveTo(o),n=new Command,u=new Player(n),i=new Enemies,a=0,document.onkeydown=function(t){return n.request(t.keyCode),n.isRequested(Command.ENTER)?p():void 0},document.onkeyup=function(t){return n.cancel(t.keyCode)},p=function(){return $("#description").remove(),clearTimeout(a),u.reset(),i.reset(),s(),ga("send","event","Game","load","start")},r=function(){return clearTimeout(a),alert("GAME OVER"),p(),ga("send","event","Game","load","gameOver",i.totalEXP())},e=function(){return clearTimeout(a),o.showCenter("You are the No.1 sweets!!"),ga("send","event","Game","load","clear",i.totalEXP())},s=function(){return i.appear(),i.behave(u),u.behave(i.list),o.clear(),o.drawImageOf(u),o.drawRectOfActive(u.bullets.list),o.drawImageOfActive(i.list),o.showUpperLeft("SCORE : "+i.totalEXP()),i.boss.untilAppearance>0&&o.showUpperRight("TIME : "+i.boss.untilAppearance),a=setTimeout(s,Setting.INTERVAL),u.isAlive()||r(),i.boss.isKilled()?e():void 0}});