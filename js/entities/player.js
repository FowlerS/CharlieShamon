game.PlayerEntity = me.Entity.extend({
    init: function(x, y, setttings) {
        this.setSuper(x, y);
        this.setPlayerTimers();
        this.setAttributes();
        this.type = "PlayerEntity";
        this.setFlags();
        this.attack();
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        this.addAnimation();
        this.renderable.setCurrentAnimation();
    },
    setSuper: function(x, y) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                height: 64,
                width: 64,
                spriteHeight: "64",
                spriteWidth: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 50)).toPolygon();
                }
            }]);
        }
    });