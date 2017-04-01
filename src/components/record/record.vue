<template>
	<div class="record">
		<v-header v-bind:headTitle="title"></v-header>
		<div class="content">
			<!-- <v-scroller delegate-id="myScroller"
            :on-refresh="refresh"
            :on-infinite="loadMore"> -->
				<div class="row" v-for="record in records">
					<h3><label>考勤员工:</label><span>{{record.name}}</span></h3>
					<p><label>考勤项目:</label><span>{{record.project}}</span></p>
					<p><label>考勤地址:</label><span>{{record.address}}</span></p>
					<p><label>签到来源:</label><span>{{record.signsource}}</span></p>
					<p><label>签到时间:</label><span>{{record.signtime}}</span></p>
				</div>
			<!-- </v-scroller> -->
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
  import header from '@/components/header/header.vue';
  // import content from '@/components/content/content.vue';
  import footer from '@/components/footer/footer.vue';
  // import loader from '@/components/load/load.vue';
  // import Scroller from 'vue-scroller';
  export default{
    data () {
      return {
        title: '考勤数据',
        link: [{path: '/menu'}, {path: '/personal'}],
        records: []
      };
    },
    components: {
      'v-header': header,
      // 'v-content': content,
      'v-footer': footer
      // ,
      // 'v-scroller': Scroller
    },
    mounted: function () {
      var self = this;
      this.loadMask.showMask();
      // this.$http.get('http://10.7.17.92:3000/GetRecords').then(function (result) {
      //   self.records = result.data;
      //   self.loadMask.removeMask();
      // });
      this.$http.post('http://hrt.changhong.com:2013/EIAP.HR.UI/AttendanceSummary/GetAttendanceMonthSummary/', {
        param: {EmployeeCode: '', AttendanceMonth: '201703', CorporationCode: 'Q000', rows: 20, page: 1},
        isPersonal: false
      }).then(function (result) {
        self.records = result.data;
        self.loadMask.removeMask();
      });
    }
  };
</script>
<style type="text/css">
	.record{
		font-size: .5rem;
		height: 100%;
	}
	.record .content{
		-webkit-box-sizing: border-box;
		height: 100%;
		margin-top: -60px;
		padding: 60px 0;
		overflow: auto;
	}
	.record .content .row{
		padding: 10px;
		border-top: 1px solid gray;
	}
	.record .content .row:nth-child(1){
		border-top: none;
	}

/*	.record .content .row:after{
		display: block;
		width: 100%;
		height: 0;
		border-bottom: 1px solid gray;
		padding-top: 5px;
		transform: scaleY(0.5);
		content: "";
		z-index: -11;
	}*/
</style>
