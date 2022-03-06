/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-06 01:12:46 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-06 01:15:12
 */

/**
 * 转换千分位
 */

// 方法一：转换成数组

export function format1(num:number):string{
    let arr=num.toString().split('').reverse()
    return arr.reduce((prev,val,index)=>{
        if(index%3===0){
            return val +`${prev?',':''}`+prev
        }else{
            return val+prev
        }
    },'')
}


// 方法二：字符串
export function format2(num:number):string{
    let arr=num.toString()
    let tem=''
    for (let index = arr.length-1; index >=0; index--) {
        let i=arr.length-index
        if(i%3===0){
            tem=`${arr[index-1]?',':''}`+arr[index]+tem
        }else{
            tem=arr[index]+tem
        }
    }
    return tem
}

// let num =120
// console.log(format1(num))
// console.log(format2(num))










