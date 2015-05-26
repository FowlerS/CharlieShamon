game.titleScreen = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('titlescreen')), -10);

        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [280, 240, 300, 50]);
                this.font = new me.Font("Stahlbetontraeger", 46, "white");

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Start a New Game", this.pos.x, this.pos.y);
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            update: function() {
                return true;
            },
            newGame: function() {
                me.input.releasePointerEvent('pointerdown', this);
                me.state.change(me.state.PLAY);
            }

        })));

        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [380, 440, 250, 50]);
                this.font = new me.Font("Arial", 46, "red")

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Continue", this.pos.x, this.pos.y);
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            update: function(dt) {
                return true;
            }
            
        })));

    },
    onDestroyEvent: function() {

    }
});