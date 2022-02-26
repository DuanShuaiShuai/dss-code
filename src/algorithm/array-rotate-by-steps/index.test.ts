import {ArrayRotateBySteps1,ArrayRotateBySteps2} from './index';

describe('数组旋转方法一',()=>{
    it('正常情况',()=>{
        const arr=[1,2,3,4,5,6,7,8,9]
        const k=3;
        const res=ArrayRotateBySteps1(arr,k);
        expect(res).toEqual([7,8,9,1,2,3,4,5,6])
    })
    it('空数组',()=>{
        const arr=[]
        const k=3;
        const res=ArrayRotateBySteps1(arr,k);
        expect(res).toEqual([])
    })
    it('步数为负值',()=>{
        const arr=[1,2,3,4,5,6,7,8,9]
        const k=-3;
        const res=ArrayRotateBySteps1(arr,k);
        expect(res).toEqual([7,8,9,1,2,3,4,5,6])
    })
    it('步数类型错误',()=>{
        const arr=[1,2,3,4,5,6,7,8,9]
        const k={};
        // @ts-ignore
        const res=ArrayRotateBySteps1(arr,k);
        expect(res).toEqual([1,2,3,4,5,6,7,8,9])
    })
    it('无参数',()=>{
        // @ts-ignore
        const res=ArrayRotateBySteps1();
        expect(res).toEqual([])
    })
})