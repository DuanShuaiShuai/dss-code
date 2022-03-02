/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-02 22:16:28 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-02 22:19:51
 */
interface ITreeNode {
    value:number,
    left:ITreeNode | null,
    right:ITreeNode | null
}

const tree:ITreeNode ={
    value:5,
    left:{
        value:3,
        left:{
            value:2,
            left:null,
            right:null
        },
        right:{
            value:4,
            left:null,
            right:null
        }
    },
    right:{
        value:7,
        left:{
            value:6,
            left:null,
            right:null
        },
        right:{
            value:8,
            left:null,
            right:null
        }
    }
}
/**
 *  二叉树前序遍历
 * @param {ITreeNode} node
 * @return {*} 
 */
function preOrderTraverse (node:ITreeNode){
    if(node === null) return;
    console.log(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
}
//5324768
/**
 *  二叉树中序遍历
 * @param {ITreeNode} node
 * @return {*} 
 */
 function inOrderTraverse (node:ITreeNode){
    if(node === null) return;
    inOrderTraverse(node.left);
    console.log(node.value);
    inOrderTraverse(node.right);
}
// 2345678
/**
 *  二叉树后序遍历
 * @param {ITreeNode} node
 * @return {*} 
 */
 function postOrderTraverse (node:ITreeNode){
    if(node === null) return;
    postOrderTraverse(node.left);
    postOrderTraverse(node.right);
    console.log(node.value);
}
// 2436875

// preOrderTraverse(tree) //5324768
// inOrderTraverse(tree) // 2345678
// postOrderTraverse(tree)// 2436875


/**
 * 寻找BST里的第K小值
 * @param {ITreeNode} node
 * @return {*} 
 */
let arr =[]
function inOrderTraverseArr (node:ITreeNode){
    if(node === null) return;
    inOrderTraverseArr(node.left);
    // console.log(node.value);
    arr.push(node.value)
    inOrderTraverseArr(node.right);
}

export const getKthValue=function(k:number){
    inOrderTraverseArr(tree);// 2345678
    return arr[k-1]
}

// console.log(getKthValue(1))







