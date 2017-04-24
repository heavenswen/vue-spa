
<template>
	<el-row>
		<!--btn-->
		<a :class="display?'active btn-side':'btn-side' "
		   @click="sideToggle">
			<span></span>
			<span></span>
			<span></span>
		</a>
		<!--logo-->
		<el-col :xs='3'
		        :sm="1"
		        class="nav-logo img-box">
			<img src="../assets/img/logo.png"
			     alt="logo" />
		</el-col>
		<!--标题-->
		<el-col :xs='4'
		        :sm="1"
		        class="nav-title"
		        align="bottom">{{ title }}
		</el-col>
		<!--消息提醒-->
		<el-col :xs='3'
		        :sm="3"
		        class="nav-mail" 
				v-if='mail' >
			<el-popover ref="popover2"
			            placement="bottom"
			            width="250"
			            :title="'您有'+mail.length+'封未读消息'"
			            trigger="click"
			            :popper-class='mail.length? "has":""'>
				<div class='nav-mail-a' >
					<a v-for='item of mail' :key='item.id' >{{ item.title }}</a>
				</div>
			</el-popover>
			<el-badge :is-dot='mail.length?true:false'
			          v-popover:popover2><i class="el-icon-message"></i></el-badge>
		</el-col>
		<!--user-->
		<div class="user">
			<!--头像-->
			<div class="img-box">
				<img v-if='pic'
				     :src="pic" />
			</div>
			<!--set-->
			<el-dropdown trigger="click"
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
			//头像 portrait
			type: String,
			validator: function (value) {
				let bool = regMatch(value).bool();
				return (bool ? value : 0);
			}
		},
		user: String,
		mail:Array,// 消息提醒 
		display: Boolean,

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
		sideToggle() {
			//触发side 隐藏
			//get main's function  
			let obj = this.$parent;
			obj.sideToggle();
		}
	}
}
</script>
<style lang='sass'>
.has .el-popover__title
{
    color:#f00;
}
.nav-mail-a a{
	display:block;
	padding: 5px 0; 
}
</style>