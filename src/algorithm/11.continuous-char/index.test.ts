import {findContinueChar1,findContinueChar2} from './index';
/**
 * 获取字符串中连续最多的字符以及次数
 * 时间复杂度是O(N)
 */
describe('获取字符串中连续最多的字符以及次数',()=>{
    it('方法一:开头重复',()=>{
        let str='aaaaabbggdfdf'
        expect(findContinueChar1(str)).toEqual({char:'a',len:5});
    })
    it('方法一:中间重复',()=>{
        let str='aabbbbbbggdfdf'
        expect(findContinueChar1(str)).toEqual({char:'b',len:6});
    })
    it('方法一:结尾重复',()=>{
        let str='aabbbggfffff'
        expect(findContinueChar1(str)).toEqual({char:'f',len:5});
    })
    it('方法一:空字符串',()=>{
        let str=''
        expect(findContinueChar1(str)).toEqual({char:'',len:0});
    })
})

describe('获取字符串中连续最多的字符以及次数',()=>{
    it('方法二:开头重复',()=>{
        let str='aaaaabbggdfdf'
        expect(findContinueChar2(str)).toEqual({char:'a',len:5});
    })
    it('方法二:中间重复',()=>{
        let str='aabbbbbbggdfdf'
        expect(findContinueChar2(str)).toEqual({char:'b',len:6});
    })
    it('方法二:结尾重复',()=>{
        let str='aabbbggfffff'
        expect(findContinueChar2(str)).toEqual({char:'f',len:5});
    })
    it('方法二:空字符串',()=>{
        let str=''
        expect(findContinueChar2(str)).toEqual({char:'',len:0});
    })
})