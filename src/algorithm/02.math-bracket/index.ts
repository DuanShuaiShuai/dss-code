/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 10:21:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 10:58:52
 */

/**
 * 题目：判断字符串是否匹配
 * 1. 一个字符串s可能包含{}()[]三种括号
 * 2. 判断s是否是括号匹配
 * 3. 如(a{b}c)匹配，而{a[b]或{a(b}c)f就不匹配
 */

/**
 * 判断字符串是否匹配
 * @param {string} str
 * @return {*}  {boolean}
 */
export const mathBracket =function(str:string):boolean{
    const len=str.length;
    if(!len) return true;
    const leftBracket='({[';
    const rightBracket=']})';
    const stack=[]; 
    for (let i = 0; i < len; i++) {
        if(leftBracket.includes(str[i])){
            stack.push(str[i]);
        }else if(rightBracket.includes(str[i])){
            if(isMatch(stack[stack.length-1],str[i])){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return !stack.length;
}

const mapping={
    '{':'}',
    '(':')',
    '[':']'
}

/**
 * 判断符号是否所有匹配
 * @param {string} left
 * @param {string} right
 * @return {*}  {boolean}
 */
const isMatch=function(left:string,right:string):boolean{
    return mapping[left]=== right
}