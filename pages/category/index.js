//引入用来发送请求的方法 一定要把路径补全
import { request } from '../../request/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 左侧菜单数据
        leftMenuList:[],
        // 右侧菜单数据
        rightContent:[],
        // 被点击的左侧菜单
        currentIndex:0

    },
    // 接口返回数据
    Cates:[],
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCates();
    }, 
    //获取分类数据
    getCates(){
        request({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
        }).then(res=>{
            this.Cates = res.data.message; 
            //构造左侧大菜单数据
            let leftMenuList =this.Cates.map(v=>v.cat_name);
            //构造右侧商品数据
            let rightContent =this.Cates[0].children;
            this.setData({
                leftMenuList,                
                rightContent
            })
        })
    },
    //左侧菜单点击事件
    handleItemTap(e){
        /*
            1.获取被点击的标题身上的索引
            2.给data中的currentIndex赋值
            3.根据不同索引渲染右侧商品数据
        */
       const {index} = e.currentTarget.dataset;
       let rightContent =this.Cates[index].children;
       this.setData({
           currentIndex:index,
           rightContent
       })
    }
})