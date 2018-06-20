/*
 * @Author: Zhang Min 
 * @Date: 2018-06-13 08:04:58 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 17:38:38
 */

import H5Game from '@src/libs/canvas/index.js';
import Toolkit from '@src/components/toolkit.js';

import './index.less';

$(() => {
    console.log(H5Game);
    const game = new H5Game.game();
    console.log(game);
    const ball = new H5Game.circle(game, -50, 0, 50);

    class Index {
        constructor(params) {
            this.opts = params || {};
            this.device = H5Game.device;
        }
        start() {
            window.requestAnimationFrame(() => {
                this.start()
            })
            game.clear();

            ball.x += 1;
            if (ball.x > this.device.width + ball.r) {
                ball.x = -ball.r;
            }
            ball.stroke();
        }
    }

    new Index().start();
})