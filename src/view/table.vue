<template>
  <section>
    <div class="box">
      <h3 class='text-center'>兼容手机端</h3>
      <!--多选-->
      <el-table :data="table"
                border
                height='440'
                :default-sort="{prop: 'date', order: 'descending'}"
                @selection-change="checkboxChange">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column v-for="(item,index) in columns"
                         :key='item.id'
                         :prop="item.prop"
                         :label="item.label"
                         :sortable='item.sortable'
                         :width='item.width'
                         min-width="115"
                         header-align='center'
                         :fixed="!!item.fixed">
        </el-table-column>
        <!--右固定菜单-->
        <el-table-column fixed="right"
                         label="操作"
                         width="120">
          <template scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, table)"
                       type="text"
                       size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='text-right'>
        <el-pagination @size-change='sizePage'
                       @current-change='currentChange'
                       small
                       layout="total,  prev, pager, next"
                       :page-size="15"
                       :total="100">
        </el-pagination>
      </div>
    </div>
    <div class='box'>
      <h3 class='text-center'>显示隐藏内容</h3>
      <el-table :data="table"
                border>
        <el-table-column v-for="(item,index) in columns"
                         :key='item.id'
                         :prop="item.prop"
                         :label="item.label"
                         :sortable='item.sortable'
                         :width='item.width'
                         min-width="115"
                         header-align='center'
                         :show-overflow-tooltip='item.tooltip'>
        </el-table-column>
        <!--内容隐藏-->
        <el-table-column label="自定义内容"
                         width="180">
          <template scope="scope">
            <el-popover trigger="click"
                        placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>介绍: {{ scope.row.descride }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <el-tag>{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <!--<div class='text-right'>
        <el-pagination :current-page="2"
                       :page-size="10"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="100">
        </el-pagination>
      </div>-->
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      checkeds: [],
      columns: [
        {
          label: "日期",
          prop: "date",
          sortable: true,
          width: 115,
          fixed: 1
        },
        {
          label: "名称",
          prop: "name",
          sortable: true,
        },
        {
          label: "公司",
          prop: "company",
          sortable: true,
        },
        {
          label: "描述",
          prop: "descride",
          sortable: true,
          tooltip: true//show-overflow-tooltip 单行显示 其余的hover tip
        }
      ],
      table: [
        {
          date: "1969-12-03",
          name: "张小龙",
          descride: "Foxmail创始人，微信创始人，腾讯公司高级副总裁。",
          company: "腾讯 微信"
        }, {
          date: "",
          name: "姚晓光",
          descride: "在MMO，ACG，移动游戏等多个领域取得成功的制作人",
          company: "腾讯 天美"
        }, {
          date: "1971-10-01",
          name: "丁磊",
          descride: "网易公司创始人，现担任网易公司董事局主席兼首席执行官。",
          company: "网易"
        },
        {
          date: "1972",
          name: "张志东",
          descride: "腾讯创办人之一，腾讯高级副总裁兼科技总裁，",
          company: "腾讯"
        },
        {
          date: "1968-11-17",
          name: "李彦宏",
          descride: "百度公司创始人、董事长兼首席执行官，全面负责百度公司的战略规划和运营管理",
          company: "百度"
        }
      ]
    }
  },
  methods: {
    sizePage(v) {
      console.log('sizePage', v)
    },
    currentChange(v) {
      //trigger
      console.log('currentChange', v)
    },
    deleteRow(index, rows) {
      //删除数据行
      rows.splice(index, 1);
    },
    checkboxChange(val) {
      //多选 选中数据
      this.checkeds = val
    },
    formatter(row, column) {
      return row.address;
    }
  },
  components: {}
}
</script>
<style lang="sass">
.box{
 width:98%;
 display:block;
 margin:auto;
 margin-bottom:15px;
}

</style>