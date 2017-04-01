<template>
	<div class="v_content">
		<slot></slot>
	</div>
</template>
<script>
  export default{
  };
</script>
<style>
	.v_content{
		-webkit-box-sizing: border-box;
		height: 100%;
		margin-top: -60px;
		padding: 60px 0;
		overflow: auto;
	}
</style>
