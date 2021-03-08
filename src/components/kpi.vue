<template>
  <div id="kpi">
    <div class="top">
      <p class="active" style="width: 320px">满意度+装维质量</p>
      <dv-scroll-board id="config" :config="config" />
    </div>
    <div class="bottom">
      <p class="active" style="width: 280px">家宽装维质量</p>
      <dv-scroll-board id="config" :config="config2" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data_myd','data_jk'],
  data() {
    return {
      data1: [],
      data2: [],
      config: {
        header: ["区县", "装机满意度", "修障满意度", "弱光占比", "开通及时率"],
        data: [
          
        ],
        headerBGC: "#2c3e50",
        oddRowBGC: "rgba(255,255,255,0)",
        index: false,
        columnWidth: [70],
        align: ["center"],
        waitTime: 3300,
      },
      config2: {
        header: ["区县", "弱光占比", "有线接入率", "维护质量达标率"],
        data: [
          
        ],
        waitTime: 4500,
        index: false,
        columnWidth: [70],
        align: ["center"],
        headerBGC: "#2c3e50",
        oddRowBGC: "rgba(255,255,255,0)",
      },
    };
  },
  watch: {
    data_myd() {
      this.getData();
    },
    data_jk() {
      this.getData();
    }
  },
  methods: {
    getData() {
        // console.log('组件',this.data_myd,this.data_jk);   
        if(this.data_myd && this.data_jk) {
           this.init(this.data_myd, "manyidu", "config", "data1");
           this.init(this.data_jk, "jiakuan", "config2", "data2");
        }
    },
    init(res, name, config, dataName) {
      // console.log(res);
      res.forEach((item) => {
        let data = [];
        this[config].header.forEach((header) => {
          // if(header === '弱光占比') { console.log(name,"维护质量达标率",item[header],header,item); }
          if(header != '区县') {
            data.push(item[header] ? (parseFloat(item[header]) * 100).toFixed(2) + "%": "");
          } else {
            data.push(item[header] || "");
          }
          
        });
        this[dataName].push(data);
      });
      const header = name !== 'manyidu' ? ["区县", "弱光占比", "有线接入率", "维护质量达标率"] : ["区县", "装机满意度", "修障满意度", "弱光占比", "开通及时率"];
      this[config] = {
        data: this[dataName],
        headerBGC: "#2c3e50",
        oddRowBGC: "rgba(255,255,255,0)",
        index: false,
        columnWidth: [70],
        align: ["center"],
        waitTime: 3300,
        header: header
      };
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
#kpi {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  p {
    // margin-bottom: 10px;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    height: 30px;
  }
  #config {
    width: 100%;
    height: calc(~"100% - 20px");
  }
  .top {
    box-sizing: border-box;
    border: 20px solid;
    border-image: url("../assets/border.png") 30 20 stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    // padding: 0 0 10px;
    padding-top: 50px;
    // p {
    //   flex: 1;
    // }
    // #config {
    //   flex: 8;
    // }
  }
  .bottom {
    margin-top: 15px;
    box-sizing: border-box;
    border: 20px solid;
    border-image: url("../assets/border.png") 30 20 stretch;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    position: relative;
    padding-top: 50px;
    // p {
    //   flex: 1;
    // }
    // #config {
    //   flex: 8;
    // }
  }
}
</style>