<template>
  <div id="index">
    <!-- logo -->
    <header>
      <img src="../assets/header.png" alt="" />
    </header>
    <div id="content">
      <div id="left">
        <div id="left-top">
          <!--  动态条形图 -->
          <template v-if="name === '竣工量'">
            <div class="dt animate__animated animate__fadeInLeftBig">
              <dt1 :name="name" :data="jungong"></dt1>
            </div>
          </template>

          <template v-else>
            <div class="dt animate__animated animate__fadeInRightBig">
              <dt1 :name="name" :data="zaitu"></dt1>
            </div>
          </template>
        </div>
        <div id="left-bottom">
          <div class="bot-top">
            <!-- 不满意工单 -->
            <div class="bot-1">
              <p class="title active">不满意工单</p>
              <template v-if="bumanyi.length">
                <div class="item" v-for="(item, index) in bumanyi" :key="index">
                  <div class="content">
                    <span class="number">{{ item.value }}</span>
                    <span>单</span>
                  </div>
                  <div class="desc"><i></i>{{ item.name }}</div>
                </div>
              </template>
            </div>
            <div class="bot-2">
              <p class="active">装维原因占比</p>
              <div>
                <el-progress
                  type="dashboard"
                  :percentage="percentage"
                  :color="colors"
                ></el-progress>
              </div>
            </div>
          </div>
          <div class="bot-bottom">
            <div class="top-left">
              <p class="title active">利润前三</p>
              <div class="ranking">
                <div>
                  <svg
                    t="1614760218816"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="20878"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M962.873716 105.658182a105.192727 105.192727 0 0 0-111.709091-6.283637V0H173.928262v97.745455a106.356364 106.356364 0 0 0-111.941818 7.912727C34.757353 123.345455 20.328262 160.349091 23.120989 208.290909 29.87008 325.818182 124.124625 490.123636 269.579171 565.527273A656.756364 656.756364 0 0 0 442.03008 693.992727v41.425455h-47.941818v137.774545h40.029091c-19.316364 43.287273-118.225455 54.458182-159.650909 54.458182h-16.058182V1024h503.156363v-96.116364H744.575535c-38.4 0-139.636364-12.8-159.65091-54.458181h40.96V735.418182h-47.941818v-41.425455a709.818182 709.818182 0 0 0 171.054546-126.603636C897.477353 493.381818 991.731898 325.818182 1000.575535 208.290909c3.956364-47.941818-10.472727-84.945455-37.701819-102.632727z m-907.636363 101.003636c-1.629091-36.770909 6.283636-64.232727 23.272727-75.403636a73.309091 73.309091 0 0 1 93.090909 4.654545v209.454546A286.952727 286.952727 0 0 0 213.491898 488.727273C119.47008 410.298182 60.357353 293.236364 55.47008 206.661818z m913.687272 0c-4.654545 86.574545-65.629091 206.661818-161.28 285.323637a288.116364 288.116364 0 0 0 41.425455-147.316364V137.774545a75.869091 75.869091 0 0 1 95.883636-6.283636c17.92 11.170909 25.832727 38.4 24.436364 75.170909z"
                      fill="#E6212B"
                      p-id="20879"
                    ></path>
                    <path
                      d="M546.757353 175.709091V442.181818H488.575535v-201.774545a68.421818 68.421818 0 0 1-11.17091 7.912727A118.458182 118.458182 0 0 1 465.302807 256a122.647273 122.647273 0 0 1-15.127272 5.12 112.872727 112.872727 0 0 1-15.36 3.025455V214.807273a238.778182 238.778182 0 0 0 42.123636-16.756364 242.501818 242.501818 0 0 0 35.84-23.272727z"
                      fill="#FEFEFF"
                      p-id="20880"
                    ></path>
                  </svg>
                  <span>{{ top[0] }}</span>
                </div>
                <div>
                  <svg
                    t="1614760341997"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="22026"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M962.873716 105.658182a105.192727 105.192727 0 0 0-111.709091-6.283637V0H173.928262v97.745455a106.356364 106.356364 0 0 0-111.941818 7.912727C34.757353 123.345455 20.328262 160.349091 23.120989 208.290909 29.87008 325.818182 124.124625 490.123636 269.579171 565.527273A656.756364 656.756364 0 0 0 442.03008 693.992727v41.425455h-47.941818v137.774545h40.029091c-19.316364 43.287273-118.225455 54.458182-159.650909 54.458182h-16.058182V1024h503.156363v-96.116364H744.575535c-38.4 0-139.636364-12.8-159.65091-54.458181h40.96V735.418182h-47.941818v-41.425455a709.818182 709.818182 0 0 0 171.054546-126.603636C897.477353 493.381818 991.731898 325.818182 1000.575535 208.290909c3.956364-47.941818-10.472727-84.945455-37.701819-102.632727z m-907.636363 101.003636c-1.629091-36.770909 6.283636-64.232727 23.272727-75.403636a73.309091 73.309091 0 0 1 93.090909 4.654545v209.454546A286.952727 286.952727 0 0 0 213.491898 488.727273C119.47008 410.298182 60.357353 293.236364 55.47008 206.661818z m913.687272 0c-4.654545 86.574545-65.629091 206.661818-161.28 285.323637a288.116364 288.116364 0 0 0 41.425455-147.316364V137.774545a75.869091 75.869091 0 0 1 95.883636-6.283636c17.92 11.170909 25.832727 38.4 24.436364 75.170909z"
                      fill="#FBBC36"
                      p-id="22027"
                    ></path>
                    <path
                      d="M473.448262 395.636364h110.545454v46.545454h-173.381818v-19.549091a91.229091 91.229091 0 0 1 6.749091-35.84 118.690909 118.690909 0 0 1 16.989091-28.625454 144.989091 144.989091 0 0 1 23.272727-23.272728q12.101818-9.774545 23.272728-17.454545t20.014545-15.592727a116.363636 116.363636 0 0 0 14.661818-14.894546 57.018182 57.018182 0 0 0 8.843637-14.894545 44.450909 44.450909 0 0 0 1.396363-16.058182 32.349091 32.349091 0 0 0-9.541818-25.367273A42.123636 42.123636 0 0 0 488.575535 222.952727a97.047273 97.047273 0 0 0-64.465455 26.763637V199.214545a138.24 138.24 0 0 1 76.8-22.10909 113.338182 113.338182 0 0 1 34.210909 5.12 75.170909 75.170909 0 0 1 26.530909 14.894545 63.301818 63.301818 0 0 1 16.523637 23.272727 78.894545 78.894545 0 0 1 5.818181 30.72 86.807273 86.807273 0 0 1-5.585454 32.116364 98.676364 98.676364 0 0 1-14.661818 25.367273 134.283636 134.283636 0 0 1-21.178182 20.945454q-12.101818 9.541818-24.901818 18.385455l-16.756364 12.334545a158.72 158.72 0 0 0-14.196364 12.101818 64 64 0 0 0-9.774545 11.636364 19.781818 19.781818 0 0 0-3.490909 11.636364z"
                      fill="#FEFEFF"
                      p-id="22028"
                    ></path>
                  </svg>
                  <span>{{ top[1] }}</span>
                </div>
                <div>
                  <svg
                    t="1614760453511"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="23650"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M962.873716 105.658182a105.192727 105.192727 0 0 0-111.709091-6.283637V0H173.928262v97.745455a106.356364 106.356364 0 0 0-111.941818 7.912727C34.757353 123.345455 20.328262 160.349091 23.120989 208.290909 29.87008 325.818182 124.124625 490.123636 269.579171 565.527273A656.756364 656.756364 0 0 0 442.03008 693.992727v41.425455h-47.941818v137.774545h40.029091c-19.316364 43.287273-118.225455 54.458182-159.650909 54.458182h-16.058182V1024h503.156363v-96.116364H744.575535c-38.4 0-139.636364-12.8-159.65091-54.458181h40.96V735.418182h-47.941818v-41.425455a709.818182 709.818182 0 0 0 171.054546-126.603636C897.477353 493.381818 991.731898 325.818182 1000.575535 208.290909c3.956364-47.941818-10.472727-84.945455-37.701819-102.632727z m-907.636363 101.003636c-1.629091-36.770909 6.283636-64.232727 23.272727-75.403636a73.309091 73.309091 0 0 1 93.090909 4.654545v209.454546A286.952727 286.952727 0 0 0 213.491898 488.727273C119.47008 410.298182 60.357353 293.236364 55.47008 206.661818z m913.687272 0c-4.654545 86.574545-65.629091 206.661818-161.28 285.323637a288.116364 288.116364 0 0 0 41.425455-147.316364V137.774545a75.869091 75.869091 0 0 1 95.883636-6.283636c17.92 11.170909 25.832727 38.4 24.436364 75.170909z"
                      fill="#347EFF"
                      p-id="23651"
                    ></path>
                    <path
                      d="M416.662807 433.570909v-50.036364a101.003636 101.003636 0 0 0 61.207273 19.083637 55.156364 55.156364 0 0 0 33.978182-9.309091 31.418182 31.418182 0 0 0 12.334545-26.298182 30.021818 30.021818 0 0 0-15.127272-26.996364 78.894545 78.894545 0 0 0-41.658182-9.541818h-23.272728v-43.985454h23.272728q50.967273 0 50.967272-33.745455t-40.96-31.883636a89.134545 89.134545 0 0 0-50.967272 16.989091v-46.545455a139.636364 139.636364 0 0 1 64-13.730909 96.581818 96.581818 0 0 1 62.370909 17.92 57.250909 57.250909 0 0 1 23.272727 46.545455 60.741818 60.741818 0 0 1-51.898182 64 69.818182 69.818182 0 0 1 43.752728 20.014545 56.785455 56.785455 0 0 1 16.058181 40.727273 69.818182 69.818182 0 0 1-26.763636 57.716363 116.363636 116.363636 0 0 1-73.774545 21.178182 142.661818 142.661818 0 0 1-66.792728-12.101818z"
                      fill="#FEFEFF"
                      p-id="23652"
                    ></path>
                  </svg>
                  <span>{{ top[2] }}</span>
                </div>
              </div>
            </div>
            <div class="top-right">
              <!-- 车辆情况 -->
              <div class="top panel">
                <div class="inner">
                  <div class="province">
                    <h3 class="active">成本情况</h3>
                    <div class="data">
                      <ul class="sup">
                        <li v-for="(item, index) in chengben" :key="index">
                          <span>{{ Object.keys(item)[0] }}</span>
                          <span>{{ Object.values(item)[0] }}</span>
                        </li>
                      </ul>
                      <ul class="sub">
                        <div class="nbplay">
                          <div class="nb" style="overflow: hidden">
                            <!-- <li><span>数据</span><span> 数据<s class="icon-up"></s></span></li> -->
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="center">
        <div class="center-top">
          <p class="active">当月收入</p>
          <template v-if="shouru.length">
            <zxt :data="shouru"></zxt>
          </template>
        </div>
        <div class="center-bottom">
          <template v-if="cunliang">
            <qb :data="cunliang"></qb>
          </template>
        </div>
      </div>
      <div id="right">
        <template v-if="resData">
          <kpi
            :data_myd="resData ? resData.data.manyidu : ''"
            :data_jk="resData ? resData.data.jiakuan : ''"
          ></kpi>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import dt1 from "../components/dt";
import zxt from "../components/zxt";
import qb from "../components/qb";
import kpi from "../components/kpi";
import $ from "jquery";

export default {
  components: {
    dt1,
    zxt,
    qb,
    kpi,
  },
  data() {
    return {
      resData: "",
      cunliang: "",
      bumanyi: [],
      timer: [null, null],
      name: "竣工量",
      qb_name: "家宽装移机量",
      jungong: [],
      zaitu: [],
      top: [],
      shouru: [],
      chengben: [],
      percentage: 60,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    dt(arr, name, delay, data, timerIndex) {
      if (this.timer[timerIndex]) {
        return;
      }
      let index = 0;
      const len = arr.length;

      this.timer[timerIndex] = setInterval(() => {
        index = ++index % len;
        // console.log(name, data, index);
        if (data) {
          this.cunliang = data[index];
        }

        this[name] = arr[index];
      }, delay);
    },
    // jq
    cbqk() {
      var data = [
        {
          name: "公司",
          data: [
            {
              name: "江干",
              num: 50,
            },
            {
              name: "余杭",
              num: 10,
            },
            {
              name: "武林",
              num: 10,
            },
            {
              name: "拱墅",
              num: 10,
            },
            {
              name: "钱塘",
              num: 10,
            },
            {
              name: "西湖",
              num: 10,
            },
            {
              name: "临安",
              num: 10,
            },
            {
              name: "桐庐",
              num: 10,
            },
            {
              name: "萧山",
              num: 10,
            },
            {
              name: "滨江",
              num: 10,
            },
            {
              name: "临平",
              num: 10,
            },
            {
              name: "建德",
              num: 10,
            },
          ],
        },
        {
          name: "个人",
          data: [
            {
              name: "江干",
              num: 30,
            },
            {
              name: "余杭",
              num: 10,
            },
            {
              name: "武林",
              num: 10,
            },
            {
              name: "拱墅",
              num: 10,
            },
            {
              name: "钱塘",
              num: 10,
            },
            {
              name: "西湖",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
          ],
        },
        {
          name: "租聘",
          data: [
            {
              name: "江干",
              num: 20,
            },
            {
              name: "余杭",
              num: 10,
            },
            {
              name: "武林",
              num: 10,
            },
            {
              name: "拱墅",
              num: 10,
            },
            {
              name: "钱塘",
              num: 10,
            },
            {
              name: "西湖",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
            {
              name: "江干",
              num: 10,
            },
          ],
        },
      ];
      data = this.chengben;
      $(".inner").on("mouseenter", ".sup li", function (e) {
        $(this).addClass("active2").siblings().removeClass("active2");
        //获取随机的值  sort方法 是给数组排序 a-b是从小到大
        //.5-随机0-1的数 可能为正可能为负 排序就会随机
        const index = $(this).index();
        var html = "";
        try {
          if (data[index]["data"].length) {
            data[index]["data"].forEach(function (item) {
              const value = parseInt(Object.values(item));
              // html += `<li><span>${Object.keys(
              //   item.name
              // )}</span><span>${Object.values(item.num)}</span></li>`;
              html += `<li><span>${Object.keys(item)}</span><span>${value >= 1000 ? parseInt(value / 1000) + "K" : value }</span></li>`;
            });
          }
        } catch (err) {}

        //渲染
        $(".nb").html(html);

        //滚动
        //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
        //      然后动画向上滚动，滚动到一半重新开始滚动
        //因为选取的是两个marquee  所以要遍历
        $(".province .nb").each(function (index, dom) {
          //将每个 的所有子级都复制一遍
          var rows = $(dom).children().clone();
          //再将新的到的加入原来的
          $(dom).append(rows);
        });
      });

      $(".province .sup li").eq(0).mouseenter();
      var index = 0;
      setInterval(() => {
        index++;
        if (index > 2) {
          index = 0;
        }
        $(".sup li").eq(index).mouseenter();
      }, 10000);
    },
    getData() {
      this.$axios.post("v2").then((res) => {
        this.resData = res;
        this.bumanyi = res.data.bumanyi[0].data;
        console.log("请求的接口", res);
        this.cunliang = this.resData.data.cunliang[0];
        this.jungong = this.resData.data.jungong;
        this.zaitu = this.resData.data.zaitu;
        this.top = Object.keys(this.resData.data.shouru_sort);
        this.shouru = this.resData.data.shouru;
        this.chengben = this.resData.data.chengben;
        this.cbqk();
        // console.log(this.jungong, this.zaitu, 3842947);
        this.dt(["竣工量", "在途量"], "name", 14000, "", 0);
        this.dt(
          ["家宽装移机量", "家宽维护量", "集客维护量"],
          "qb_name",
          8000,
          this.resData.data.cunliang,
          1
        );
      });
    },
  },
  created() {
    this.timer = [null, null];
    this.getData();
  },
};
let timer = null;
function stopTimer() {
  if (!timer) {
    return;
  }
  clearInterval(timer);
  timer = null;
}
function startTimer() {
  if (timer) {
    return;
  }
  timer = setTimeout(() => {
    // window.location.href = "http://www.whbqd.xyz/dist/#/";
  }, 30000);
}
window.startTimer = startTimer;
window.stopTimer = stopTimer;
window.onload = function () {
  startTimer();
};
</script>

<style lang="less" scoped>
@import url("../css/animate.css");
@import url("../css/index.css");
#index {
  width: 100%;
  height: 100%;
  background: #101227;
  box-sizing: border-box;
  padding: 0 10px 10px;
  // logo
  header {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;

    // background: url("../assets/header.png") no-repeat;
    // background-size: contain;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #content {
    margin-top: 10px;
    width: 100%;
    height: calc(~"100% - 120px");
    // background: #fff;
    overflow: hidden;
    display: flex;
    #left {
      flex: 1;
      display: flex;
      flex-direction: column;
      #left-top {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url("../assets/border.png") 30 20 stretch;
        flex: 1;
        float: left;
        padding-left: 10px;
        padding-top: 30px;
        position: relative;
        margin-bottom: 10px;
        overflow: hidden;
        .dt {
          width: 100%;
          height: 100%;
        }
      }
      #left-bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        .bot-top {
          flex: 1;
          position: relative;
          display: flex;

          color: #fff;
          margin-bottom: 10px;
          .bot-1 {
            // background: red;
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding-top: 30px;
            border: 20px solid;
            border-image: url("../assets/border.png") 30 20 stretch;
            .title {
              position: absolute;
              left: 20px;
              top: 12px;

              font-size: 14px;
              font-weight: 600;
              width: 190px;
            }
            .item {
              width: 50%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span {
                font-size: 13px;
              }
              .number {
                font-size: 19px;
                font-weight: 600;
                margin-right: 4px;
                text-shadow: 0 0 30px #fff;
              }
              .desc {
                font-size: 11px;
                color: #3498db;
                font-weight: 500;
              }
            }
          }
          .bot-2 {
            flex: 1;
            border: 20px solid;
            border-image: url("../assets/border.png") 30 20 stretch;
            margin-left: 10px;
            box-sizing: border-box;
            // padding-top: 20px;
            position: relative;
            display: flex;
            // justify-content: center;
            // align-items: center;
            p {
              position: absolute;
              left: 0px;
              top: -12px;
            }
            & > div {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-58px, -40px);
            }
          }
        }
        .bot-bottom {
          flex: 1;
          display: flex;
          border: 20px solid;
          border-image: url("../assets/border.png") 30 20 stretch;
          color: #fff;
          box-sizing: border-box;
          .top-left {
            box-sizing: border-box;
            padding-top: 25px;
            width: 50%;
            // background:#2980b9;
            position: relative;
            .title {
              position: absolute;
              left: 0;
              top: -10px;
            }
            .ranking {
              display: flex;
              justify-content: space-around;
              flex-direction: column;
              width: 100%;
              height: 100%;
              position: relative;
              & > div {
                display: flex;
                // justify-content: space-around;
                align-items: center;
              }
              span {
                font-size: 13px;
                display: inline-block;
                width: 200px;
                margin-left: 10px;
              }
            }
            svg {
              width: 23px;
              height: 23px;
            }
          }
          .top-right {
            flex: 1;
          }
        }
      }
    }
    #center {
      flex: 2;
      display: flex;
      flex-direction: column;
      padding-left: 25px;
      .center-top {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url("../assets/border.png") 30 20 stretch;
        flex: 1;
        position: relative;
        padding-top: 20px;
        margin-bottom: 15px;
      }
      .center-bottom {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url("../assets/border.png") 30 20 stretch;
        flex: 2;
        display: flex;
        flex-direction: column;
        // background: #000;
        position: relative;
        padding-top: 30px;
      }
    }
    #right {
      flex: 1;
      box-sizing: border-box;
      padding: 0 10px 0 25px;
      //   background: green;
    }
  }
}
</style>
<style lang="less">
.active {
  width: 240px;
  height: 30px !important;
  line-height: 30px;
  letter-spacing: 2px;
  text-align: left !important;
  // padding: 2px 0 2px 5px;
  text-indent: 10px;
  font-size: 14px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    #2980b9,
    #101227,
    rgba(16, 18, 39, 0.7)
  );
  // border-top-left-radius: 5px;
  // border-bottom-left-radius: 5px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  font-weight: 600;
  animation: textIdent 3s alternate infinite;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translatey(-50%);
    width: 5px;
    height: 14px;
    background-color: rgba(126, 214, 223, 0.9);
    border-radius: 4px;
    animation: identifier 5s alternate infinite;
  }
  @keyframes identifier {
    0% {
      box-shadow: 0 0 10px rgba(126, 214, 223, 0.1),
        0 0 20px rgba(126, 214, 223, 0.1);
    }
    50% {
      box-shadow: 0 0 10px rgba(126, 214, 223, 0.6),
        0 0 20px rgba(126, 214, 223, 0.4);
    }
    100% {
      box-shadow: 0 0 5px rgba(126, 214, 223, 0.6),
        0 0 10px rgba(126, 214, 223, 0.8), 0 0 20px rgba(126, 214, 223, 0.9);
    }
  }
  @keyframes textIdent {
    0% {
      text-shadow: 0 0 10px rgba(126, 214, 223, 0.1),
        0 0 20px rgba(126, 214, 223, 0.1);
    }
    50% {
      text-shadow: 0 0 10px rgba(126, 214, 223, 0.6),
        0 0 20px rgba(126, 214, 223, 0.4);
    }
    100% {
      text-shadow: 0 0 5px rgba(126, 214, 223, 0.3),
        0 0 10px rgba(126, 214, 223, 0.8), 0 0 20px rgba(126, 214, 223, 0.9);
    }
  }
}
</style>

