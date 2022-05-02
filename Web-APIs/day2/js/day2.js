window.onload = function() {
    // // 一. 排他思想
    // var btns = document.querySelectorAll('button');
    // for (var i = 0; i < btns.length; i++) {      
    //     btns[i].onclick = function () {
    //         for (var i = 0; i < btns.length; i++) {
    //             btns[i].style.color = '';
    //         }
    //         this.style.color = 'pink';
    //         console.log('a');
    //     }
    // }

    // // 二. 复选框案例
    // // a. 全选和取消全选做法：让下面所有复选框的 checked 属性（选中状态）跟随全选按钮即可
    // var j_cbAll = document.querySelector('#j_cbAll');
    // var j_tb = document.querySelector('#j_tb').querySelectorAll('input');
    // // 注册事件
    // j_cbAll.onclick = function() {
    //     // this.checked 它可以得到当前复选框的选中状态，如果是true，就是选中，若未选中则是false
    //     // console.log(this.checked);
    //     for (var i = 0; i < j_tb.length; i++) {
    //         j_tb[i].checked = this.checked;
    //     }
    // }
    // // b. 下面全部选中，上面才能选中的做法：给下面所有复选框绑定点击事件，每次点击都要判断是否全部选中
    // for (var i = 0; i < j_tb.length; i++) {
    //     j_tb[i].onclick = function() {
    //         // flag控制全选按钮是否选中
    //         var flag = true;
    //         // 每次点击下面的复选框都要循环检查3个小按钮是否全部被选中
    //         for (var i = 0; i < j_tb.length ; i++) {
    //             if (!j_tb[i].checked) {
    //                 flag = false; 
    //                 break; // 退出for循环 这样可以提高效率 只要有一个没有选中 剩下的就无需循环判断了
    //             }
    //         }
    //         j_cbAll.checked = flag;
    //     }
    // }

    // // 三. 获取元素
    // var div = document.querySelector('div');
    // // 1. 获取元素的属性值
    // // (1) element.属性
    // console.log(div.className); // demo
    // // (2) element.getAttribute('属性')
    // console.log(div.getAttribute('class')); // demo
    // // 二者主要区别在于（1）获取元素本身自带的属性 （2）获取有我们程序员添加的属性

    // // 2. 设置属性值
    // // (1) element.属性 = '属性值'
    // div.id = 'demos';
    // console.log(div.id); // demos
    // // (2) element.setAttribute('属性','属性值')
    // div.setAttribute('id','demo');
    // console.log(div.getAttribute('id')); // demo
    // // 二者主要区别在于（1）获取元素本身自带的属性 （2）获取有我们程序员添加的属性

    // // 3. 移除属性 element.removeAttribute('属性')
    // div.removeAttribute('id');

    // // 四. tab栏切换（重点案例）
    // var lis = document.querySelector('.box').querySelectorAll('li');
    // var boxs = document.querySelector('.boxs').querySelectorAll('div');
    
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].index = [i];
    //     boxs[i].index = [i];
    //     lis[i].onclick = function() {
    //         // console.log(this.index);
    //         for (var i = 0; i < lis.length; i++) {
    //             boxs[i].style.display = 'none';
    //         }
    //         boxs[this.index].style.display = 'inline-block';
    //     }
    // }


}