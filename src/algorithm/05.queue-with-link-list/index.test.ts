import {MyQueue} from './index';

describe('链表一个队列',()=>{
    it('add delete length',()=>{
        let queue=new MyQueue();
        queue.add(100)
        queue.add(200)
        queue.add(400)
        queue.add(500)
        expect(queue.length).toBe(4)
        expect(queue.delete()).toBe(100)
        expect(queue.length).toBe(3)
    })
    it('null',()=>{
        let queue=new MyQueue();
        expect(queue.length).toBe(0)
        expect(queue.delete()).toBeNull()
        expect(queue.length).toBe(0)
    })
})