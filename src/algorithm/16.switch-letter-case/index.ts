/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-06 01:12:46 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-06 18:17:18
 */

/**
 * 切换字母大小写
 */

// 方法一：正则
export function switchLetterCase1(str:string):string{
    if(!str.length) return str;
    let lowReg=/[a-z]/;
    let upReg=/[A-Z]/;
    let tem='';
    for (let i = 0; i < str.length; i++) {
        let curStr=str[i]
        if(lowReg.test(curStr)){
            tem+=curStr.toLocaleUpperCase()
        }else if(upReg.test(curStr)){
            tem+=curStr.toLocaleLowerCase()
        }else{
            tem+=curStr
        }
    }
    return tem
}


// 方法二：ascii码
export function switchLetterCase2(str:string):string{
    if(!str.length) return str;
    let tem='';
    for (let i = 0; i < str.length; i++) {
        let c=str[i]
        let code=c.charCodeAt(0)
        if(code>=65 && code <=90){
            tem+=c.toLocaleLowerCase()
        }else if(code>=97 && code <=122){
            tem+=c.toLocaleUpperCase()
        }else{
            tem+=c
        }
    }
    return tem
}

console.log(switchLetterCase1('12addASD##789'))
console.log(switchLetterCase2('12addASD##789'))








