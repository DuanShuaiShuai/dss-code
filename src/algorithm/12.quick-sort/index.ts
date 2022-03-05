/**
 * 用JS实现快速排序，并说明时间复杂度
 * 方法一：slice
 */
export function quickSort1(array:number[]):number[]{
    let len=array.length
    if(len<=1) return array
    let left=[]
    let right=[]
    let midIndex=Math.floor(len/2);
    let midValue=array.slice(midIndex,midIndex+1)[0];
    for (let i = 0; i < len; i++) {
        if(i!==midIndex){
            if(array[i]<midValue){
                left.push(array[i])
            }else{
                right.push(array[i])
            }
        }
        
    }
    return quickSort1(left).concat(midValue,quickSort1(right))
}


/**
 * 用JS实现快速排序，并说明时间复杂度
 * 方法一：splice
 */
 export function quickSort2(array:number[]):number[]{
    let len=array.length
    if(len<=1) return array
    let left=[]
    let right=[]
    let midIndex=Math.floor(len/2);
    let midValue=array.splice(midIndex,1)[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]<midValue){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return quickSort2(left).concat(midValue,quickSort2(right))
}







