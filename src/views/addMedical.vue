<template>
  <div class="container">
    <div class="repair-course">
      <el-checkbox v-model="isAll" label="全选" border style="marginTop: 5px;"></el-checkbox>
      <Operation />
      <div id="printMe">
        <header class="form-header">种植修复疗程</header>
        <table class="table" border="1" cellspacing="0">
          <tr>
            <td class="treatment">疗程</td>
            <td class="times">
              <div>诊疗第1次（初次门诊）</div>
            </td>
            <td class="times">
              <div>诊疗第2次（术前准备）</div>
            </td>
            <td class="times">
              <div>诊疗第3次（手术日）</div>
            </td>
          </tr>
          <tr>
            <td class="work">主要诊疗工作</td>
            <td>
              <label v-for="(item, index) in checkList.c1" :key="index" class="checkbox">
                <input type="checkbox" name="checkList1" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
            <td>
              <label v-for="(item, index) in checkList.c2" :key="index" class="checkbox">
                <input type="checkbox" name="checkList2" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
            <td>
              <label v-for="(item, index) in checkList.c3" :key="index" class="checkbox">
                <input type="checkbox" name="checkList3" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
          </tr>
          <tr>
            <td class="advice">重点医嘱</td>
            <td>
              <p>临时医嘱：曲面断层片、牙片</p>
              <p class="text">牙科CT(上传、打印)</p>
              <p class="text">牙周治疗</p>
            </td>
            <td>
              <p>临时医嘱：血常规检查、凝血功能</p>
              <p class="text">肝肾功能、感染性疾病</p>
              <p class="text">筛查、术前口腔清洁、</p>
              <p class="text">牙周治疗</p>
            </td>
            <td>
              <p>长期医嘱：饮食：普食、半流食、流食、</p>
              <p class="text">抗菌药物3-5天、漱口液含漱</p>
              <p>临时医嘱：种植术后常规护理</p>
            </td>
          </tr>
        </table>
        <table class="table" border="1" cellspacing="0">
          <tr>
            <td class="treatment">疗程</td>
            <td class="times">
              <div>诊疗第4次（术后第1次复查）术后7天</div>
            </td>
            <td class="times">
              <div>诊疗第5次（术后第2次复查）术后30天</div>
            </td>
            <td class="times">
              <div>诊疗第6次（术后第3次复查）术后3个月</div>
            </td>
          </tr>
          <tr>
            <td class="work">主要诊疗工作</td>
            <td>
              <label v-for="(item, index) in checkList.c4" :key="index" class="checkbox">
                <input type="checkbox" name="checkList4" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
            <td>
              <label v-for="(item, index) in checkList.c5" :key="index" class="checkbox">
                <input type="checkbox" name="checkList5" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
            <td>
              <label v-for="(item, index) in checkList.c6" :key="index" class="checkbox">
                <input type="checkbox" name="checkList6" v-model="item.status" />
                {{item.value}}
              </label>
            </td>
          </tr>
          <tr>
            <td class="advice">重点医嘱</td>
            <td>长期医嘱：术后1月复查</td>
            <td>长期医嘱：术后3个月复查</td>
            <td>
              <p>长期医嘱：预约修复、漱口液含漱</p>
              <p>饮食：普食、半流食、流食</p>
              <p>临时医嘱：牙片、曲面断层片、术后常规护理</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Operation from '../components/Operation'
export default {
  name: 'addMedical',
  components: { Operation },
  data() {
    return {
      checkList: {
        c1: [
          {
            value: '询问病史、体格检查、完成大病历',
            status: false,
          },
          {
            value: '影像学检查',
            status: false,
          },
          {
            value: '颞下颌关节检查',
            status: false,
          },
          {
            value: '预约会诊（根据病情需要）',
            status: false,
          },
          {
            value: '向患者交代诊疗过程和注意事项',
            status: false,
          },
          {
            value: '取研究模型',
            status: false,
          },
        ],
        c2: [
          {
            value: '确定手术方案和治疗计划',
            status: false,
          },
          {
            value: '术前讨论、模型分析',
            status: false,
          },
          {
            value: '完成必要的相关科室会诊',
            status: false,
          },
          {
            value: '签署治疗计划和治疗费用知情同意书',
            status: false,
          },
          {
            value: '开术前化验单',
            status: false,
          },
          {
            value: '预约手术日期',
            status: false,
          },
          {
            value: '牙周治疗',
            status: false,
          },
        ],
        c3: [
          {
            value: '完成手术',
            status: false,
          },
          {
            value: '向患者和/或家属书面',
            status: false,
          },
          {
            value: '术者完成手术记录',
            status: false,
          },
        ],
        c4: [
          {
            value: '观察伤口及术区清洁情况',
            status: false,
          },
          {
            value: '检查伤口愈合情况',
            status: false,
          },
          {
            value: '病历记录',
            status: false,
          },
        ],
        c5: [
          {
            value: '观察伤口及术区清洁情况',
            status: false,
          },
          {
            value: '检查伤口愈合情况',
            status: false,
          },
          {
            value: '病历记录',
            status: false,
          },
        ],
        c6: [
          {
            value: '检查种植区愈合情况、种植体',
            status: false,
          },
          {
            value: '骨结合状况',
            status: false,
          },
          {
            value: '完成二期手术',
            status: false,
          },
          {
            value: '术后注意事项',
            status: false,
          },
          {
            value: '术者完成手术记录、病历记录',
            status: false,
          },
        ],
      },
    }
  },
  computed: {
    isAll: {
      set(val) {
        for (const list in this.checkList) {
          this.checkList[list].forEach((obj) => (obj.status = val))
        }
      },
      get() {
        let res = true
        for (const list in this.checkList) {
          if (!this.checkList[list].every((obj) => obj.status === true)) {
            res = false
          }
        }
        return res
      },
    },
  },
  methods: {
    submit() {
      console.log(this.checkList)
      const data = document.getElementsByName('checkList1')
      const len = data.length
      for (let i = 0; i < len; i++) {
        console.log(data[i].checked)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
}
.repair-course {
  padding: 0 20px;
}
.form-header {
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.table {
  margin-bottom: 10px;
  td {
    padding: 5px 10px;
  }
  p {
    margin-bottom: 10px;
  }
  .checkbox {
    margin-bottom: 8px;
    display: block;
  }
  .treatment {
    text-align: center;
    color: #000;
    background-color: #778899;
    font-size: 18px;
  }
  .times {
    width: 370px;
    text-align: center;
    color: #000;
    background-color: #778899;
    font-size: 18px;
    div {
      width: 370px;
    }
  }
  .work,
  .advice {
    font-weight: 600;
  }
  .text {
    margin-left: 80px;
  }
}
</style>