
/**
 * 获取字符串中连续最多的字符以及次数
 * 方法一：双指针
 */
interface resI {
    char:string,
    len:number
}
export function findContinueChar1(str:string):resI{
    let res={
        char:'',
        len:0
    }
    if(!str) return res;

    let j=0;
    let temLen=0
    for (let i = 0; i < str.length; i++) {
        if(str[i]===str[j]){
            temLen++;
        }
        if(str[i]!==str[j] || i===str.length-1){
            if(temLen>res.len){
                res={
                    char:str[j],
                    len:temLen 
                }
            }
            temLen=0;
            if(i<str.length-1){
                j=i;
                i--;
            }
        }
    }
    return res;
}


/**
 * 方法二：跳步
 */
 interface resI {
    char:string,
    len:number
}
//aannss
export function findContinueChar2(str:string):resI{
    let res={
        char:'',
        len:0
    }
    if(!str) return res;
    let j=0;
    let i=0
    let temLen=0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if(str[i]===str[j]){
                temLen++;
            }
            if(str[i]!==str[j] || j===str.length-1){
                if(temLen>res.len){
                    res={
                        char:str[i],
                        len:temLen 
                    }
                }
                temLen=0;
                if(i<str.length-1){
                    i=j;
                    i--;
                }
                break;
            }
        }
    }
    return res;
}







