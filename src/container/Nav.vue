<template>
	<el-row class="nav-top">
		<!--logo-->
		<el-col :xs='3' :sm="3" class="nav-logo img-box">
			<img :src="logo" alt="logo" />
		</el-col>
		<el-col :xs='3' :sm="3" class="nav-title" align="bottom">{{title}}</el-col>
		<!--user-->
		<div class="user">
			<div class="img-box">
				<img :src="userPic" />
			</div>
			<el-dropdown trigger="click" class="user-set" @command="handleCommand">
				<span class="el-dropdown-link">
    				{{ user }}<i class="el-icon-caret-bottom el-icon--right"></i>
  				</span>
				<el-dropdown-menu slot="dropdown" trigger="click">
					<el-dropdown-item command="set">设置</el-dropdown-item>
					<el-dropdown-item divided command="out">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>

	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				logo:this.$store.state.logo,
				title:this.$store.state.title,
				user:this.$store.state.user,
				userPic:this.$store.state.userPic
			}
		},
		methods:{
			handleCommand(command){
				if(command == "set"){
					
				}else if(command == "out"){
					this.$router.push("login");	
				}
			}
		}
	}
</script>