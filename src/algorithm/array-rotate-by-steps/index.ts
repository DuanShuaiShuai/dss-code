/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-26 21:45:05 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 10:39:46
 */

/**
 * 题目：将一个数组旋转k步
 * 1. 输入一个数组[1,2,3,4,5,6,7]
 * 2. k=3,即旋转3步
 * 3. 输出[5,6,7,1,2,3,4]
 */

/**
 * 方法一：把末尾的元素挨个pop，然后unshift到数组前面
 * @param {number[]} arr
 * @param {number} steps
 * @return {*}  {number[]}
 * 时间复杂度：O(N^2) array是有序数组，unshift一次相当于重排一次
 * 空间复杂度：O(1)
 */
export const arrayRotateBySteps1 =(arr:number[],steps:number):number[]=>{
    // 参数校验
    if(Array.isArray(arr) && arr.length && Number.isInteger(steps)){
        const needSteps=Math.abs(steps%arr.length)
        for (let i = 0; i < needSteps; i++) {
            arr.unshift(arr.pop())
        }
        return arr;
    }else{
        return Array.isArray(arr)?arr:[];
    }
}


/**
 * 方法二：把数组拆分，最后concat拼接到一起
 * @param {number[]} arr
 * @param {number} steps
 * @return {*}  {number[]}
 * 时间复杂度：O(1)
 * 空间复杂度：O(N)
 */
 export const arrayRotateBySteps2 =(arr:number[],steps:number):number[]=>{
    // 参数校验
    if(Array.isArray(arr) && arr.length && Number.isInteger(steps)){
        const needSteps=Math.abs(steps%arr.length)
        let startArr=arr.slice(-needSteps);
        let endArr=arr.slice(0,arr.length-needSteps);
        return startArr.concat(endArr);
    }else{
        return Array.isArray(arr)?arr:[];
    }
}