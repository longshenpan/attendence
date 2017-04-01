<template>
	<div class="personal">
		<div class="personal_header">
			<img src="/static/imgs/Back_white.png" class="back" v-on:click="back()"/>
			<div class="personalInfo">
				<h2>
					<img src="/static/imgs/personalImg.png" class="personalImg"/>
					<div class="personalName">秋天的风</div>
				</h2>
			</div>
		</div>
		<div class="content">
			<div class="row" v-for="value in personalInfo">
				<img v-bind:src="value.icon" class="icon">
				<span class="">{{value.name}}</span>
			</div>
		</div>
	</div>
</template>
<script>
  export default{
    data () {
      return {
        personalInfo: [{
          name: '四川虹信智远软件有限公司',
          icon: '/static/imgs/Military.png'
        },
        {
          name: '共享服务事业部',
          icon: '/static/imgs/Tank.png'
        },
        {
          name: '软件开发工程师',
          icon: '/static/imgs/Gun.png'
        }]
      };
    },
    methods: {
      back: function () {
        this.$router.back();
      }
    }
  };
</script>
<style>
	.personal{
		font-size: .5rem;
		height: 100%;
	}
	.personal .personal_header{
		position: relative;
		height: 30%;
		background-image: url("/static/imgs/personalBg.png");
	}
	.personal .personal_header .personalInfo{
		position: absolute;
		bottom: 20px;
		left: 20px;
	}
	.personal .personal_header .personalInfo .personalImg{
		display: inline-block;
		vertical-align: middle;
	}
	.personal .personal_header .personalInfo .personalName{
		display: inline-block;
		font-size: .65rem;
	}
	.personal .content{
		height: 70%;
		padding: 5px;
		box-sizing: border-box;
	}
	.personal .back{
		opacity: 0.7;
	}
	.personal .content .row .icon{
		display: inline-block;
		width: 30px;
		height: 30px;
		vertical-align: middle;
	}

	.personal .content .row:not(:first-child) {
		margin-top: 5px;
	}
	.personal .content .row{
		box-shadow: 5px 5px 5px rgba(42,84,166, 0.8) inset,
					-5px -5px 5px rgba(42,84,166, 0.8) inset;
	}

</style>
