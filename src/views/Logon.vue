
<template>
  <div class="logon">
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
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
                <v-text-field
                  label="确认密码"
                  v-model="rePassword"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-row align="center" justify="space-around">
              <v-btn depressed @click="submit" class="green white--text"
                >注册</v-btn
              >

              <v-btn depressed to="/login" class="green white--text"
                >去登录</v-btn
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
import Vue from 'vue';
import { logon } from '@/api/user';
import { sha256 } from 'js-sha256';

// import { md5 } from '@/utils/md5';
// import SubmitLogon from '@/utils/submitLogon';
export default Vue.extend({
  data: () => ({
    snackbar: false,
    message: '',
    vertical: true,
    loginName: '',
    password: '',
    rePassword: '',
    show1: false,
  }),
  methods: {
    submit() {
      let that = this as any;
      console.log('点击了注册按钮');
      // SubmitLogon.submitLogon(this);
      if (that.loginName === '') {
        this.showMsg('账号不能为空。');
        return;
      }
      if (this.password !== this.rePassword) {
        this.showMsg('两次密码不一致');
        return;
      }
      logon({
        password: sha256(this.password),
        loginName: this.loginName,
      }).then((res: any) => {
        if (res.status == 1) {
          this.showMsg('注册成功');
          var that = this as any;
          setTimeout(function () {
            that.$router.push('/login');
          }, 2000);
        } else {
          // this.showMsg(res);
          this.showMsg(res.message);
        }
      });
    },
    showMsg(msg: string) {
      this.message = msg;
      this.snackbar = true;
    },
  },
});
</script>

<style scoped>
.logon {
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
.link-color {
  color: #d38841;
  text-decoration: none;
}
.v-card {
  padding: 1em;
}
.v-card__actions {
  display: block;
}
.green {
  margin-bottom: 1em;
}
.create {
  text-transform: capitalize;
  margin-bottom: 1em;
}
.row {
  font-size: 0.7em;
  justify-content: center;
}
.row-item {
  padding: 0 0.7em;
}
.border {
  border-right: 1px solid black;
}
</style>
