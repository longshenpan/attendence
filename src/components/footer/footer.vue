<template>
	<div class="v_footer">
		<!-- <img src="../../imgs/Back.png" class="back" v-on:click="back()" v-if="!isHideBack"/> -->
		<!-- <div class="title">{{footTitle}}</div> -->
		<router-link class="home middle" v-bind:to="homeLink">
			<img src="/static/imgs/Home.png">
			<!-- <div class="home_title">{{homeTitle}}</div> -->
		</router-link>
		<router-link class="user middle" v-bind:to="userLink">
			<img src="/static/imgs/User.png">
			<!-- <div class="home_title">{{userTitle}}</div> -->
		</router-link>
	</div>
</template>
<script>
  export default{
    props: ['footTitle'],
    data () {
      return {
        homeLink: {path: '/menu'},
        userLink: {path: '/personal'}
      };
    },
    methods: {
    }
  };
</script>
<style>
	.v_footer{
		position: relative;
		height: 60px;
		margin-top: -60px;
		line-height: 60px;
		background-color: lightblue;
		text-align: center;
		overflow: hidden;
	}
	.v_footer:before{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		content: "";
		border-bottom: 1px solid gray;
		transform: scaleY(0.5);
	}
	.v_footer .home{
		left: 2px;
	}
	.v_footer .user{
		right: 2px;
	}
	.v_footer .middle{
		position: absolute;
		height: 48px;
		width: 48px;
		top: 50%;
		transform: translateY(-50%);
		overflow: hidden;
	}
</style>
