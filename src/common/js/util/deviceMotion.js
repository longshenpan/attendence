/** [loadMask 手机摇一摇] */
export const Shake = function (Vue, options) {
  Vue.prototype.MessageBox = {
    body: document.body,
    alert: function (message, title) {
      this.createAlert(message, title);
      this.body.appendChild(this.MessageMaskNode);
    },
    removeAlert: function () {
      this.body.removeChild(this.MessageMaskNode);
    },
    createAlert: function (message, title) {
      var self = this;
      this.MessageMaskNode = document.createElement('div');
      var container = this.MessageMaskNode.cloneNode();
      var header = this.MessageMaskNode.cloneNode();
      var content = this.MessageMaskNode.cloneNode();
      var foot = this.MessageMaskNode.cloneNode();
      var btn = document.createElement('a');
      btn.onclick = function () {
        self.removeAlert();
      };
      header.innerHTML = '提示' || title;
      btn.innerHTML = '确定';
      content.innerHTML = message;
      this.MessageMaskNode.className = 'load';
      container.classList.add('mb_container');
      header.classList.add('mb_header');
      content.classList.add('mb_content');
      foot.classList.add('mb_footer');
      btn.classList.add('confirm_btn');
      btn.classList.add('mb_blue');
      foot.appendChild(btn);
      container.appendChild(header);
      container.appendChild(content);
      container.appendChild(foot);
      this.MessageMaskNode.appendChild(container);
    },
    alertClick: function () {
      console.log('click');
    }
  };
};
