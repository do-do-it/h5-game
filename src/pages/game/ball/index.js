/*
 * @Author: Zhang Min 
 * @Date: 2018-06-13 08:04:58 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 20:12:12
 */

import H5Game from '@src/libs/canvas/index.js';
import Toolkit from '@src/components/toolkit.js';

import './index.less';

$(() => {
    console.log(H5Game);
    const game = new H5Game.game();
    console.log(game);
    const ball = new H5Game.circle(game, 100, 100, 50);
    const ball1 = new H5Game.circle(game, 100, 100, 50);

    class Index {
        constructor(params) {
            this.opts = params || {};
            this.device = H5Game.device;

            this.event();
        }
        event() {

            game.on('keydown', key => {
                switch (key.direction) {
                    case 'up':
                        ball1.y -= 5;
                        break;
                    case 'right':
                        ball1.x += 5;
                        break;
                    case 'down':
                        ball1.y += 5;
                        break;
                    case 'left':
                        ball1.x -= 5;
                        break;
                    default:
                        break;
                }
            })

            game.on('move', mouse => {
                ball1.x = mouse.x;
                ball1.y = mouse.y;
            })
        }
        start() {
            window.requestAnimationFrame(() => {
                this.start()
            })
            game.clear();

            
            if (ball1.flag) {
                ball1.size -= .01;
            } else {
                ball1.size += .01;
            }
            //ball.x += 1;
            //ball1.x += 1;
            if (ball.x > this.device.width + ball.r) {
                ball.x = -ball.r;
            }
            if (ball1.size > 1.5) {
                ball1.flag = true;
            }
            if (ball1.size < 1) {
                ball1.flag = false;
            }
            //ball.stroke();
            ball1.fill();
        }
    }

    new Index().start();
})