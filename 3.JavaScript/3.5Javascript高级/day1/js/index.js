    var that;
    class Tab {
        constructor(id) {
            // 获取元素
            that = this;
            this.main = document.querySelector(id);
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.add = this.main.querySelector('.tabadd');
            this.ul = this.main.querySelector('.firstnav ul:first-child');
            this.fsection = this.main.querySelector('.tabscon');
            this.closes = this.main.querySelectorAll('.firstnav .iconfont');
            this.init();
        }
        init() {
            // init 初始化操作让相关的元素绑定事件
            this.add.addEventListener('click',this.addTab);
            for(var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].addEventListener('click',this.toggleTab);
            }
            for(var i = 0; i < this.closes.length; i++) {
                this.closes[i].index = i;
                this.closes[i].addEventListener('click',this.removeTab);
            }
        }
        // 1.切换 tab栏
        toggleTab(e) {
            // for(var i = 0; i < that.lis.length; i++) {
            //     that.lis[i].removeAttribute('class');
            //     that.sections[i].removeAttribute('class');
            // }
            // 添加了内容，需要重新初始化
            new Tab('#tab');
            that.clearClass(that.lis);
            that.clearClass(that.sections);
            this.className = 'liactive';
            if(that.sections[this.index]) {
                that.sections[this.index].className = 'conactive';
            }
        }
        // 删除tag的class属性
        clearClass(tag) {
            for(var i = 0; i < that.lis.length; i++) {
                tag[i].removeAttribute('class');
            }
        }
        // 2.添加 tab栏和内容
        addTab() {
            // 添加了内容，需要重新初始化
            new Tab('#tab');
            that.clearClass(that.lis);
            that.clearClass(that.sections);
            // (1) 创建li元素和section元素
            var li = '<li class="liactive"><span>新测试</span><span class="iconfont icon-guanbi"></span></li>'
            var section = '<section class="conactive">新测试</section>';
            // (2) 把这两个元素添加到对应的父元素中
            that.ul.insertAdjacentHTML('beforeend',li);
            that.fsection.insertAdjacentHTML('beforeend',section);
            new Tab('#tab');
        }
        // 3.点击×号，可以删除当前的tab栏和内容项
        removeTab(e) {
            new Tab('#tab');
            that.clearClass(that.lis);
            that.clearClass(that.sections);
            that.lis[this.index].remove();
            that.sections[this.index].remove();
            new Tab('#tab');
            if (this.index == 0) {
                if(that.sections[this.index]) {
                    that.sections[this.index].className = 'conactive';
                    that.lis[this.index].className = 'liactive';
                }
            }else {
                that.lis[this.index - 1].className = 'liactive';
                that.sections[this.index - 1].className = 'conactive';
            }
            if(e && e.stopPropagation) {
                e.stopPropagation(); // stop 停止 propagation 传播
            } else {
                window.e.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
            }
        }
        // 4.双击 tab栏和内容项可编辑
        editTab() {

        }
    }
    new Tab('#tab');