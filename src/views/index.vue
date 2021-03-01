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
          <p class="active">区县收入</p>
          <dt1></dt1>
        </div>
        <!-- <div id="left-bottom"></div> -->
      </div>
      <div id="center">
        <div class="center-top">
          <p class="active">当月收入</p>
          <zxt></zxt>
        </div>
        <div class="center-bottom">
          <p class="active" style="width: 300px">区县家宽存量</p>
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
#index {
  width: 100%;
  height: 100%;
  background: #1f2a45;
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
      height:100%;
    }
  }
  #content {
    margin-top: 10px;
    width: 100%;
    height: calc(~"100% - 120px");
    // background: #fff;

    display: flex;
    #left {
      flex: 2;
      display: flex;
      flex-direction: column;
     
      #left-top {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url('../assets/border.png') 30 20 stretch;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        padding-top: 30px;
        position: relative;
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
      flex: 3;
      display: flex;
      flex-direction: column;
      padding-left: 25px;
      .center-top {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url('../assets/border.png') 30 20 stretch;
        flex: 1;
        position: relative;
        padding-top: 20px;
        margin-bottom: 15px;
      }
      .center-bottom {
        box-sizing: border-box;
        border: 20px solid;
        border-image: url('../assets/border.png') 30 20 stretch;
        flex: 2;
        display: flex;
        flex-direction: column;
        // background: #000;
        position: relative;
        padding-top: 30px;
      }
    }
    #right {
      flex: 2;
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
  text-indent: 20px;
  font-size: 14px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    #2980b9,
    #1f2a45,
    rgba(31, 42, 69, 0.7)
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

