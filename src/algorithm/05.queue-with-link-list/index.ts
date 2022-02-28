/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 11:55:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 22:15:48
 */

/**
 * 题目：链表实现队列
 */
 interface linkListNode {
    value:number,
    next:linkListNode | null
}

 export class MyQueue {
     private len:number = 0
     private head:linkListNode | null
     private tail:linkListNode | null

    
    /**
     * 入队，再tail的位置
     * @param {number} num
     * @return {*}  {number}
     * @memberof MyQueue
     */
    add(num:number):number{
        let tailNode={
            value:num,
            next:null
        }
        if(!this.len){
            this.tail = this.head=tailNode
        }else{
            this.tail.next=tailNode
            this.tail=tailNode
        }
        this.len++
        return this.len
    }

    /**
     * 出队，再head的位置
     * @return {*}  {(number | null)}
     * @memberof MyQueue
     */
    delete():number | null{
        if(!this.head) return null
        if(this.length<=0) return null
        const value=this.head.value
        this.head=this.head.next
        this.len--
        return value
    }
    get length():number{
        // length 要单独存储 不能遍历列表来获取(否则时间复杂度太高O(n))
        return this.len || 0
    }
} 

// 性能测试 2.023ms
// const queue = new MyQueue()
// console.time('linkListQueue')
// for (let index = 0; index < 10000; index++) {
//     queue.add(index)
// }

// for (let index = 0; index < 10000; index++) {
//     queue.delete()
// }
// console.timeEnd('linkListQueue')


