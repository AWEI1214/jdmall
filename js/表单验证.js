/*
 * @Author: your name
 * @Date: 2021-05-23 10:28:26
 * @LastEditTime: 2021-05-23 15:09:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\js\表单验证.js
 */
window.onload = function () {
    var regsj = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var sj = document.querySelector('#sj');
    sj.onblur = function () {
        if (regsj.test(this.value)) {
            // console.log('正确');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ' <i class="success_icon"></i>手机号输入正确';
        } else {
            // console.log('错误');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error_icon"></i> 手机号码格式不正确，请从新输入';
        }
    }

    var regdx = /^\d{6}$/;
    var dx = document.querySelector('#dx');
    dx.onblur = function () {
        if (regdx.test(this.value)) {
            // console.log('正确');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>验证码正确';
        } else {
            // console.log('错误');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 验证码错误';
        }

    }

    var regpw = /^[a-zA-Z]\w{5,17}$/;
    var pw = document.querySelector('#pw');
    pw.onblur = function () {
        if (regpw.test(this.value)) {
            // console.log('正确');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>密码格式正确';
        } else {
            // console.log('错误');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码格式错误';
        }
    }

    var rpw = document.querySelector('.rpw');
    rpw.onblur = function () {
        if (this.value === '') {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不同请重新输入';

        } else {
            if (this.value === pw.value) {
                // console.log('正确');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>';
            } else {
                // console.log('错误');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不同请重新输入';
            }
        }

    }


}