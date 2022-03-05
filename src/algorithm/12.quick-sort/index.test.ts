import {quickSort1,quickSort2} from './index';
/**
 * 获取字符串中连续最多的字符以及次数
 * 时间复杂度是O(N)
 */
describe('快排',()=>{
    it('方法一:正常情况',()=>{
        let arr=[2,1,3,4,5,6,7]
        expect(quickSort1(arr)).toEqual([1,2,3,4,5,6,7]);
    })
    it('方法一:重复',()=>{
        let arr=[2,2,4,1,3,4,5,6,7]
        expect(quickSort1(arr)).toEqual([1,2,2,3,4,4,5,6,7]);
    })
    it('方法一:空数组',()=>{
        let arr=[]
        expect(quickSort1(arr)).toEqual([]);
    })
})

describe('快排',()=>{
    it('方法二:正常情况',()=>{
        let arr=[2,1,3,4,5,6,7]
        expect(quickSort2(arr)).toEqual([1,2,3,4,5,6,7]);
    })
    it('方法二:重复',()=>{
        let arr=[2,2,4,1,3,4,5,6,7]
        expect(quickSort2(arr)).toEqual([1,2,2,3,4,4,5,6,7]);
    })
    it('方法二:空数组',()=>{
        let arr=[]
        expect(quickSort2(arr)).toEqual([]);
    })
})