<template>
	<transition name="slide">
		<el-menu v-if="display"
		         :default-active="nowPath"
		         class="el-menu-vertical-demo"
		         @open="handleOpen"
		         @close="handleClose"
		         :unique-opened="openOnly"
		         :router="router">
			<template v-for="(val,key) of navs">
				<el-submenu v-if="val.childs"
				            :index="key+'-'">
					<template slot="title">
						<i v-if="val.icon"
						   :class="val.icon"></i> {{val.title}}
					</template>
					<el-menu-item-group v-for="(child,index) of val.childs">
						<el-menu-item :index="child.path?child.path:(key+'-'+index)">
							<i v-if="child.icon"
							   :class="child.icon"></i> {{ child.title }}
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!--不存在链接时-->
				<el-menu-item v-else
				              :index="val.path?val.path:key+'-'">
					<i v-if="val.icon"
					   :class="val.icon"></i> {{val.title}}
				</el-menu-item>
			</template>
		</el-menu>
	</transition>
</template>

<script>
export default {
	props: {
		display: {
			type: Boolean,
			required: true,
		},
		navs: {
			//菜单
			type: Array,
			required: true,
		},
	},
	data() {
		//获得当前路径
		let path = this.$store.state.nowPath; //获得props path
		return {
			nowPath: path,
			router: true, //以 index 进行路由
			openOnly: true // 只打开一个栏
		}
	},
	watch: {
		$route(to, from) {
			let val = to.fullPath;
			this.setPath(val)
		}
	},
	methods: {
		setPath(path) {
			//刷新路径
			this.nowPath = path;
		},
		handleOpen(key, keyPath) {
			//打开下拉
		},
		handleClose(key, keyPath) {
			//关闭下拉
		}
	}

}
</script>

<style lang="sass">

</style>