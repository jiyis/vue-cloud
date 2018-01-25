<template>
  <div class="login-form">
			<div class="top-login">
				<span><img src="../assets/images/whitelogo.png" alt=""/></span>
			</div>
			<div class="login-top">
			<form>
				<div class="login-ic">
					<i ></i>
					<input type="text" v-model="userInfo.name" placeholder="用户名"  value="用户名" onFocus="this.value = '';" />
					<div class="clear"> </div>
				</div>
				<div class="login-ic">
					<i class="icon"></i>
					<input type="password" v-model="userInfo.password" placeholder="密码"  value="" onFocus="this.value = '';"/>
					<div class="clear"> </div>
				</div>
			
				<div class="log-bwn">
					<button type="button" value="登录" @click="doLogin">登录</button>
				</div>
				</form>
			</div>
			<p class="copy">Copyright © 2018 上海STEM云中心</p>
  </div>		
</template>

<script>
import '../assets/css/login.css';
import config from '../config/config.json';

export default {
  name: 'login',
  data() {
    return {
      userInfo: {
        name: '用户名',
        password: '',
      },
      show: false,
    };
  },
  methods: {
    doLogin() {
      if (this.name === '') {
        this.$Message.error('用户名不能为空');
        return false;
      }
      if (this.password === '') {
        this.$Message.error('密码名不能为空');
        return false;
      }
      this.$axios.post(`${config.apiDomain}/auth/login`, JSON.stringify(this.userInfo), { headers: { 'Content-Type': 'application/json' } })
        .then((res) => {
          localStorage.name = this.userInfo.name;
          localStorage.token_expire = res.data.expire;
          localStorage.token = res.data.token;
          this.$Message.info('登录成功');
          this.$router.push({ path: '/' });
        })
        .catch((err) => {
          this.$Message.error(err.toString());
        });
      return true;
    },
  },
};
</script>
