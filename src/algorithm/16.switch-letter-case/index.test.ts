import {switchLetterCase1,switchLetterCase2} from './index';

describe('转换千分位',()=>{
    it('方法一:正常情况',()=>{
        expect(switchLetterCase1('12addASD##789')).toBe('12ADDasd##789');
    })

    it('方法二:正常情况',()=>{
        expect(switchLetterCase2('12addASD##789')).toBe('12ADDasd##789');
    })
})