/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 17:27:11
 */

import event from './event';
const game = function(width, height, id = 'game') {
    Object.assign(this,event);
    this.canvas = document.getElementById(id);
    this.canvas.style.width = H5Game.device.width + 'px';
    this.canvas.style.height = H5Game.device.height + 'px';
    this.canvas.width = width || H5Game.device.width * H5Game.device.dpr;
    this.canvas.height = height || H5Game.device.height * H5Game.device.dpr;
    this.ctx = this.canvas.getContext('2d');
}
game.prototype = {
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
export default game
