<template>
    <div class="">
        <div class="body_wrap ">
            <div class="head_wrap ">
                <div class="head_title">
                    <span >新闻博客</span>
                </div>
                <div class="head_dic">
                    <ul>
                        <li>
                            <a href="#" >首页</a>
                        </li>
                        <li>
                            <a href="#">优秀文章</a>
                        </li>
                        <li>
                            <a href="#">倾听世界</a>
                        </li>
                        <li>
                            <a href="#">网盘资源</a>
                        </li>
                        <li>
                            <a href="#">技术分析</a>
                        </li>
                    </ul>
                </div>
                <div class="search_wrap">

                    <input type="text" class="search_inp"/>
                    <div class="search_btn">搜索</div>
                </div>
            </div>
            <div class="left-nav clearfix">
                <ul>
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">推荐</a></li>-->
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">架构</a></li>-->
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">Java</a></li>-->
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">前端</a></li>-->
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">数据库</a></li>-->
                    <!--<li :class="{active:isActive}"><a href="#" @click="leftNavClick($event)">Java</a></li>-->
                <!---->
                    <li v-for="(item,index) in leftNav" :key="index"><div class="leftBtn" @click="leftNavClick($event,item.path)">{{item.name}}</div></li>
                </ul>
            </div>
            <div class="right-content">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {

                isActive:false,
                // leftNav:[{path:'/recommend',name:'推荐'},{path:'/framework',name:'框架'},{path:'/backEnd',name:'后端'},{path:'/frontEnd',name:'前端'},],
                leftNav:[],
            }
        },
        created(){
            this.leftNav=(this.$router.options.routes[2].children)
            console.log(this.leftNav)
            console.log(this.$router)
        },
        methods:{
            leftNavClick(event,path){
                console.log(event)
                this.isActive=true;
                console.log('--------',path)
                this.$router.push({path:path})
            }
        }
    }
</script>

<style lang="less">
.clearfix{
    clear:both;
}
.body_wrap{
    margin:20px 40px ;
    .left-nav{
        float:left;
        margin-right:20px;
        ul li{
            width:60px;
            text-align:center;
            height:40px;
            line-height:40px;
            .leftBtn{
                color:#008000b0;
                display:block;
            }
            .leftBtn:hover{
                 color:#fff;
                 background-color:red;
             }
        }
        .active{
            background-color:red;
            .leftBtn{
                color:#fff;
            }
        }
    }
    .right-content{
        float:left;
    }
    .head_wrap{
        .head_title{
            height:60px;
            color:green;
            font-size:18px;
            font-weight:bold;
            display:inline-block;
            margin-right:40px;
        }
        .head_dic{
            display:inline-block;
            ul li{
                display:inline-block;
                margin: 0 20px;
                a{
                    color:green;
                }
            }
        }
        .search_wrap{
            display:inline-block;
            float:right;
            border:2px solid red;
            padding:6px 10px 5px;
            position:relative;
            .search_inp{
                border:0px;
                height:20px;
            }
            .search_btn{
                position:absolute;
                right:0;
                top:0;
                width:50px;
                color:#fff;
                height:33px;
                line-height:33px;
                text-align:center;
                background:red;

            }
        }
    }
}

</style>