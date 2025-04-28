import {ctlMoveLeft, ctlMoveTop} from "./Common.js";

export class EmText {


    constructor(backDiv, node) {
        this.RootDom = null;
        this.backDiv = backDiv;
        node.s("element", this);
        this.node = node;
        window.dataModel.add(node);
    }
    GetRootDom(){
        return this.RootDom;
    }
    MouseDownHandler(handler) {
        this.handler = handler;
    }

    CreateEm() {

        //用于创建上下文引用
        const self = this;
        let $backDiv = this.backDiv;
        let node = this.node;
        let id = node.getId();
        $("#" + id).remove();
        let position = node.getPosition();
        let w = parseInt(node.getWidth());
        let h = parseInt(node.getHeight());
        let t = node.a("T");
        let bc = node.a("BC");
        let tc = node.a("TC");
        let tt = node.a("TT");
        let ts = parseInt(node.a("TS"));
        //字形 形状：1-正常；2-斜体；3-粗体；4-粗体+斜体；
        let tx = parseInt(node.a("TX"));
        let ra = parseInt(node.a("RA"));
        let va = parseInt(node.a("VA"));
        //0-一直显示；1-左滚；2-右滚；3-上滚；4-下滚；5-闪烁；仅当时钟类型为0时有效；
        let a = parseInt(node.a("A"));
        let s = parseInt(node.a("S"));
        if (s === 0) {
            a = 0;
        }
        let index = parseInt(node.getAttr("index"));

        let $textBack = $(createDiv(id, bc));
        let $textDiv = $(createDiv("text_" + id, '#00000000'));
        $textDiv.appendTo($textBack);
        $textBack.offset({top: position.y, left: position.x});
        $textBack.css("box-sizing", "border-box");
        $textBack.css("overflow", "hidden");
        $textBack.css('z-index', index);
        $textBack.width(w);
        $textBack.height(h);
        $textDiv.css("color", tc);
        //设置textDiv的字体
        $textDiv.css("font-family", tt);
        $textDiv.css("font-size", parseInt(ts));
        $textDiv.css("white-space", "nowrap");
        //设置鼠标形状为默认
        $textDiv.css("cursor", "default");

        //$textDiv.css("overflow", "hidden");
        $textDiv.html(t);
        $textBack.on('mousedown', function (e) {
            hideMenu(e);
            // 处理点击事件的代码
            console.log(id + '元素被点击了！');

            //node.getAttr("sex");node.s("body.color");node.getPosition()
            console.log(node);
            //propertyView = new ht.widget.PropertyView(dataModel);
            self.InitPrototype();

            //这里创建属性面板，并绑定数据
            window.dataModel.sm().ss(node);
            //选择
            // SelectElement($("#" + id), node);
            //触发事件，主要用户通知动态表格
            if (self.handler !== undefined) {
                self.handler(node);
            }
            SelectElement($textBack, node);
        });

        //设置textDiv 的字形 形状：1-正常；2-斜体；3-粗体；4-粗体+斜体；
        switch (tx) {
            case 1:
                $textDiv.css("font-weight", "normal");
                $textDiv.css("font-style", "normal");
                break;
            case 2:
                $textDiv.css("font-weight", "normal");
                $textDiv.css("font-style", "italic");
                break;
            case 3:
                $textDiv.css("font-weight", "bold");
                $textDiv.css("font-style", "normal");
                break;
            case 4:
                $textDiv.css("font-weight", "bold");
                $textDiv.css("font-style", "italic");
        }
        //绘制在画布上
        $backDiv.append($textBack);

        //横对齐
        if ($textDiv.width() < $textBack.width()) {
            //计算居中的位置
            let leftWidth = w - $textDiv.width();
            let start = leftWidth / 2;

            //宽度< 展示的宽度，才能设置左中右对齐
            switch (ra) {
                case 1: // 左对齐
                    $textDiv.css({
                        'left': '0',
                        'right': '',
                    });
                    break;
                case 2: // 居中对齐
                    $textDiv.css({
                        'left': start + 'px',
                        'right': '',
                    });
                    break;
                case 3: // 右对齐
                    $textDiv.css({
                        'left': '',
                        'right': '0',
                    });
                    break;
                default:
            }
        }
        //竖对齐
        if ($textDiv.height() < $textBack.height()) {
            let leftHeight = h - $textDiv.height();
            let start = leftHeight / 2;
            switch (va) {
                case 1: // 上对齐
                    $textDiv.css({
                        'top': '0',
                        'bottom': ''
                    });
                    break;
                case 2: // 居中对齐
                    $textDiv.css({
                        'top': start + 'px',
                        'bottom': ''
                    });
                    break;
                case 3: // 下对齐
                    $textDiv.css({
                        'top': '',
                        'bottom': '0'
                    });
                    break;
                default:
                    console.log('无效的对齐参数。请使用1（上对齐）、2（居中对齐）或3（下对齐）。');
            }
        }

        //0-一直显示；1-左滚；2-右滚；3-上滚；4-下滚；5-闪烁；仅当时钟类型为0时有效；
        //6-自动滚动
        let start = 0;
        let end = 0;
        let actualDurationMs = 10;
        let leftRight = true;
        let needMove = true;

        //移动
        switch (a) {
            case 0: // 静态
                needMove = false;
                break;
            case 1: // 左滚动
                start = $textBack.width();
                end = $textDiv.width() * -1;
                leftRight = true;
                break;
            case 2: // 右滚动
                start = $textDiv.width() * -1;
                end = $textBack.width();
                leftRight = true;
                break;
            case 3: // 上滚动
                start = $textBack.height();
                end = $textDiv.height() * -1;
                leftRight = false;
                break;
            case 4: // 下滚动
                start = $textDiv.height() * -1;
                end = $textBack.height();
                leftRight = false;
                break;
            case 5: // 闪烁
                needMove = false;
                //todo:闪烁特效
                break;
            case 6: // 自动滚动(左)
                if ($textDiv.width() > $textBack.width()) {
                    start = $textBack.width();
                    end = $textDiv.width() * -1;
                    leftRight = true;
                } else {
                    needMove = false;
                }
                break;
            default:
                needMove = false;
                console.log('无效的移动参数。请使用1（左滚）、2（右滚）、3（上滚）、4（下滚）、5（闪烁）或6（自动滚动）。');
        }

        if (needMove) {
            let length = Math.abs(end - start);
            actualDurationMs = Math.ceil(length / s * 1000);
            if (leftRight) {
                ctlMoveLeft($textDiv, start, end, actualDurationMs)
            } else {
                ctlMoveTop($textDiv, start, end, actualDurationMs);
            }
        }
        $textBack.on('mouseup', function (e) {
            //设置鼠标为正常模式
            $("body").css("cursor", "auto");
            self.CreateEm();
            if (self.handler !== undefined) {
                self.handler(node);
            }
        });
        if (!IsView && !node.a("lock")) {
            $("#" + id).draggable({
                drag: function (event, ui) {
                    //这里需要加入限制，不能移出画布
                    let left = ui.position.left / window.scaleIncrement;
                    let top = ui.position.top / window.scaleIncrement;
                    let width = ui.helper.width();
                    let height = ui.helper.height();

                    if (left < 0) {
                        left = 0;
                    }
                    if (top < 0) {
                        top = 0;
                    }
                    if (left + width > ScreenWidth) {
                        left = ScreenWidth - width;
                    }
                    if (top + height > ScreenHeight) {
                        top = ScreenHeight - height;
                    }

                   
                    
                    node.setPosition(Math.round(left), Math.round(top));
                    SetSelPosition(id, left, top)
                    self.InitPrototype();
                    if (self.handler !== undefined) {
                        self.handler(node);
                    }
                }
            });

            if (!IsView && !node.a("lock")) {
                $textBack.resizable({
                    handles: "e,s", // 只在东边（右边）添加一个拖动把手
                    minWidth: 1,
                    resize: function (event, ui) {

                        node.setWidth(Math.round(ui.element.outerWidth()));
                        node.setHeight(Math.round(ui.element.outerHeight()));
                        SetSelSize(id, ui.element.outerWidth(), ui.element.outerHeight());
                        self.InitPrototype();
                        if (self.handler !== undefined) {
                            self.handler(node);
                        }
                    }
                });
            }


            $textBack.on('contextmenu', function (e) {
                if (IsView) {
                    return;
                }

                let option =
                    {
                        menus: [
                            {
                                name: "置顶",
                                onClick: function (e) {
                                    console.log("置顶 clicked");
                                    Element2TopBottom(self.node.getId(), true);
                                },
                            },
                            {
                                name: "置底",
                                onClick: function (e) {
                                    console.log("置底 clicked");
                                    Element2TopBottom(self.node.getId(), false);
                                },
                            },
                            {
                                name: "删除",
                                onClick: function (e) {
                                    //1.从背景板上删除控件。2.从dateMode删除对应的数据
                                    CleanSelection(self.RootDom, node);
                                    $textBack.remove();
                                    window.dataModel.remove(node)
                                    console.log("删除 文本控件 " + $textBack.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });
        }
        this.RootDom = $textBack;
        SetSelSize(id, $textBack.width(), $textBack.height());
        SetSelPosition(id, $textBack.position().left, $textBack.position().top);
        self.InitPrototype();
        return $textBack;
    }



    ExportXml() {
        let node = this.node;
        let position = node.getPosition();
        let id = node.getId();

        let xml = XmlParser.parseFromString("<SW/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "T", node.a("T"));
        AppendDom(xml, "TP", 4);
        AppendDom(xml, "X0", parseInt(position.x));
        AppendDom(xml, "Y0", parseInt(position.y));
        AppendDom(xml, "W", node.getWidth());
        AppendDom(xml, "H", node.getHeight());
        AppendDom(xml, "BC", node.a("BC"));
        AppendDom(xml, "TC", node.a("TC"));
        AppendDom(xml, "TT", node.a("TT"));
        AppendDom(xml, "TS", node.a("TS"));
        AppendDom(xml, "TX", node.a("TX"));
        AppendDom(xml, "RA", node.a("RA"));
        AppendDom(xml, "VA", node.a("VA"));
        AppendDom(xml, "A", node.a("A"));
        AppendDom(xml, "S", node.a("S"));
        AppendDom(xml, "index", node.a("index"));

        return xml.documentElement;
    }

    static ReadParaFromXml(xmlNode) {
        let ctlPara = {
            x0: 0,
            y0: 0,
            w: 100,
            h: 50,
            t: "静态文本",
            bc: "#000000FF",
            tc: "#FF0000FF",
            tt: FontFamilyInfo[0].value,
            ts: 20,
            tx: 1,
            ra: 2,
            va: 2,
            a: 0,
            s: 10,
            id: GenerateSnowflakeId()
        }

        if (window.backDiv !== undefined) {
            if (window.backDiv.width() < ctlPara.w) {
                ctlPara.w = window.backDiv.width();
            }
            if (window.backDiv.height() < ctlPara.h) {
                ctlPara.h = window.backDiv.height();
            }
        }

        if (xmlNode !== undefined && xmlNode !== null) {
            ctlPara.id = $(xmlNode).find('ID').text();
            //读取通用x0,y0,w,h
            ctlPara.x0 = $(xmlNode).find('X0').text();
            ctlPara.y0 = $(xmlNode).find('Y0').text();
            ctlPara.w = $(xmlNode).find('W').text();
            ctlPara.h = $(xmlNode).find('H').text();
            ctlPara.t = $(xmlNode).find('T').text();

            let strTemp = $(xmlNode).find('BC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.bc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.bc = strTemp;
                }
            }
            strTemp = $(xmlNode).find('TC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.tc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.tc = strTemp;
                }
            }
            let ttStr = $(xmlNode).find('TT').text();
            strTemp = GetInfoValueByLabel(ttStr, FontFamilyInfo);
            if (strTemp !== null) {
                ctlPara.tt = strTemp;
            }else{
                let findLabel =  GetInfoKeyByValue(ttStr, FontFamilyInfo)
                if (findLabel !== null){
                    ctlPara.tt = ttStr;
                }else{
                    ctlPara.tt = FontFamilyInfo[0].value;
                }
            }
            strTemp = $(xmlNode).find('TS').text();
            try {
                ctlPara.ts = parseInt(strTemp);
            } catch (ex) {
                console.log("时钟转换TS:" + strTemp + "到int类型异常" + ex);
            }

            try{
                ctlPara.tx = parseInt($(xmlNode).find('TX').text());
            }catch (ex){
                console.log("时钟转换TX:" + strTemp + "到int类型异常" + ex);
            }

            try{
                ctlPara.ra =parseInt($(xmlNode).find('RA').text());
            }catch (ex){
                console.log("时钟转换RA:" + strTemp + "到int类型异常" + ex);
            }

            try{
                ctlPara.va = parseInt($(xmlNode).find('VA').text());
            }catch (ex){
                console.log("时钟转换VA:" + strTemp + "到int类型异常" + ex);
            }


            strTemp = $(xmlNode).find('A').text();
            strTemp = parseInt(strTemp);
            if (strTemp !== null) {
                ctlPara.a = strTemp;
            }

            strTemp = $(xmlNode).find('S').text();
            try {
                ctlPara.s = parseInt(strTemp);
            } catch (ex) {
                console.log("时钟转换s:" + strTemp + "到int类型异常" + ex);
            }
        }
        return ctlPara;
    }
    static CreateNode(xmlNode, index) {
        let ctlPara = this.ReadParaFromXml(xmlNode);

        //创建Node
        let node = new ht.Node();
        node.setName('静态文本');

        node.setId(ctlPara.id);

        node.a({
            name:"静态文本",
            selected: false,
            lock: false,
            type:"text",
            T: ctlPara.t,
            BC: ctlPara.bc,
            TC: ctlPara.tc,
            TT: ctlPara.tt,
            TS: ctlPara.ts,
            TX: ctlPara.tx,
            RA: ctlPara.ra,
            VA: ctlPara.va,
            A: ctlPara.a,
            S: ctlPara.s,
            index: index
        });
        node.setPosition(ctlPara.x0, ctlPara.y0);
        node.setWidth(ctlPara.w);
        node.setHeight(ctlPara.h);
        return node;
    }

    InitPrototype(parent) {
        let data = this.node;
        let self = this;
        let elFrame = window.propertyFrame;
        elFrame.contentWindow.ClearProperty();
        CreatBaseProperty(null, self);

        elFrame.contentWindow.AddProperty("文本", data.a("T"), null, "string", function (value) {
            console.log("new value:" + value);
            let old = data.a("T");
            if (old === value) {
                return;
            }
            data.a("T", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })


        let color = data.a("BC");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("背景色", color, null, "color", function (value) {
            console.log("new value:" + value);
            data.a("BC", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        color = data.a("TC");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("文字颜色", color, null, "color", function (value) {
            console.log("new value:" + value);
            data.a("TC", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        elFrame.contentWindow.AddProperty("字体", data.a("TT"), FontFamilyInfo, "dropDownList_font", function (value) {
            console.log("new value:" + value);
            data.a("TT", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        elFrame.contentWindow.AddProperty("字号", data.a("TS"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("TS", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        elFrame.contentWindow.AddProperty("字形", data.a("TX"), FontStyleInfo, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("TX", parseInt(value));
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })


        elFrame.contentWindow.AddProperty("横对其方式", data.a("RA"), RegionAInfo, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("RA", parseInt(value));
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        elFrame.contentWindow.AddProperty("竖对其方式", data.a("VA"), RegionVInfo, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("VA", parseInt(value));
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })


        elFrame.contentWindow.AddProperty("动画效果", data.a("A"), AnimationInfo, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("A", parseInt(value));
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

        elFrame.contentWindow.AddProperty("动画速率", data.a("S"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("S", value);
            if (parent === null || parent === undefined){
                self.CreateEm();
            }else{
                parent.CreateEm();
            }
        })

    }
}
