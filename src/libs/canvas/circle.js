import H5Game from ".";

/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 18:03:45
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
        this.size = 1;
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
    }
}
export default circle