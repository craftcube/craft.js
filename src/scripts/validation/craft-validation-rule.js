(function() {
  angular
    .module('validation.rule', ['validation'])
    .config(['$validationProvider', function($validationProvider) {
      var expression = {
          nothing: function () {
              return true;
          },
        required: function(value) {
          return !!value;
        },
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        number: /^\d+$/,
        minlength: function(value, scope, element, attrs, param) {
          return value && value.length >= param;
        },
        maxlength: function(value, scope, element, attrs, param) {
          return !value || value.length <= param;
        }
      };

      var defaultMsg = {
          nothing: {
              error: 'Nothing happend!!',
              success: '&nbsp;'
          },
        required: {
          error: '此项必填!!',
          success: '&nbsp;'
        },
        url: {
          error: 'url格式有误',
          success: '&nbsp;'
        },
        email: {
          error: 'email格式有误',
          success: '&nbsp;'
        },
        number: {
          error: '此项应为数字',
          success: '&nbsp;'
        },
        minlength: {
          error: '未达最小长度',
          success: '&nbsp;'
        },
        maxlength: {
          error: '超过最大长度',
          success: '&nbsp;'
        }
      };
      $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
    }]);
}).call(this);
