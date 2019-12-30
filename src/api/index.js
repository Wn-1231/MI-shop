
import ajax from './ajax'

//获取推荐
export const reqHomeRecommend = () => ajax("/homeRecommend") 

//搜索数据
export const reqHomeSearch = () => ajax("/homeSearch") 
