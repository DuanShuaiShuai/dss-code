import {getKthValue} from './index';

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


describe('寻找BST里的第K小值',()=>{
    it('正常情况',()=>{
        expect(getKthValue(1)).toBe(2);
    })
})