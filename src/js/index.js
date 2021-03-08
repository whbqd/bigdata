var data = [{
    "name": "公司",
    "data": [
        {
            "name": "江干",
            "num": 50
        },
        {
            "name": "余杭",
            "num": 10
        },
        {
            "name": "武林",
            "num": 10
        },
        {
            "name": "拱墅",
            "num": 10
        },
        {
            "name": "钱塘",
            "num": 10
        },
        {
            "name": "西湖",
            "num": 10
        },
        {
            "name": "临安",
            "num": 10
        },
        {
            "name": "桐庐",
            "num": 10
        },
        {
            "name": "萧山",
            "num": 10
        },
        {
            "name": "滨江",
            "num": 10
        },
        {
            "name": "临平",
            "num": 10
        },
        {
            "name": "建德",
            "num": 10
        }
    ]
},
{
    "name": "个人",
    "data": [
        {
            "name": "江干",
            "num": 30
        },
        {
            "name": "余杭",
            "num": 10
        },
        {
            "name": "武林",
            "num": 10
        },
        {
            "name": "拱墅",
            "num": 10
        },
        {
            "name": "钱塘",
            "num": 10
        },
        {
            "name": "西湖",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        }
    ]
},
{
    "name": "租聘",
    "data": [
        {
            "name": "江干",
            "num": 20
        },
        {
            "name": "余杭",
            "num": 10
        },
        {
            "name": "武林",
            "num": 10
        },
        {
            "name": "拱墅",
            "num": 10
        },
        {
            "name": "钱塘",
            "num": 10
        },
        {
            "name": "西湖",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        },
        {
            "name": "江干",
            "num": 10
        }
    ]
}]
$('.inner').on('mouseenter', '.sup li', function (e) {
    $(this).addClass('active').siblings().removeClass('active');
    //获取随机的值  sort方法 是给数组排序 a-b是从小到大
    //.5-随机0-1的数 可能为正可能为负 排序就会随机
    const index = $(this).index();
    var html = '';
    data[index]['data'].forEach(function (item) {
        html += `<li><span>${item.name}</span><span>${item.num}</span></li>`;
    });
    //渲染
    $('.nb').html(html);

    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.province .nb').each(function (index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });
});

$('.province .sup li').eq(0).mouseenter();
var index = 0;
setInterval(() => {
    index++;
    if (index > 2) {
        index = 0;
    }
    $('.sup li').eq(index).mouseenter();
}, 10000);