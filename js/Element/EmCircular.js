
export class EmCircular{
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
        let $recDiv = $(createDiv(id, "rgba(0,0,0,0)"));
        this.recDiv = $recDiv;
        let LC = node.getAttr("LC");
        let LT = parseInt( node.getAttr("LT"));
        let LW = node.getAttr("LW");

        $recDiv.offset({top: position.y, left: position.x});
        //$recDiv.css("box-sizing", "border-box");
        $recDiv.css("overflow", "hidden");

        //$recDiv.css("border", LW + "px "+cssLineStr+" " + LC);
        $recDiv.css('z-index', index);
        $recDiv.width(w);
        $recDiv.height(h);

        let $svg = this.CreateEclipse(w,h,LW,LC,LT)
        $recDiv.append($svg);

        $backDiv.append($recDiv);

        $recDiv.on('mousedown', function (e) {
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
            SelectElement($recDiv, node);
            //触发事件，主要用户通知动态表格
            if (self.handler !== undefined) {
                self.handler(node);
            }
 
        });

        $recDiv.on('mouseup', function (e) {
            //设置鼠标为正常模式
            $("body").css("cursor", "auto");
            self. CreateEm();
        });

        if(!IsView && !node.a("lock")) {
            $recDiv.draggable({
                drag: function (event, ui) {
                    node.setPosition(Math.round(ui.position.left / window.scaleIncrement), Math.round(ui.position.top / window.scaleIncrement));
                    SetSelPosition(id,ui.position.left, ui.position.top)
                    self.InitPrototype();
                }
            });
            $recDiv.resizable({
                handles: "e,s", // 只在东边（右边）添加一个拖动把手
                minWidth: 1,
                resize: function (event, ui) {
                    node.setWidth(Math.round(ui.element.outerWidth()));
                    node.setHeight(Math.round(ui.element.outerHeight()));
                    SetSelSize(id,ui.element.outerWidth(),ui.element.outerHeight());
                    self.InitPrototype();
                }
            });



            $recDiv.on('contextmenu', function (e) {
                if (IsView ) {
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
                                    $recDiv.remove();
                                    window.dataModel.remove(node)
                                    console.log("删除 图片控件 " + $recDiv.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });
        }
        this.RootDom = $recDiv;
        SetSelSize(id,this.RootDom.width(),this.RootDom.height())
        SetSelPosition(id,this.RootDom.position().left,this.RootDom.position().top)
        self.InitPrototype();
        return $recDiv;
    }
    CreateEclipse(width,height ,lineWidth,lineColor, lineType) {
        // 用jQuery动态创建SVG标签
        let svgNS = "http://www.w3.org/2000/svg";

        // 以下是示例变量，根据实际需要进行修改
        let svgWidth = width, svgHeight =height // SVG视口的宽度和高度
        let strokeWidth = lineWidth; // 椭圆边线的宽度
        let strokeColor =  lineColor; // 椭圆边线的颜色

        // 为了让椭圆能完全贴合到SVG视口内，我们需要考虑线宽
        let ellipseCX = svgWidth / 2, ellipseCY = svgHeight / 2; // 椭圆中心的坐标
        let ellipseRX = svgWidth / 2 - strokeWidth / 2, ellipseRY = svgHeight / 2 - strokeWidth / 2; // 椭圆的水平半径和垂直半径

        // 创建SVG元素
        let svg = document.createElementNS(svgNS, "svg");

        // 设置SVG元素的宽度和高度
        $(svg).attr({
            'width': svgWidth,
            'height': svgHeight,
            'viewBox': "0 0 " + svgWidth + " " + svgHeight
        });

        // 创建一个椭圆形
        let ellipse = document.createElementNS(svgNS, "ellipse");

        // 设置椭圆形的属性
        $(ellipse).attr({
            'cx': ellipseCX,
            'cy': ellipseCY,
            'rx': ellipseRX,
            'ry': ellipseRY,
            'fill': 'none',
            'stroke': strokeColor,
            'stroke-width': strokeWidth
        });
        if (lineType === 2){
            $(ellipse).attr('stroke-dasharray',"5,5");
        }else if (lineType === 3){
            $(ellipse).attr('stroke-dasharray',"5,1,5");
        }
// 将椭圆形添加到SVG元素
        $(svg).append(ellipse);
        return $(svg)
    }
    //创建矩形节点
    static  CreateNode(xmlNode, index) {
        let x0 = 0;
        let y0  = 0;
        let w  = 100;
        let h  = 100;
        let id = GenerateSnowflakeId();
        let LC = "#FF0000FF";
        let LT = "1";
        let LW = "1";

        if (xmlNode !== undefined && xmlNode !== null) {
            id = $(xmlNode).find('ID').text();
            //读取通用x0,y0,w,h
            x0 = $(xmlNode).find('X0').text();
            y0 = $(xmlNode).find('Y0').text();
            w = $(xmlNode).find('W').text();
            h = $(xmlNode).find('H').text();
            let strTemp = $(xmlNode).find('LC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    LC = IntToRGB(parseInt(strTemp));
                } else {
                    LC= strTemp;
                }
            }

            LT = $(xmlNode).find('LT').text();
            LW = $(xmlNode).find('LW').text();
        }

        let node = new ht.Node();
        node.setId(id);
        node.a({
            name: '椭圆',
            selected: false,
            lock: false,
            type:"circular",
            LC:LC,
            LT:LT,
            LW:LW,
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
        let xml = XmlParser.parseFromString("<CR/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "TP", 9);
        AppendDom(xml, "X0", position.x);
        AppendDom(xml, "Y0", position.y);
        AppendDom(xml, "W", node.getWidth());
        AppendDom(xml, "H", node.getHeight());
        AppendDom(xml, "LW", node.a("LW"));
        AppendDom(xml, "LC", node.a("LC"));
        AppendDom(xml, "LT", node.a("LT"));
        AppendDom(xml, "index", node.a("index"));

        return xml.documentElement;
    }

    InitPrototype() {
        let data = this.node;
        let self = this;
        let elFrame = window.propertyFrame;
        elFrame.contentWindow.ClearProperty();
        CreatBaseProperty(null, self);

        let color = data.a("LC");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("线颜色", color, null, "color", function (value) {
            console.log("new value:" + value);
            data.a("LC", value);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("线类型", data.a("LT"), LineStyleInfo, "dropDownList", function (value) {
            console.log("new value:" + value);
            data.a("LT", parseInt(value));
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("线宽", data.a("LW"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("LW", value);
            self.CreateEm();
        })
       
    }



}
