import {StTable} from "./StTable.js";


function InitDvProperty(elFrame, self, dtlName, colIndex, dsDtlArr, cid, colNumber, $dlgDiv) {
    let dvStr = self.node.a(dtlName)[colIndex].DV
    //这里需要拆分值域
    let dvArr = [];
    if (dvStr !== undefined && dvStr !== "") {
        if (dvStr.indexOf(",") > 0) {
            dvArr = dvStr.split(",");
        } else {
            dvArr.push(dvStr);
        }
    }


    elFrame.contentWindow.ClearProperty();

    elFrame.contentWindow.AddProperty("编号", self.node.a(dtlName)[colIndex].LN, null, "label", function (value) {
        console.log("new value:" + value);
        self.node.a(dtlName)[colIndex].LN = value;
    })

    elFrame.contentWindow.AddProperty("数据", self.node.a(dtlName)[colIndex].DATALIST, dsDtlArr, "dropDownList", function (value) {
        console.log("new value:" + value);
        self.node.a(dtlName)[colIndex].DATALIST = value;
        let find = dsDtlArr.find(item => item.value === value);
        //同时更新属性name
        let name = "[" + value + "]" + find.label;
        //window.propertyFrame.contentWindow.ReNameProperty(cid, name)
        let btn = window.propertyFrame.contentWindow.GetPropertyValue(cid);
        $(btn).text(name);
    })

    //值域
    for (let i = 0; i < dvArr.length; i++) {
        let dvInfo = dvArr[i];
        let dvId = "dvDtl_Col_" + colNumber + "_" + i
        let $text = $('<input/>');
        $text.val(dvInfo)
        $text.width("100%");
        $text.height("100%");
        //设置 $text 为只读
        $text.attr('readonly', true);
        //添加双击事件
        $text.on('dblclick', function (event) {
            // 在这里编写你想要执行的操作
            setTimeout(() => {
                self.openDvDialog(colNumber, $dlgDiv, i, cid);
            }, 100);
        });

        let $elObj = elFrame.contentWindow.AddPropertyUseId(dvId, "值域", "", $text.get(0), "custom", function () {
        })

        $elObj.on('contextmenu', function (e) {
            hideMenu(e);
            let option =
                {
                    menus: [
                        {
                            name: "上移",
                            onClick: function (e) {
                                console.log("值域上移 clicked");
                                let dvInfo = MoveUpDownDvObj(i,self.node.a(dtlName)[colIndex],true);
                                self.node.a(dtlName)[colIndex] = null;
                                self.node.a(dtlName)[colIndex] = dvInfo;
                                InitDvProperty(elFrame, self, dtlName, colIndex, dsDtlArr, cid,  colNumber, $dlgDiv);
                            },
                        },
                        {
                            name: "下移",
                            onClick: function (e) {
                                console.log("值域下移 clicked");
                                self.node.a(dtlName)[colIndex] = MoveUpDownDvObj(i,self.node.a(dtlName)[colIndex],false);
                                InitDvProperty(elFrame, self, dtlName, colIndex, dsDtlArr, cid,  colNumber, $dlgDiv);
                            },
                        }

                    ]
                }
            if (dvArr.length > 1) {
                if (i === 0) {
                    option.menus.splice(0, 1);
                } else if (i === dvArr.length - 1) {
                    option.menus.splice(1, 1);
                }
                let offset = $(elFrame).offset();
                e.clientY = e.clientY + offset.top;
                e.clientX = e.clientX + offset.left;
                showMenu(e, option);
            }
        });

    }

    //没有值域，直接显示列属性
    if (dvArr.length === 0) {
        //值域背景色
        let bc = self.node.a(dtlName)[colIndex].BC;
        if (bc === null) {
            bc = IntToRGB(self.node.a("fillColor"));
        }
        if (!isNaN(bc)) {
            bc = IntToRGB(bc)
        }
        elFrame.contentWindow.AddProperty("背景色", bc, null, "color", function (value) {
            self.node.a(dtlName)[colIndex].BC = value;
        })

        let tc = self.node.a(dtlName)[colIndex].TC;
        if (tc === null) {
            tc = self.node.a("TC");
        }
        if (!isNaN(tc)) {
            tc = IntToRGB(tc)
        }
        elFrame.contentWindow.AddProperty("文本色", tc, null, "color", function (value) {
            self.node.a(dtlName)[colIndex].TC = value;
        })

        let tt = self.node.a(dtlName)[colIndex].TT;
        if (tt === null || tt === "") {
            tt = self.node.a("TT");
        }
        elFrame.contentWindow.AddProperty("字体", tt, FontFamilyInfo, "dropdownlist_font", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].TT = value;
        })

        let ts = self.node.a(dtlName)[colIndex].TS;
        if (ts === null || ts === "") {
            ts = self.node.a("TS");
        }

        elFrame.contentWindow.AddProperty("字号", ts, null, "int", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].TS = value;
        })

        let tx = self.node.a(dtlName)[colIndex].TX;
        if (tx === null || tx === "") {
            tx = self.node.a("TX");
        }
        elFrame.contentWindow.AddProperty("字形", tx, ParseValue2String(FontStyleInfo), "dropDownList", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].TX = value;
        })


        elFrame.contentWindow.AddProperty("横对其方式", self.node.a(dtlName)[colIndex].RA, ParseValue2String(RegionAInfo), "dropDownList", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].RA = value;
        })

        elFrame.contentWindow.AddProperty("竖对其方式", self.node.a(dtlName)[colIndex].CA, ParseValue2String(RegionVInfo), "dropDownList", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].CA = value;
        })

        let a = self.node.a(dtlName)[colIndex].A;
        if (a === null || a === "") {
            a = self.node.a("A");
        }
        elFrame.contentWindow.AddProperty("动画效果", a, ParseValue2String(AnimationInfo), "dropDownList", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].A = value;
        })
        let s = self.node.a(dtlName)[colIndex].S;
        if (s === null || s === "") {
            s = self.node.a("S");
        }
        elFrame.contentWindow.AddProperty("动画速率", s, null, "int", function (value) {
            console.log("new value:" + value);
            self.node.a(dtlName)[colIndex].A = value;
        })

    }
}

export class DtTable {

    constructor(backDiv, node) {
        this.RootDom = null;
        this.backDiv = backDiv;
        this.stTable = new StTable(backDiv,node);
        node.s("element",this);
        this.node = node;
    }
    GetRootDom(){
        return this.RootDom;
    }


    CreateEm() {
        const self = this;
        let backDiv = this.backDiv;
        let node = this.node;
        //  let id = node.getId();

        let newTable = this.stTable.CreateEm(backDiv, node);

        this.stTable.MouseDownHandler(data => {

            self.InitPrototype();
        });
        self.InitPrototype();
        this.RootDom = newTable;
        return newTable;

    }


    //动态表格是有两个xmlNode组成 0数据表格，1静态表格
    static  CreateNode(xmlNodeArray, index) {

        let stXmlNode = null;
        let dtXmlNode = null;
        let dataXmlNode = null;
        if(Array.isArray(xmlNodeArray)){
            dtXmlNode = xmlNodeArray[0];
            stXmlNode = xmlNodeArray[1];
            //数据源相关导入
            dataXmlNode =xmlNodeArray[2];
        }

        //先建立静态表格节点
        let node = StTable.CreateNode(stXmlNode, index)
        node.setId(GenerateSnowflakeId());

        node.a("name", "数据表格");
        node.a("TP", 6);

        let NR = node.a("NR");
        let NC = node.a("NC");
        node.a("TC", "#ff0000")
        node.a("TT", "宋体")
        node.a("TS", "25")
        node.a("TX", "1")
        node.a("S", "0")
        node.a("A", "0")
        let DL = 0;
        let PL = 0;
        let DS = 0;
        let SE = 1;
        //条件
        let STYPE = "";
        let PISTYPE = 421;
        //多语言行类型
        let MTYPE = 0;
        let CTYPE = "C"
        let TEMPLETID = -1;
        let EDITIONID = -1;
        let DATASET = "";
        let colArr = [];
        let rowArr = [];
        let $colXmlArry = $(dtXmlNode).find('COL');
        for (let i = 1; i <= NC; i++) {
            let $colXml = $colXmlArry.eq(i - 1);
            colArr.push( DtTable.CreatColItems(i,$colXml));
        }
        let $rowXml = $(dtXmlNode).find('ROW');
        for (let i = 1; i <= NR; i++) {
            rowArr.push(DtTable.CreatRowItems());
        }

        if (dtXmlNode !== undefined && dtXmlNode !== null) {
            let strTemp = $(dtXmlNode).find('DL').text();
            if (strTemp.length > 0) {
                DL = parseInt(strTemp);
                if (isNaN(DL)){
                    DL = 0;
                }
            }
            strTemp = $(dtXmlNode).find('PL').text();
            if (strTemp.length > 0) {
                PL = parseInt(strTemp);
            }
            strTemp = $(dtXmlNode).find('DS').text();
            if (strTemp.length > 0) {
                DS = parseInt(strTemp);
            }
            node.setId($(dtXmlNode).find('ID').text());
            // node.a("TC", "#ff0000");
            // node.a("TT", "宋体");
            // node.a("TS", "25");
            // node.a("TX", "1");
            strTemp = $($(dtXmlNode).find('TC').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("TC", strTemp)
            }else{
                node.a("TC", "#ff0000")
            }
            strTemp = $($(dtXmlNode).find('TT').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("TT", strTemp)
            }else{
                node.a("TT", "宋体")
            }
            strTemp = $($(dtXmlNode).find('TS').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("TS", strTemp)
            }else{
                node.a("TS", "25")
            }
            strTemp =  $($(dtXmlNode).find('TX').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("TX", strTemp)
            }else{
                node.a("TX", "1")
            }
            strTemp =  $($(dtXmlNode).find('A').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("A", strTemp)
            }else{
                node.a("A", "0")
            }
            strTemp =  $($(dtXmlNode).find('S').get(0)).text();
            if (strTemp !== undefined && strTemp !== null && strTemp.length > 0){
                node.a("S", strTemp)
            }else{
                node.a("S", "0")
            }
        }
       

        node.a("DS", DS);
        node.a("DL", DL);
        node.a("PL", PL);
        node.a("SE", SE);

        if (dataXmlNode !== undefined && dataXmlNode !== null) {
            //数据源相关导入
            node.a("STYPE", $(dataXmlNode).find('STYPE').text());
            node.a("CTYPE", $(dataXmlNode).find('CTYPE').text());
            node.a("DATASET", $(dataXmlNode).find('DATASET').text());
            let dlStr = $(dataXmlNode).find('DATALIST').text();
            if (dlStr !== "") {

                if (colArr.length === 1) {
                    colArr[0].DATALIST = dlStr;
                } else {
                    if (dlStr.indexOf(",") > 0) {
                        let dataListArr = dlStr.split(",");
                        for (let i = 0; i < dataListArr.length; i++) {
                            if (i < colArr.length) {
                                colArr[i].DATALIST = dataListArr[i];
                            }
                        }
                    }
                }
            }
        }

        node.a("COL", colArr);
        node.a("ROW", rowArr);
        node.a("SelWidth", 0);
        node.a("SelWidth", 0);
        node.a("SelHeight", 0);
        node.a("TotalFont", FontFamilyInfo[0].value);
        node.a("TotalFontStyle", FontStyleInfo[0].value);
        node.a("TotalFontSize", 0);

        return node;
    }
    ExportXml() {
        let self = this;
        let node = this.node;
        let position =  node.getPosition();
        let id = node.getId();

        let colArr = node.a("COL");
        let rowArr = node.a("ROW");
        let stElement =   this.stTable.ExportXml()
        $(stElement).find("ID").text("-1")
        //todo: 注意：动态表格导出的时候是两个xml控件标签，一个是动态表格，一个是静态表格
        let xml = XmlParser.parseFromString("<DT/>", "text/xml");
        AppendDom(xml,"ID",id);
        AppendDom(xml,"TP",6);
        AppendDom(xml,"X0",position.x);
        AppendDom(xml,"Y0",position.y);
        AppendDom(xml,"W",node.getWidth());
        AppendDom(xml,"H",node.getHeight());
        /* 这些解析的时候不用，仅限于保存
        node.a("TC", "#ff0000");
        node.a("TT", "宋体");
        node.a("TS", "25");
        node.a("TX", "1");
        * */
        AppendDom(xml,"TC",node.a("TC"));
        AppendDom(xml,"TT",node.a("TT"));
        AppendDom(xml,"TS",node.a("TS"));
        AppendDom(xml,"TX",node.a("TX"));
        AppendDom(xml,"A",node.a("A"));
        AppendDom(xml,"S",node.a("S"));
        AppendDom(xml,"NR", $(stElement).find("NR").text());
        AppendDom(xml,"NC", $(stElement).find("NC").text());
        AppendDom(xml,"HR", $(stElement).find("HR").text());
        AppendDom(xml,"WC", $(stElement).find("WC").text());
        AppendDom(xml,"DL",node.a("DL"));
        AppendDom(xml,"DS",node.a("DS"));
        AppendDom(xml,"PL",node.a("PL"));
        AppendDom(xml,"STYPE",node.a("STYPE"));
        AppendDom(xml,"DATASET",node.a("DATASET"));
        AppendDom(xml, "index", node.a("index"));
        let colDataList = [];
        for (let i = 0; i < colArr.length; i++){
            let col = colArr[i];
            let colXml = XmlParser.parseFromString("<COL/>", "text/xml");

            AppendDom(colXml,"LN",col.LN);
            let se = 1;
            if (col.DV !== ""){
                se = 2;
            }
            AppendDom(colXml,"SE",se);
            AppendDom(colXml,"DV",col.DV);
            AppendDom(colXml,"WL",col.WL);
            let bc = col.BC;
            if (bc === null){
                bc = IntToRGB(node.a("fillColor"));
            }
            AppendDom(colXml,"BC",bc);
            let tc = col.TC;
            if (tc === null){
                tc =(node.a("TC"));
            }
            AppendDom(colXml,"TC",tc);
            let tt = col.TT;
            if (tt === null){
                tt =(node.a("TT"));
            }
            AppendDom(colXml,"TT",tt);
            let ts = col.TS;
            if (ts === null){
                ts =(node.a("TS"));
            }
            AppendDom(colXml,"TS",ts);
            let tx = col.TX;
            if (tx === null){
                tx =(node.a("TX"));
            }
            AppendDom(colXml,"TX",tx);
            AppendDom(colXml,"RA",col.RA);
            AppendDom(colXml,"CA",col.CA);
            AppendDom(colXml,"A",col.A);
            AppendDom(colXml,"S",col.S);
            AppendDom(colXml,"DATALIST",col.DATALIST);

            colDataList.push(col.DATALIST);
            xml.documentElement.appendChild(colXml.documentElement);
        }
        for (let i = 0; i < rowArr.length; i++){
            let row = rowArr[i];
            if (row.BC !== "" && row.TC !== ""){
                let rowXml = XmlParser.parseFromString("<ROW/>", "text/xml");
                AppendDom(rowXml,"BC",row.BC);
                AppendDom(rowXml,"TC",row.TC);
                xml.documentElement.appendChild(rowXml.documentElement);
            }
        }
        //todo: 把数据单独组织一个Table Xml节点，先放到DT里
        let dataXml = XmlParser.parseFromString("<Table/>", "text/xml");
        AppendDom(dataXml,"ID",GenerateSnowflakeId());
        AppendDom(dataXml,"PISTYPE",PisType);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"TEMPLETID",-1);
        AppendDom(dataXml,"EDITIONID",-1);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"ELEMENTID",id);
        AppendDom(dataXml,"ELEMENTTYPE","DT");
        AppendDom(dataXml,"DATASET",node.a("DATASET"));
        //AppendDom(dataXml,"DATALIST",colDataList.join(","));
        AppendDom(dataXml,"LTYPE",node.a("LTYPE"));
        AppendDom(dataXml,"STYPE",node.a("STYPE"));
        AppendDom(dataXml,"CTYPE","C");
        //更新DATASET
        let dsStr = self.GetDSByLType(colDataList.join(","),node.a("LTYPE"));
        AppendDom(dataXml,"DATALIST",dsStr);
        xml.documentElement.appendChild(dataXml.documentElement);
        return [xml.documentElement,stElement];
    }


    InitPrototype() {
        let data = this.node;
        let self = this;

        //先建立静态表格属性
        this.stTable.InitPrototype();
        //再建立动态表格属性
        let elFrame = window.propertyFrame;

        elFrame.contentWindow.AddSplitRow("数据表格");

        elFrame.contentWindow.AddProperty("数据行号", data.a("DL"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("DL", value);
        })
        // elFrame.contentWindow.AddProperty("数据滚动间隔", data.a("DS"), null, "int", function (value) {
        //     console.log("new value:" + value);
        //     data.a("DS", value);
        // })

        elFrame.contentWindow.AddProperty("每页跨行数", data.a("PL"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("PL", value);
        })


        //这里处理一下数据源
        //1.dtl数量>0才显示
        //2.如果屏幕类型是416（票额屏）则只显示 dsX_PEP
        //3.如果屏幕类型不是416 （票额屏）则只显示 dsX
        let dsArr = []
        for (let i = 0; i < DsInfo.length; i++) {
            let ds = DsInfo[i];
            if (ds.dtl.length === 0) {
                continue;
            }
            if (ds.value.startsWith("ds")) {
                if (PisType === 416) {
                    if (ds.value.endsWith("PEP")){
                        dsArr.push(ds)
                    }
                } else {
                    if (!ds.value.endsWith("PEP")){
                        dsArr.push(ds)
                    }
                }
            } else {
                dsArr.push(ds);
            }
        }

        elFrame.contentWindow.AddProperty("数据源", data.a("DATASET"), dsArr, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("DATASET", value);
        })

        //移动效果
        elFrame.contentWindow.AddProperty("移动效果",  data.a("A"), ParseValue2String(AnimationInfo), "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("A",value);
        })

        elFrame.contentWindow.AddProperty("移动像素", data.a("S"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("S",value);
        })
        
        //全局字符样式
        /*
        node.a("TC", "#ff0000");
        node.a("TT", "宋体");
        node.a("TS", "25");
        node.a("TX", "1");
         */
        let color = data.a("TC");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("文字颜色", color, null, "color", function (value) {
            data.a("TC", value);
            self.CreateEm();
        })


        elFrame.contentWindow.AddProperty("字体", data.a("TT"), FontFamilyInfo, "dropdownlist_font", function (value) {
            data.a("TT", value);
            self.CreateEm();
        })


        elFrame.contentWindow.AddProperty("字号", data.a("TS"), null, "int", function (value) {
            data.a("TS", value);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("字形", data.a("TX"), ParseValue2String(FontStyleInfo), "dropDownList", function (value) {
            data.a("TX",value);
            self.CreateEm();
        })

        // 筛选条件需要一个定制 html输入框
        let $textBox = $('<input type="text" id="txtCondition">');
        $textBox.focus(function() {
            // 当文本框获得焦点时，执行这里的代码

            let $conditionDialog = $('<div id="conditionDialog"  ></div>').appendTo('body');
            // 在 div 中嵌入 iframe
            $conditionDialog.append('<iframe id="conditionIframe" src="" width="100%" height="100%" frameborder = "0" ></iframe>');

            $conditionDialog.dialog({
                autoOpen: false, // 初始时不自动打开
                title:  "筛选条件",
                width: 400, // 设定对话框的宽度
                height: 300, // 设定对话框的高度
                open: function() {
                    // 在 Dialog 打开时设置 iframe 的 src，也可在外部直接设置
                    let $iframe =  $(this).find("#conditionIframe");
                    $iframe.attr("src", "filterCondition.html");
                    $iframe.on("load", function() {
                        // iframe 加载完成后执行这里的代码
                        let contentWindow =  $iframe.get(0).contentWindow;
                        contentWindow.filterConditionDlgInit($conditionDialog,data.a("STYPE"),DsInfo);
                    });

                }
            });
            window.ConditionDialog = $conditionDialog;
            $conditionDialog.confirmFilterConditionDlg = function(condition){
                console.log(condition)
                $conditionDialog.dialog( "close" );
                $conditionDialog.dialog("destroy").remove();
                data.a("STYPE",condition)
                self.CreateEm();
            }
            $conditionDialog.dialog('open');

        });
        $textBox.width("100%");
        $textBox.height("100%");
        $textBox.val(data.a("STYPE"));

        elFrame.contentWindow.AddProperty("筛选条件", data.a("STYPE"),  $textBox.get(0), "custom", function(){})

        //奇偶页语种LTYPE
        let xmlLtYpeStr =  data.a("LTYPE");
        if (xmlLtYpeStr === undefined || xmlLtYpeStr === null || xmlLtYpeStr === ""){
            xmlLtYpeStr = "C,C";
        }
        //如果xmlLtYpeStr不包含字符","
        if (xmlLtYpeStr.indexOf(",") === -1){
            xmlLtYpeStr += ",C";
        }
        //奇数字符串：
        let xmlLtYpeStrOdd = xmlLtYpeStr.split(",")[0];
        //偶数字符串
        let xmlLtYpeStrEven = xmlLtYpeStr.split(",")[1];
        elFrame.contentWindow.AddProperty("奇数页语种", xmlLtYpeStrOdd, selLanguage, "dropdownlist", function (value) {
          self.UpdateOddLanguage(value,data);
        })
        
        elFrame.contentWindow.AddProperty("偶数页语种", xmlLtYpeStrEven, selLanguage, "dropdownlist", function (value) {
            self.UpdateEvenLanguage(value,data);
        })
        

        let dsInfoDtl = [];
        let dsInfo =   DsInfo.find(item => item.value === this.node.a("DATASET"));
        if (dsInfo !== undefined && dsInfo !== null){
            dsInfoDtl = dsInfo.dtl
        }
        elFrame.contentWindow.AddSplitRow("列属性");
        //继续添加
        let colCount = this.node.a("colCount");
        let rowCount = this.node.a("rowCount");
        let colsInfo = this.node.a("COL");
        let rowsInfo = this.node.a("ROW");
        if (colsInfo === undefined  ){
            // 这里，多的减去，少的加上，不能简单的重新创建
            colsInfo = [];
            for (let i = 1; i <= colCount; i++) {
                //初始化列
                colsInfo.push(DtTable.CreatColItems(i));
            }
            this.node.a("COL",colsInfo);
        }else  if(Array.isArray(colsInfo)) {
            // 多的减去，少的加上，不能简单的重新创建
            if (colsInfo.length > colCount) {
                //从后面开始删除
                for (let i = colsInfo.length - 1; i >= colCount; i--) {
                    colsInfo.splice(i, 1);
                }
            } else if (colsInfo.length < colCount) {
                //从后面开始添加
                for (let i = colsInfo.length + 1; i <= colCount; i++) {
                    //初始化列
                    colsInfo.push(DtTable.CreatColItems(i));
                }
            }
        }

        if (rowsInfo === undefined )
        {
            rowsInfo=[];
            for (let i = 1; i <= rowCount; i++) {
                //初始化行
                rowsInfo.push(DtTable.CreatRowItems(i));
            }
            this.node.a("ROW",rowsInfo);
        }else if(Array.isArray(rowsInfo)) {
            if (rowsInfo.length > rowCount) {
                //从后面开始删除
                for (let i = rowsInfo.length - 1; i >= rowCount; i--) {
                    rowsInfo.splice(i, 1);
                }
            } else if (rowsInfo.length < rowCount) {
                //从后面开始添加
                for (let i = rowsInfo.length + 1; i <= rowCount; i++) {
                    //初始化列
                    rowsInfo.push(DtTable.CreatRowItems(i));
                }
            }
        }
        //列属性
        for (let i = 1; i <= colCount; i++) {
            let colShowName = i + ' 列属性';
            let btnText = "集合"
            let colObj = colsInfo[i - 1];
            let dataListStr = colObj.DATALIST;
            if (dataListStr !== undefined && dataListStr !== null && dataListStr.length > 0) {
                let findLabel = GetInfoKeyByValue(dataListStr,dsInfoDtl);
                btnText = "[" + dataListStr + "]" + findLabel;
            }

            let clId = "Col_" + i;

            let $button = $('<button>', {
                text: btnText, // 按钮显示的文本
            });
            $button.on('click', function (event) {
                // 在这里编写你想要执行的操作
                hideMenu(event);
                self.openColDialog(i,clId);
            });
            
            $button.width("100%");
            $button.height("100%");

            let $colObj = elFrame.contentWindow.AddPropertyUseId(clId,colShowName, "",   $button.get(0), "custom", function(){})
            $colObj.on('contextmenu', function (e) {
                hideMenu(e);
                let option =
                    {
                        menus: [
                            {
                                name: "上移",
                                onClick: function (e) {
                                    console.log("上移 clicked");
                                    let index = i-1;
                                    let upperIndex = i-2;
                                    let temp = self.node.a("COL")[index]
                                    self.node.a("COL")[index] = self.node.a("COL")[upperIndex];
                                    self.node.a("COL")[upperIndex] = temp;
                                    self.InitPrototype();
                                },
                            },
                            {
                                name: "下移",
                                onClick: function (e) {
                                    console.log("下移 clicked");
                                    let index = i-1;
                                    let nexIndex = i;
                                    let temp = self.node.a("COL")[nexIndex];
                                    self.node.a("COL")[nexIndex] = self.node.a("COL")[index];
                                    self.node.a("COL")[index] = temp;
                                    self.InitPrototype();
                                },
                            },
                            {
                                name: "删除",
                                onClick: function (e) {
                                    console.log("删除 clicked");
                                    let index = i-1;
                                    self.node.a("COL").splice(index, 1);
                                    self.stTable.DelColByIndex(index);
                                    self.InitPrototype();
                                },
                            }

                        ]
                    }
                    if (colCount > 1)
                    {
                        if (i === 1){
                            option.menus.splice(0,1);
                        }else if (i === colCount){
                            option.menus.splice(1,1);
                        }
                        let offset = $(window.propertyFrame).offset();
                        e.clientY = e.clientY + offset.top;
                        e.clientX = e.clientX + offset.left;
                        showMenu(e, option);
                    }
            });
        
        }
       
        /*
         elFrame.contentWindow.AddSplitRow("行属性");
        //行属性
        for (let i = 1; i <= rowCount; i++) {
            let rowShowName = i + ' 行属性';
            let rowObj = colsInfo[i - 1];
            let rlId = "Row_" + i;

            let $button = $('<button>', {
                text: '集合', // 按钮显示的文本
            });
            $button.on('mousedown', function (event) {
                // 在这里编写你想要执行的操作
                self.openRowDialog(i,rlId);
            });
            $button.width("100%");
            $button.height("100%");

            elFrame.contentWindow.AddPropertyUseId(rlId,rowShowName, "",   $button.get(0), "custom", function(){})
        }
      
        */
    }

    static CreatColItems(i,$colXml) {
        let retObj ={
            "LN": i,
            "SE": 1,
            "DV": "",
            "WL": "1",
            //使用parent的 fillColor
            "BC": null,
            //使用parent的 TC
            "TC": null,
            //使用parent的 TT
            "TT": null,
            //使用parent的 TS
            "TS": null,
            //使用parent的 TX
            "TX": null,
            "RA": "1",
            "CA": "1",
            "A": "0",
            "S": "0",
            "DATALIST": "",

        }
        if ($colXml === undefined || $colXml.get(0) === undefined ){
            return retObj;
        }
        retObj.SE =  parseInt( $colXml.find('SE').text());
        retObj.DV =  $colXml.find('DV').text();
        retObj.WL =  $colXml.find('WL').text();
        retObj.BC =  $colXml.find('BC').text();
        retObj.TC =  $colXml.find('TC').text();
        retObj.TT =  $colXml.find('TT').text();
        retObj.TS =  $colXml.find('TS').text();
        retObj.TX =  $colXml.find('TX').text();
        retObj.RA =  $colXml.find('RA').text();
        retObj.CA =  $colXml.find('CA').text();
        retObj.A =  $colXml.find('A').text();
        retObj.S =  $colXml.find('S').text();
        return retObj;
    }

    static CreatRowItems() {
        return {
            "BC": "",
            "TC": ""
        };
    }

    openRowDialog(rowNumber,rlId)    {
        // 创建一个div
        let self = this;
        let rowIndex = rowNumber - 1;

        let $dlgDiv = $('<div>', {id: 'rowDialog',});
        let dtlName = "ROW";

        //这里是准备属性面板，用于展示
        //对话框需要单独的node

        let showNode =this.node.a(dtlName)[rowIndex];

        let elFrame = document.createElement('iframe');
        elFrame.onload = function () {
            //准备完毕

            let bc = showNode.BC;
            if (bc === "")
                bc = -1;
            if (!isNaN(bc)) {
                bc = IntToRGB(bc)
                showNode.BC = bc;
            }
            elFrame.contentWindow.AddProperty( "背景色", bc, null, "color", function (value) {
                console.log("new value:" + value);
                showNode.BC = value;
            })


            let tc = showNode.TC;
            if (tc === "")
                tc = 255;
            if (!isNaN(tc)) {
                tc = IntToRGB(tc)
                showNode.TC = tc
            }
            elFrame.contentWindow.AddProperty( "文本色", tc, null, "color", function (value) {
                console.log("new value:" + value);
                showNode.TC = value;
            })

        }

        elFrame.id = "rowPropertyFrame"
        // 设置iframe的属性
        elFrame.src = 'property.html'; // 指定URL
        elFrame.width = '100%'; // 宽度
        elFrame.height = '100%'; // 高度
        elFrame.frameBorder = 0; // 边框
        $dlgDiv.get(0).appendChild(elFrame);

        DialogZIndex += 1;
        $dlgDiv.dialog({
            autoOpen: true,
            title: window.propertyFrame.contentWindow.GetDisplayName(rlId) + " 属性",
            width: 600,
            height: 400,
            zIndex: DialogZIndex,
            modal: true,
            resize:function(event,ui){

            },
            buttons: [
                {
                    text: "确定", // 这里的 myButtonName 是一个变量
                    click: function () {
                        //收集结果，并更新
                        let bcStr =  showNode.BC;
                        let tcStr =  showNode.TC;
                        self.node.a(dtlName)[rowIndex] =
                            {
                                "BC": bcStr,
                                "TC": tcStr
                            };
                        //关闭
                        $(this).dialog("close");
                        $(this).dialog("destroy").remove();
                    }
                }
            ]
        });



    }

    openColDialog(colNumber,cid) {
        // 创建一个div
        let self = this;
        let colIndex = colNumber - 1;

        let $dlgDiv = $('<div>', {id: 'colDialog',});
        let dtlName = "COL";
        // window. window.propertyFrame
        //这里是准备属性面板，用于展示
        //对话框需要单独的node

        let colPropertyDtl = this.node.a(dtlName)[colIndex];
        let dsDtl = this.node.a("DATASET");
        //准备数据源

        if (dsDtl === undefined) {
            dsDtl = "";
        }
        let dsDtlArr = GetDsDtlByValue(dsDtl);
     
        let elFrame = document.createElement('iframe');
        elFrame.onload = function () {
            //准备完毕
            InitDvProperty(elFrame, self, dtlName, colIndex, dsDtlArr, cid,  colNumber, $dlgDiv);
        }
        elFrame.id = "colPropertyFrame"
        // 设置iframe的属性
        elFrame.src = 'property.html'; // 指定URL
        elFrame.width = '100%'; // 宽度
        elFrame.height = '100%'; // 高度
        elFrame.frameBorder = 0; // 边框
        $dlgDiv.get(0).appendChild(elFrame);

        DialogZIndex += 1;
        console.log("$dlgDiv zindex :" + DialogZIndex)
        $dlgDiv.dialog({
            autoOpen: true,
            title: window.propertyFrame.contentWindow.GetDisplayName(cid) + " 属性",
            width: 400,
            height: 600,
            zIndex: DialogZIndex,
            modal: true,
            resize: function (event, ui) {

            },
            beforeClose: function (event, ui) {

            },
            buttons: [
                {
                    text: "添加值域", // 这里的 myButtonName 是一个变量
                    click: function () {
                        // 在这里编写你想要执行的操作
                        self.openDvDialog(colNumber, $dlgDiv, -1, cid)
                    }
                },
                {
                    text: "删除值域", // 这里的 myButtonName 是一个变量
                    click: function () {
                        let selRow = elFrame.contentWindow.GetSelectRow();
                        let dvStartIndexRow = 3;
                        //值域从第三行开始
                        if (selRow < dvStartIndexRow) {
                            $("#alertMsg").html("请选择值域");
                            let $alertDialog = $("#alertDialog");
                            $alertDialog.dialog({
                                autoOpen: false,
                                title: "提示",
                                zindex: AlertZIndex,
                                buttons: [
                                    {
                                        text: "确定",
                                        click: function () {
                                            $alertDialog.dialog("close");
                                        }
                                    }
                                ]
                            });
                            $alertDialog.dialog("open");
                        } else {
                            //删除选中的值域
                            let index = selRow - dvStartIndexRow;
                            let dvInfo = RemoveDvByIndex(colPropertyDtl, index);
                            if (dvInfo.DV === "") {
                                dvInfo = DtTable.CreatColItems(colNumber);
                                dvInfo.DATALIST = self.node.a(dtlName)[colIndex].DATALIST
                            }
                            self.node.a(dtlName)[colIndex] = dvInfo
                            //关了重开，重新载入这个对话框
                            $dlgDiv.dialog("close");
                            $dlgDiv.dialog("destroy").remove();
                            self.openColDialog(colNumber);
                        }
                    }
                }
            ]
        });

    }



    openDvDialog(colNumber,$parentDlg,dvIndex,cid)    {
        // 创建一个div
        let self = this;
        let colIndex = colNumber - 1;
        let colName = window.propertyFrame.contentWindow.GetDisplayName(cid);

        let dtlName = "COL";
        //这里是准备属性面板，用于展示
        //对话框需要单独的node

        let dvNode = this.node.a(dtlName)[colIndex]
        // 这里需要根据分隔符拆
        let showNode = GetDvObjByIndex(dvNode,dvIndex)

        let buttonShowText = "添加";
        if (dvIndex >= 0){
            buttonShowText = "修改";
        }

        let elFrame = document.createElement('iframe');
        elFrame.onload = function () {

           let $elObj =  elFrame.contentWindow.AddProperty( "内容", showNode.DV, null, "string", function (value) {
                console.log("new value:" + value);
                showNode.DV = value;
            })

            elFrame.contentWindow.AddProperty( "整行标记", showNode.WL, dvWLInfo, "dropDownList", function (value) {
                console.log("new value:" + value);
                showNode.WL = value;
            })

            let bc = showNode.BC;
            if (!isNaN(bc)) {
                bc = IntToRGB(bc)
            }
            elFrame.contentWindow.AddProperty( "背景色", bc, null, "color", function (value) {
                console.log("new value:" + value);
                showNode.BC = value;
            })

            let tc = showNode.TC;
            if (!isNaN(tc)) {
                tc = IntToRGB(tc)
            }
            elFrame.contentWindow.AddProperty( "文本色", tc, null, "color", function (value) {
                console.log("new value:" + value);
                showNode.TC = value;
            })

            elFrame.contentWindow.AddProperty( "字体", showNode.TT, FontFamilyInfo, "dropdownlist_font", function (value) {
                console.log("new value:" + value);
                showNode.TT = value;
            })

            let ts = showNode.TS
            if (ts == null || ts === "") {
                ts =  25;
            }
            elFrame.contentWindow.AddProperty( "字号", ts, null, "int", function (value) {
                console.log("new value:" + value);
                showNode.TS = value;
            })


            elFrame.contentWindow.AddProperty( "字形", showNode.TX, ParseValue2String(FontStyleInfo), "dropDownList", function (value) {
                console.log("new value:" + value);
                showNode.TX = value;
            })

            elFrame.contentWindow.AddProperty( "横对其方式", showNode.RA, ParseValue2String(RegionAInfo), "dropDownList", function (value) {
                console.log("new value:" + value);
                showNode.RA = value;
            })

            elFrame.contentWindow.AddProperty( "竖对其方式", showNode.CA, ParseValue2String(RegionVInfo), "dropDownList", function (value) {
                console.log("new value:" + value);
                showNode.CA = value;
            })

            let a = showNode.A
            if (a == null || a === "") {
                a =  0;
            }
            elFrame.contentWindow.AddProperty("动画效果", a, ParseValue2String(AnimationInfo), "dropDownList", function (value) {
                console.log("new value:" + value);
                showNode.A = value;
            })

            let s = showNode.S
            if (s == null || s === "") {
                s =  5;
            }
            elFrame.contentWindow.AddProperty( "动画速率", s, null, "int", function (value) {
                console.log("new value:" + value);
                showNode.S = value;
            })

        }
        elFrame.id = "dvPropertyFrame"
        // 设置iframe的属性
        elFrame.src = 'property.html'; // 指定URL
        elFrame.width = '100%'; // 宽度
        elFrame.height =  '100%'; // 高度
        elFrame.frameBorder = 0; // 边框
        let $dvDialog = $('<div>', {id: 'dvDialog',});
        $dvDialog.get(0).appendChild(elFrame);
        DialogZIndex += 1;
        console.log("$dvDialog zindex :"  + DialogZIndex)
        $dvDialog.dialog({
            autoOpen: true,
            title: colName +" 值域设置",
            width: 500,
            height: 400,
            zIndex: DialogZIndex,
            modal: true,
            resize:function(event,ui){

            },
            open: function() {
                // $parentDlg.dialog( "close" );
                // $parentDlg.dialog("destroy").remove();
            },
            beforeClose : function(event, ui) {
                //self. openColDialog(colNumber);
            },
            buttons: [
                {
                    text: buttonShowText, // 这里的 myButtonName 是一个变量
                    click: function(){
                        //保存值域信息，包括文本字体，颜色等等
                        let dvObj = {
                            DV:showNode.DV,
                            WL:showNode.WL,
                            BC:showNode.BC,
                            TC:showNode.TC,
                            TT:showNode.TT,
                            TS:showNode.TS,
                            TX:showNode.TX,
                            RA:showNode.RA,
                            CA:showNode.CA,
                            A:showNode.A,
                            S:showNode.S,
                        };
                        if (dvNode.DV === ""){
                            dvNode.SE = 2;
                            dvNode.WL = "";
                            dvNode.BC = "";
                            dvNode.TC = "";
                            dvNode.TT = "";
                            dvNode.TS = "";
                            dvNode.TX = "";
                            dvNode.RA = "";
                            dvNode.CA = "";
                            dvNode.A = "";
                            dvNode.S = "";
                        }
                        if (dvIndex < 0){
                            self.node.a(dtlName)[colIndex] = InsertDvObj(dvNode,dvObj,-1);
                        }else{
                            self.node.a(dtlName)[colIndex] = UpdateDvObj(dvNode,dvObj,dvIndex);
                        }

                        //关闭自己
                        $dvDialog.dialog( "close" );
                        $dvDialog.dialog("destroy").remove();
                        //关闭父对话框
                        $parentDlg.dialog( "close" );
                        $parentDlg.dialog("destroy").remove();
                        //重新载入
                        self. openColDialog(colNumber);
                    }
                }
            ]

        });

        $dvDialog.dialog( "open" );

    }

    /**
     * 设置奇数页语种
     * @param lValue 语种
     * @param data 数据集
     * @constructor
     */
    UpdateOddLanguage(lValue,data)
    {
        let xmlLtYpeStr = data.a("LTYPE");
        if (xmlLtYpeStr === undefined || xmlLtYpeStr === null || xmlLtYpeStr === ""){
            xmlLtYpeStr = lValue + ",C";
        }
        //如果xmlLtYpeStr不包含字符","
        if (xmlLtYpeStr.indexOf(",") === -1){
            xmlLtYpeStr += ",C";
        }else
        {
            let ltypeArr = xmlLtYpeStr.split(",");
            xmlLtYpeStr = lValue + "," + ltypeArr[1];
        }
 
        data.a("LTYPE", xmlLtYpeStr)
        
    }
    /**
     * 设置偶数页语种
     * @param lValue 语种
     * @param data 数据集
     * @constructor
     */
    UpdateEvenLanguage(lValue,data)
    {
        let xmlLtYpeStr = data.a("LTYPE");
        if (xmlLtYpeStr === undefined || xmlLtYpeStr === null || xmlLtYpeStr === ""){
            xmlLtYpeStr = "C," + lValue;
        }
        //如果xmlLtYpeStr不包含字符","
        if (xmlLtYpeStr.indexOf(",") === -1){
            xmlLtYpeStr = "C," + lValue;
        }
        else
        {
            let ltypeArr = xmlLtYpeStr.split(",");
            xmlLtYpeStr = ltypeArr[0] + "," + lValue;
        }
        data.a("LTYPE", xmlLtYpeStr)
    }

    /**
     * 根据LTYPE更新DataSet内容
     * @param dataStr
     * @param lTypeStr
     * @constructor
     */
    GetDSByLType(dataStr,lTypeStr)
    {
      
        let newDs = [];
        let dsItem = [];
        if (dataStr === undefined || dataStr === null || dataStr === "")
        {
            return "";
        }
        if (lTypeStr === undefined || lTypeStr === null || lTypeStr === "")
        {
            return dataStr;
        }
        if (dataStr.indexOf(",") > 0)
        {
            dsItem = dataStr.split(",");
        }else 
        {
            dsItem.push(dataStr);
        }
        //遍历dsItem,删除第一个字符
        for (let i = 0; i < dsItem.length; i++)
        {
            dsItem[i] = dsItem[i].substring(1);
        }
        //去除dsItem中字符串相同的项
        for (let i = 0; i < dsItem.length; i++)
        {
            for (let j = i + 1; j < dsItem.length; j++)
            {
                if (dsItem[i] === dsItem[j])
                {
                    dsItem.splice(j, 1);
                    j--;
                }
            }
        }
      
        
        
       
        if (lTypeStr === undefined || lTypeStr === null || lTypeStr === ""){
           return;
        }
        let languageArr = ["C"]
        //只有一种语言
        if (lTypeStr.indexOf(",") === -1){
            languageArr[0] = xmlLtYpeStr;
        }else 
        {
          let  strArr = lTypeStr.split(",");
          if (strArr.length === 2 )
          {
              languageArr[0] = strArr[0];
              if (strArr[0] !== strArr[1])
              {
                  //languageArr数组添加一个值
                  languageArr.push(strArr[1]);
              }
          }
        }

        for (let i = 0; i < languageArr.length; i++)
        {
            let languageHeader = languageArr[i];
            for (let j = 0; j < dsItem.length; j++)
            {
                newDs.push(languageHeader + dsItem[j])
            }
        }
        //newDs转换为字符串，用","分割
       return newDs.join(",");
    }
    
    ToTopBottom(isTop){

    }
}
