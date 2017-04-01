<template>
	<div class="baidu_map" v-bind:id="mapId">
	</div>
</template>
<script>
  import BMap from 'BMap';
  export default{
    props: ['mapId'],
    data () {
      return {
        map: null
      };
    },
    methods: {
    },
    mounted: function () {
      var self = this;
      this.loadMask.showMask();
      this.$nextTick(function () {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
        // 获取位置信息成功
        function (position) {
          if (this.getStatus() === 0) {
            // var point = new BMap.Point(116.404, 39.915);
            self.map = self.mapService.ctMap(self.$el.id, position.point);
            console.log(position);
            self.$emit('address-pos', position);
          } else {
            console.log('无法获取位置信息，请重试！');
          }
          self.loadMask.removeMask();
        },
          {
            // 指示浏览器获取高精度的位置，默认为false
            enableHighAccuracy: true,
            // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
            // timeout: 5000,
            // 最长有效期(30S)，在重复获取地理位置时，此参数指定多久再次获取位置
            maximumAge: 30 * 1000
          });
      });
    }
  };
</script>
<style>
	.baidu_map{
		width: 100%;
		height: 100%;
	}
	/*清除百度地图logo*/
	.anchorBL{
		display:none;
	}
</style>

