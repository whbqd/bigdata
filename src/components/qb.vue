<template>
  <div id="qb"></div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  props: ["data"],
  watch: {
    data: {
      handler() {
        // console.log("改变了",this.data);
        this.init();
      },
      deep: true
    },
  },
  methods: {
    qb() {
      // console.log("qb",this.data);
      this.data.data.forEach((item) => {
        item.value = parseInt(item.value);
      });
      const data = this.data.data;
      // const data = [
      //   { type: "余杭", value: 296519 },
      //   { type: "萧山", value: 327539 },
      //   { type: "西湖", value: 156703 },
      //   { type: "武林", value: 120087 },
      //   { type: "桐庐", value: 76120 },
      //   { type: "钱塘", value: 152556 },
      //   { type: "临安", value: 124108 },
      //   { type: "江干", value: 156602 },
      //   { type: "建德", value: 73470 },
      //   { type: "拱墅", value: 117495 },
      //   { type: "富阳", value: 133012 },
      //   { type: "淳安", value: 52942 },
      //   { type: "滨江", value: 79966 },
      // ];

      const chart = new Chart({
        container: "container",
        autoFit: true,
        height: 500,
        padding: [30, 20, 30, 20],
      });
      chart.data(data);
      chart.scale("value", {
        alias: this.data.name,
      });

      chart.axis("type", {
        tickLine: {
          alignTick: false,
        },
      });
      chart.axis("value", false);

      chart.tooltip({
        showMarkers: false,
      });
      chart.interval().position("type*value");
      chart.interaction("element-active");

      // 添加文本标注
      data.forEach((item) => {
        chart
          .annotation()
          .text({
            position: [item.type, item.value],
            content: item.value,
            style: {
              textAlign: "center",
              fill: "#fff",
            },
            offsetY: -10,
          })
          .text({});
      });
      chart.render();
    },
    init() {
      if (this.data) {
        // console.log("进入")
        const qb = document.getElementById("qb");
        qb.innerHTML = "";
        const container = document.createElement("div");
        container.id = "container";
        container.style.width = "100%";
        container.style.height = "100%";

        const p = document.createElement("p");
        p.className = "active";
        p.innerText = this.data.name;
        p.style.position = "absolute";
        p.style.left = "10px";
        p.style.top = "-5px";
        container.appendChild(p);
        qb.appendChild(container);
        this.qb();
      }
    },
  },
  
  mounted() {
    // <p class="active" style="width: 300px">区县家宽存量</p>
    this.init();
  },
};
</script>

<style lang="less" scoped>
#qb {
  width: 100%;
  height: 100%;
}
</style>