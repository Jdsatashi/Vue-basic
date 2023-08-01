<template>
	<header-top/>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld ref="hello" msg="Hello there"/>
	<base-modal title="The title of app component" body="This is the content of modal from app"
				theme="test"></base-modal>
	<button @click="onChangeTest">Click</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from "@/components/HeaderComp.vue";
// eslint-disable-next-line no-unused-vars
import MyModal from "@/components/MyModal.vue";

export default {
	name: 'App',
	components: {
		HeaderTop: HeaderComponent,
		HelloWorld,
		BaseModal: MyModal,
	},
	data() {
		return {}
	},
	methods: {
		onChangeTest() {
			console.log('This is a test ' + Math.random())
			console.log(this)
			this.$refs.hello.test()
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
