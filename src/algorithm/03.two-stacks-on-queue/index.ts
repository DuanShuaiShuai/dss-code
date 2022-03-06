/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 11:55:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 22:15:57
 */

/**
 * 题目：两个栈实现一个队列
 * 1. 请用两个栈实现一个队列
 * 2. add delete length
 *  栈:先进后出 队列:先进先出
 */

export class MyQueue {
    private stack1=[]
    private stack2=[]

    add(num:number):number{
        return this.stack1.push(num);
    }
    delete():number | null{
        let num
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        num=this.stack2.pop()
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        }
        return num || null
    }
    get length():number{
        return this.stack1.length
    }
}


// 性能测试 773.ms
// const queue = new MyQueue()
// console.time('linkListArray')
// for (let index = 0; index < 10000; index++) {
//     queue.add(index)
// }

// for (let index = 0; index < 10000; index++) {
//     queue.delete()
// }
// console.timeEnd('linkListArray')