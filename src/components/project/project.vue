<template>
	<div class="project">
		<v-header v-bind:headTitle="title"></v-header>
		<div class="content">
			<div class="row" v-for="project in projects">
				<p class="projectInfo">{{project.name}}</p>
				<div class="opt">anniu</div>
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
        title: '签到项目',
        projects: [{name: '中海油深化项目'}, {name: '移动考勤项目'}, {name: '富士康研发项目'}]
      };
    },
    components: {
      'v-header': header,
      'v-footer': footer
    },
    mounted: function () {
    }
  };
</script>
<style>
	.project{
		height: 100%;
		font-size: .5rem;
	}
	.project .content{
		-webkit-box-sizing: border-box;
		height: 100%;
		margin-top: -60px;
		padding: 60px 0;
		overflow: auto;
	}
	.project .content .row{
		/*width: 100%;*/
		position: relative;
		overflow: hidden;
	}
	.project .content .row .opt{
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		z-index: -1;
	}

	.project .content .row{
		padding: 10px;
		border-top: 1px solid gray;
		background-color: #F5F5F5;
	}
	.project .content .row:last-child{
		border-bottom: 1px solid gray;
	}
</style>

