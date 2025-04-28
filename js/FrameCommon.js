ht.Default.setImage("samewidth", 16, 16, "images/toolbar/samewidth.png");
ht.Default.setImage("sameheight", 16, 16, "images/toolbar/sameheight.png");

let ControlDown = false;
let XmlParser = new DOMParser();
let PisType = -1;
let ScreenWidth = 500;
let ScreenHeight = 500;
let FrameName = "新建帧";
let FrameId = "";
let ScreenTypeDesc = "全彩";
let StationCode = "";
let IsView = false;
const AlertZIndex = 20000;
let DialogZIndex = 10000;

function SendMessage(obj){
    if (window.sendParentMsg !== undefined){
        window.sendParentMsg(obj);
    }
}

function FramePreview(xml) {

    let url = `/imp/pis/modeditor/modPriview?stationCode=${StationCode}&expandStationCode=${StationCode}`;
    $.ajax({
        url: url,
        type: "post",
        data: xml,
        contentType: "application/xml",
        success: function (result) {
            console.log(result);

            if (result.code.toString() === "0") {

                let url = result.data;
                let width = ScreenWidth + 20;
                let height = ScreenHeight + 20;
                let left = (screen.width - width) / 2;
                let top = (screen.height - height) / 2;
                window.open(url, 'popup', `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);


                return;
            }
            let  ico = "ui_error";
            alert = new ht.ui.Alert({
                title: '提示',
                zIndex: AlertZIndex,
                contentIcon: ico,
                contentText: result.msg,
                fixedWidth: 200,
                buttons: [
                    {
                        text: '确定',
                        onClick: function (button, e) {
                            this.hide();
                        }
                    }
                ]
            });
            alert.show();
        },
        error: function (errorMsg) {
            alert = new ht.ui.Alert({
                title: '提示',
                zIndex: AlertZIndex,
                contentIcon: 'ui_error',
                contentText: errorMsg,
                fixedWidth: 200,
                buttons: [
                    {
                        text: '确定',
                        onClick: function (button, e) {
                            this.hide();
                        }
                    }
                ]
            });
            alert.show();

        }
    });
}

function AddTab(tabView,view, name,  selected){

    // create tab
    var tab = new ht.Tab();
    tab.setName(name);
    tab.setView(view);

    // add to model
    var tabModel = tabView.getTabModel();
    tabModel.add(tab);
    if(selected){
        tabModel.getSelectionModel().setSelection(tab);
    }
    return tab;
}

function RemoveDvByIndex(dvNode,dvIndex){
    return {
        DV: RemoveStrByIndex(dvNode.DV, dvIndex),
        WL: RemoveStrByIndex(dvNode.WL, dvIndex),
        BC: RemoveStrByIndex(dvNode.BC,  dvIndex),
        TC: RemoveStrByIndex(dvNode.TC, dvIndex),
        TT: RemoveStrByIndex(dvNode.TT, dvIndex),
        TS: RemoveStrByIndex(dvNode.TS,  dvIndex),
        TX: RemoveStrByIndex(dvNode.TX, dvIndex),
        RA: RemoveStrByIndex(dvNode.RA, dvIndex),
        CA: RemoveStrByIndex(dvNode.CA,  dvIndex),
        A: RemoveStrByIndex(dvNode.A,dvIndex),
        S: RemoveStrByIndex(dvNode.S, dvIndex),
        SE:dvNode.SE,
        DATALIST:dvNode.DATALIST
    };
}

function RemoveStrByIndex(orgStr,index) {
    try {
        let arr = orgStr.split(",");
        arr.splice(index, 1);
        return arr.join(",");
    } catch (e) {
        console.log(e);
    }
    return null

}
function MoveUpDownDvObj(index,dvNode,isUp){

    return {
        DV: MoveUpDownStrByIndex(dvNode.DV, index,isUp),
        WL: MoveUpDownStrByIndex(dvNode.WL, index,isUp),
        BC: MoveUpDownStrByIndex(dvNode.BC, index,isUp),
        TC: MoveUpDownStrByIndex(dvNode.TC, index,isUp),
        TT: MoveUpDownStrByIndex(dvNode.TT, index,isUp),
        TS: MoveUpDownStrByIndex(dvNode.TS, index,isUp),
        TX: MoveUpDownStrByIndex(dvNode.TX, index,isUp),
        RA: MoveUpDownStrByIndex(dvNode.RA, index,isUp),
        CA: MoveUpDownStrByIndex(dvNode.CA, index,isUp),
        A: MoveUpDownStrByIndex(dvNode.A, index,isUp),
        S: MoveUpDownStrByIndex(dvNode.S, index,isUp),
        SE:dvNode.SE,
        DATALIST:dvNode.DATALIST,
        LN:dvNode.LN,
    };

}

function MoveUpDownStrByIndex(str,index,isUp) {
    try{
        if (str ==="" || str === null || str=== undefined){
            return "";
        }
        let arr = str.split(",");
        if (isUp){
            arr = moveUp(arr, index);
        }else{
            arr = moveDown(arr,index);
        }
        return arr.join(",");
    }catch (e){
        console.log(e)
    }
    return str;
}
// 将数组中的元素下移
function moveDown(arr, index) {
    if (index >= arr.length - 1) return arr; // 如果已经是最后一个元素，不做操作
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]; // 交换位置
    return arr;
}

// 将数组中的元素上移
function moveUp(arr, index) {
    if (index === 0) return arr; // 如果已经是第一个元素，不做操作
    [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]; // 交换位置
    return arr;
}
function UpdateDvObj(dvNode,dvObj,dvIndex) {
    /*
    * <DV>正在检票,停止检票,正在候车,预计*,晚点未定,停运*,*</DV>
      <WL>1,1,1,1,1,1,1</WL>
      <BC>-1,-1,-1,-1,-1,-1,-1</BC>
      <TC>65280,255,16777215,16777215,255,255,16777215</TC>
      <TT>宋体,宋体,宋体,宋体,宋体,宋体,宋体</TT>
      <TS>25,25,25,25,25,25,25</TS>
      <TX>1,1,1,1,1,1,1</TX>
      <RA>2,2,2,2,2,2,2</RA>
      <CA>2,2,2,2,2,2,2</CA>
      <A>6,6,0,6,6,0,0</A>
      <S>30,30,0,25,30,0,0</S>
    * */
    return {
        DV: UpdateStrByIndex(dvNode.DV, dvObj.DV, dvIndex),
        WL: UpdateStrByIndex(dvNode.WL, dvObj.WL, dvIndex),
        BC: UpdateStrByIndex(dvNode.BC, dvObj.BC, dvIndex),
        TC: UpdateStrByIndex(dvNode.TC, dvObj.TC, dvIndex),
        TT: UpdateStrByIndex(dvNode.TT, dvObj.TT, dvIndex),
        TS: UpdateStrByIndex(dvNode.TS, dvObj.TS, dvIndex),
        TX: UpdateStrByIndex(dvNode.TX, dvObj.TX, dvIndex),
        RA: UpdateStrByIndex(dvNode.RA, dvObj.RA, dvIndex),
        CA: UpdateStrByIndex(dvNode.CA, dvObj.CA, dvIndex),
        A: UpdateStrByIndex(dvNode.A, dvObj.A, dvIndex),
        S: UpdateStrByIndex(dvNode.S, dvObj.S, dvIndex),
        SE:dvNode.SE,
        DATALIST:dvNode.DATALIST,
        LN:dvNode.LN,
    };

}

function UpdateStrByIndex(str,insertStr,index) {
    try{
        if (str ==="" || str === null || str=== undefined){
            return insertStr;
        }
        let arr = str.split(",");
        if (index >= 0 && index < arr.length){
            //根据Index标记插入到arr对应位置
            arr.splice(index, 1, insertStr);
        }else{
            arr.push(insertStr);
        }
        return arr.join(",");
    }catch (e){
        console.log(e)
    }
    return str;
}

function InsertDvObj(dvNode,dvObj,dvIndex) {
    /*
    * <DV>正在检票,停止检票,正在候车,预计*,晚点未定,停运*,*</DV>
      <WL>1,1,1,1,1,1,1</WL>
      <BC>-1,-1,-1,-1,-1,-1,-1</BC>
      <TC>65280,255,16777215,16777215,255,255,16777215</TC>
      <TT>宋体,宋体,宋体,宋体,宋体,宋体,宋体</TT>
      <TS>25,25,25,25,25,25,25</TS>
      <TX>1,1,1,1,1,1,1</TX>
      <RA>2,2,2,2,2,2,2</RA>
      <CA>2,2,2,2,2,2,2</CA>
      <A>6,6,0,6,6,0,0</A>
      <S>30,30,0,25,30,0,0</S>
    * */
    return {
        DV: InsertStrByIndex(dvNode.DV, dvObj.DV, dvIndex),
        WL: InsertStrByIndex(dvNode.WL, dvObj.WL, dvIndex),
        BC: InsertStrByIndex(dvNode.BC, dvObj.BC, dvIndex),
        TC: InsertStrByIndex(dvNode.TC, dvObj.TC, dvIndex),
        TT: InsertStrByIndex(dvNode.TT, dvObj.TT, dvIndex),
        TS: InsertStrByIndex(dvNode.TS, dvObj.TS, dvIndex),
        TX: InsertStrByIndex(dvNode.TX, dvObj.TX, dvIndex),
        RA: InsertStrByIndex(dvNode.RA, dvObj.RA, dvIndex),
        CA: InsertStrByIndex(dvNode.CA, dvObj.CA, dvIndex),
        A: InsertStrByIndex(dvNode.A, dvObj.A, dvIndex),
        S: InsertStrByIndex(dvNode.S, dvObj.S, dvIndex),
        SE:dvNode.SE,
        DATALIST:dvNode.DATALIST,
        LN:dvNode.LN,
    };

}

function GetDvObjByIndex(dvNode,dvIndex) {
    /*
     * <DV>正在检票,停止检票,正在候车,预计*,晚点未定,停运*,*</DV>
       <WL>1,1,1,1,1,1,1</WL>
       <BC>-1,-1,-1,-1,-1,-1,-1</BC>
       <TC>65280,255,16777215,16777215,255,255,16777215</TC>
       <TT>宋体,宋体,宋体,宋体,宋体,宋体,宋体</TT>
       <TS>25,25,25,25,25,25,25</TS>
       <TX>1,1,1,1,1,1,1</TX>
       <RA>2,2,2,2,2,2,2</RA>
       <CA>2,2,2,2,2,2,2</CA>
       <A>6,6,0,6,6,0,0</A>
       <S>30,30,0,25,30,0,0</S>
     * */
    let dvObj = {
        LN: dvNode.LN,
        DV: "*",
        WL: "1",
        BC: "#000000",
        TC: "#ff0000",
        TT: "宋体",
        TS: "25",
        TX: "1",
        RA: "1",
        CA: "1",
        A: "6",
        S: "5"
    }
    let dvStr = dvNode.DV
    if (dvIndex < 0){
        return dvObj;
    }
    if (dvStr === undefined || dvStr === "") {
        //新建
        return dvObj;
    } else if (dvStr.indexOf(",") < 0) {
        if (dvIndex !== 0) {
            return dvObj
        } else {
            return dvNode;
        }
    } else {
        //有多个
        return {
            DV: SplitGetByIndex(dvNode.DV, dvIndex),
            WL: SplitGetByIndex(dvNode.WL, dvIndex),
            BC: SplitGetByIndex(dvNode.BC, dvIndex),
            TC: SplitGetByIndex(dvNode.TC, dvIndex),
            TT: SplitGetByIndex(dvNode.TT, dvIndex),
            TS: SplitGetByIndex(dvNode.TS, dvIndex),
            TX: SplitGetByIndex(dvNode.TX, dvIndex),
            RA: SplitGetByIndex(dvNode.RA, dvIndex),
            CA: SplitGetByIndex(dvNode.CA, dvIndex),
            A: SplitGetByIndex(dvNode.A, dvIndex),
            S: SplitGetByIndex(dvNode.S, dvIndex)
        }
    }
}
//插入字符到数组指定的位置，如果index<0，则插入到数组末尾
function InsertStrByIndex(str,insertStr,index) {
    try{
        if (str ==="" || str === null || str=== undefined){
            return insertStr;
        }
        let arr = str.split(",");
        if (index >= 0 && index < arr.length){
            //根据Index标记插入到arr对应位置
            arr.splice(index, 0, insertStr);
        }else{
            arr.push(insertStr);
        }
        return arr.join(",");
    }catch (e){
        console.log(e)
    }
    return str;
}

//获取逗号分割的字符串指定位置的字符
function SplitGetByIndex(str,index) {
    try{
        let arr = str.split(",");
        return arr[index];
    }catch (e){
        console.log(e)
    }
    return "";
}
//计算表格列或者行，按比例分配新行
function redistributeSizesWithBorders(originalArray, newTotalSize, borderSize, numOfBorders) {
    // 计算表格线总宽度（或高度）
    const totalBorderSize = borderSize * numOfBorders;

    // 计算除表格线外可用于分配的总宽度（或总高度）
    const adjustedNewTotalSize = newTotalSize - totalBorderSize;

    const originalTotalSize = originalArray.reduce((sum, size) => sum + size, 0);
    // 计算比例系数
    const ratio = adjustedNewTotalSize / originalTotalSize;

    // 使用比例系数重新计算每个尺寸，并进行四舍五入
    let redistributedSizes = originalArray.map(size => Math.round(size * ratio));

    // 计算四舍五入后的所有行或列尺寸加上表格线的总尺寸
    let redistributedTotalSize = redistributedSizes.reduce((sum, size) => sum + size, 0) + totalBorderSize;

    // 如果因四舍五入导致总尺寸与预期存在偏差，进行微调
    let difference = redistributedTotalSize - newTotalSize;

    while (difference !== 0) {
        redistributedSizes = redistributedSizes.map(size => {
            if (difference > 0 && size > 1) {
                // 如果总尺寸过大，尝试减小某些尺寸
                difference--;
                return size - 1;
            } else if (difference < 0) {
                // 如果总尺寸过小，尝试增加某些尺寸
                difference++;
                return size + 1;
            }
            return size;
        });

        // 重新计算调整后总尺寸
        redistributedTotalSize = redistributedSizes.reduce((sum, size) => sum + size, 0) + totalBorderSize;
        difference = redistributedTotalSize - newTotalSize;
    }

    return redistributedSizes;
}
function CreatBaseProperty(propertyModel, self) {

    let data = self.node;
    let elFrame = window.propertyFrame;
    let position = data.getPosition();



    elFrame.contentWindow.AddProperty("名称", data.a("name"), null, "label", function () {})


    elFrame.contentWindow.AddProperty("坐标 X",parseInt( position.x), null, "int", function (value) {
        console.log("new value:" + value);
        let position = data.getPosition();
        data.setPosition(value, parseInt(position.y));
        self.CreateEm();
    })

    elFrame.contentWindow.AddProperty("坐标 Y", parseInt(position.y), null, "int", function (value) {
        console.log("new value:" + value);
        let position = data.getPosition();
        data.setPosition(parseInt(position.x), value);
        self.CreateEm();
    })

    elFrame.contentWindow.AddProperty("宽", data.getWidth(), null, "int", function (value) {
        console.log("new value:" + value);
        if (data.getWidth() === value) {
            return;
        }
        data.setWidth(value);
        data.s("element").CreateEm();
    })

    elFrame.contentWindow.AddProperty("高", data.getHeight(), null, "int", function (value) {
        console.log("new value:" + value);
        if (data.getHeight() === value) {
            return;
        }
        data.setHeight( value);
        data.s("element").CreateEm();
        console.log(data)
    })

    elFrame.contentWindow.AddProperty("index", data.a("index"), null, "label", function () {})


}

function createDiv(id, background) {
    var div = document.createElement('div');

    div.id = id;
    div.style.position = 'absolute';
    div.style.background = background;
    div.style.border = '0px solid yellow';
    div.style.setProperty('box-sizing', 'border-box', null);
    return div;
}

//生成雪花ID
function GenerateSnowflakeId() {
    // 使用当前时间戳、随机数和一个递增计数器生成一个64位的二进制数
    const timeBits = (Date.now() / 1000) | 0; // 41 bits
    const randomBits = Math.random() * (1 << 10) | 0; // 10 bits
    let sequence = 0; // 12 bits
    return Math.abs( (timeBits << 21) + (randomBits << 12) + sequence);
}

function SplitStr2Int(str,split){
    let hrStr =[];
    if (str.indexOf(split) > 0){
        hrStr = str.split(split).map(Number);
    }else{
        hrStr = [parseInt(str)];
    }
    return hrStr;
}

function SetSelSize(id,w,h){
    let $selDiv = $("#sel_" + id);
    if($selDiv !== undefined){
        $selDiv.width(w);
        $selDiv.height(h);
    }
}
function SetSelPosition(id,left,top) {
    let $selDiv = $("#sel_" + id);
    if($selDiv !== undefined){
        $selDiv.css({
            left: left / window.scaleIncrement,
            top: top / window.scaleIncrement
        });
    }
}
function SetLockStaSelected(isLock){
    if (window.selectNode === undefined || window.selectNode === null){
        return;
    }

    window.selectNode.a("lock",isLock);
    let em = window.selectNode.s("element");
    em.CreateEm();
}
function SelectElement($clickDom,node) {
    if (!ControlDown){
        CleanAllSelection();
    }
    window.selectNode = node;
    node.a("selected",true);
    selectNodeList.push(node)
    console.log('元素选中' + $clickDom.attr("id") + ' ' + $clickDom.prop('tagName'));
    if (node.a("type") !== undefined && (node.a("type") === "line"|| node.a("type") === "arrow")) {
        DrawSelectionEffect($clickDom);
    }else{
        CreateSelectionEffect($clickDom);
    }
    SetSelectButtonVisible();
}

function SetSelectButtonVisible() {
    let nodes = window.dataModel.getDatas();
    let selCount = 0;
    //获取y轴最小的位置
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        if (node.a("selected") === true) {
            selCount = selCount + 1;
        }
    }

    let $btnAlignTop = $("#btnAlignTop");
    let $btnAlignBottom = $("#btnAlignBottom");
    let $btnAlignLeft = $("#btnAlignLeft");
    let $btnAlignRight = $("#btnAlignRight");
    let $btnHCAlign = $("#btnHCAlign");
    let $btnVCAlign = $("#btnVCAlign");
    let $btnHAvgAlign = $("#btnHAvgAlign");
    let $btnVAvgAlign = $("#btnVAvgAlign");

    $btnAlignTop.addClass("inactive")
    $btnAlignBottom.addClass("inactive")
    $btnAlignLeft.addClass("inactive")
    $btnAlignRight.addClass("inactive")
    $btnHCAlign.addClass("inactive")
    $btnVCAlign.addClass("inactive")
    $btnHAvgAlign.addClass("inactive")
    $btnVAvgAlign.addClass("inactive")

    if (selCount > 1){
        $btnAlignTop.removeClass("inactive")
        $btnAlignBottom.removeClass("inactive")
        $btnAlignLeft.removeClass("inactive")
        $btnAlignRight.removeClass("inactive")
        $btnHCAlign.removeClass("inactive")
        $btnVCAlign.removeClass("inactive")
    }
    if (selCount > 2)
    {
        $btnHAvgAlign.removeClass("inactive")
        $btnVAvgAlign.removeClass("inactive")
    }

}

function CleanSelection($clickDom,node){
    let id = node.getId();
    node.a("selected",false);
    if (node.a("type") !== undefined && (node.a("type") === "line"|| node.a("type") === "arrow")) {
        node.s("element").RootDom[0].css('box-shadow', "");
    }else{
        let $selDiv = $("#sel_" + id);
        if($selDiv !== undefined){
            $selDiv.remove();
        }
    }
}

function CleanAllSelection(){
    selectNodeList = [];
    window.selectNode = null;
    window.backDiv.find('div[id^="sel_"]').remove();
    let nodes = window.dataModel.getDatas();

    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        node.a("selected",false);
        if (node.a("type") !== undefined && (node.a("type") === "line"|| node.a("type") === "arrow")) {
            node.s("element").RootDom[0].css('box-shadow', "");
        }
    }
}

/**
 * 绘制选择效果，直接在元素上绘制效果
 * @param $element
 * @constructor
 */
function DrawSelectionEffect($element){
    $element.css( 'box-shadow', 'inset 0 0 5px 5px rgb(0,10,255)');
}


/**
 * 绘制选择效果，上面悬浮一层div
 * @param $element
 * @constructor
 */
function CreateSelectionEffect($element) {
    // 确保传入的是一个jQuery对象
    if (!($element instanceof jQuery)) {
        $element = $($element);
    }

    // 获取元素的位置和尺寸
    var pos = $element.position();
    var width = $element.outerWidth();
    var height = $element.outerHeight();
    var id = $element.attr("id");
    var index = $element.css("z-index");
    $("#sel_" + id).remove();
    // 创建一个新的div作为阴影遮罩层
    var $shadowOverlay = $('<div ></div>');
    $shadowOverlay.attr("id","sel_" + id);

    // 设置阴影遮罩层的样式
    $shadowOverlay.css({
        'position': 'absolute',
        'top': pos.top/ window.scaleIncrement + 'px',
        'left': pos.left/ window.scaleIncrement + 'px',
        'width': width + 'px',
        'height': height + 'px',
        // 增大模糊距离和扩展距离，调整颜色透明度以增加清晰度
        'box-shadow': 'inset 0 0 5px 5px rgb(0,10,255)',
        'pointer-events': 'none',
        'z-index': parseInt(index) + 1 // 确保遮罩层在元素之上
    });

    // 将阴影遮罩层添加到文档中，可以根据实际需要调整添加位置
    window.backDiv.append($shadowOverlay);
}

/**
 * 上对齐
 * @constructor
 */
function AlignTop(){
 
    let minNum = 99999;
 
    if (selectNodeList.length === 0){
        return;
    }else {
        let node = selectNodeList[0];
        if (node.a("type") === "line" || node.a("type") === "arrow"){
            let y0 = node.a("Y0");
            let y1 = node.a("Y1");
            let minY = y0;
            if (y1 < minY){
                minY = y1;
            }
            if (minY < minNum){
                minNum = minY;
            }
        }else{
            let position = node.getPosition();
            if (parseInt(position.y) < minNum){
                minNum = parseInt(position.y);
            }
        }
    }
   
    console.log("AlignTop min-y:" + minNum);
    for (let i = 1; i < selectNodeList.length; i++){
        let node = selectNodeList[i];
        MoveElementTop(node,minNum);
    }

}

function MoveElementTop(node,newTop){
    if (node.a("lock") === true || node.a("lock") === "true")
    {
        return;
    }
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //计算线段两个端点的top位置，与newTop 比较，获取绝对值最小的那个，用于移动
        let y0 = parseInt(node.a("Y0"));
        let y1 = parseInt(node.a("Y1"));

        let y0ChaValue = newTop - y0;
        let y1ChaValue = newTop - y1;
        let moveChaValue = y0ChaValue;

        if (Math.abs(y1ChaValue) < Math.abs(y0ChaValue)){
            moveChaValue = y1ChaValue;
        }
        //线段的两个端点都需要移动
        node.a("Y0",y0 + moveChaValue);
        node.a("Y1",y1 + moveChaValue);
    }else {
        //元素的y= newTop
        let position = node.getPosition();
        node.setPosition(parseInt(position.x), newTop);
    }
    node.s("element").CreateEm();
}

/**
 * 下对齐
 * @constructor
 */
function AlignBottom(){
    
    let maxNum = 0;
  
 
    if (selectNodeList.length === 0){
        return;
    }else   {
        //获取y轴 + 高度最大的位置
        let node = selectNodeList[0];
        //线段要获取两端y组大的那个
        if (node.a("type") === "line" || node.a("type") === "arrow"){
            let y0 = node.a("Y0");
            let y1 = node.a("Y1");
            let maxY = y0;
            if (y1 > maxY){
                maxY = y1;
            }
            if (maxY > maxNum){
                maxNum = maxY;
            }
        }else{
            let position = node.getPosition();
            let height = node.getHeight();
            let bottom = parseInt(position.y) + parseInt(height);
            if (bottom > maxNum){
                maxNum = bottom;
            }
        }
    }
 
    console.log("AlignBottom max-bottom:" + maxNum);
    for (let i = 1; i < selectNodeList.length; i++){
        let node = selectNodeList[i];
        if (node.a("type") === "line" || node.a("type") === "arrow"){
            MoveElementTop(node,maxNum);
        }else {
            MoveElementTop(node,maxNum - node.getHeight());
        }
    }

}


/**
 * 左对齐
 * @constructor
 */
function AlignLeft(){
    let leftNum = 99999;
    if (selectNodeList.length === 0){
        return;
    }else {
        let node = selectNodeList[0];
        
        if (node.a("type") === "line" || node.a("type") === "arrow") {
            let x0 = node.a("X0");
            let x1 = node.a("X1");
            let minX = x0;
            if (x1 < minX) {
                minX = x1;
            }
            if (minX < leftNum) {
                leftNum = minX;
            }
        } else {
            let position = node.getPosition();
            if (parseInt(position.x) < leftNum) {
                leftNum = parseInt(position.x);
            }
        }
    }
  
    console.log("AlignLeft min-x:" + leftNum);
    for (let i = 1; i < selectNodeList.length; i++){
        let node =  selectNodeList[i];
        MoveElementLeft(node,leftNum);
    }

}

function MoveElementLeft(node,newXPoint){
    if (node.a("lock") === true || node.a("lock") === "true")
    {
        return;
    }
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //计算线段两个端点的top位置，与newTop 比较，获取绝对值最小的那个，用于移动
        let x0 = node.a("X0");
        let x1 = node.a("X1");

        let x0ChaValue = newXPoint - x0;
        let x1ChaValue = newXPoint - x1;
        let moveChaValue = x0ChaValue;

        if (Math.abs(x1ChaValue) < Math.abs(x0ChaValue)){
            moveChaValue = x1ChaValue;
        }
        //线段的两个端点都需要移动
        node.a("X0",x0 + moveChaValue);
        node.a("X1",x1 + moveChaValue);
    }else {
        //元素的x= newTop
        let position = node.getPosition();
        node.setPosition( newXPoint,position.y);
    }
    node.s("element").CreateEm();
}


/**
 * 右对齐
 * @constructor
 */
function AlignRight() {
    let maxNum = 0;

    if (selectNodeList.length === 0) {
        return;
    }
//获取y轴 + 高度最大的位置
    let node = selectNodeList[0];

    //线段要获取两端y组大的那个
    if (node.a("type") === "line" || node.a("type") === "arrow") {
        let x0 = parseInt( node.a("X0"));
        let x1 =  parseInt(  node.a("X1"));
        let maxX = x0;
        if (x1 > maxX) {
            maxX = x1;
        }
        if (maxX > maxNum) {
            maxNum = maxX;
        }
    } else {
        let position = node.getPosition();
        let width = node.getWidth();
        let bottom = parseInt(position.x) + parseInt(width);
        if (bottom > maxNum) {
            maxNum = bottom;
        }
    }


    console.log("AlignRight move-right:" + maxNum);

    for (let i = 1; i < selectNodeList.length; i++) {
        let node = selectNodeList[i];
        if (node.a("type") === "line" || node.a("type") === "arrow") {
            MoveElementLeft(node, maxNum);
        } else {
            MoveElementLeft(node, maxNum - node.getWidth());
        }
    }

}

/**
 * 垂直居中
 * @constructor
 */
function VerticalCenterAlignment(){
    let nodes = window.dataModel.getDatas();
    let selectCount = 0;
    let needMoveNodes = [];
    let nodeCenterDic = {};
    //获取每个控件的中心点位置
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        let id = node.getId();
        if (node.a("selected") === true){
            selectCount = selectCount + 1;
            //线段要获取两端y组大的那个
            if (node.a("type") === "line" || node.a("type") === "arrow"){

                let x0 = node.a("X0");
                let x1 = node.a("X1");
                let maxX = x0;
                let minX = x1;
                if (x1 > maxX){
                    maxX = x1;
                    minX = x0;
                }
                let length = maxX - minX;
                nodeCenterDic[id] = minX + length / 2;
            }else{
                let position = node.getPosition();
                let width = node.getWidth();
                nodeCenterDic[id] = parseInt(position.x) + parseInt(width) / 2;
            }
            needMoveNodes.push(node);
        }
    }
    if (selectCount === 0){
        return;
    }
    // 获取 nodeCenterArr里面数据的平均值
    const values = Object.values(nodeCenterDic);

    // 计算总和
    const sum = values.reduce((acc, curr) => acc + curr, 0);

    // 计算平均值
    const average = sum / values.length;

    console.log("VerticalCenterAlignment 平均值:" + average);

    for (let i = 0; i < needMoveNodes.length; i++){
        let node = needMoveNodes[i];
        let orgCenter = nodeCenterDic[node.getId()];
        let moveChaValue = average - orgCenter;

        if (node.a("type") === "line" || node.a("type") === "arrow"){
            //中心点位置为avgNum，计算移动位置
            let x0 =parseInt( node.a("X0"));
            let x1 = parseInt( node.a("X1"));
            //线段的左边点
            let minX = x0;
            if (x1 < minX){
                minX = x1;
            }
            let newPoint = minX + moveChaValue
            MoveElementLeft(node,newPoint);
        }else {
            //中心点位置为avgNum，计算left
            let minX = parseInt( node.getPosition().x);
            let newPoint = minX + moveChaValue
            MoveElementLeft(node,newPoint);
        }
    }

}


/**
 * 水平居中
 * @constructor
 */
function HorizontalCenterAlignment(){
    let nodes = window.dataModel.getDatas();
    let selectCount = 0;
    let needMoveNodes = [];
    let nodeCenterDic = {};
    //获取每个控件的中心点位置
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        let id = node.getId();
        if (node.a("selected") === true){
            selectCount = selectCount + 1;
            //线段要获取两端y组大的那个
            if (node.a("type") === "line" || node.a("type") === "arrow"){

                let y0 = node.a("Y0");
                let y1 = node.a("Y1");
                let maxY = y0;
                let minY = y1;
                if (y1 > maxY){
                    maxY = y1;
                    minY = y0;
                }
                let length = maxY - minY;
                nodeCenterDic[id] = minY + length / 2;
            }else{
                let position = node.getPosition();
                let height = node.getHeight();
                nodeCenterDic[id] = parseInt(position.y) + parseInt(height) / 2;
            }
            needMoveNodes.push(node);
        }
    }
    if (selectCount === 0){
        return;
    }
    // 获取 nodeCenterArr里面数据的平均值
    const values = Object.values(nodeCenterDic);

    // 计算总和
    const sum = values.reduce((acc, curr) => acc + curr, 0);

    // 计算平均值
    const average = sum / values.length;

    console.log("HorizontalCenterAlignment 平均值:" + average);

    for (let i = 0; i < needMoveNodes.length; i++){
        let node = needMoveNodes[i];
        let orgCenter = nodeCenterDic[node.getId()];
        let moveChaValue = average - orgCenter;

        if (node.a("type") === "line" || node.a("type") === "arrow"){
            //中心点位置为avgNum，计算移动位置
            let y0 =parseInt( node.a("Y0"));
            let y1 = parseInt( node.a("Y1"));
            //线段的左边点
            let minY = y0;
            if (y1 < minY){
                minY = y1;
            }
            let newPoint = minY + moveChaValue
            MoveElementTop(node,newPoint);
        }else {
            //中心点位置为avgNum，计算left
            let minY = parseInt( node.getPosition().y);
            let newPoint = minY + moveChaValue
            MoveElementTop(node,newPoint);
        }
    }
}


/**
 * 水平平均
 * 调整的是X轴，所有元素在X轴上平均分布
 * @constructor
 */
function HorizontalAvgAlignment() {
    let nodes = window.dataModel.getDatas();
    let selectCount = 0;
    let selectNodes = [];
    let nodeIntervalDic = {};
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        if (node.a("selected") === true) {
            //线段原本不依赖node的Position绘制位置，但是由于需要判断距离，这里就先设置一下位置
            if (node.a("type") === "line" || node.a("type") === "arrow") {
                let xPoint = GetLeftPosition(node);
                let yPoint = GetRightPosition(node);
                let length = yPoint - xPoint;
                node.setWidth(length);
                node.setPosition(xPoint, parseInt(node.getPosition().y))
            }
            selectNodes.push(node)
            selectCount = selectCount + 1;
            nodeIntervalDic[node.getId()] = node;
        }
    }
    //3个以上才能平均
    if (selectCount  <= 2){
        return;
    }

    //这里注意，需要按照x轴的顺序重新排序
    selectNodes.sort(function (a, b) {
        return parseInt(a.getPosition().x) -parseInt(b.getPosition().x);
    });

    const rectangles = [];

    for (let i = 0; i < selectNodes.length; i++){
        let node = selectNodes[i];
        rectangles.push({ id:node.getId(),x:parseInt( node.getPosition().x), width: parseInt(node.getWidth()) })
    }
    let adjustedRectangles = AdjustRectanglesWidthConsidered(rectangles);

    //按照average排列元素，从第二个开始
    for (let i = 0; i < adjustedRectangles.length; i++){
        let id = adjustedRectangles[i].id;
        let node =   nodeIntervalDic[id]
        MoveElementLeft(node,adjustedRectangles[i].x);
    }

}

/**
 *计算矩形的水平平均间隔
 * @param rectangles
 * @returns {*}
 * @constructor
 */
function AdjustRectanglesWidthConsidered(rectangles) {
    if (rectangles.length <= 2) return rectangles; // 如果矩形数量小于或等于2，不需要调整

    // 计算所有矩形的总宽度
    const totalWidth = rectangles.reduce((acc, rect) => acc + rect.width, 0);

    // 计算第一个矩形的左侧到最后一个矩形的右侧的距离
    const firstRect = rectangles[0];
    const lastRect = rectangles[rectangles.length - 1];
    const endX = lastRect.x + lastRect.width; // 计算最后一个矩形的右侧位置
    const totalSpace = endX - firstRect.x;

    // 计算可用于间隔的总空间
    const spaceForGaps = totalSpace - totalWidth;

    // 计算每两个矩形之间的间隔
    const gap = spaceForGaps / (rectangles.length - 1);

    // 更新每个矩形的位置
    let currentX = firstRect.x;
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].x = currentX;
        currentX += rectangles[i].width + gap; // 更新当前X位置，为下一个矩形的起始位置
    }

    return rectangles;
}



/**
 * 垂直平均
 * 调整的是y轴，所有元素在y轴上平均分布
 * @constructor
 */
function VerticalAvgAlignment() {
    let nodes = window.dataModel.getDatas();
    let selectCount = 0;
    let selectNodes = [];
    let nodeIntervalDic = {};
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        if (node.a("selected") === true) {
            //线段原本不依赖node的Position绘制位置，但是由于需要判断距离，这里就先设置一下位置
            if (node.a("type") === "line" || node.a("type") === "arrow") {
                let top = GRetTopPosition(node);
                let bottom = GetBottomPosition(node);
                let length = bottom - top;
                node.setHeight(length);
                node.setPosition(parseInt(node.getPosition().x), top)
            }
            selectNodes.push(node)
            selectCount = selectCount + 1;
            nodeIntervalDic[node.getId()] = node;
        }
    }
    //3个以上才能平均
    if (selectCount  <= 2){
        return;
    }

    //这里注意，需要按照x轴的顺序重新排序
    selectNodes.sort(function (a, b) {
        return parseInt( a.getPosition().y) - parseInt(b.getPosition().y);
    });

    const rectangles = [];

    for (let i = 0; i < selectNodes.length; i++){
        let node = selectNodes[i];
        rectangles.push({ id:node.getId(),y: parseInt( node.getPosition().y), height: parseInt( node.getHeight()) })
    }
    let adjustedRectangles = AdjustRectangles(rectangles);

    //按照average排列元素，从第二个开始
    for (let i = 0; i < adjustedRectangles.length; i++){
        let id = adjustedRectangles[i].id;
        let node =   nodeIntervalDic[id]
        MoveElementTop(node,adjustedRectangles[i].y);
    }

}

function AdjustRectangles(rectangles) {
    if (rectangles.length <= 2) return rectangles; // 如果矩形数量小于或等于2，不需要调整

    // 计算所有矩形的总宽度
    const totalWidth = rectangles.reduce((acc, rect) => acc + rect.height, 0);

    // 计算第一个矩形的左侧到最后一个矩形的右侧的距离
    const firstRect = rectangles[0];
    const lastRect = rectangles[rectangles.length - 1];
    const endY = lastRect.y + lastRect.height; // 计算最后一个矩形的右侧位置
    const totalSpace = endY - firstRect.y;

    // 计算可用于间隔的总空间
    const spaceForGaps = totalSpace - totalWidth;

    // 计算每两个矩形之间的间隔
    const gap = spaceForGaps / (rectangles.length - 1);

    // 更新每个矩形的位置
    let currentY = firstRect.y;
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].y = currentY;
        currentY += rectangles[i].height + gap; // 更新当前X位置，为下一个矩形的起始位置
    }

    return rectangles;
}


/**
 * Get node's right x point
 * @param node
 * @returns  right x point
 */
function GetRightPosition(node){
    let Right = -1;
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //线段获取右边的点
        let x0 = node.a("X0");
        let x1 = node.a("X1");
        if (x1 > x0){
            Right = x1;
        }else{
            Right = x0;
        }

    }else{
        let position = node.getPosition();
        let width = node.getWidth();
        Right = parseInt(position.x) + parseInt(width);
    }
    return Right;
}


/**
 * Get node's Bottom y point
 * @param node
 * @returns  Bottom y point
 */
function GetBottomPosition(node){
    let bottom = -1;
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //线段获取右边的点
        let y0 = node.a("Y0");
        let y1 = node.a("Y1");
        if (y1 > y0){
            bottom = y1;
        }else{
            bottom = y0;
        }

    }else{
        let position = node.getPosition();
        let height = node.getHeight();
        bottom = parseInt(position.y) + parseInt(height);
    }
    return bottom;
}

/**
 * Get node's Top y point
 * @param node
 * @returns  Top y point
 */
function GRetTopPosition(node){
    let top = -1;
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //线段获取右边的点
        let y0 = node.a("Y0");
        let y1 = node.a("Y1");
        if (y1 < y0){
            top = y1;
        }else{
            top = y0;
        }

    }else{
        let position = node.getPosition();
        top = parseInt(position.y);
    }
    return top;
}
/**
 * Get node's left x point
 * @param node
 * @returns  left x point
 */
function GetLeftPosition(node){
    let left = -1;
    if (node.a("type") === "line" || node.a("type") === "arrow"){
        //线段获取右边的点
        let x0 = node.a("X0");
        let x1 = node.a("X1");
        if (x1 < x0){
            left = x1;
        }else{
            left = x0;
        }

    }else{
        let position = node.getPosition();
        left = parseInt(position.x);
    }
    return left;
}

function FindMaxIndex( ) {
    let dataModel = window.dataModel;
    let nodes = dataModel.getDatas();
    let maxNum = 0;
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        let index = node.a("index");
        if (!isNaN( index)){
            if (index > maxNum){
                maxNum =index;
            }
        }
    }
    return maxNum;
}
function IntToRGB(color){
    if (isNaN(color)){
        return color;
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

/// 举例使用 console.log(rgbaToHex(14, 240, 52, 0.5)); // 输出：#0ef03480
function rgbaToHex(r, g, b, a) {
    // 将一个数字转换为十六进制字符串，并且确保结果是两位数
    function toHex(n) {
        return n.toString(16).padStart(2, '0');
    }

    // 对于透明度，我们将其乘以255，因为十六进制中没有小数
    // 然后四舍五入到最接近的整数，并转换为十六进制
    const alpha = Math.round(a * 255);

    // 转换每个分量，然后连接起来
    return "#" + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
}



///// 示例使用：
// const rgba = extractRGBorRGBA("rgba(14,240,52,0.5)");
// const rgb = extractRGBorRGBA("rgb(14,240,52)");
//
// console.log(rgba); // 输出：{r: 14, g: 240, b: 52, a: 0.5}
// console.log(rgb);  // 输出：{r: 14, g: 240, b: 52, a: 1}
function extractRGBorRGBA(colorString) {
    const rgbRegex =/rgb\((.+?),(.+?),(.+?)\)/;
    // /rgb\((.+?),(.+?),(.+?)\)/;
    // const rgbaRegex = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d*\.?\d+)\)/;
    let rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d+)?)\)$/;
    let match = colorString.match(rgbaRegex);

    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
            a: parseFloat(match[4])
        };
    }

    match = colorString.match(rgbRegex);

    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
            a: 1 // 默认 alpha 值为 1（不透明）
        };
    }

    return null; // 不匹配则返回null
}


function AppendDom(xml,name,text) {

    let node = xml.createElement(name);
    if (text !== undefined && text !== null){
        node.appendChild(xml.createTextNode(text));
    }
    xml.documentElement.appendChild(node);
    return node;
}

//从各种info里获取key对应的value
function GetInfoValueByLabel(label, infoObj) {
    // 使用find方法查找第一个符合条件的元素
    const item = infoObj.find(item => item.label === label);
    // 如果找到了元素，返回其value，否则返回undefined
    return item ? item.value : null;
}
//将value转换为string,主要用来应对值域中字符串拼接用
function ParseValue2String(infoObj){
    let ret = [];
    for (let i = 0; i < infoObj.length; i++){
        ret.push({value: infoObj[i].value.toString(),
            label: infoObj[i].label});
    }
    return ret;
}

//从各种info里获取value对应的key
function GetInfoKeyByValue(valueStr,infoObj) {
    // 使用find方法查找第一个符合条件的元素
    const item = infoObj.find(item => item.value.toString() === valueStr.toString());
    // 如果找到了元素，返回其label，否则返回undefined
    return item ? item.label : null;
}

function ParseScreenTypeStr(typeStr) {
    // 分隔 "_" 以获取屏幕类型和其余字符串
    const parts = typeStr.split("_");
    const screenType = parseInt(parts[0], 10);  // 解析屏幕类型为数值类型
    try {

        // 使用 ";" 分隔以获取长*宽和色彩类型
        const sizeAndColor = parts[1].split(";");
        const dimensions = sizeAndColor[0].split("*").map(Number); // 将长*宽解析为数值数组
        const colorType = sizeAndColor[1];  // 色彩类型

        // 返回包含解析结果的对象
        return {
            screenType: screenType,  // 屏幕类型
            width: dimensions[0],  // 长
            height: dimensions[1],   // 宽
            colorType: colorType    // 色彩类型
        };
    } catch (e) {
        console.log(typeStr + "解析异常");
        throw e;
    }
}

let FontFamilyInfo = [
    { value: "SimSun", label: '宋体' },
    { value: "SimHei", label: '黑体' },
    { value: "FangSong", label: '仿宋' },
    { value: "KaiTi", label: '楷体' }
];


let FontStyleInfo = [
    { value: 1, label: '正常' },
    { value: 2, label: '斜体' },
    { value: 3, label: '粗体' },
    { value: 4, label: '粗斜体' }
];

let RegionAInfo = [
    { value: 1, label: '左对齐' },
    { value: 2, label: '居中' },
    { value: 3, label: '右对齐' }
];

let RegionVInfo = [
    { value: 1, label: '上对齐' },
    { value: 2, label: '居中' },
    { value: 3, label: '下对齐' }
];

let AnimationInfo = [
    { value: 0, label: '一直显示' },
    { value: 1, label: '左滚' },
    { value: 2, label: '右滚' },
    { value: 3, label: '上滚' },
    { value: 4, label: '下滚' },
    { value: 5, label: '闪烁' },
    { value: 6, label: '自动滚动' }
];
let LineStyleInfo = [

    { value: "1", label: '实线' },
    { value: "2", label: '虚线' },
    { value: "3", label: '点画线' }
];
let DsInfo = [
    { value: "ds1", label: '到发数据源1',dtl: [
            { value: "C2", label: '出站车次' },
            { value: "C24", label: '终到站' },
            { value: "C43", label: '本站图定发点' },
            { value: "C2301", label: '广珠大屏检票口' },
            { value: "C2712", label: '检票屏状态优化' }
        ] },
    { value: "ds2", label: '到发数据源2',dtl: [
            { value: "C2", label: '出站车次' },
            { value: "C24", label: '终到站' },
            { value: "C43", label: '本站图定发点' },
            { value: "C2301", label: '广珠大屏检票口' },
            { value: "C2712", label: '检票屏状态优化' }
        ] },
    { value: "ds1_PEP", label: '到发数据源1',dtl: [
            { value: "C2", label: '出站车次' },
            { value: "C24", label: '终到站' },
            { value: "C43", label: '本站图定发点' },
            { value: "C2301", label: '广珠大屏检票口' },
            { value: "C2712", label: '检票屏状态优化' }
        ] },
    { value: "ds2_PEP", label: '到发数据源2',dtl: [
            { value: "C2", label: '出站车次' },
            { value: "C24", label: '终到站' },
            { value: "C43", label: '本站图定发点' },
            { value: "C2301", label: '广珠大屏检票口' },
            { value: "C2712", label: '检票屏状态优化' }
        ] },
    { value: "text01", label: '专题一' ,dtl: [] },
    { value: "text02", label: '专题二' ,dtl: [] },
    { value: "v01", label: '视频一' ,dtl: [] },
    { value: "v02", label: '视频二' ,dtl: [] },
    { value: "p01", label: '图片一' ,dtl: [] },
    { value: "p02", label: '图片二' ,dtl: [] }
];



let dvWLInfo = [
    { value: "1", label: '本列' },
    { value: "2", label: '整行' }
]

let selLanguage = [
    { value: "C", label: '汉语' },
    { value: "K", label: '朝鲜语' },
    { value: "W", label: '维吾尔语' },
    { value: "E", label: '英语' },
    { value: "F", label: '法语' },
    { value: "S", label: '西班牙语' },
    { value: "P", label: '葡萄牙语' },
    { value: "A", label: '阿拉伯语' }
]

function GetDsDtlByValue(value){
    try{
        return DsInfo.find(item => item.value === value).dtl;
    }catch {
        return []
    }
}

let XmlTagDesc = {
    "DT":"数据表格",
    "ST":"静态表格",
    "SW":"文本",
    "CL":"时钟",
    "SN":"专题",
    "PT":"图片",
    "VD":"视频",
    "RT":"矩形",
    "CR":"椭圆",
    "AR":"箭头线",
    "LN":"直线"
}

let TimeOffsetDWInfo = [
    {
        value: '年', label: '年'
    },
    {
        value: '月', label: '月'
    },
    {
        value: '日', label: '日'
    },
    {
        value: '时', label: '时'
    }
    ,
    {
        value: '分', label: '分'
    }
    ,
    {
        value: '秒', label: '秒'
    }
]

// 元素置顶或置底，需要所有元素重新排列，
// 先找到该元素在所有元素中的位置,并记录
// 将除了该元素外所有元素z-index 从10开始，每层+10的间隔重新设置
function Element2TopBottom(id,isTop) {
    let nodes = window.dataModel.getDatas();
    //新建一个字典
    let dicLength = 0;
    let dict = {};
    let dicNodes = {};
    let maxIndex = 0;
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        let element = node.s("element");
        //先获取现有顺序
        if (element !== undefined && element !== null) {
            let nodId = node.getId();
            //排序用
            let nodeIndex = parseInt( node.a("index"));
            if (isNaN(nodeIndex)){
                nodeIndex = 0;
            }
            dict[nodId] = nodeIndex;
            //字典保存，方便获取
            dicNodes[nodId] = node;
            dicLength += 1;
            if (nodeIndex > maxIndex ){
                maxIndex = nodeIndex;
            }
        }
    }
    if (isTop){
        //置顶
        dict[id] = maxIndex + 10;
    }else{
        //置底
        dict[id] = -10;
    }
    console.log(id + "--------"+isTop+"-----------")
    //将所有元素的z-index从10开始，每层+10的间隔重新设置
    //dict 按照value升序排序
// 转换、排序、重新构造对象
    let sortedEntries = Object.entries(dict).sort(([, valueA], [, valueB]) => valueA - valueB);
    // dict = Object.fromEntries(sortedEntries);
    //遍历dic
    let startIndex = 10;
    let currIndex = 0;
    for(let i=0;i<sortedEntries.length;i++) {
        let node = dicNodes[sortedEntries[i][0]];
        if (node === null || node === undefined){
            continue;
        }
        let domArr = [];
        let element =  node.s("element");
        if (element === null){
            continue;
        }
        //基本元素可能会有多个，比如线一就有3个
        let elDom = element.GetRootDom();
        if( Array.isArray(elDom)){
            domArr = elDom;
        }else{
            domArr.push(elDom);
        }

        let index = (currIndex + 1) * startIndex;

        //如果有多个，则按照+1赋值顺序，最多中间插入10个
        for (let i = 0; i < domArr.length; i++){
            domArr[i].css("z-index", index + i);
            console.log(domArr[i].attr("id") + ":z-index:" + domArr[i].css("z-index"))
        }
        node.a("index" , index);
        currIndex += 1;

    }

}

function StoreNodes(nodes){
    let dict = {};
    let dicNodes = {};
    let maxIndex = 0;
    let retArray = [];
    for (let i = 0; i < nodes._as.length; i++) {
        let node = nodes.get(i);
        let element = node.s("element");
        //先获取现有顺序
        if (element !== undefined && element !== null) {
            let nodId = node.getId();
            //排序用
            let nodeIndex = parseInt(node.a("index"));
            if (isNaN(nodeIndex)){
                nodeIndex = 0;
            }
            dict[nodId] = nodeIndex;
            //字典保存，方便获取
            dicNodes[nodId] = node;
            if (nodeIndex > maxIndex ){
                maxIndex = nodeIndex;
            }
        }
    }

    let sortedEntries = Object.entries(dict).sort(([, valueA], [, valueB]) => valueA - valueB);
    for(let i=0;i<sortedEntries.length;i++) {
        let node = dicNodes[sortedEntries[i][0]];
        retArray.push(node);
    }
    return retArray;
}
