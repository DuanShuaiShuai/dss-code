import {fibonacci1,fibonacci2} from './index';
/**
 * 求斐波那契数列的第n个值
 * [0,1,1,2,3,5,8,13,21]
 * 时间复杂度是O(N)
 */

describe('寻找BST里的第K小值',()=>{
    it('方法一:正常情况',()=>{
        expect(fibonacci1(0)).toBe(0);
        expect(fibonacci1(1)).toBe(1);
        expect(fibonacci1(2)).toBe(1);
        expect(fibonacci1(3)).toBe(2);
        expect(fibonacci1(4)).toBe(3);
    })
    it('方法二:正常情况',()=>{
        expect(fibonacci2(0)).toBe(0);
        expect(fibonacci2(1)).toBe(1);
        expect(fibonacci2(2)).toBe(1);
        expect(fibonacci2(3)).toBe(2);
        expect(fibonacci2(4)).toBe(3);
    })
})