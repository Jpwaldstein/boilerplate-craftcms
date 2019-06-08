<template lang="html">
	<div>
		<p>Example Component</p>
	</div>	
</template>


<script>

export default {
	name: 'example-component'
	data(){
		return {
			//
		}
	},
	methods: {

	},
	/*
	* VUE Life Cycle Hooks
	* https://vuejs.org/v2/guide/instance.html
	*/
	beforeCreate() {
		console.log("%cComponent Before Create","color: green; font-weight: 700;padding: 2px");
	},
	created() {
		console.log('%cComponent Created',"color: green; font-weight: 700;padding: 2px");
	},
	beforeMount() {
		console.log('%cComponent Before Mount',"color: green; font-weight: 700;padding: 2px");
	},
	mounted(){
		console.log('%cComponent Mounted',"color: green; font-weight: 700;padding: 2px");

	},
	updated(){
		console.log('%cComponent Updated',"color: green; font-weight: 700;padding: 2px");
		
	},
}
</script>

<style lang="css">
</style>