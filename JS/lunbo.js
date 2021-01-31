        let n = 0 /* 代表当前第几张 */
        let lilist = $(".imgs li")
        let dotwrap = $("#dotwrap")[0]
        let ul = $(".imgs")
        /* 封装函数 */
        function changeImg() {
            ul.animate({
                marginLeft: -(n * 1440)
            })
            dotlist.removeClass("focus");
            dotlist.eq(n).addClass("focus");
        }
        $("#next").click(function () {
            if (n < lilist.length - 1) {
                n++
            } else {
                n = 0
            }
            changeImg()
        })
        $("#prev").click(function () {
            if (n === 0) {
                n = lilist.length - 1
            } else {
                n--
            }
            changeImg()
        })
        /* 自动生成小圆点 */
        for (let i = 0; i < lilist.length; i++) {
            let dot = document.createElement("li")
            if (!i) {
                dot.className = "focus"
            }
            dotwrap.appendChild(dot)
        }
        /* 小圆点点击 */
        let dotlist = $("#dotwrap li")
        dotlist.click(function () {
            n = $(this).index()
            changeImg()
        })
        /* 计时器自动播放 */
        let auto=setInterval(function(){
            $("#next")[0].click()    
        },3000)