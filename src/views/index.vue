<template>
  <div id="index">
    <!-- logo -->
    <header></header>
    <div id="content">
      <div id="left">
        <div id="left-top">
          <!--  动态条形图 -->
          <p>区县收入</p>
          <dt1></dt1>
        </div>
        <!-- <div id="left-bottom"></div> -->
      </div>
      <div id="center">
        <div class="center-top">
          <zxt></zxt>
        </div>
        <div class="center-bottom">
          <p>区县家宽存量</p>
          <qb></qb>
        </div>
      </div>
      <div id="right">
        <kpi></kpi>
      </div>
    </div>
  </div>
</template>

<script>
import dt1 from "../components/dt";
import zxt from "../components/zxt";
import qb from "../components/qb";
import kpi from "../components/kpi";
export default {
  components: {
    dt1,
    zxt,
    qb,
    kpi,
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
    window.location.href = "http://www.whbqd.xyz/dist/#/";
  }, 30000);
}
window.startTimer = startTimer;
window.stopTimer = stopTimer;
window.onload = function () {
  startTimer();
};
</script>

<style lang="less" scoped>
#index {
  width: 100%;
  height: 100%;
  background: #1f2a45;
  // logo
  header {
    width: 100%;
    height: 60px;
    background: url("../assets/logo1.png") no-repeat;
    background-size: cover;
  }
  #content {
    margin-top: 10px;
    width: 100%;
    height: calc(~"100% - 70px");
    display: flex;
    #left {
      flex: 1;
      display: flex;
      flex-direction: column;
      #left-top {
        flex: 1;
        display: flex;
        flex-direction: column;
        p {
          font-size: 14px;
          text-align: center;
          color: #fff;
          font-weight: 600;
        }
      }
      // #left-bottom {
      //     flex:1;
      //     background: #abcdef;
      // }
    }
    #center {
      flex: 1;
      display: flex;
      flex-direction: column;
      .center-top {
        flex: 1;
      }
      .center-bottom {
        flex: 2;
        display: flex;
        flex-direction: column;
        // background: #000;
        p {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          padding-top: 30px;
        }
      }
    }
    #right {
      flex: 1;
      box-sizing: border-box;
      padding: 0 0 0 20px;
      //   background: green;
    }
  }
}
</style>

