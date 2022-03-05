/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-05 19:47:00 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-05 20:07:03
 */

/**
 * 将数组中的0移动到末尾
 * 如输入[0,1,0,3,4]，输出[1,3,4,0,0]
 * 只移动0，其他顺序不变
 * 必须在原数组上进行操作
 * 方法一：
 * 时间复杂度为O(N^2)
 * for + splice
 */
export function moveZero1(array:number[]):number[]{
    let zeroLen=0
    for (let index = 0; index < array.length-zeroLen; index++) {
        if(array[index]===0){
            zeroLen++;
            array.splice(index,1)
            array.push(0);
            index--
        }
    }
    return array;
}

/**
 * 方法二:双指针
 */
 export function moveZero2(array:number[]):number[]{
    let zeroStart=0;
    let zeroEnd=0
    for (let index = 0; index < array.length; index++) {
        if(array[index]!==0){
           let n= array[index]
           array[index]=0
           array[zeroStart]=n
           zeroStart++;
           zeroEnd=index;
        }else{
           zeroEnd=index;
        }
    }
    return array;
}


// console.log(moveZero2([0,1,0,9,0,4,5,3,4]))








