/** [install 本地存储工具] */
export const localStorageUtil = function (Vue, options) {
  Vue.prototype.storageUtil = {
    localStorage: window.localStorage,
    setValue: function (key, value) {
      this.localStorage.setItem(key, value);
    },
    getValue: function (key) {
      return this.localStorage.getItem(key);
    },
    setObject: function (key, value) {
      this.localStorage.setItem(key, JSON.stringify(value));
    },
    getObject: function (key) {
      return JSON.parse(this.localStorage.getItem(key));
    }
  };
};
