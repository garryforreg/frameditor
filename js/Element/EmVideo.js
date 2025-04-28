
export class EmVideo{
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
    CreateEm(){
        const self = this;
        let $backDiv = this.backDiv;
        let node = this.node;
        let id = node.getId();
        $("#" + id).remove();
        let position = node.getPosition();
        let w = parseInt(node.getWidth());
        let h = parseInt(node.getHeight());
        let index = parseInt(node.getAttr("index"));
        let $textBack = $(createDiv(id, "rgba(182,180,180,1)"));
        $textBack.offset({top: position.y, left: position.x});
        $textBack.css("box-sizing", "border-box");
        $textBack.css("overflow", "hidden");
        $textBack.css("background-image","url('./images/videoEmpty.svg')");
        $textBack.css("background-repeat","no-repeat");
        $textBack.css("background-size", "100% 100%");
        $textBack.css('z-index', index);
        $textBack.width(w);
        $textBack.height(h);


        $backDiv.append($textBack);

        $textBack.on('mousedown', function (e) {
            hideMenu(e);
            // 处理点击事件的代码
            console.log(id + '元素被点击了！');
            SendMessage({
                emType:"VD",
                emId:id,
                ds:node.a("DATASET")
            })
            //node.getAttr("sex");node.s("body.color");node.getPosition()
            console.log(node);
            //propertyView = new ht.widget.PropertyView(dataModel);
            self.InitPrototype();

            //这里创建属性面板，并绑定数据
            window.dataModel.sm().ss(node);
            //选择
 
            SelectElement(self.RootDom, node);
            
        });
        if(!IsView && !node.a("lock")) {
            $textBack.draggable({
                drag: function (event, ui) {
                    node.setPosition(Math.round(ui.position.left / window.scaleIncrement), Math.round(ui.position.top / window.scaleIncrement));
                    SetSelPosition(id,ui.position.left, ui.position.top)
                    self.InitPrototype();
                }
            });
            $textBack.resizable({
                handles: "e,s", // 只在东边（右边）添加一个拖动把手
                minWidth: 1,
                resize: function (event, ui) {
                    node.setWidth(Math.round(ui.element.outerWidth()));
                    node.setHeight(Math.round(ui.element.outerHeight()));
                    SetSelSize(id,ui.element.outerWidth(),ui.element.outerHeight());
                    self.InitPrototype();
                }
            });
            $textBack.on('mouseup', function (e) {
                //设置鼠标为正常模式
                $("body").css("cursor", "auto");
            });


            $textBack.on('contextmenu', function (e) {
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
                                    $textBack.remove();
                                    window.dataModel.remove(node)
                                    console.log("删除 图片控件 " + $textBack.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });
        }
        this.RootDom = $textBack;
        SetSelSize(id,this.RootDom.width(),this.RootDom.height());
        SetSelPosition(id,this.RootDom.position().left,this.RootDom.position().top);
        self.InitPrototype();
        return $textBack;
    }

    //创建视频节点，注意第一个参数是数组
    static  CreateNode(xmlNodeArray, index) {
        let x0 = 0;
        let y0  = 0;
        let w  = 100;
        let h  = 100;
        let id = GenerateSnowflakeId();
        let xmlNode = null
        let dataXmlNode = null;
        let DATASET = "";
        if(Array.isArray(xmlNodeArray)){
            xmlNode = xmlNodeArray[0];
            dataXmlNode = xmlNodeArray[1];
        }

        if (xmlNode !== undefined && xmlNode !== null) {
            id = $(xmlNode).find('ID').text();
            //读取通用x0,y0,w,h
            x0 = $(xmlNode).find('X0').text();
            y0 = $(xmlNode).find('Y0').text();
            w = $(xmlNode).find('W').text();
            h = $(xmlNode).find('H').text();
        }
        if (dataXmlNode !== undefined && dataXmlNode !== null) {
            DATASET =  $(dataXmlNode).find('DATASET').text();
        }

        let node = new ht.Node();
        node.setId(id);
 
        node.a({
            name: '视频',
            selected: false,
            lock: false,
            type:"video",
            DATASET:DATASET,
            index: index
        });
        node.setPosition(x0, y0);
        node.setWidth(w);
        node.setHeight(h);
        return node;
    }

    ExportXml(){
        let node = this.node;
        let position =  node.getPosition();
        let id = node.getId();
        let xml = XmlParser.parseFromString("<VD/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "VD", 8);
        AppendDom(xml, "X0", position.x);
        AppendDom(xml, "Y0", position.y);
        AppendDom(xml, "W", node.getWidth());
        AppendDom(xml, "H", node.getHeight());
        AppendDom(xml, "index", node.a("index"));

        let dataXml = XmlParser.parseFromString("<Table/>", "text/xml");
        AppendDom(dataXml,"ID",GenerateSnowflakeId());
        AppendDom(dataXml,"PISTYPE",PisType);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"TEMPLETID",-1);
        AppendDom(dataXml,"EDITIONID",-1);
        AppendDom(dataXml,"MTYPE",0);
        AppendDom(dataXml,"ELEMENTID",id);
        AppendDom(dataXml,"ELEMENTTYPE","VD");
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
        elFrame.contentWindow.ClearProperty();

        CreatBaseProperty(null, self);

        elFrame.contentWindow.AddProperty("数据源", data.a("DATASET"), DsInfo.filter(item => item.value.startsWith("v")), "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("DATASET", value);
            self.CreateEm();
        })
    }



}
