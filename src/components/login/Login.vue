<template>
    <div class="body_wrapper" :style = "bodySize">
        <vue-particles
                color="#E8DFE8"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#0000FF"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.8"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
        <div class="login_wrap" >
            <div class="login_title">
                <span>管理员登陆</span>
            </div>
            <div class="login_fields">
                <div class="login_fields_user">
                    <div class="icon">
                        <img  src="../../assets/img/user_icon_copy.png"/>
                    </div>
                    <input autocomplete="off" class="user_input" placeholder="用户名" type="text"/>
                </div>
                <div class="login_fields_user">
                    <div class="icon">
                        <img  src="../../assets/img/lock_icon_copy.png"/>
                    </div>
                    <input class="user_input" placeholder="密码" type="text"/>
                </div>
                <div class="login_fields_user">
                    <div class="icon">
                        <img  src="../../assets/img/key.png"/>
                    </div>
                    <input class="user_input" placeholder="验证码" type="text"/>
                    <div class="validation">1111</div>
                </div>
                <div class="login_fields_user">
                    <input class="login_btn" type="button" value="登陆"/>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: "Login",

        data() {
            return {
                form:{},
                bodySize:{
                    height:window.innerHeight+'px',
                    width:window.innerWidth+'px',
                    backgroundSize:window.innerWidth+'px ' +window.innerHeight+'px',
                },
                screenWidth:document.body.clientHeight,
            }
        },
        mounted(){
            /**
             * 图片根据浏览器自适应方法
             */
            window.onresize = () => {
                return (() => {
                    this.bodySize.height = window.innerHeight+'px';
                    this.bodySize.width = window.innerWidth+'px';
                    this.bodySize.backgroundSize=window.innerWidth+'px '+window.innerHeight+'px'
                    this.color = '#213188'
                })()
            }
        },
        watch:{

            // bodySize:{
            //     handler(newValue,oldValue){
            //
            //     },
            //     immediate: true
            // }
        },

        methods:{
        }
    }
</script>

<style scoped lang = "less">
.body_wrapper{
    background-image: url('../../assets/img/login.jpg');
    background-size:cover;
    .login_wrap{
        box-sizing:border-box;
        background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
        position:absolute;
        margin:auto;
        left:0;
        top:0;
        right:0;
        bottom:0;
        width: 300px;
        height:400px;
        padding:100px 40px 40px 40px;
        .login_title{
            color: #ffffffb8;
            height:60px;
        }
        .login_fields{
            input{
                color:#61BFFF !important;
                border:0 ;
            }
            input::-webkit-input-placeholder{ /*WebKit browsers*/
                font-size:12px;
                color: #ffffffb8;

            }

            input::-moz-input-placeholder{ /*Mozilla Firefox*/
                color: #ffffffb8;
                font-size:12px;

            }

            input::-ms-input-placeholder{ /*Internet Explorer*/
                font-size:12px;
                color: #ffffffb8;

            }
            .login_fields_user{
                box-sizing: border-box;
                height:40px;
                position:relative;
                .icon{
                    display:inline-block;
                    opacity: 0.7;
                    vertical-align: middle;
                    width:20px;
                }
                .user_input{
                    margin-left:10px;

                    background-color : rgba(255,255,255,0);
                    outline: none;
                }
                .validation{
                    display:inline-block;
                    position:absolute;
                    right:15px;
                    height:40px;
                    line-height:40px;
                    font-size:18px;
                    color:#fff;
                }
                .login_btn{
                    background-color : rgba(255,255,255,0);
                    height:40px;
                    font-size:16px;
                    border-radius: 20px;
                    width:120px;
                    border:2px solid #61BFFF ;
                }
            }
        }
    }
}
</style>