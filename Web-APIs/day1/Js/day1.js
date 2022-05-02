window.onload = function() {
    // 1
    // // 修改元素属性
    // var liu = document.querySelector('.liu');
    // var zhang  = document.querySelector('.zhang');
    // var img = document.querySelector('img');
    // liu.onclick = function() {
    //     img.src = 'https://img2.baidu.com/it/u=1192553839,924194853&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=625';
    // }
    // zhang.onclick = function() {
    //     img.src = 'https://img1.baidu.com/it/u=1113054661,680593414&fm=253&fmt=auto&app=120&f=PNG?w=605&h=357';
    // }
    
    // 2
    // // 点击将密码框显示为文本框 并可以查看密码明文
    // var p = document.querySelector('.p');
    // var t = document.querySelector('.t');
    // var flag = true;
    // t.onclick = function() {
    //     // 方法一：
    //     // if (p.type == 'password') {
    //     //     p.type = 'text';
    //     //     t.value = '隐藏密码'
    //     // } else {
    //     //     p.type = 'password';
    //     //     t.value = '显示密码'
    //     // }
        
    //      // 方法二：
    //     if (flag) {
    //         p.type = 'text';
    //         t.value = '隐藏密码';
    //         flag = false;
    //     } else {
    //         p.type = 'password';
    //         t.value = '显示密码';
    //         flag = true;
    //     }
    // }

    // 3 
    // 点击将文本隐藏
    // var big = document.querySelector('.bigbox');
    // var small = document.querySelector('.smallbox');
    // small.onclick = function() {
    //     big.style.display = 'none';
    //     this.style.display = 'none';
    // }

    // 4
    // 输入框案例
    // var input = document.querySelector('input');
    // input.onfocus = function() {
    //     if (this.value == '手机') {
    //         this.value = '';
    //     }
    //     this.style.color = "black";
    // }
    // input.onblur = function() {
    //     if (this.value == '') {
    //         this.value = '手机'
    //     }
    //     this.style.color = '#999';
    // }

    // 5
    // 密码框提示错误格式
    // var input = document.querySelector('input');
    // var box = document.querySelector('div');
    // input.onfocus = function() {
    //     if (this.value == '请输入密码') {
    //         this.value = '';
    //     }
    //     box.innerHTML = '请输入6-16位的密码';
    // }
    // input.onblur = function() {
    //     if (this.value == '') {
    //         this.value = '请输入密码'
    //     } else {
    //         if (this.value.length < 6) {
    //             box.innerHTML = '密码太短，最少6个字符';
    //         } else if (this.value.length > 16) {
    //             box.innerHTML = '密码太长，最多16个字符';
    //         } else {
    //             box.innerHTML = '密码符合';
    //         }
    //     }
    // }

    // 6
    // 开关灯
    // var input = document.querySelector('input');
    // var flag = true;
    // input.onclick = function() {
    //     if (flag) {
    //         document.body.style.backgroundColor = 'black';
    //         flag = false;
    //     } else{
    //         document.body.style.backgroundColor = '';
    //         flag = true;
    //     }       
    // }

}