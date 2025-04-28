import {formatDate, intToRGB} from "./Common.js";

export class CtlAClock {
    static  ctlTypeName = "analogClock";
    constructor(showObj) {
        this.showObj = showObj;
    }
    CreatDom(backHtml){
        let showObj = this.showObj;
        if (showObj.type !== "analogClock"){
            return;
        }
        let format = showObj.format;
        let of = showObj.offset
        let dw = showObj.unit
        let id = showObj.id;
        let width = showObj.width;
        let height = showObj.height;
        //设定位置
        let rect = showObj.rect;

        let clockDiv = $('<div></div>');
        //设定背景
        let backDiv = $("<div/>");
        backDiv.attr("id", id);
        backDiv.css({
            "position": "absolute",
            "left": rect.left + "px",
            "top": rect.top + "px",
            "width": rect.right - rect.left + "px",
            "height": rect.bottom - rect.top + "px",
            "background-color": "transparent",
            "margin": "0px",
            "padding": "0px"
            //,"overflow": "hidden"
        });
        backHtml.append(backDiv);
        let size = width;
        if (height < size){
            size = height;
        }

        let backColor
        if (isNaN(showObj.backColor) && showObj.backColor.indexOf ("#") >= 0){
            backColor = showObj.backColor;
        }else{
            backColor = intToRGB(showObj.backColor);
        }
        let horColor
        if (isNaN(showObj.horColor) && showObj.horColor.indexOf ("#") >= 0){
            horColor = showObj.horColor;
        }else{
            horColor = intToRGB(showObj.horColor);
        }
        let minColor
        if (isNaN(showObj.minColor) && showObj.minColor.indexOf ("#") >= 0){
            minColor = showObj.minColor;
        }else{
            minColor = intToRGB(showObj.minColor);
        }
        let secColor
        if (isNaN(showObj.secColor) && showObj.secColor.indexOf ("#") >= 0){
            secColor = showObj.secColor;
        }else{
            secColor = intToRGB(showObj.secColor);
        }

        let scaleColor
        if (isNaN(showObj.scaleColor) && showObj.scaleColor.indexOf ("#") >= 0){
            scaleColor = showObj.scaleColor;
        }else{
            scaleColor = intToRGB(showObj.scaleColor);
        }
        let borderColor;
        borderColor = "#000000";
        if (isNaN(showObj.borderColor) && showObj.borderColor.indexOf ("#") >= 0){
            borderColor = showObj.borderColor;
        }else{
            borderColor = intToRGB(showObj.borderColor);
        }

        let borderWidth =showObj.borderWidth;


        backDiv.thooClock({
            offset:of,
            unit:dw,
            size: size,                               // size of the clock
            borderColor: borderColor,               //边圈的颜色
            borderWidth: borderWidth,                           // 边圈的宽度
            dialColor: scaleColor,   // foreground-color of dial can be defined as hex, colorstring, or rgb, rgba function
            dialBackgroundColor: backColor,      // background-color of dial
            secondHandColor: secColor,              // color of second hand
            minuteHandColor: minColor,              // color of minute hand
            hourHandColor: horColor,                // color of hour hand
            //alarmHandColor: '#FFFFFF',               // color of alarm hand (alarm hand only visible if alarmTime is set to 'hh:mm')
            //alarmHandTipColor: '#026729',            // color of tip of alarm hand
            // timeCorrection: {                        // time correction object correction can be positive or negative
            //     operator: '+'    ,                      // + or -
            //     hours: 2        ,                       // number of hours
            //     minutes: 15                            // number of minutes
            // },
            //alarmCount: 1,                           // how many times should the onAlarm Callback function be fired
            //alarmTime: '14:25',                      // alarm time as Date object or String : "hh", "hh:mm", "hh:mm:ss"
            showNumerals: true,                      // show numerals on dial true/false
            numerals: [                              // Array of Objects with numbers as keys
                {1:1},                                 // values can be any String or number. You can draw roman dial by
                {2:2},                                 // passing the following key/values:
                {3:3},                                 // {1:'I'},{2:'II'},{3:'III'},{4:'IV'},{5:'V'},{6:'VI'},{7:'VII'}
                {4:4},                                 // {8:'VIII'}, {9:'IX'}, {10:'X'}, {11:'XI'}, {12:'XII'}
                {5:5},                                 // You don't have to set all 12 you could only set e.g. 3,6,9,12
                {6:6},
                {7:7},
                {8:8},
                {9:9},
                {10:10},
                {11:11},
                {12:12}
            ],
            numeralFont: 'helvetica',                // font for numerals
            //brandText: 'THOOYORK',                   // uppercase text on clock dial
            //brandText2: 'Germany',                   // lowercase text on clock dial
            brandFont: 'helvetica',                  // font face for brandText
            sweepingSeconds: true,                   // sweeping second hand true/false true is like automatic clock, false is ticking
            sweepingMinutes: true,                   // sweeping minute hand true/false
            onAlarm:function(){                      // alarm callback function
                //callback on Alarm
            },
            offAlarm:function(){                    // end alarm callback
                //callback on Alarm end

            },
            onEverySecond:function(){               // this function is fired on every second
                //callback do sttuff every second
                // let time = formatDate(format, new Date());
                // if (clockDiv.html() !== time){
                //     clockDiv.html(time);
                // }

            }
        });



        clockDiv.attr('id', 'clock_'+id);


        clockDiv.css({
            "position": "absolute",
            "left": "0px",
            "top": "0px",
            "white-space":"nowrap",
            "overflow":"hidden",
            "margin": "0px",
            "padding": "0px",
            "font-size": size * 0.06 + "px",
            "color": borderColor,
            "visibility": "hidden"
        });
       // let time = formatDate(format, new Date());
       // clockDiv.html(time);
        backDiv.append(clockDiv);
        backHtml.append(backDiv);
        let left = showObj.width /2 - clockDiv.width()/2 ;
        let top =( showObj.height /2 - clockDiv.height()/2)  * 1.3;
        clockDiv.css("left",left);
        clockDiv.css("top",top);
        clockDiv.css("visibility","visible");
        return clockDiv;
    }
    SetMove() {

    }
}
