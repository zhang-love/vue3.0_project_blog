<template>
    <div class="">
        <div class="content">
            <div class="seven_echarts"  id="seven">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                seven_chart:null,
                month_chart:null,
            }
        },
        mounted:function (){
            this.get_echarts();

        },
        methods:{
            get_echarts:function(){
                this.seven_chart = this.echarts.init(document.getElementById("seven"));
                // 把配置和数据放这里
                var aData = [0,1,3,4,9,12,24]
                var bData =[0,4,5,6,7,8,9]
                var seven_option = {
                    title : {
                        text: '访问量监控',//感觉头部有点乱，没使用自带的标题
                        left:80,
                        x: 'left',
                        align: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top:'middle',
                        right:0,
                        orient: 'vertical',
                        data:['A访问人数','B访问人数',],
                    },

                    grid: {
                        left: '10%',
                            right: '10%',
                            bottom: '3%',
                            containLabel: true
                    },
                    // toolbox: {
                    //     feature: {
                    //         magicType: {type: ['line', 'bar']},//柱状图和西和折线图切换
                    //         restore: {},//刷新
                    //         saveAsImage: {},//将图表以折线图的形式展现
                    //     }
                    // },
                    xAxis: {
                        type: 'category',
                            boundaryGap: true,
                            data: ["11-26","11-27","11-28","11-29","11-30","12-01","12-02"]
                    },
                    yAxis: {
                        name:"人数",
                            nameLocation: 'end',
                            type: 'value',
                            axisLabel: {
                            formatter: '{value} '
                        },
                    },
                    series: [
                        {
                            name:'A访问人数',
                            type:'line',
                            data:aData,
                            lineStyle:{//设置折线色颜色
                                color:'red'
                            },
                            symbol:'none',  //不要折点
                            itemStyle:{//设置折线折点的颜色
                                normal : {
                                    color:'red'
                                }
                            },
                            areaStyle:{
                                opacity:'0.5',
                                color:{
                                    colorStops: [{
                                        offset: 0, color: '#A2F7CC' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#33F7A8' // 100% 处的颜色
                                    }],
                                }
                            }
                        },
                        {
                            name:'B访问人数',
                            type:'line',
                            data:bData,
                            lineStyle:{//设置折线色颜色
                                color:'blue'
                            },
                            symbol:'none',
                            itemStyle:{//设置折线折点的颜色
                                normal : {
                                    color:'blue'
                                }
                            },
                            areaStyle:{
                                opacity:'0.3',
                                color:{
                                    colorStops: [{
                                        offset: 0, color: '#ff0000ab' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#e816164f' // 100% 处的颜色
                                    }],
                                }
                            }

                        },
                    ],
                }
                this.seven_chart.setOption(seven_option)
            }
        },
        beforeDestroy() {
            if (!this.seven_chart) { return }
            this.seven_chart.dispose();
            this.seven_chart = null;
        },
    }
</script>

<style>
    .content p{
        margin-top: 1rem;
        font-size: 0.4rem;
        color: #666666;
    }
    .seven_echarts{
        height: 300px;
        width: 950px;
    }
</style>