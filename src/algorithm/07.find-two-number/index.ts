
/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 11:55:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 22:15:48
 */
/**
 * 找出一个数组中和为n的两个数
 */
/**
 * 方法一：双循环 时间复杂度O(N^2)
 */
 export const findTwoNumber1=(arr:number[],target:number)=>{
    if(!arr.length) return [];
    let twoNumArr=[];
    list: 
    for (let i = 0; i < arr.length; i++) {
        let num1=arr[i];
        for (let j = i+1; j < arr.length; j++) {
            let num2=arr[j]
            if(num1+num2===target){
                twoNumArr.push(num1,num2)  
                break list;
            }
        }
    }
    return twoNumArr;
}


/**
 * 方法二：双指针 时间复杂度O(N)
 */
 export const findTwoNumber2=(arr:number[],target:number)=>{
    if(!arr.length) return [];
    let twoNumArr=[];
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]<target){
            i++;
        }else if (arr[i]+arr[j]>target){
            j--;
        }else{
         twoNumArr.push(arr[i],arr[j])
         break;
        }
    }
    return twoNumArr;
}
// 性能测试
// let arr=[1,2,10,11,14,20,30,35,45,66,888,999,3333,5555]
// let target=80;
// console.time('findTwoNumber1')
// for (let index = 0; index < 10*100000;index++) {
//     findTwoNumber1(arr,target)
// }
// console.timeEnd('findTwoNumber1') //2.9ms

// console.time('findTwoNumber2')
// for (let index = 0; index < 10*100000;index++) {
//     findTwoNumber2(arr,target)
// }
// console.timeEnd('findTwoNumber2') //7.2ms  

// 结论：递归多次调运函数，js执行栈比较深，效率没有循环高





