<template>
	<div class="sign">
		<v-header v-bind:headTitle="title"></v-header>
		<div class="content" v-on:address-pos="test()">
      <v-map v-bind:mapId="mapId" @address-pos="test"></v-map>
    </div>
		<div class="footer">
      <div class="footWrapper">
        <div class="signInBtn">签到</div>
        <div class="slidingStart">
          <img src="/static/imgs/HandMove.png" class="slidingImg jumpAnimationT">
        </div>
        <div class="signOffBtn">签退</div>
      </div>
    </div>
	</div>
</template>
<script>
  import header from '@/components/header/header.vue';
  import map from '@/components/map/map.vue';
  export default{
    data () {
      return {
        title: '签到管理',
        mapId: 'signMap'
      };
    },
    components: {
      'v-header': header,
      'v-map': map
    },
    methods: {
      test: function (position) {
        alert(JSON.stringify(position));
      }
    },
    mounted: function () {
      var istouch = false;
      var touchX = null;
      var self = this;
      this.$el.querySelector('.slidingImg').addEventListener('touchstart', function (e) {
        istouch = true;
        touchX = e.touches[0].pageX;
      });
      this.$el.querySelector('.slidingImg').addEventListener('touchmove', function (e) {
        if (istouch) {
          this.style.transform += 'translate3D(' + (e.touches[0].pageX - touchX) + 'px' + ', 0, 0) ';
          touchX = e.touches[0].pageX;
        }
      });
      this.$el.querySelector('.slidingImg').addEventListener('touchend', function (e) {
        this.style.transition = 'transform .5';
        this.style.transform = 'translate3D(' + (0) + 'px' + ', 0, 0)';
        // self.MessageBox.alert();
        if (touchX > 275) {
          self.MessageBox.alert('签退成功');
        }
        if (touchX < 103) {
          self.MessageBox.alert('签到成功');
        }
        istouch = false;
      });
    }
  };
</script>
<style>
	.sign{
    position: relative;
    height: 100%;
		font-size: .5rem;
    overflow: hidden;
	}
  .sign .content{
    box-sizing: border;
    height: 50%;
  }
  .sign .footer{
    position: absolute;
    width: 100%;
    height: 42%;
    left: 0;
    bottom: 0;
    background-color: lightblue;
  }
  .sign .footer:before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    content: "";
    border-bottom: 1px solid gray;
    transform: scaleY(0.5);
  }
  .sign .footer .footWrapper div{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: gold;
    text-align: center;
    font-size: .5rem;
  }

  .sign .footer .footWrapper div:before{
    display: inline-block;
    content: "";
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .sign .footer .footWrapper{
    position: absolute;
    width: 290px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0;
  }
  .sign .footer .footWrapper .signInBtn{

  }
  .sign .footer .footWrapper .slidingStart{
    width: 90px;
    height: 90px;
    margin: 0 50px 0;
    box-shadow: 5px 5px 5px  lightyellow,
                -5px -5px 5px  lightyellow,
                -5px 5px 5px  lightyellow,
                5px -5px 5px  lightyellow;
  }

  .sign .footer .footWrapper .slidingStart .slidingImg{
    display: inline-block;
    vertical-align: middle;
  }
  .sign .footer .footWrapper .signOffBtn{
  }

  /*.sign .footer .footWrapper .slidingStart .jumpAnimationT{
    -webkit-animation-name: jumpAnimationm;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
  }
  @-webkit-keyframes jumpAnimationm{
    0%{
      transform: translate3d(0, 0 ,0);
    }
    50%{
      transform: translate3d(0, 0, 20px);
    }
  }*/
</style>
