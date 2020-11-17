/*
使用mockjs提供mock数据接口
 */

import  Mock from 'mockjs'

import  data from './data'

//goods

Mock.mock('/goods',{code:0,data: data.goods})

//ratings
Mock.mock('/ratings',{code:0,data: data.ratings})

//info
Mock.mock('/info',{code:0,data: data.info})


