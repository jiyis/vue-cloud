<template>
<div class="bg">
  <div class="container">
      <div class="content" v-html="content">
    </div>
  </div>
</div>
</template>
<script>
import left from './Left';
import config from '../config/config.json';

export default {
  name: 'pageDetail',
  data() {
    return {
      content: '',
    };
  },
  components: {
    left,
  },
  created() {
    this.$axios.get(`${config.apiDomain}/pages/${this.$route.params.category}`).then((response) => {
      this.content = response.data.content;
    }, (error) => {
      this.$Message.error(error.toString());
    });
  },
};
</script>
<style scoped lang="scss">
.bg {
  width: 100%;
  background:#f8f8f8;
  overflow: hidden;
}
  .container {
    width: 1200px;
    margin: 30px auto 0;
    .content{
      padding: 20px;
      line-height: 35px;
      text-indent: 30px;
    }
  }
</style>
