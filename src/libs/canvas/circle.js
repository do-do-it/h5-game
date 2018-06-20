import H5Game from ".";

/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 17:27:45
 */

class circle {
    constructor(game, x = 0, y = 0, r = 10) {
        this.dpr = H5Game.device.dpr;
        this.ctx = game.ctx;
        this.x = x;
        this.y = y;
        this.r = r;

        this.color = '#000';
        this.scaleX = 1;
        this.scaleY = 1;
    }
    stroke() {
        this.ctx.save();
        this.ctx.scale(this.scaleX, this.scaleY);
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x * this.dpr, this.y * this.dpr, this.r * this.dpr, 0, 360 * Math.PI / 180, false);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
    }
    fill() {
        this.ctx.save();
        this.ctx.scale(this.scaleX, this.scaleY);
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x * this.dpr, this.y * this.dpr, this.r * this.dpr, 0, 360 * Math.PI / 180, false);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
    }
    set(params) {
        this.x = (params.x || this.x) * this.dpr;
        this.y = (params.y || this.y) * this.dpr;
    }
}
export default circle