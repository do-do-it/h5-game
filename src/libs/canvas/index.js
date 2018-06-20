/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 16:29:29 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 17:23:15
 */

import World from './world';
import Game from './game';
import Device from './device';
import Circle from './circle';

const H5Game = {
    world: World,
    game: Game,
    device: Device,
    circle: Circle
}
window.H5Game = H5Game
export default H5Game