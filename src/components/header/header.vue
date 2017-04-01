<template>
	<div class="header">
		<img src="../../imgs/Back.png" class="back" v-on:click="back()" v-if="!isHideBack"/>
		<div class="title">{{headTitle}}</div>
	</div>
</template>

<script>

  export default{
    props: ['headTitle', 'isHideBack'],
    methods: {
      back: function () {
        this.$router.back();
        // this.$router.go(-1);
      }
    }
  };

</script>

<style>
	.header{
		position: relative;
	}
	.header .title{
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: lightblue;
		z-index: 100;
	}
	.header .back{
		position: absolute;
		width: 30px;
		height: 30px;
		top: 50%;
		transform: translateY(-50%);
	}
	.header:after{
		position: absolute;
		content: "";
		width: 100%;
		height: 0;
		bottom: 0;
		border-bottom: 1px solid gray;
		transform: scaleY(0.5);
	}
</style>
