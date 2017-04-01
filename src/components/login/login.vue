<template>
	<div class="login">
		<!-- <v-header v-bind:headTitle="loginTitle"></v-header> -->
		<div class="form">
			<div class="logo">
				<img class="reflect" src="../../imgs/logon.png" height="150" width="100%">
			</div>
			<div class="row">
				<div class="label-col"><label for="username">用户名</label></div>
				<div class="input-col"><input type="text" name="username" id="username" v-model="user.username" placeholder="请输入用户名"></div>
			</div>
			<div class="row">
				<div class="label-col"><label for="username" style="letter-spacing: 0.5rem;">密码</label></div>
				<div class="input-col"><input type="password" name="password" id="password" v-model="user.password" placeholder="请输入密码"></div>
			</div>
			<a v-on:click="login(user)" class="login_btn">登录</a>
		</div>
	</div>
</template>

<script>
  // import header from '@/components/header/header.vue';

  export default{
    data () {
      return {
        user: {},
        loginTitle: '登录'
      };
    },
    components: {
      // 'v-header': header
    },
    methods: {
      login: function (user) {
        console.log(this.storageUtil);
        this.$router.push({name: 'menu', params: user});
      }
    }
  };

</script>

<style type="text/css">
	.login{
		height: 100%;
		/*background-color: rgba(214,222,224,1);*/
		font-size: 0.5rem;
	}
	.login .form .row{
		display: flex;
		/*padding: 10px;*/
		/*justify-content: ;*/
		border: 1px solid #b3afaf;
		border-left: none;
	}

	.login .form .row div{
		text-align: left;
	}

	.login .form .row .label-col{
		flex: 1;
		padding: 10px;
	}

	.login .form .row .input-col{
		flex: 3;
		padding: 5px;
	}

	.login .form .login_btn{
		display: block;
		width: 90%;
		/*height: 40px;*/
		margin: 20px auto;
		border: 1px solid #446d88;
		background: #58a linear-gradient(#77a0bb, #58a);
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		text-decoration: none;
		padding: .3rem .4rem .35rem;
		border-radius: 0.5rem;
		text-shadow: 0 -.05rem .25rem #335166;
		font-size: 0.5rem;
		box-shadow: 0 .05rem .25rem gray;
		/*outline-style: none;*/
		/*outline-width: 0;*/
	}
	.login .form .login_btn:hover{
		background: #58a linear-gradient(#72abdb, #58a);
	}
	.login .form .login_btn:active{
		background: #58a linear-gradient(#72abdb, #58a);
	}
	.login input {
		height: 80%;
		width: 100%;
		border: none;
		outline-style: none;
	}

	.login .form>div:nth-child(2){
		border-bottom: none;
	}

	@-webkit-keyframes rotateLogin{
		0% {
			-webkit-transform: rotateZ(0deg);
		}
		50% {
			-webkit-transform: rotateZ(180deg);
		}
		100%{
			-webkit-transform: rotateZ(360deg);
		}
	}

	.rotateAnimation{
		 /* 定义3D空间 */
	    -webkit-transform-style: preserve-3d;
		-webkit-animation: rotateLogin;
		-webkit-animation-duration: 10s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
	}
	/*倒影*/
	.reflect{
		-webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.1, transparent), to(rgba(255, 255, 255, 0.25)));
	}

	.logo{
		height: 8rem;
	}
</style>
