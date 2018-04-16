var allButtons = $('#buttons > span')           //获取所有span标签
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {         //获取每一个span点击信息
        var index = $(x.currentTarget).index()          //获取点击的是第几个span
        var px = index * -600                           //除了第一个，之后的每一个span要位移的距离
        $(images).css({                                 //给images添加CSS
            transform: 'translateX(' + px + 'px)'
        })
        n = index                                       //将被点击的那个span赋予n
        activeButton(allButtons.eq(n)) //siblings接受的是选择器所以有. removeClass接受的是类名所以没有
    })
}

var n = 0
var allImages = $('#images > img')
var size = allImages.length
playSlide(n % size)

var timeID = sitTimer()


$('.window').on('mouseenter', function () {              //如果鼠标停留在window区域，就砸了上面的闹钟
    window.clearInterval(timeID)
})
$('.window').on('mouseleave', function () {              //重新创造一个计时器
    timeID = sitTimer()
})

function sitTimer() {
    return setInterval(() => {
        n += 1                    //重复调用一个函数，有一定时间延迟
        playSlide(n % size)//siblings接受的是选择器所以有. removeClass接受的是类名所以没有
    }, 2000)
}
function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
}

//下面是未优化前
// var allButtons = $('#buttons > span')           //获取所有span标签
// for (let i = 0; i < allButtons.length; i++) {
//     $(allButtons[i]).on('click', function (x) {         //获取每一个span点击信息
//         var index = $(x.currentTarget).index()          //获取点击的是第几个span
//         var px = index * -600                           //除了第一个，之后的每一个span要位移的距离
//         $(images).css({                                 //给images添加CSS
//             transform: 'translateX(' + px + 'px)'
//         })
//         n = index                                       //将被点击的那个span赋予n
//         allButtons.eq(n)
//             .addClass('blue')
//             .siblings('.blue').removeClass('blue') //siblings接受的是选择器所以有. removeClass接受的是类名所以没有
//     })
// }

// var n = 0
// var allImages = $('#images > img')
// var size = allImages.length
// allButtons.eq(n % size).trigger('click')                //对应的元素触发事件
//     .addClass('blue')                                   //添加css类
//     .siblings('.blue')                                  //寻找兄弟中添加了.blue类名的元素
//     .removeClass('blue')
// var timeID = setInterval(() => {                        //重复调用一个函数，有一定时间延迟
//     allButtons.eq(n % size).trigger('click')
//         .addClass('blue')
//         .siblings('.blue').removeClass('blue') //siblings接受的是选择器所以有. removeClass接受的是类名所以没有
//     n += 1
// }, 2000)

// $('.window').on('mouseenter', function () {                 //如果鼠标停留在window区域，就砸了上面的闹钟
//     window.clearInterval(timeID)
// })
// $('.window').on('mouseleave', function () {              //重新创造一个计时器
//     timeID = setInterval(() => {
//         n += 1
//         allButtons.eq(n % size).trigger('click')
//             .addClass('blue')
//             .siblings('.blue').removeClass('blue') //siblings接受的是选择器所以有. removeClass接受的是类名所以没有
//     }, 2000)
// })