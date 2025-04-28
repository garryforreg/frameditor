import {EmText} from "./EmText.js";



export class EmSubject{

    constructor(backDiv, node) {
        this.RootDom = null;
        this.backDiv = backDiv;
        this.emText = new EmText(backDiv,node);
        //覆盖自己（专题）到node中
        node.s("element",this);
        this.node = node;
    }
    GetRootDom(){
        return  this.emText.RootDom;
    }
    CreateEm() {
        //用于创建上下文引用
        const self = this;

        let node = this.node;

        let text = "普文本专题";
        //1-文本；2-富文本（HTML）；
        if (node.a("orgT") === "2"){
            text = "富文本";
        }
        if (node.a("T") === ''){
            node.a("T", text);
        }
      

        let $textBack = this.emText.CreateEm(backDiv, node);

        this.emText.MouseDownHandler(data => {
            if ( window.event.type == 'mousedown')
            {
                console.log("通知父页面，专题被点击了 type = "+ window.event.type +" data:" + data);
                SendMessage({
                    emType:"SN",
                    emId:data.getId(),
                    ds:data.a("DATASET")
                })
            }
            self.InitPrototype();
        });
        this.RootDom = $textBack;
        self.InitPrototype();
        return $textBack;
    }

    //创建专题节点，注意第一个参数是数组
    static  CreateNode(xmlNodeArray, index) {
        let xmlNode = null
        let dataXmlNode = null;
        if(Array.isArray(xmlNodeArray)){
            xmlNode = xmlNodeArray[0];
            dataXmlNode = xmlNodeArray[1];
        }
        //1-文本；2-富文本（HTML）；
        let orgT = "1";

        let DATASET = "";
        if (xmlNode !== undefined && xmlNode !== null) {
            orgT = $(xmlNode).find('T').text();
        }
        if (dataXmlNode !== undefined && dataXmlNode !== null) {
            DATASET =  $(dataXmlNode).find('DATASET').text();
        }

        let node = EmText.CreateNode(xmlNode, index)
        node.setName('专题');
        node.a("name", "专题");
        node.a("T","");
        node.a("orgT",orgT);
        node.a("DATASET", DATASET);
        return node;
    }

    ExportXml(){
        let node = this.node;
        let position =  node.getPosition();
        let id = node.getId();
        let xml = XmlParser.parseFromString("<SN/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "T", node.a("orgT"));
        AppendDom(xml, "TP", 5);
        AppendDom(xml, "X0", position.x);
        AppendDom(xml, "Y0", position.y);
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

        let dataXml = XmlParser.parseFromString("<Table/>", "text/xml");
        AppendDom(dataXml,"ID",GenerateSnowflakeId());
        AppendDom(dataXml,"PISTYPE",PisType);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"TEMPLETID",-1);
        AppendDom(dataXml,"EDITIONID",-1);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"ELEMENTID",id);
        AppendDom(dataXml,"ELEMENTTYPE","SN");
        AppendDom(dataXml,"DATASET",node.a("DATASET"));
        AppendDom(dataXml,"DATALIST","");
        AppendDom(dataXml,"LTYPE","");
        AppendDom(dataXml,"STYPE","0");
        AppendDom(dataXml,"CTYPE","C");
        xml.documentElement.appendChild(dataXml.documentElement);
        return xml.documentElement;
    }
    InitPrototype() {

        let data = this.node;
        let self = this;
        let elFrame = window.propertyFrame;
        //清理之前的属性面板
        elFrame.contentWindow.ClearProperty();
        this.emText.InitPrototype(self);

        let arr= [
            { value: "2", label: '富文本' },
            { value: "1", label: '普通文本' }
        ]
        elFrame.contentWindow.AddProperty("文本类型", data.a("orgT"), arr, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("orgT", value);
            self.CreateEm(backDiv, data);
        })


        elFrame.contentWindow.AddProperty("数据源", data.a("DATASET"), DsInfo.filter(item => item.value.startsWith("text")), "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("DATASET", value);
            self.CreateEm(backDiv, data);
        })

    }


}
