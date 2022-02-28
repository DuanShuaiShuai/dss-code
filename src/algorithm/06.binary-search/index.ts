
/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 11:55:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 22:15:48
 */

/**
 * 题目：二分法实现有序数组查找
 */
 export const binarySerach1=(arr:number[],target:number)=>{
    if(!arr.length) return -1;
    let headIndex=0;
    let tailIndex=arr.length;
    while(headIndex<=tailIndex){
        let midIndex= Math.floor((headIndex+tailIndex)/2)
        if(target<arr[midIndex]){
            tailIndex=midIndex-1
        }else if(target>arr[midIndex]){
            headIndex=midIndex+1
        }else{
            return midIndex
        }
    }
    return -1;
}


export const binarySerach2=(arr:number[],target:number,headIndex?:number,tailIndex?:number)=>{
    if(!arr.length) return -1;
    if(headIndex==null) headIndex=0;
    if(tailIndex==null) tailIndex=arr.length-1;
    if(headIndex>tailIndex) return -1;

    let midIndex= Math.floor((headIndex+tailIndex)/2)
   
    if(target<arr[midIndex]){
        tailIndex=midIndex-1
        return binarySerach2(arr,target,headIndex,tailIndex)
    }else if(target>arr[midIndex]){
        headIndex=midIndex+1
        return binarySerach2(arr,target,headIndex,tailIndex)
    }else{
        return midIndex
    }
}

// let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
// let target=2;
// console.time('binarySerach1')
// for (let index = 0; index < 10*10000;index++) {
//     binarySerach1(arr,target)
// }
// console.timeEnd('binarySerach1') //2.9ms

// console.time('binarySerach2')
// for (let index = 0; index < 10*10000;index++) {
//     binarySerach2(arr,target)
// }
// console.timeEnd('binarySerach2') //7.2ms  

// 结论：递归多次调运函数，js执行栈比较深，效率没有循环高





