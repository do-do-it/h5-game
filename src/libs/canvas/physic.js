/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 16:41:11 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-21 10:17:44
 */

export default {
    checkBoundary(container, object, type = 'circle') {
        if (object.x > container.left + object.r && 
            object.x < container.right - object.r &&
            object.y > container.up + object.r &&
            object.y < container.down - object.r) {
            return false;
        }
        return true;
    },
    circleMovement(cx, cy, v, r1, r2 = r1) {
        const x = cx + Math.cos(v) * r1;
        const y = cy + Math.sin(v) * r2;
        return {
            x, y
        }
    }
}