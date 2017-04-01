<template>
	<div class="load" v-if="isshow">
		<div class="circleGroup">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
	</div>
</template>
<script>
  export default{
    data () {
      return {
        isshow: false
      };
    },
    methods: {
      show: function () {
        this.isshow = true;
      },
      hide: function () {
        this.isshow = false;
      }
    }
  };
</script>
<style>
	.load{
		position: absolute;
		top: 0;
		height: 100%;
		font-size: .5rem;
	}
	.load .circleGroup{
		width: 90px;
		height: 90px;
		background-color: rgba(128,128,128,0.5);
	}
	.load .circleGroup .circle{
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: white;
		opacity: 1;
		-webkit-animation-name: flashAnimation;
		-webkit-animation-duration: 1s;
		-webkit-animation-iteration-count: infinite;
	}

	@-webkit-keyframes flashAnimation{
		0%{
			opacity: 0.5;
		}
		75%{
			opacity: 1
		}
		100%{
			opacity: 0.5;
		}
	}

	.delay-twos{
		-webkit-animation-delay: -0.5s;
	}
	.delay-one{
		-webkit-animation-delay: -0.75s;
	}
</style>
