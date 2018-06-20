/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 11:52:01 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-20 17:29:03
 */

const world = function() {
    
}
world.prototype = {
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
export default world
