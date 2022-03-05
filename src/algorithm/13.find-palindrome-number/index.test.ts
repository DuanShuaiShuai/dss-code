import {findPalindromeNumber1,findPalindromeNumber2,findPalindromeNumber3} from './index';

describe('获取1-1000之前的所有的对称数',()=>{
    it('方法一',()=>{
        expect(findPalindromeNumber1(200)).toEqual([
            0,   1,   2,   3,   4,   5,   6,   7,   8,
            9,  11,  22,  33,  44,  55,  66,  77,  88,
           99, 101, 111, 121, 131, 141, 151, 161, 171,
          181, 191
        ]);
    })
    it('方法二',()=>{
        expect(findPalindromeNumber2(200)).toEqual([
            0,   1,   2,   3,   4,   5,   6,   7,   8,
            9,  11,  22,  33,  44,  55,  66,  77,  88,
           99, 101, 111, 121, 131, 141, 151, 161, 171,
          181, 191
        ]);
    })
    it('方法三',()=>{
        expect(findPalindromeNumber3(200)).toEqual([
            0,   1,   2,   3,   4,   5,   6,   7,   8,
            9,  11,  22,  33,  44,  55,  66,  77,  88,
           99, 101, 111, 121, 131, 141, 151, 161, 171,
          181, 191
        ]);
    })
})