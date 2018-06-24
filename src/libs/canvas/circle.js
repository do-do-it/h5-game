import H5Game from ".";

/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-21 10:38:45
 */

class circle {
    constructor(game, x = 0, y = 0, r = 10, color = '#000') {
        this.dpr = H5Game.device.dpr;
        this.ctx = game.ctx;
        this.x = x;
        this.y = y;
        this.r = r;

        this.color = color;

        this.scaleX = 1;
        this.scaleY = 1;
        this.size = 1;

        this.vx = 0;
        this.vy = 0;
        this.v = 0;
        this.dv = 0;
        this.angle = 0;
    }
    stroke() {
        this.ctx.save();
        this.fit();
        this.ctx.scale(this.scaleX, this.scaleY);
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        const x = this.x / this.scaleX * this.dpr;
        const y = this.y / this.scaleY * this.dpr;
        const r = this.r * this.dpr;
        this.ctx.arc(x, y, r, 0, 360 * Math.PI / 180, false);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
    }
    fill() {
        this.ctx.save();
        this.fit();
        this.ctx.scale(this.scaleX, this.scaleY);
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        const x = this.x / this.scaleX * this.dpr;
        const y = this.y / this.scaleY * this.dpr;
        const r = this.r * this.dpr;
        this.ctx.arc(x, y, r, 0, 360 * Math.PI / 180, false);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.restore();
    }
    fit() {
        if (this.size !== 1) {
            this.scaleX = this.size;
            this.scaleY = this.size;
        }
        if (this.v !== 0) {
            this.vx = Math.cos(this.angle) * this.v + Math.cos(this.angle) * this.dv;
            this.vy = Math.sin(this.angle) * this.v + Math.sin(this.angle) * this.dv;
        }
    }
}
export default circle