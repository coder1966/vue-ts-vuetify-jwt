<template>
  <div class="login">
    <v-container class="loginOverlay">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8>
          <v-card>
            <v-card-text class="pt-4">
              <v-form ref="form">
                <v-text-field
                  label="账号"
                  v-model="loginName"
                  required
                  append-icon="fa-info-circle"
                ></v-text-field>
                <v-text-field
                  label="密码"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  :type="show1 ? 'text' : 'password'"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-row align="center" justify="space-around">
              <v-btn depressed @click="submit" class="green white--text"
                >登录</v-btn
              >
              <v-btn
                depressed
                @click="isShowWxSnackbar = true"
                class="green white--text"
                >微信登录</v-btn
              >
              <v-snackbar v-model="isShowWxSnackbar">
                微信登录需要绑定微信公众号后台。暂时无法使用。
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="isShowWxSnackbar = false"
                  >
                    关闭
                  </v-btn>
                </template>
              </v-snackbar>

              <v-btn depressed to="/logon" class="green white--text"
                >去注册</v-btn
              >
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="snackbar" :vertical="vertical">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
// import { login } from '@/api/user';
// import { setToken, setUserName, getAvatarTitle } from '@/utils/auth';
// import { md5 } from '@/utils/md5';
// window.axios = require('axios');
import { sha256 } from 'js-sha256';
import { login } from '@/api/user';
export default {
  data: () => ({
    snackbar: false, // 登录状态提醒
    isShowWxSnackbar: false, // 微信绑定提醒
    message: '',
    vertical: true,
    show1: false,
    loginName: '',
    password: '',
  }),
  methods: {
    submit(): void {
      // console.log('VUE_APP_BASE_API=' + process.env.VUE_APP_BASE_API);
      // console.log(sha256('1233445'));
      let that = this as any;
      login({
        password: sha256(this.password),
        loginName: this.loginName,
      }).then((res: any) => {
        if (res.status == 1) {
          this.showMsg('登录成功');
          console.log('res.data.token === ', res.data.token);
          var that = this as any;
          setTimeout(function () {
            that.$router.push('/login');
          }, 2000);
        } else {
          // this.showMsg(res);
          this.showMsg(res.message);
        }
      });

      // login({ password: md5(this.password), loginName: this.username }).then(
      //   (res) => {
      //     if (res.code == 200) {
      //       this.showMsg('登录成功');
      //       setToken(res.data.token);
      //       setUserName(res.data.loginName);
      //       this.$store.commit('setUserName', res.data.loginName);
      //       this.$store.commit('setAvatarTitle', getAvatarTitle());
      //       var that = this;
      //       setTimeout(function () {
      //         that.$router.push({ path: '/', params: { loginName: 'test' } });
      //       }, '1000');
      //     } else {
      //       this.showMsg(res.msg);
      //     }
      //   }
      // );
    },
    showMsg(msg: string) {
      this.message = msg;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-color: #5dd5c8;
}

h4 {
  font-size: 1em !important;
  padding: 1em;
  color: black;
}
.v-card {
  text-align: center;
  margin: 1em;
}
.v-card__title {
  justify-content: center;
}
.v-btn {
  width: 25%;
}
.v-card {
  padding: 1em;
}
.green {
  margin-bottom: 1em;
}
.create {
  text-transform: capitalize;
  margin-bottom: 1em;
}
</style>
