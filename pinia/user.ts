import { defineStore } from "pinia";

export default defineStore("user", {
  state() {
    return {
      userName: 'hello world',
    };
  },
  getters: {},
  actions: {
    setUserName(userName: string) {
      this.userName = userName;
    },
  }
});
