/*
 * @Author: duanshuaishuai 
 * @Date: 2022-02-27 11:55:17 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-02-27 17:38:43
 */

/**
 * 题目：反转单向列表
 * {value:1,next:{value:2,next:{value:3}}}=>{value:3,next:{value:2,next:{value:1}}}
 */

interface LinkListNode {
    value:number,
    next?:LinkListNode,
    prev?:LinkListNode
}

export const reverseLinkList=(linkList:LinkListNode):LinkListNode =>{
    let prevNode:LinkListNode 
    let curNode:LinkListNode 
    let nextNode:LinkListNode = linkList
    
    while(nextNode){
        //解除指针
        if(curNode && !prevNode){
            delete curNode.next
        } 
        //反转指针
        if(curNode&&prevNode){
            curNode.next=prevNode
        }
        // 指针向后移动一步
        prevNode=curNode
        curNode=nextNode
        nextNode=nextNode.next
    }
    if(prevNode){
        curNode.next=prevNode
    }
    return curNode;
}

export const createLinkList =(array:number[]):LinkListNode=>{
    if(!array.length) return null;
    let headNode:LinkListNode={
        value:array.pop()
    }
    while(array.length){
        headNode={
            value:array.pop(),
            next:headNode
        }
    }
    return headNode
}