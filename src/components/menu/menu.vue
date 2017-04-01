<template>
	<div class="menu">
		<v-header v-bind:headTitle="title" v-bind:isHideBack="isHideBack"></v-header>
		<div class="content">
			<div class="row">
				<div class="col" v-for="menu in menus">
					<router-link class="col-item" v-bind:to="menu.toLink" tag="a">
						<img  v-bind:src="menu.imgSrc" class="rotateAnimation" />
						<div class="caption">{{menu.caption}}</div>
					</router-link>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
  import header from '@/components/header/header.vue';
  import footer from '@/components/footer/footer.vue';
  export default{
    data () {
      return {
        title: '我的考勤',
        isHideBack: true,
        menus: [{
          imgSrc: '/static/imgs/Location.png',
          caption: '签到管理',
          toLink: {path: '/sign'}
        }, {
          imgSrc: '/static/imgs/record.png',
          caption: '签到记录',
          toLink: {path: '/record'}
        }, {
          imgSrc: '/static/imgs/project.png',
          caption: '考勤项目',
          toLink: {path: '/project'}
        }]
      };
    },
    components: {
      'v-header': header,
      'v-footer': footer
    },
    methods: {
    }
  };
</script>
<style>
	.menu{
		height: 100%;
		font-size: .5rem;
	}
	.menu .content{
		-webkit-box-sizing: border-box;
		height: 100%;
		margin-top: -60px;
		padding: 60px 0;
		overflow: auto;
	}
	.menu .content .row{
		display: flex;
		margin: 20px 0 0;
	}
	.menu .content .row .col{
		flex: 1;
		text-align: center;
		font-size: 0.75em;
	}
	.menu .content .row .col .col-item{
		display: inline-block;
		box-shadow: 1px 1px 5px gray;
		border-radius: 5px;
		text-decoration: none;
	}

	.menu .content .row .col .caption{
		padding: 0 0 5px;
		color: black;
		text-shadow: -1px -1px 10px gray;
	}

	@-webkit-keyframes rotateLogin{
		0% {
			-webkit-transform: rotateY(0deg);
		}
		50% {
			-webkit-transform: rotateY(180deg);
		}
		100%{
			-webkit-transform: rotateY(360deg);
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
</style>
