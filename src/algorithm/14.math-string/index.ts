/*
 * @Author: duanshuaishuai 
 * @Date: 2022-03-06 01:12:46 
 * @Last Modified by: duanshuaishuai
 * @Last Modified time: 2022-03-06 01:15:12
 */

/**
 * 有一个英文单词库（数组），里面有几十万个英文单词
 * 输入一个字符串，快速判断是不是某一个单词的前缀
 * 方法一：
 * 第一：遍历单词库数组
 * 第二：indexOf判断前缀
 * 第三：实际时间复杂度超过了O（n）,因为要考虑indexOf的计算量
 * 
 * 
 * 方法二:
 * 第一：对单词进行拆分hashTable
 * 第二：通过Obj.a.d.c去访问 时间复杂度为O(M) M为单词的长度
 */

 const arr=['abs','sdf','aed']
 const obj={
     a:{
         b:{
             s:{}
         },
         e:{
             d:{}
         }
     },
     s:{
         d:{
             f:{}
         }
     }
 }