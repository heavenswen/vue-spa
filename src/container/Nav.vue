
<template>
	<el-row>
		<!--logo-->
		<el-col :xs='3'
		        :sm="3"
		        class="nav-logo img-box">
			<img src="../assets/img/logo.png"
			     alt="logo" @click='sideHide' />
		</el-col>
		<!--标题-->
		<el-col :xs='3'
		        :sm="3"
		        class="nav-title"
		        align="bottom">{{ title }}</el-col>
		<!--user-->
		<div class="user">
			<!--头像-->
			<div class="img-box">
				<img v-if='pic'
				     :src="pic" />
			</div><!--set--><el-dropdown trigger="click"
			             class="user-set"
			             @command="handleCommand">
				<span class="el-dropdown-link">
	    				{{ user?user:'菜单' }}<i class="el-icon-caret-bottom el-icon--right"></i>
	  				</span>
				<el-dropdown-menu slot="dropdown"
				                  trigger="click">
					<el-dropdown-item command="set">设置</el-dropdown-item>
					<el-dropdown-item divided
					                  command="out">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</el-row>
</template>
<script>
import regMatch from "../assets/js/datahanding.js"
export default {
	props: {
		pic: {
			//头像
			type: String,
			validator: function (value) {
				let bool = regMatch(value).bool();
				return (bool ? value : 0);
			}
		},
		user: String,

	},
	data() {
		let title = this.$store.state.title
		return {
			title
		}
	},
	methods: {
		handleCommand(command) {
			//下拉选中
			if (command == "set") {
				this.$router.push("/set");
			} else if (command == "out") {
				this.$router.push("/login");
			}
		},
		sideHide(){
			//触发side 隐藏
			let obj = this.$parent.$refs;
			console.log(obj);
		}
	}
}
</script>