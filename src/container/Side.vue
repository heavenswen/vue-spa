<template>
	<el-row>

		<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="openOnly" :router="router">
			<template v-for="(val,key) of navs">
				<el-submenu v-for="(val,key) of navs" :index="key+'-'">
					<template v-if="(!val.path)">
						<template slot="title">
							<i v-if="val.icon" :class="val.icon"></i> {{val.title}}
						</template>
						<template v-if='val.childs'>
							<el-menu-item-group v-for="(child,index) of val.childs">
								<!--存在子集时-->
								<el-menu-item :index="child.href?child.href:(key+'-'+index)">
									<i v-if="child.icon" :class="child.icon"></i> {{ child.title }}
								</el-menu-item>

							</el-menu-item-group>
						</template>
					</template>
					<!--存在链接时-->
					<template v-else>
						1111
					</template>
				</el-submenu>
			</template>
		</el-menu>

	</el-row>
</template>

<script>
	export default {
		props: {
			navs: Array,
			required: true,
		},
		data() {
			return {
				router: true, //index 进行路由
				openOnly: true // 只打开一个栏
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}

	}
</script>

<style lang="sass">

</style>