/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-21 08:47:56
 */

import event from './event';
const game = function (width, height, id = 'game') {
    Object.assign(this, event);
    this.canvas = document.getElementById(id);
    this.canvas.style.width = H5Game.device.width + 'px';
    this.canvas.style.height = H5Game.device.height + 'px';
    this.canvas.width = width || H5Game.device.width * H5Game.device.dpr;
    this.canvas.height = height || H5Game.device.height * H5Game.device.dpr;
    this.ctx = this.canvas.getContext('2d');

    const _this = this;
    window.addEventListener('keydown', e => {
        const key = this.getKey(e);
        this.emit('keydown', key);
    }, false)
    window.addEventListener('mousedown', e => {
        onDown(e)
    }, false)
    window.addEventListener('touchstart', e => {
        onDown(e)
    }, false)

    function onDown(e) {
        const mouse = _this.getMouse(e);
        _this.emit('click', mouse);
        window.addEventListener('mousemove', onMove, false);
        window.addEventListener('touchmove', onMove, false);
        window.addEventListener('mouseup', onUp, false);
        window.addEventListener('touchstop', onUp, false);
    }
    function onMove(e) {
        const mouse = _this.getMouse(e);
        _this.emit('move', mouse);
    }
    function onUp(e) {
        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchstop', onUp, false);
    }
}
game.prototype = {
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ',' + g + ',' + b + ")";
    },
    getMouse(e) {
        if (!e.pageX) {
            e = e.touches[0];
        }
        return {
            x: e.pageX,
            y: e.pageY
        };
    },
    getKey(e) {
        const key = {};
        key.code = e.keyCode;
        switch (key.code) {
            case 38:
            case 87:
                key.direction = 'up';
                break;
            case 39:
            case 68:
                key.direction = 'right';
                break;
            case 40:
            case 83:
                key.direction = 'down';
                break;
            case 37:
            case 65:
                key.direction = 'left';
                break;
            case 32:
                key.direction = 'jump';
                break;
            case 74:
                key.direction = 'j';
                break;
            case 75:
                key.direction = 'k';
                break;
            case 76:
                key.direction = 'l';
                break;
            default:
                key.direction = '';
                break;
        }
        return key;
    }
}
export default game
