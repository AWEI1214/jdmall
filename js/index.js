/*
 * @Author: your name
 * @Date: 2021-05-10 16:55:27
 * @LastEditTime: 2021-05-12 15:00:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\js\index.js
 */
window.addEventListener('load', function () {

    //鼠标移动到focus两侧按钮显示
    var btnl = document.querySelector('.btn_l');
    var btnr = document.querySelector('.btn_r');
    var focus = this.document.querySelector('.focus');
    focus.addEventListener('mouseover', function () {
        btnl.style.display = 'block';
        btnr.style.display = 'block';
    })
    focus.addEventListener('mouseout', function () {
        btnl.style.display = 'none';
        btnr.style.display = 'none';
    })








    //根据图片的数量动态生成小圆圈的个数
    var pont = this.document.querySelector('.pont');
    var imgnum = this.document.querySelector('.iimg').querySelectorAll('li');
    for (var i = 0; i < imgnum.length; i++) {
        var li = this.document.createElement('li');
        pont.appendChild(li);
    }

    //当某个点被点击时将它设为白色，清空其他点的颜色（排他思想），将点的标号和图片跳转关联
    // 点跟随右侧按钮跳转 声明一个公共变量 Pontt
    var Pontt = 0;
    // 点击点跳转图片和点击右按钮跳转图片相关联 声明公共变量rightt
    var rightt = 0;
    var lili = pont.querySelectorAll('li');
    for (let a = 0; a < imgnum.length; a++) {
        lili[0].style.backgroundColor = 'white';

        lili[a].addEventListener('click', function () {

            for (let i = 0; i < imgnum.length; i++) {
                lili[i].style.backgroundColor = 'transparent';

            }
            this.style.backgroundColor = 'white';
            Pontt = a;
            rightt = a;
            animate(ull, -721 * a);
        })
    }

    //复制第一张图片
    var ull = this.document.querySelector('.iimg')
    var first = ull.children[0].cloneNode(true);
    ull.appendChild(first);

    //右侧按钮被点击时跳转图片，跳转到最后一张时跳回第一张 

    flag = true;//节流阀
    btnr.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (rightt == ull.children.length - 1) {
                ull.style.left = 0;
                rightt = 0;
            }
            rightt = rightt + 1;
            animate(ull, -721 * rightt, function () {
                flag = true;
            });

            // 清除所有点的颜色
            for (let i = 0; i < pont.children.length; i++) {
                lili[i].style.backgroundColor = 'transparent';
            }

            // 当右侧按钮被点击 pontt+1
            // pontt++;
            Pontt++;
            if (Pontt == pont.children.length) {
                Pontt = 0;
            }
            // 把第pontt的点设为白色
            lili[Pontt].style.backgroundColor = 'white';
        }

    });

    flag = true;
    btnl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (rightt == 0) {
                ull.style.left = 721 * -(ull.children.length - 1) + 'px';
                rightt = ull.children.length - 1;
            }
            rightt--;
            animate(ull, -721 * rightt, function () {
                flag = true;
            });

            // 清除所有点的颜色
            for (let i = 0; i < pont.children.length; i++) {
                lili[i].style.backgroundColor = 'transparent';
            }

            // 当左侧按钮被点击 pontt-1

            Pontt--;
            if (Pontt < 0) {
                Pontt = 3;
            }
            // 把第pontt的点设为白色
            lili[Pontt].style.backgroundColor = 'white';
        }
    });


    this.setInterval(function () {

        if (rightt == ull.children.length - 1) {
            ull.style.left = 0;
            rightt = 0;
        }
        rightt = rightt + 1;
        animate(ull, -721 * rightt);

        // 清除所有点的颜色
        for (let i = 0; i < pont.children.length; i++) {
            lili[i].style.backgroundColor = 'transparent';
        }

        // 当右侧按钮被点击 pontt+1
        // pontt++;
        Pontt++;
        if (Pontt == pont.children.length) {
            Pontt = 0;
        }
        // 把第pontt的点设为白色
        lili[Pontt].style.backgroundColor = 'white';
    }, 3000);






})
