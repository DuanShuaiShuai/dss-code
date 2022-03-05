/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-06 01:12:46 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-06 01:15:12
 */

/**
 * 获取1-1000之前的所有的对称数
 * 方法一：字符串-数组-反转-字符串
 */
export function findPalindromeNumber1(maxNum:number):number[]{
    if(!maxNum) return [0];
    let arr=[]
    for (let i = 0; i < maxNum; i++) {
        if(i==+i.toString().split('').reverse().join('')){
            arr.push(i)
        }
    }
    return arr;
}


/**
 * 获取1-1000之前的所有的对称数
 * 方法二:对称索引比较
 */
 export function findPalindromeNumber2(maxNum:number):number[]{
    if(!maxNum) return [0];
    let arr=[]
    for (let i = 0; i < maxNum; i++) {
        let flag=true;
        let str=i.toString()
        let startIndex=0;
        let endIndex=str.length-1;
        while(startIndex<endIndex){
            if(str[startIndex]!=str[endIndex]){
                flag=false
                break;
            }else{
                startIndex++;
                endIndex--;
            }
        }
        if(flag) arr.push(i)
    }
    return arr;
}

/**
 * 获取1-1000之前的所有的对称数
 * 方法三:翻转数比较
 */
 export function findPalindromeNumber3(maxNum:number):number[]{
    if(!maxNum) return [0];
    let arr=[]
    for (let i = 0; i < maxNum; i++) {
        let n=i;
        let rev=0;
        while(n>0){   
            rev=rev*10+n%10;
            n=Math.floor(n/10)
        }
        if(rev===i) arr.push(i)
    }
    return arr;
}

// 性能测试
console.time('findPalindromeNumber1') 
findPalindromeNumber1(100*100)
console.timeEnd('findPalindromeNumber1') //6.349

console.time('findPalindromeNumber2')
findPalindromeNumber2(100*100)
console.timeEnd('findPalindromeNumber2') //2.288

console.time('findPalindromeNumber3')
findPalindromeNumber3(100*100)
console.timeEnd('findPalindromeNumber3') //1.673






