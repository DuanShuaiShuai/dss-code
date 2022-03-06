import {format1,format2} from './index';

describe('转换千分位',()=>{
    it('方法一:正常情况',()=>{
        expect(format1(12333456)).toEqual('12,333,456');
    })

    it('方法二:正常情况',()=>{
        expect(format2(12333456)).toEqual('12,333,456');
    })

    it('方法一:个位',()=>{
        expect(format1(1)).toEqual('1');
    })

    it('方法二:个位',()=>{
        expect(format2(1)).toEqual('1');
    })
})