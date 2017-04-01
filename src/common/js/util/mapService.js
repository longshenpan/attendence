/** [loadMask 加载遮罩] */
import BMap from 'BMap';
export const mapService = function (Vue, options) {
  Vue.prototype.mapService = {
    _map: null,
    getCurrentPosition: function () {
      return Promise(function (resolve, reject) {
        // var gc = new BMap.Geocoder();
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
        // 获取位置信息成功
        function (position) {
          if (this.getStatus() === 0) {
            resolve(position);
          } else {
            reject('无法获取位置信息，请重试！');
          }
        },
          {
            // 指示浏览器获取高精度的位置，默认为false
            enableHighAccuracy: true,
            // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
            // timeout: 5000,
            // 最长有效期(30S)，在重复获取地理位置时，此参数指定多久再次获取位置
            maximumAge: 30 * 1000
          });
        // gc.getLocation()
      });
    },
    resetShowPosition: function (map, point) {
      map.clearOverlays();
      map.setCenter(point); // 显示中心new BMap.Point(113.402364,23.056676)
      this.addMarker(map, point);
      // map.enableScrollWheelZoom(); // 启用滚轮缩放
    },
    ctMap: function (mapContaierId, point) {
      // 百度地图API
      this._map = new BMap.Map(mapContaierId, {minZoom: 15}); // 初始化地图，规定最小缩放
      this._map.centerAndZoom(point, 16); // 显示中心new BMap.Point(113.402364,23.056676)
      this._map.enableScrollWheelZoom(); // 启用滚轮缩放
      // var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});// 右上角平移和缩放按钮
      // _map.addControl(top_right_navigation);
      // var arrType = new Array();
      // arrType.push(BMAP_NORMAL_MAP);
      // arrType.push(BMAP_SATELLITE_MAP);
      // _map.addControl(new BMap.MapTypeControl({
      // type: BMAP_NORMAL_MAP, mapTypes: arrType
      // })); // 添加地图类型控件
      this.addMarker(this._map, point);
      return this._map;
    },
    addMarker: function (map, point) {
      // var myIcon = new BMap.Icon("position.png", new BMap.Size(23, 50), {offset: new BMap.Size(10, 25)});
      // 创建标注对象并添加到地图
      var marker = new BMap.Marker(point);//, {icon: myIcon}
      map.addOverlay(marker);
    }
  };
};
