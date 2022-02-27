import {reverseLinkList,createLinkList} from './index';

describe('反转单向链表',()=>{
    it('正常情况下',()=>{
        let queue=createLinkList([1,2,3,4]);
        expect(reverseLinkList(queue)).toEqual(
        {
            value:4,
            next:{
                value:3,
                next:{
                    value:2,
                    next:{
                        value:1
                    }
                }
            }
        })
    })
    it('一个值的时候',()=>{
        expect(reverseLinkList({value:1})).toEqual(
        {
            value:1
        })
    })
})