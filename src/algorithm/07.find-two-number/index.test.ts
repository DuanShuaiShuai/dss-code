import {findTwoNumber1,findTwoNumber2} from './index';

describe('双层for循环',()=>{
    it('正常情况',()=>{
        expect(findTwoNumber1([1,2,10,11,14,20,30,35,45,67,888,999,3333,5555],80)).toEqual([35,45])
    })
    it('不存在情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=444;
        expect(findTwoNumber1(arr,target)).toEqual([])
    })
})


describe('双指针方案',()=>{
    it('正常情况',()=>{
        expect(findTwoNumber2([1,2,10,11,14,20,30,35,45,67,888,999,3333,5555],80)).toEqual([35,45])
    })
    it('不存在情况',()=>{
        let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
        let target=444;
        expect(findTwoNumber2(arr,target)).toEqual([])
    })
})