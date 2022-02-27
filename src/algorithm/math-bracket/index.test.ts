import {mathBracket} from './index';

describe('括号匹配',()=>{
    it('匹配情况',()=>{
        expect(mathBracket('()1{2[(35)6]7}8[]')).toBe(true)
    })
    it('不匹配情况',()=>{
        expect(mathBracket('(1{2[(35)6]7}8[]')).toBe(false)
    })
    it('空字符串情况',()=>{
        expect(mathBracket('')).toBe(true)
    })
})