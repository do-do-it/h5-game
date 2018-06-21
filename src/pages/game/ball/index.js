/*
 * @Author: Zhang Min 
 * @Date: 2018-06-13 08:04:58 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-21 09:16:07
 */

import H5Game from '@src/libs/canvas/index.js';
import Toolkit from '@src/components/toolkit.js';

import './index.less';
import world from '../../../libs/canvas/world';

$(() => {
    console.log(H5Game);
    const game = new H5Game.game();
    console.log(game);

    class Index {
        constructor(params) {
            this.opts = params || {};
            this.device = H5Game.device;

            this.init();
            this.event();
        }
        init() {
            this.balls = [];
            this.r = 50;
            this.angle = 0;
            for (let index = 0; index < 10; index++) {
                const params = this.getRandomParams();
                const ball = new H5Game.circle(game, params.x, params.y, params.r, params.color);
                ball.vy = 2;
                this.balls.push(ball);
            }
        }
        event() {
            
        }
        start() {
            window.requestAnimationFrame(() => {
                this.start()
            })
            game.clear();
            this.angle += .05;
            // this.r += .1;
            this.balls.forEach(item => {
                const ps = H5Game.physic.circleMovement({
                    x: this.device.width / 2,
                    y: this.device.height / 2
                }, item, this.angle, this.r + item.r);
                item.x = ps.x;
                item.y = ps.y;
                // if (item.y >= this.device.height - item.r) {
                //     item.vy *= -0.9;
                // }
                // if (item.y <= item.r) {
                //     item.vy *= 0.9;
                // }
            })
            
            this.balls.forEach(item => {
                // item.y += item.vy;
                item.fill();
            })
        }
        getRandomParams() {
            const x = Math.floor(Math.random()*100) + 100;
            const y = Math.floor(Math.random()*100) + 100;
            const r = Math.floor(Math.random()*10) + 10;
            const color = game.getRandomColor();
            return {
                x, y: 0, r, color
            }
        }
    }
    const index = new Index();
    index.start();
    console.log(index);
})