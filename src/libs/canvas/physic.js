/*
 * @Author: Zhang Min 
 * @Date: 2018-06-20 16:41:11 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-06-21 09:11:03
 */

export default {
    checkBoundary(box, body, type = 'circle') {
        if (body.x > box.left + body.r && 
            body.x < box.right - body.r &&
            body.y > box.up + body.r &&
            body.y < box.down - body.r) {
            return false;
        }
        return true;
    },
    circleMovement(box, body, v, r) {
        const x = box.x + Math.cos(v) * r;
        const y = box.y + Math.sin(v) * r;
        return {
            x, y
        }
    }
}