import {binarySerach1,binarySerach2} from './index';

describe('for循环二分法',()=>{
    it('正常情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=2;
        expect(binarySerach1(arr,target)).toBe(1)
    })
    it('不存在情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=-2;
        expect(binarySerach1(arr,target)).toBe(-1)
    })
})


describe('递归循环二分法',()=>{
    it('正常情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=2;
        expect(binarySerach2(arr,target)).toBe(1)
    })
    it('不存在情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=-2;
        expect(binarySerach2(arr,target)).toBe(-1)
    })
})