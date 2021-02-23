<template>
  <div id="dt"></div>
</template>

<script>
import axios from 'axios';
import { Chart, registerAnimation } from "@antv/g2";
export default {
  methods: {
    dt() {
      registerAnimation("label-appear", (element, animateCfg, cfg) => {
        const label = element.getChildren()[0];
        const coordinate = cfg.coordinate;
        const startX = coordinate.start.x;
        const finalX = label.attr("x");
        const labelContent = label.attr("text");

        label.attr("x", startX);
        label.attr("text", 0);

        const distance = finalX - startX;
        label.animate((ratio) => {
          const position = startX + distance * ratio;
          const text = (labelContent * ratio).toFixed(0);

          return {
            x: position,
            text,
          };
        }, animateCfg);
      });

      registerAnimation("label-update", (element, animateCfg, cfg) => {
        const startX = element.attr("x");
        const startY = element.attr("y");
        // @ts-ignore
        const finalX = cfg.toAttrs.x;
        // @ts-ignore
        const finalY = cfg.toAttrs.y;
        const labelContent = element.attr("text");
        // @ts-ignore
        const finalContent = cfg.toAttrs.text;

        const distanceX = finalX - startX;
        const distanceY = finalY - startY;
        const numberDiff = +finalContent - +labelContent;

        element.animate((ratio) => {
          const positionX = startX + distanceX * ratio;
          const positionY = startY + distanceY * ratio;
          const text = (+labelContent + numberDiff * ratio).toFixed(0);

          return {
            x: positionX,
            y: positionY,
            text,
          };
        }, animateCfg);
      });

      function handleData(source) {
        source.sort((a, b) => {
          return a.value - b.value;
        });

        return source;
      }
      
      axios({
        url: "http://www.whbqd.xyz:8088/goods/queryId",
        method: "post",
        params: {
          id: 2
        }
      }).then((data) => {
        console.log(data);
        data = this.data;

        let count = 0;
        let chart;
        let interval;

        function countUp() {
          if (count === 0) {
            chart = new Chart({
              container: "main",
              autoFit: true,
              height: 500,
              padding: [20, 60],
            });
            // @ts-ignore
            chart.data(handleData(Object.values(data)[count]));
            chart.coordinate("rect").transpose();
            chart.legend(false);
            chart.tooltip(false);
            // chart.axis('value', false);
            chart.axis("city", {
              animateOption: {
                update: {
                  duration: 1000,
                  easing: "easeLinear",
                },
              },
            });
            chart.annotation().text({
              position: ["95%", "90%"],
              content: Object.keys(data)[count],
              style: {
                fontSize: 40,
                fontWeight: "bold",
                fill: "#fff",
                textAlign: "end",
              },
              animate: false,
            });
            chart
              .interval()
              .position("city*value")
              .color("city")
              .label("value", (value) => {
                // if (value !== 0) {
                return {
                  animate: {
                    appear: {
                      animation: "label-appear",
                      delay: 0,
                      duration: 1000,
                      easing: "easeLinear",
                    },
                    update: {
                      animation: "label-update",
                      duration: 1000,
                      easing: "easeLinear",
                    },
                  },
                  style: {
                    fill: "#fff",
                  },
                  offset: 5,
                };
                // }
              })
              .animate({
                appear: {
                  duration: 1000,
                  easing: "easeLinear",
                },
                update: {
                  duration: 1000,
                  easing: "easeLinear",
                },
              });

            chart.render();
          } else {
            chart.annotation().clear(true);
            chart.annotation().text({
              position: ["95%", "90%"],
              content: Object.keys(data)[count],
              style: {
                fontSize: 40,
                fontWeight: "bold",
                fill: "#fff",
                textAlign: "end",
              },
              animate: false,
            });
            // @ts-ignore
            chart.changeData(handleData(Object.values(data)[count]));
          }

          ++count;

          if (count === Object.keys(data).length) {
            clearInterval(interval);
          }
        }

        countUp();
        interval = setInterval(countUp, 2000);
      });
    },
  },
  data() {
    return {
      data: {
        "2020-02": [
          {
            value: 1905752.91,
            city: "余杭",
          },
          {
            value: 1776482.8,
            city: "萧山",
          },
          {
            value: 966838.96,
            city: "西湖",
          },
          {
            value: 678392.21,
            city: "武林",
          },
          {
            value: 532041.53,
            city: "桐庐",
          },
          {
            value: 678252.96,
            city: "钱塘",
          },
          {
            value: 706470.18,
            city: "临安",
          },
          {
            value: 1087186.07,
            city: "江干",
          },
          {
            value: 578181.17,
            city: "建德",
          },
          {
            value: 615053.61,
            city: "拱墅",
          },
          {
            value: 950450.18,
            city: "富阳",
          },
          {
            value: 525144.96,
            city: "淳安",
          },
          {
            value: 502933.65,
            city: "滨江",
          },
        ],
        "2020-03": [
          {
            value: 1242597.07,
            city: "余杭",
          },
          {
            value: 1537156.82,
            city: "萧山",
          },
          {
            value: 760403.88,
            city: "西湖",
          },
          {
            value: 552527.66,
            city: "武林",
          },
          {
            value: 317725.32,
            city: "桐庐",
          },
          {
            value: 579606.51,
            city: "钱塘",
          },
          {
            value: 528712.36,
            city: "临安",
          },
          {
            value: 717427.67,
            city: "江干",
          },
          {
            value: 367540.69,
            city: "建德",
          },
          {
            value: 492367.57,
            city: "拱墅",
          },
          {
            value: 716493.93,
            city: "富阳",
          },
          {
            value: 303477.54,
            city: "淳安",
          },
          {
            value: 382369.07,
            city: "滨江",
          },
        ],
        "2020-04": [
          {
            value: 2815078.81,
            city: "余杭",
          },
          {
            value: 3006057.62,
            city: "萧山",
          },
          {
            value: 1473928.08,
            city: "西湖",
          },
          {
            value: 1088278.54,
            city: "武林",
          },
          {
            value: 707083.88,
            city: "桐庐",
          },
          {
            value: 1118757.95,
            city: "钱塘",
          },
          {
            value: 1225357.53,
            city: "临安",
          },
          {
            value: 1571393.98,
            city: "江干",
          },
          {
            value: 719108.38,
            city: "建德",
          },
          {
            value: 925791.87,
            city: "拱墅",
          },
          {
            value: 1441624.93,
            city: "富阳",
          },
          {
            value: 960297.7,
            city: "淳安",
          },
          {
            value: 800967.62,
            city: "滨江",
          },
        ],
        "2020-05": [
          {
            value: 2356231.59,
            city: "余杭",
          },
          {
            value: 2267393.62,
            city: "萧山",
          },
          {
            value: 1151435.33,
            city: "西湖",
          },
          {
            value: 917929.49,
            city: "武林",
          },
          {
            value: 735190.38,
            city: "桐庐",
          },
          {
            value: 884067.99,
            city: "钱塘",
          },
          {
            value: 862426.8,
            city: "临安",
          },
          {
            value: 1274660.8,
            city: "江干",
          },
          {
            value: 547649.93,
            city: "建德",
          },
          {
            value: 870611.41,
            city: "拱墅",
          },
          {
            value: 1206148.15,
            city: "富阳",
          },
          {
            value: 438794.44,
            city: "淳安",
          },
          {
            value: 643411.31,
            city: "滨江",
          },
        ],
        "2020-06": [
          {
            value: 2333543.08,
            city: "余杭",
          },
          {
            value: 2215929.21,
            city: "萧山",
          },
          {
            value: 1158847.89,
            city: "西湖",
          },
          {
            value: 873173.24,
            city: "武林",
          },
          {
            value: 541049.01,
            city: "桐庐",
          },
          {
            value: 835822.2,
            city: "钱塘",
          },
          {
            value: 886878.79,
            city: "临安",
          },
          {
            value: 1238519.53,
            city: "江干",
          },
          {
            value: 464309.58,
            city: "建德",
          },
          {
            value: 788170.67,
            city: "拱墅",
          },
          {
            value: 1011436.67,
            city: "富阳",
          },
          {
            value: 416479.03,
            city: "淳安",
          },
          {
            value: 638548.51,
            city: "滨江",
          },
        ],
        "2020-07": [
          {
            value: 2114372.72,
            city: "余杭",
          },
          {
            value: 2081722.42,
            city: "萧山",
          },
          {
            value: 1099265.68,
            city: "西湖",
          },
          {
            value: 817531.69,
            city: "武林",
          },
          {
            value: 517761.15,
            city: "桐庐",
          },
          {
            value: 811464.61,
            city: "钱塘",
          },
          {
            value: 850998.85,
            city: "临安",
          },
          {
            value: 1184350.35,
            city: "江干",
          },
          {
            value: 429717.79,
            city: "建德",
          },
          {
            value: 778966.16,
            city: "拱墅",
          },
          {
            value: 1290394.82,
            city: "富阳",
          },
          {
            value: 431551.2,
            city: "淳安",
          },
          {
            value: 584668.56,
            city: "滨江",
          },
        ],
        "2020-08": [
          {
            value: 2307438.37,
            city: "余杭",
          },
          {
            value: 2192865.53,
            city: "萧山",
          },
          {
            value: 1179831.88,
            city: "西湖",
          },
          {
            value: 842002.34,
            city: "武林",
          },
          {
            value: 508677.92,
            city: "桐庐",
          },
          {
            value: 780508.32,
            city: "钱塘",
          },
          {
            value: 847601.42,
            city: "临安",
          },
          {
            value: 1268468.27,
            city: "江干",
          },
          {
            value: 437843.43,
            city: "建德",
          },
          {
            value: 912335.56,
            city: "拱墅",
          },
          {
            value: 1120643.53,
            city: "富阳",
          },
          {
            value: 498505.2,
            city: "淳安",
          },
          {
            value: 596567.79,
            city: "滨江",
          },
        ],
        "2020-09": [
          {
            value: 2260404.08,
            city: "余杭",
          },
          {
            value: 2090148.89,
            city: "萧山",
          },
          {
            value: 1070316.36,
            city: "西湖",
          },
          {
            value: 836659.36,
            city: "武林",
          },
          {
            value: 523241.98,
            city: "桐庐",
          },
          {
            value: 788085.19,
            city: "钱塘",
          },
          {
            value: 843638.49,
            city: "临安",
          },
          {
            value: 1047925.85,
            city: "江干",
          },
          {
            value: 425261.77,
            city: "建德",
          },
          {
            value: 820267.0,
            city: "拱墅",
          },
          {
            value: 1030431.36,
            city: "富阳",
          },
          {
            value: 413269.01,
            city: "淳安",
          },
          {
            value: 607389.85,
            city: "滨江",
          },
        ],
        "2020-10": [
          {
            value: 2358676.55,
            city: "余杭",
          },
          {
            value: 2175903.43,
            city: "萧山",
          },
          {
            value: 1065092.74,
            city: "西湖",
          },
          {
            value: 793396.02,
            city: "武林",
          },
          {
            value: 615481.75,
            city: "桐庐",
          },
          {
            value: 979761.7,
            city: "钱塘",
          },
          {
            value: 863000.55,
            city: "临安",
          },
          {
            value: 1043154.92,
            city: "江干",
          },
          {
            value: 475070.5,
            city: "建德",
          },
          {
            value: 1420067.2,
            city: "拱墅",
          },
          {
            value: 1190588.83,
            city: "富阳",
          },
          {
            value: 608004.72,
            city: "淳安",
          },
          {
            value: 685624.07,
            city: "滨江",
          },
        ],
        "2020-11": [
          {
            value: 2399041.58,
            city: "余杭",
          },
          {
            value: 2385615.67,
            city: "萧山",
          },
          {
            value: 1167358.5,
            city: "西湖",
          },
          {
            value: 823404.71,
            city: "武林",
          },
          {
            value: 584719.96,
            city: "桐庐",
          },
          {
            value: 937472.13,
            city: "钱塘",
          },
          {
            value: 806811.69,
            city: "临安",
          },
          {
            value: 1167038.53,
            city: "江干",
          },
          {
            value: 451753.25,
            city: "建德",
          },
          {
            value: 814346.88,
            city: "拱墅",
          },
          {
            value: 1182943.11,
            city: "富阳",
          },
          {
            value: 738451.49,
            city: "淳安",
          },
          {
            value: 677481.27,
            city: "滨江",
          },
        ],
        "2020-12": [
          {
            value: 2212023.75,
            city: "余杭",
          },
          {
            value: 1963847.69,
            city: "萧山",
          },
          {
            value: 1052742.48,
            city: "西湖",
          },
          {
            value: 802665.59,
            city: "武林",
          },
          {
            value: 520829.91,
            city: "桐庐",
          },
          {
            value: 914330.12,
            city: "钱塘",
          },
          {
            value: 748919.68,
            city: "临安",
          },
          {
            value: 1161320.47,
            city: "江干",
          },
          {
            value: 497699.51,
            city: "建德",
          },
          {
            value: 744921.71,
            city: "拱墅",
          },
          {
            value: 907347.2,
            city: "富阳",
          },
          {
            value: 836286.19,
            city: "淳安",
          },
          {
            value: 730786.56,
            city: "滨江",
          },
        ],
        "2021-01": [
          {
            value: 2508091.7,
            city: "余杭",
          },
          {
            value: 2385442.25,
            city: "萧山",
          },
          {
            value: 1268499.56,
            city: "西湖",
          },
          {
            value: 1216890.97,
            city: "武林",
          },
          {
            value: 565115.43,
            city: "桐庐",
          },
          {
            value: 1459680.95,
            city: "钱塘",
          },
          {
            value: 824104.66,
            city: "临安",
          },
          {
            value: 1149924.37,
            city: "江干",
          },
          {
            value: 449763.41,
            city: "建德",
          },
          {
            value: 1125975.89,
            city: "拱墅",
          },
          {
            value: 990122.17,
            city: "富阳",
          },
          {
            value: 371569.67,
            city: "淳安",
          },
          {
            value: 745908.2,
            city: "滨江",
          },
        ],
      },
    };
  },
  mounted() {
    const main = document.createElement("div");
    main.id = "main";
    main.style.width = "100%";
    main.style.height = "100%";
    const dt = document.getElementById("dt");

    dt.appendChild(main);
    this.dt();
  },
};
</script>

<style lang="less" scoped>
#dt {
  width: 100%;
  height: 100%;
}
</style>