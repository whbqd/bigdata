<template>
  <div id="zxt">
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  methods: {
    myEcharts() {
      var myChart = echarts.init(document.querySelector("#zxt #main"));
      // 自适应
      addEventListener("resize", function () {
        setTimeout(() => {
          myChart.resize();
        }, 30);
      });
      var colors = ["#5793f3"];

      var option = {
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },

        legend: {
          data: [
            {
              name: "当月收入",
              textStyle: { color: "#fff" },
              itemStyle: { color: "#fff" },
            }
          ],
        },
        grid: {
          left: 10,
          right: 10,
          top: 60,
          bottom: 20,
          containLabel: true,
        },
        xAxis: [
          {
            //  show: false,
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              interval: 0, //强制文字产生间隔
              rotate: 0, //文字逆时针旋转45°
              textStyle: {
                //文字样式
                color: "#fff",
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "Microsoft YaHei",
              },
            },
            axisLine: {
              onZero: false,
              show: false,
              lineStyle: {
                color: colors[1],
              },
            },
            axisPointer: {
              show: false,
              label: {
                formatter: function (params) {
                  return (
                    "滿意度  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: [
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
              "1月",

            ],
            textStyle: {
              color: "#fff",
            },
          },
          {
            show: false,
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "满意度" +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: [],
          },
        ],
        yAxis: [
          {
            // show: false,
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              interval: 0, //强制文字产生间隔
              rotate: 0, //文字逆时针旋转45°
              textStyle: {
                //文字样式
                color: "#fff",
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "Microsoft YaHei",
              },
            },
          },
        ],
        series: [
          {
            name: "当月收入",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#8cd5c2", //改变折线点的颜色
                lineStyle: {
                  color: "#e67e22", //改变折线颜色
                  width:4
                },
              },
            },
            data: [
              8498406.15,
              17853726.94,
              14155951.30,
              13402707.48,
              12992766.04,
              13493289.63,
              12757039.24,
              14273823.05,
              14136438.84,
              13093720.91,
              14236984.62
            ],
          }
        ],
      };

      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style lang="less" scoped>
#zxt {
  width: 100%;
  height: 100%;
  // background: #000850;
  // background-color: #fff;
  position: relative;
  #main {
    width: 100%;
    height: 100%;
  }
}
</style>