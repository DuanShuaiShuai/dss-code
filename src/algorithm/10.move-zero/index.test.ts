import {moveZero1,moveZero2} from './index';
/**
 * 将数组中的0移动到末尾
 * 如输入[0,1,0,3,4]，输出[1,3,4,0,0]
 * 时间复杂度是O(N)
 */
describe('寻找BST里的第K小值',()=>{
    it('方法一:正常情况',()=>{
        let arr=[0,1,0,3,4]
        expect(moveZero1(arr)).toEqual([1,3,4,0,0]);
    })
    it('方法二:正常情况',()=>{
        let arr=[0,1,0,3,4]
        expect(moveZero2(arr)).toEqual([1,3,4,0,0]);
    })
})