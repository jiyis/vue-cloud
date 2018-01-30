<template>
<div class="bg">
    <div class="container">
        <Form :model="user" :label-width="100" style="width: 300px;" class="font">
            <FormItem label="用户名" :label-width="100">
                <Input v-model="user.name" readonly placeholder=""></Input>
            </FormItem>
            <FormItem class="font" label="密码" :label-width="100">
                <Input v-model="user.password" placeholder=""></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="update">保存</Button>
            </FormItem>
            <FormItem label="已购课程" style="width: 900px;font-size: 16px;">
                <Tag v-for="(item,key) in user.course" :key="key" checkable color="green">{{ item.name }}</Tag>
            </FormItem>
        </Form>
    </div>
</div>
</template>

<script>
import config from '../config/config.json';

export default {
  name: 'center',
  data() {
    return {
      user: {
        name: '',
        password: '',
        course: {},
      },
    };
  },
  created() {
    this.$axios.get(`${config.apiDomain}/auth/center`).then((response) => {
      if (!response.data.status) {
        this.$router.push('login');
        localStorage.removeItem('name');
        localStorage.removeItem('token_expire');
        localStorage.removeItem('token');
      }
      this.user = response.data.user;
    }, (error) => {
      this.$Message.error(error.toString());
    });
  },
  methods: {
    update() {
      if (this.user.password) {
        this.$axios.patch(`${config.apiDomain}/user`).then(() => {
        }, (error) => {
          this.$Message.error(error.toString());
        });
      }
    },
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
