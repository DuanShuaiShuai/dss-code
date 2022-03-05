/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-05 18:17:36 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-05 18:52:22
 */

// 求斐波那契数列的第n个值
/**
 * 求斐波那契数列的第n个值
 * [0,1,1,2,3,5,8,13,21]
 * 方法一：递归
 * 递归导致复杂是为O(2^N)会出现重复计算 ,面试的时候千万不要写这个答案,
 */

export function fibonacci1(n:number):number{
    if(n===0) return 0;
    if(n===1) return 1;
    return  fibonacci1(n-1)+fibonacci1(n-2);
}

/**
 * 求斐波那契数列的第n个值
 * [0,1,1,2,3,5,8,13,21]
 * 方法二：双指针加For循环
 * 时间复杂度是O(N)
 */
export function fibonacci2(n:number):number{
    if(n===0) return 0;
    if(n===1) return 1;
     let n1=1
     let n2=0;
     let sum=0
     for (let index = 2; index <= n; index++) {
         sum=n1+n2;
         n2=n1;
         n1=sum;
     }
     return sum;
    
}


/**
 * 一只青蛙，一次可跳1级，也可跳2级
 * 问:青蛙跳到n级台阶，总共有多少中方式
 * 
 * 用动态规划分析问题
 * 要跳到1级台阶，就一种方式f(1)=1
 * 要跳到2级台阶，就2种方式f(2)=2
 * 要跳到n级台阶，f(n)=f(n-1)+f(n-2)
 */









