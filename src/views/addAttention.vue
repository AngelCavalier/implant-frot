<template>
  <div class="container">
    <div class="operation">
      <el-button type="primary" size="medium" v-print="printObj" class="print">打印</el-button>
      <el-button type="primary" size="medium" @click="submit" class="submit">提交</el-button>
    </div>
    <div class="content" id="printMe">
      <header class="header">种植术后注意事项</header>
      <p>
        <span class="title">伤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;口：</span>
        <span>伤口上的纱卷用于止血，请不要将纱卷咽下，轻咬30-60分钟后吐去；术后伤口会有</span>
      </p>
      <p>小量渗血，唾液较多，请务必咽下，不要频繁吐出，以免加重出血；为防止伤口裂开，</p>
      <p>术后5-7日要少说话；伤口愈合过程中、及愈合后，不要用手晃动种植牙，不要用手做</p>
      <p>种植区域的牙床按摩，这些动作都会导致区域内的骨组织的吸收与破坏。</p>
      <p>
        <span class="title">漱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;口：</span>
        <span>注意口腔卫生的维护，使用漱口水维护口腔卫生，每天4次(早、中、晚餐后及睡前)</span>
      </p>
      <p>每次10ml(约半盖)，每次不超过1分钟，含漱后不用清水漱口，漱口水使用14天。个</p>
      <p>别人应用漱口水后会出现舌背黏膜变黑，此为正常反应，治疗结束后一段时间会自行消退，</p>
      <p>舌背恢复正常颜色，牙齿表面色素沉着可通过洗牙去除。</p>
      <p>
        <span class="title">用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;药：</span>
        <span>术后服用抗生素3-7天（或遵医嘱）。</span>
      </p>
      <p>
        <span class="title">饮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;食：</span>
        <span>当日进食凉或温的半流或全流食，比如酸奶、粥、豆浆等(请勿使用吸管)，餐后轻轻漱口，</span>
      </p>
      <p>以保持口腔清洁；不能进食热的食物，防止加重出血。2-3个月内不要吃太硬和韧性特</p>
      <p>别大的食物，防止种植牙区域受力过大；术后两周不要吸烟。</p>
      <p>
        <span class="title">刷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牙：</span>
        <span>手术后应仔细刷牙，但应注意；用软毛牙刷，种植牙外的区域正常刷牙(包含种牙区域</span>
      </p>
      <p>两侧邻牙)，种植伤口处要动作轻柔，用牙刷毛轻轻拂过缝线表面。</p>
      <p>
        <span class="title">肿胀疼痛：</span>
        <span>伤口稍有水肿属正常，为防止肿胀明显，术后24小时内可以局部冷敷，使用冰块时，</span>
      </p>
      <p>要注意防止冻伤；24小时后可以局部热敷。麻药药性过后出现疼痛是正常现象，不用担</p>
      <p>心，如有不能耐受的疼痛不适，可服用止痛药。如疼痛剧烈、肿胀，及时与医生联系来院复诊。</p>
      <p>
        <span class="title">义&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;齿：</span>
        <span>术后尽量不要戴假牙，不用假牙咀嚼进食，否则伤口表面受压会影响愈合。如有急需，</span>
      </p>
      <p>请医生调改后戴用，如有不适，及时联系医生。</p>
      <p>
        <span class="title">上颌窦提升手术：</span>
        <span>上颌窦提升手术后注意预防感冒，至少1个月左右不要游泳，最好少乘坐飞机，</span>
      </p>
      <p class="p8">避免上颌窦底黏膜受到过大压力。如鼻腔内有渗血或分泌物，可用干净的棉捻或</p>
      <p class="p8">纸捻蘸尽，不要摒鼻涕。</p>
      <p>
        <span class="title">复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查：</span>
        <span>10天左右拆线，定期复诊，不适随诊。</span>
      </p>
      <p>
        <span class="title">其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它：</span>
        <span>术后不要激烈运动、不饮酒、不洗热水澡、不开车；睡觉枕头稍垫高。</span>
      </p>
      <div class="date">
        <span>20</span>
        <span>年</span>
        <span>月</span>
        <span>日</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addAttention',
  data() {
    return {
      printLoading: true,
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
        preview: false,
        extraCss:
          'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback() {
          console.log('打开之前')
        },
        openCallback() {
          console.log('执行了打印')
        },
        closeCallback() {
          console.log('关闭了打印工具')
        },
      },
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.operation {
  margin: 5px;
  position: absolute;
  right: 5px;
  .print,
  .submit {
    margin-right: 10px;
  }
}
.content {
  margin-left: 150px;
  .header {
    font-size: 20px;
    text-align: center;
    margin: 30px 0 30px -150px;
  }
  .title {
    font-weight: 600;
    margin-left: -81px;
  }
  p {
    margin-bottom: 10px;
  }
  .p8 {
    margin-left: 48px;
  }
  .date {
    float: right;
    margin: 30px 0;
    span {
      margin-right: 15px;
    }
  }
}
</style>