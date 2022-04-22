<template>
  <div class="container">
    <div class="operation">
      <el-button type="primary" size="medium" v-print="printObj" class="print">打印</el-button>
      <el-button type="primary" size="medium" @click="submit" class="submit">提交</el-button>
    </div>
    <div class="content" id="printMe">
      <header class="header">种植修复治疗知情同意书</header>
      <p class="indent">1. 保证如实向医生报告自己的健康状况、用药情况、过敏史、既往史、家族史:并附上近三个月内的体检结果；如果隐瞒，</p>
      <p>可能影响医生 的诊断和治疗计划的制定，甚至给诊疗带来不良的影响，我承担由此带来的切后果。</p>
      <p class="indent">2. 种植修复的疗程如下:初诊、检查与设计(包括X-片检查、取研究模型、 全身检查等)、介绍治疗方案、预约手术时间、</p>
      <p>签署知情同意书、植入种植体、拆线、术后复查( X-片检查)，待种植体与牙槽骨形成骨结合后(一般约需2- -3个月时间，</p>
      <p>特殊情况需延长愈合时间)，进行修复治疗，定期复查。</p>
      <p class="indent">3. 如果种植前或术中发现局部骨量不足时，需植入人工骨或自体骨。个别人在植骨术后有感染、失败的可能。植骨后若</p>
      <p>新生的骨量偏少时，仍有需植骨的可能(人工骨费用按用量计算，由患者负担)。种植后发现骨愈台不良时，医师可</p>
      <p>根据情况决定是否取出种植体，补种或采取其它必要的治疗措施。</p>
      <p class="indent">4. 因缺牙间隙小而影响种植手术及种植修复时，有调磨邻牙和对领牙的可能。在术中发现有新问题，有修改原种植计划</p>
      <p>的可能，如增加或减少种植体数目、增加植骨或更改植骨方案等。</p>
      <p class="indent">5. 手术后可能出现的反应及并发症:肿胀及疼痛(治疗后可缓解)、愈合基台松动或脱落(需要及时就诊，由医生处理)、</p>
      <p>邻牙损伤、感染、局部(牙齿、频部、下唇、颊、舌以及取骨区)一时性或永久性麻木、出血、局部皮下淤血及皮肤一</p>
      <p>过性变色、上颌窦黏膜穿孔、上领窦炎、 颌骨骨折、感觉异常、种植体脱落等。</p>
      <p class="indent">6. 遵守医嘱，尽量戒烟或不超过10支1日，注意饮食，在拆线前及拆线后一-段时间内(按医生要求)，避免使用手术一</p>
      <p>侧进食。如戴用临时修复体，必须请医生做检查、调整，否则会导致伤口愈合困难、甚至植体脱落。</p>
      <p class="indent">7. 种植修复后，需要按照医生的要求维护口腔卫生，并定期复查。修复体可能会出现脱落、崩瓷、折断，以及基台螺丝松动、</p>
      <p>食物嵌塞、植体折断、相邻牙齿下沉等并发症，需及时就诊，由医生处理，在保修期内的修复体免费修理。金属烤瓷</p>
      <p>冠保修期为二年，氧化锆全瓷冠保修期为五年。</p>
      <p class="indent">8. 种植修复后，若种植体周围的骨质吸收影响修复效果时，需进行手术治疗并再次进行少量植骨(人工骨费用按用量计算，</p>
      <p>由患者负担)或软组织移植。</p>
      <p class="indent">9. 为了记录病历资料、制定诊疗计划、修复体制作、学术交流与科学研究等目的，术前、术中、术后有时要拍口内照片，</p>
      <p>但不公开患者身份。</p>
      <p class="indent2">10. 根据规定，种植治疗所需费用均为自费。</p>
      <p class="indent2">11. 种植治疗后无法保证种植体永远稳定，少量患者在治疗后不同阶段可能会发生种植体脱落;对于种植治疗后按要求进</p>
      <p>行复查的患者，可免费补种一次或采取其它必要治疗或修复方法，包括以下两种情况: 1 )不植骨的常规种植病例，</p>
      <p>植入后5年内出现松动脱落，2)对于植骨病例和无牙颌病例，植入后2年内出现松动脱落。</p>
      <p class="indent2">12. 非种植修复治疗需另行收费，如牙体、牙周、常规修复治疗、常规外科治疗等。</p>
      <div class="doctor">
        <p class="doctor-indent">医生已向我介绍修复方式(活动义齿、固定义齿及种植义齿)、优缺点、费用、程序及可能存在的风险、并发症。我已</p>
        <p>详细阅读上述内容并完全理解。我愿意承担可能发生的风险，同意并自愿选择种植修复，同意自付所需全部费用。我同意</p>
        <p>医生选择的麻醉方式，同时保证种植手术后24小时不开车，术后1周不做剧烈运动。</p>
      </div>
      <div class="agree">
        <span class="agress-indent">我同意由</span>
        <input type="text" class="input1" v-model="doctor" />
        <span>医生为我进行</span>
        <input type="text" class="input2" v-model="operation" />
        <span>种植修复治疗手术，并配合医生完成</span>
        <p>整个治疗过程，遵守医嘱，能够按期复查。</p>
      </div>
      <div class="sign">
        <span>患者或亲属签字：</span>
        <span>医生签字：</span>
      </div>
      <div class="date">
        <span class="date1">
          <span>20</span>
          <span>年</span>
          <span>月</span>
          <span>日</span>
        </span>
        <span class="date2">
          <span>20</span>
          <span>年</span>
          <span>月</span>
          <span>日</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addConsent',
  data() {
    return {
      doctor: '',
      operation: '',
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
  methods: {
    submit() {
      console.log(this.doctor, this.operation)
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
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
  margin: auto;
  padding: 0 30px;
  .header {
    font-size: 20px;
    text-align: center;
    margin: 30px 0;
  }
  .indent {
    margin-left: -18px;
  }
  .indent2 {
    margin-left: -28px;
  }
  p {
    margin-bottom: 5px;
  }
  .doctor {
    margin-top: 30px;
    margin-left: -28px;
    .doctor-indent {
      margin-left: 32px;
    }
  }
}
.agree {
  margin: 20px 0 20px -28px;
  .agress-indent {
    margin-left: 28px;
  }
  p {
    margin-top: 5px;
  }
}
.input1,
.input2 {
  border: 0;
  border-bottom: 1px solid #000;
  outline: 0;
  text-align: center;
  width: 100px;
  font-size: 16px;
}
.input2 {
  width: 300px;
}
.sign {
  margin-bottom: 20px;
  span {
    margin-right: 200px;
  }
}
.date {
  margin-bottom: 50px;
  .date1 {
    span {
      margin-right: 15x;
    }
  }
  .date2 {
    margin-left: 262px;
    span {
      margin-right: 15px;
    }
  }
}
</style>