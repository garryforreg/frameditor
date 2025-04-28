import {ctlMoveLeft, ctlMoveTop, formatDate, intToRGB} from "./Common.js";


export class CtlDClock {
      static  ctlTypeName = "digitClock";
    constructor(showObj) {
        this.showObj = showObj;
    }

    CreatDom(backHtml) {
        let showObj = this.showObj;
        if (showObj.type !== CtlDClock.ctlTypeName) {
            return;
        }
        let backColor = -1
        let textColor = 10158315
        let fontName = "楷体"
        let fontSize = 24
        let fontStyle = 1
        //1-左对齐；2-居中；3-右对齐;
        let rAlign = 1
        //1-上对齐；2-居中；3-下对齐；
        let vAlign = 3
        let animation = 0
        let speed = 0
        if (showObj.textStyle !== null) {
            console.log(showObj.textStyle);
            let textStyle = showObj.textStyle;
            if (isNaN(textStyle.textColor) && textStyle.textColor.indexOf ("#") >= 0){
                textColor = textStyle.textColor;
            }else{
                textColor = intToRGB(textStyle.textColor);
            }

            if (isNaN(textStyle.backColor) && textStyle.backColor.indexOf ("#") >= 0){
                backColor = textStyle.backColor;
            }else{
                backColor = intToRGB(textStyle.backColor);
            }
            fontName = textStyle.fontName;
            fontSize = textStyle.fontSize;
            fontStyle = textStyle.fontStyle;
            rAlign = textStyle.rAlign;
            vAlign = textStyle.vAlign;
            animation = textStyle.animation;
            speed = textStyle.speed;

        }
        let id = showObj.id;
        let width = showObj.width;
        let height = showObj.height;
        //设定位置
        let rect = showObj.rect;

        //设定背景
        let backDiv = $("<div/>");
        backDiv.attr("id", id);
        backDiv.css({
            "position": "absolute",
            "left": rect.left + "px",
            "top": rect.top + "px",
            "width": rect.right - rect.left + "px",
            "height": rect.bottom - rect.top + "px",
            "background-color": "gray",
            "margin": "0px",
            "padding": "0px"
            , "overflow": "hidden"
        });

        let clockDiv = $('<div></div>');
        clockDiv.attr('id', 'clock_'+id);
        backDiv.css("background-color", backColor)

        let format = showObj.format;
        let transparent = showObj.transparent;
        clockDiv.css({
            "position": "absolute",
            "left": "0px",
            "top": "0px",
            "white-space": "nowrap",
            "overflow": "hidden",
            "margin": "0px",
            "padding": "0px",
            "font-size": fontSize + "px",
            "font-family": fontName,
            "color": textColor,
        });
        //1-正常；2-斜体；3-粗体；4-粗体+斜体；
        if (fontStyle === 1){
            clockDiv.css("font-style","normal")
        }else if (fontStyle === 2){
            clockDiv.css("font-style","italic")
        } else if (fontStyle === 3){
            clockDiv.css("font-weight","bold")
        } else if (fontStyle === 4){
            clockDiv.css("font-weight","bold")
            clockDiv.css("font-style","italic")
        }
        let time = formatDate(format, new Date());
        clockDiv.text(time);
        backDiv.append(clockDiv);
        //先尝试从backHtml 中删除 backDiv对应的id
        backHtml.find(backDiv.attr("id")).remove();
        backHtml.append(backDiv);
        this.clockDiv = clockDiv;
        // 计算div的宽度以便知道图片需要移动多少像素
        if (clockDiv.width() < (rect.right - rect.left)) {
            //计算居中的位置
            let width =rect.right - rect.left;
            let leftWidth =  width - clockDiv.width();
            let start = leftWidth / 2;

            //宽度< 展示的宽度，才能设置左中右对齐
            switch (rAlign) {
                case 1: // 左对齐
                    clockDiv.css({
                        'left': '0',
                        'right': '',
                    });
                    break;
                case 2: // 居中对齐
                    clockDiv.css({
                        'left':  start +'px',
                        'right': '',
                    });
                    break;
                case 3: // 右对齐
                    clockDiv.css({
                        'left': '',
                        'right': '0',
                    });
                    break;
                default:
            }
        }
        if (clockDiv.height() < (rect.bottom - rect.top)) {
            let height =rect.bottom - rect.top;
            let leftHeight =  height - clockDiv.height();
            let start = leftHeight / 2;

            switch (vAlign) {
                case 1: // 上对齐
                    clockDiv.css({
                        'top': '0',
                        'bottom': ''
                    });
                    break;
                case 2: // 居中对齐
                    clockDiv.css({
                        'top': start + 'px',
                        'bottom': ''
                    });
                    break;
                case 3: // 下对齐
                    clockDiv.css({
                        'top': '',
                        'bottom': '0'
                    });
                    break;
                default:
                    console.log('无效的对齐参数。请使用1（上对齐）、2（居中对齐）或3（下对齐）。');
            }
        }


        function updateClock(showObj) {

            let time =  new Date();
            let of = showObj.offset
            let dw = showObj.unit
            if (of !== 0){
              if (dw === "年" ){
                  time.setFullYear(time.getFullYear() + of);
              }else if(dw === "月"){
                  time.setMonth(time.getMonth() + of);
              } else if(dw === "日"){
                  time.setDate(time.getDate() + of);
              } else if(dw === "时"){
                  time.setHours(time.getHours() + of);
              } else if(dw === "分"){
                  time.setMinutes(time.getMinutes() + of);
              } else if(dw === "秒"){
                  time.setSeconds(time.getSeconds() + of);
             }
            }
            let timeShow = formatDate(format, time);
            clockDiv.html(timeShow);

            setTimeout(function (){updateClock(showObj)}, 1000);
        }

        updateClock(showObj); // 立即调用，以便时钟在页面加载时立即显示

        return clockDiv;
    }

    SetMove() {
        //数字时钟也会有需要移动的情况
        let showObj = this.showObj;
        let moveObj = this.clockDiv;

        let width = showObj.width;
        let height = showObj.height;
        //设定位置
        let rect = showObj.rect;
        let speed = showObj.textStyle.speed;

        let moveLeft = false;

        if (showObj.textStyle.animation === 6){
            // 计算div的宽度以便知道图片需要移动多少像素
            if (this.clockDiv.width() > (rect.right - rect.left)) {
                moveLeft = true;
            }
        }else if (showObj.textStyle.animation === 1){
            moveLeft = true;
        }

        if (moveLeft && speed !== undefined && speed !==null && speed > 0){
            // 根据速度和时间计算实际的动画持续时间
            let actualDurationMs = Math.ceil(width / speed * 1000);
            // 使用.animate()方法让图片从左向右移动
            ctlMoveLeft(moveObj, rect.right - rect.left, moveObj.width() * -1, actualDurationMs)
        }
    }


}
