//import {EmText} from "./EmText.js";
import {formatDate, ctlMoveLeft} from "./Common.js";
import {CtlDClock} from "./CtlDClock.js";
import {CtlAClock} from "./CtlAClock.js";


export class EmClock {

    constructor(backDiv, node) {
        this.RootDom = null;
        this.backDiv = backDiv;
        this.node = node;
       // this.emText = new EmText(backDiv, node);
        node.s("element", this);
        window.dataModel.add(node);
    }
    GetRootDom(){
        return this.RootDom;
    }
    CreateEm() {
        const self = this;
        let $backDiv = this.backDiv;
        let node = this.node;
        let id = node.getId();
        $("#" + id).remove();
        let position = node.getPosition();
        // let x0 = position.x;
        // let y0 = position.y;
        let w =parseInt(node.getWidth());
        let h = parseInt(node.getHeight());
        let cp = parseInt(node.a("CP"));
        let of = parseInt(node.a("OF"));
        let dw = node.a("DW");
        let f = node.a("F");
        let bc = node.a("BC");
        let tc = node.a("TC");
        let tt = node.a("TT");
        let ts = parseInt( node.a("TS"));
        //字形 形状：1-正常；2-斜体；3-粗体；4-粗体+斜体；
        let tx = parseInt( node.a("TX"));
        let ra = parseInt(node.a("RA"));
        let va =  parseInt(node.a("VA"));
        //0-一直显示；1-左滚；2-右滚；3-上滚；4-下滚；5-闪烁；仅当时钟类型为0时有效；
        let a =  parseInt(node.a("A"));
        let s =  parseInt( node.a("S"));
        let hrc = node.a("HRC");
        let mic = node.a("MIC");
        let scc = node.a("SCC");
        let slc = node.a("SLC");
        let bdrc = node.a("BDRC");
        let bdrw = parseInt(node.a("BDRW"));
        if (s === 0){
            a = 0;
        }
        let index =   parseInt(node.getAttr("index"));
        //数字时钟
        if (cp === 0){
            let  showObj = {
                type:CtlDClock.ctlTypeName,
                format:f,
                offset:of,
                unit:dw,
                id:id,
                width:w,
                height:h,
                rect:{
                    left:position.x,
                    right:position.x + w,
                    top:position.y,
                    bottom:position.y + h,
                },
                textStyle:{
                    backColor:bc,
                    textColor:tc,
                    fontName:tt,
                    fontSize:ts,
                    fontStyle:tx,
                    rAlign:ra,
                    vAlign:va,
                    animation:a,
                    speed:s
                }
            } ;
           let emCtl = new  CtlDClock(showObj);
           let $clockDiv = emCtl.CreatDom($backDiv);
            emCtl.SetMove();
           //      backDiv.attr("id", "back_" + id);
        }else{

            h = w;
            node.setHeight(w);


            let  showObj = {
                type:CtlAClock.ctlTypeName,
                format:f,
                offset:of,
                unit:dw,
                id:id,
                width:w,
                height:h,
                rect:{
                    left:position.x,
                    right:position.x + w,
                    top:position.y,
                    bottom:position.y + h,
                },
                backColor:bc,
                horColor:hrc,
                minColor:mic,
                secColor:scc,
                scaleColor:slc,
                borderColor:bdrc,
                borderWidth:bdrw
            } ;
            let emCtl = new  CtlAClock(showObj);
            let $clockDiv =  emCtl.CreatDom($backDiv);
            emCtl.SetMove();

        }
        let $clockBack = $("#" + id);
        $clockBack.css('z-index', index);
        $clockBack.on('mousedown', function (e) {
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
            SelectElement($clockBack, node);

        });
        $clockBack.on('mouseup', function (e) {
            self.CreateEm();
            //设置鼠标为正常模式
            $("body").css("cursor", "auto");
            //选择
            //SelectElement($clockBack, node);
        });

        if (!IsView && !node.a("lock")) {
            $clockBack.draggable({
                drag: function (event, ui) {
                    node.setPosition(Math.round(ui.position.left / window.scaleIncrement), Math.round(ui.position.top / window.scaleIncrement));
                    SetSelPosition(id,ui.position.left, ui.position.top)
                    self.InitPrototype();
                }
            });

            $clockBack.resizable({
                handles: "e,s", // 只在东边（右边）添加一个拖动把手
                minWidth: 1,
                resize: function (event, ui) {
                    node.setWidth(Math.round(ui.element.outerWidth()));
                    node.setHeight(Math.round(ui.element.outerHeight()));
                    SetSelSize(id,ui.element.outerWidth(),ui.element.outerHeight());
                    self.InitPrototype();
                }
            });

            $clockBack.on('contextmenu', function (e) {
                let option =
                    {
                        menus: [
                            {
                                name: "置顶",
                                onClick: function (e) {
                                    console.log("置顶 clicked");
                                    Element2TopBottom(self.node.getId(), true);
                                }
                            },
                            {
                                name: "置底",
                                onClick: function (e) {
                                    console.log("置底 clicked");
                                    Element2TopBottom(self.node.getId(), false);
                                }
                            },
                            {
                                name: "删除",
                                onClick: function (e) {
                                    //1.从背景板上删除控件。2.从dateMode删除对应的数据
                                    $clockBack.remove();
                                    window.dataModel.remove(node)
                                    console.log("删除 时钟控件 " + $clockBack.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });
        }
        this.RootDom = $clockBack;
        SetSelSize(id,this.RootDom.width(),this.RootDom.height())
        SetSelPosition(id,this.RootDom.position().left,this.RootDom.position().top)
        self.InitPrototype();
        return $clockBack;
    }

    ExportXml() {
        let node = this.node;
        let position = node.getPosition();
        let id = node.getId();

        let xml = XmlParser.parseFromString("<CL/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "TP", 1);
        AppendDom(xml, "X0", position.x);
        AppendDom(xml, "Y0", position.y);
        AppendDom(xml, "W", node.getWidth());
        AppendDom(xml, "H", node.getHeight());
        AppendDom(xml, "CP", node.a("CP"));
        AppendDom(xml, "F", node.a("F"));
        AppendDom(xml, "BC", node.a("BC"));
        AppendDom(xml, "TC", node.a("TC"));
        AppendDom(xml, "TT", node.a("TT"));
        AppendDom(xml, "TS", node.a("TS"));
        AppendDom(xml, "TX", node.a("TX"));
        AppendDom(xml, "RA", node.a("RA"));
        AppendDom(xml, "VA", node.a("VA"));
        AppendDom(xml, "DW", node.a("DW"));
        AppendDom(xml, "OF", node.a("OF"));
        AppendDom(xml, "A", node.a("A"));
        AppendDom(xml, "S", node.a("S"));
        AppendDom(xml, "HRC", node.a("HRC"));
        AppendDom(xml, "MIC", node.a("MIC"));
        AppendDom(xml, "SCC", node.a("SCC"));
        AppendDom(xml, "SLC", node.a("SLC"));
        AppendDom(xml, "BDRC", node.a("BDRC"));
        AppendDom(xml, "BDRW", node.a("BDRW"));
        AppendDom(xml, "index", node.a("index"));

        return xml.documentElement;
    }


    static CreateNode(xmlNode, index) {
        let ctlPara = this.ReadParaFromXml(xmlNode);

        //创建Node
        let node = new ht.Node();

        node.setId(ctlPara.id);
        node.a({
            name:"时钟",
            selected: false,
            lock: false,
            type:"image",
            CP: ctlPara.cp,
            F: ctlPara.f,
            BC: ctlPara.bc,
            TC: ctlPara.tc,
            TT: ctlPara.tt,
            TS: ctlPara.ts,
            TX: ctlPara.tx,
            RA: ctlPara.ra,
            VA: ctlPara.va,
            DW: ctlPara.dw,
            OF: ctlPara.of,
            A: ctlPara.a,
            S: ctlPara.s,
            HRC: ctlPara.hrc,
            MIC: ctlPara.mic,
            SCC: ctlPara.scc,
            SLC: ctlPara.slc,
            BDRC: ctlPara.bdrc,
            BDRW: ctlPara.bdrw,
            index: index,
            T: ctlPara.T
        });
        node.setPosition(ctlPara.x0, ctlPara.y0);
        node.setWidth(ctlPara.w);
        node.setHeight(ctlPara.h);
        return node;
    }

    static ReadParaFromXml(xmlNode) {
        let defFormat = "yyyy-MM-dd HH:mm:ss 星期W";
        let ctlPara = {
            x0: 0,
            y0: 0,
            w: 100,
            h: 50,
            f: defFormat,
            bc: "#000000FF",
            tc: "#FF0000FF",
            tt: FontFamilyInfo[0].value,
            ts: 20,
            tx: 1,
            ra: 2,
            va: 2,
            dw: "",
            of: 0,
            a: 0,
            s: 10,
            hrc: "#0d0d0d",
            mic: "#15b9bb",
            scc: "#ffa400",
            slc: "#16ff00",
            bdrc: "#000000",
            bdrw: 1,
            cp: 0,
            id: GenerateSnowflakeId(),
            T: formatDate(defFormat, new Date())
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
            ctlPara.x0 = parseInt($(xmlNode).find('X0').text());
            ctlPara.y0 = parseInt($(xmlNode).find('Y0').text());
            ctlPara.w = parseInt( $(xmlNode).find('W').text());
            ctlPara.h = parseInt( $(xmlNode).find('H').text());
            ctlPara.cp = $(xmlNode).find('CP').text();
            ctlPara.f = $(xmlNode).find('F').text();
            ctlPara.t = formatDate(ctlPara.f, new Date());
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
            strTemp = $(xmlNode).find('TT').text();
            strTemp = GetInfoValueByLabel(strTemp, FontFamilyInfo);
            if (strTemp !== null) {
                ctlPara.tt = strTemp;
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

            ctlPara.dw = $(xmlNode).find('DW').text();

            strTemp = $(xmlNode).find('OF').text();
            try {
                ctlPara.of = parseInt(strTemp);
            } catch (ex) {
                console.log("时钟转换TS:" + strTemp + "到int类型异常" + ex);
            }

            try{
                ctlPara.a = parseInt($(xmlNode).find('A').text());
            }catch (ex){
                console.log("时钟转换A:" + strTemp + "到int类型异常" + ex);
            }

            try{
                ctlPara.s = parseInt($(xmlNode).find('S').text());
            }catch (ex){
                console.log("时钟转换S:" + strTemp + "到int类型异常" + ex);
            }

            strTemp = $(xmlNode).find('HRC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.hrc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.hrc = strTemp;
                }
            }

            strTemp = $(xmlNode).find('MIC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.mic = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.mic = strTemp;
                }
            }

            strTemp = $(xmlNode).find('SCC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.scc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.scc = strTemp;
                }
            }
            strTemp = $(xmlNode).find('SLC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.slc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.slc = strTemp;
                }
            }
            strTemp = $(xmlNode).find('BDRC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.bdrc = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.bdrc = strTemp;
                }
            }

            strTemp = $(xmlNode).find('BDRW').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    ctlPara.bdrw = IntToRGB(parseInt(strTemp));
                } else {
                    ctlPara.bdrw = strTemp;
                }
            }
        }
        return ctlPara;
    }

    
    InitPrototype() {
     
        let data = this.node;
        let self = this;
        let elFrame = window.propertyFrame;

        elFrame.contentWindow.ClearProperty();

        CreatBaseProperty(null, self);
        let dsArr = [
            {
                value: 0, label: '数字'
            },
            {
                value: 1, label: '模拟'
            }
        ]
        elFrame.contentWindow.AddProperty("类型", data.a("CP"), dsArr, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("CP", value);
            self.CreateEm();
        })

        let cp = data.a("CP");

        if (parseInt(cp) === 0) {
            //数字时钟显示的属性
            elFrame.contentWindow.AddProperty("时钟属性", data.a("F"), null, "string", function (value) {
                console.log("new value:" + value);
                data.a("F", value);
                data.a("T", formatDate(value, new Date()))
                self.CreateEm();
            })

            let color = data.a("BC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("背景色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("BC", value);
                self.CreateEm();
            })


            color = data.a("TC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("文字颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("TC", value);
                self.CreateEm();
            })


            elFrame.contentWindow.AddProperty("字体", data.a("TT"), FontFamilyInfo, "dropDownList_font", function (value) {
                console.log("new value:" + value);
                data.a("TT", value);
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("字号", data.a("TS"), null, "int", function (value) {
                console.log("new value:" + value);
                data.a("TS", value);
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("字形", data.a("TX"), FontStyleInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("TX", parseInt(value));
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("横对其方式", data.a("RA"), RegionAInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("RA", parseInt(value));
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("竖对其方式", data.a("VA"), RegionVInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("VA", parseInt(value));
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("偏移单位", data.a("DW"), TimeOffsetDWInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("DW", value);
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("偏移量", data.a("OF"), null, "int", function (value) {
                console.log("new value:" + value);
                data.a("OF", value);
                self.CreateEm();
            })

            var anArr = [
                {value: 0, label: '一直显示'},
                {value: 1, label: '左滚'},
                {value: 6, label: '自动滚动'}
            ]
            elFrame.contentWindow.AddProperty("动画效果", data.a("A"), anArr, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("A", parseInt(value));
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("动画速率", data.a("S"), null, "int", function (value) {
                console.log("new value:" + value);
                data.a("S", value);
                self.CreateEm();
            })

        } else {
            
            elFrame.contentWindow.AddProperty("偏移单位", data.a("DW"), TimeOffsetDWInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                data.a("DW", value);
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("偏移量", data.a("OF"), null, "int", function (value) {
                console.log("new value:" + value);
                data.a("OF", value);
                self.CreateEm();
            })
            let color = data.a("BC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("表盘颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("BC", value);
                self.CreateEm();
            })

            color = data.a("HRC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("时针颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("HRC", value);
                self.CreateEm();
            })

            color = data.a("MIC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("分针颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("MIC", value);
                self.CreateEm();
            })

            color = data.a("SCC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("秒针颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("SCC", value);
                self.CreateEm();
            })


            color = data.a("SLC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("刻度颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("SLC", value);
                self.CreateEm();
            })

            color = data.a("BDRC");
            if (!isNaN(color)) {
                color = IntToRGB(color)
            }
            elFrame.contentWindow.AddProperty("边圈颜色", color, null, "color", function (value) {
                console.log("new value:" + value);
                data.a("BDRC", value);
                self.CreateEm();
            })

            elFrame.contentWindow.AddProperty("边圈宽度", data.a("BDRW"), null, "int", function (value) {
                console.log("new value:" + value);
                data.a("BDRW", value);
                self.CreateEm();
            })


        }
     

    }
}
