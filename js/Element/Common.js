export function intToRGB(color){

    try {
        if (isNaN(color)){
            color = parseInt(color)
        }
    }catch (e){
        console.log(e)
        return "#00000000"
    }

    if (color < 0){
        return "#00000000"
    }
    let red = 0xFF & color;
    let green = 0xFF00 & color;
    green >>= 8;
    let blue = 0xFF0000 & color;
    blue >>= 16;

    // 确保颜色分量在0到255之间
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));

    // 将每个分量转换为十六进制字符串
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // 拼接成完整的十六进制颜色字符串
    let  hexColor = `#${redHex}${greenHex}${blueHex}`;
    return hexColor;

}

export function ctlMoveTop(ctl, start, end, speed){
    ctl.css("top",start);
    // 使用.animate()方法让图片从左向右移动
    ctl.animate({
        top: end // 移动到div的右侧边缘
    }, {
        duration: speed, // 动画持续时间，单位毫秒
        easing: "linear", // 可选的缓动效果，这里使用线性移动
        complete: function () {
            // 动画完成后可以执行一些操作，例如将图片移回原位以循环移动
            ctlMoveTop(ctl,start, end,speed);
        }
    });
}

export function ctlMoveLeft(ctl,start, end,speed){
    ctl.css("left",start);
    // 使用.animate()方法让图片从左向右移动
    ctl.animate({
        left: end // 移动到div的右侧边缘
    }, {
        duration: speed, // 动画持续时间，单位毫秒
        easing: "linear", // 可选的缓动效果，这里使用线性移动
        complete: function () {
            // 动画完成后可以执行一些操作，例如将图片移回原位以循环移动
            ctlMoveLeft(ctl,start,end,speed);
        }
    });
}
export function formatDate(format,date) {
    var year = format.includes('yyyy') ? date.getFullYear() : date.getFullYear().toString().substr(-2);
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');
    var weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    var weekday = weekdays[date.getDay()];

    return format.replace('yyyy', year)
        .replace('yy', year)
        .replace('MM', month)
        .replace('dd', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds)
        .replace('W', weekday);
}
