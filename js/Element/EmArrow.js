
export class EmArrow{

    constructor(backDiv, node) {
        this.RootDom = [];
        this.backDiv = backDiv;
        node.s("element", this);
        this.node = node;
        window.dataModel.add(node);
    }
    GetRootDom(){
        return this.RootDom;
    }
    CreateEm(){

        //绘制一个背板里面放置一个svg
        //这里创建两个DIV，一个绘制开始，一个绘制结束
        const self = this;
        let $backDiv = this.backDiv;
        let node = this.node;
        let id = node.getId();
        let arrowHeight = parseInt(node.a("arrowHeight"));
        let point0Id = id + "_arrow_point0";
        let point1Id = id + "_arrow_point1";
        let backId = id + "_arrow_back";

        $("#" + id).remove();
        $("#" + point0Id).remove();
        $("#" + point1Id).remove();
        $("#" + backId).remove();
        let position = node.getPosition();
        let w = 300;
        let h = 300;
        let index = parseInt(node.getAttr("index"));
        let x0 = parseInt(node.a("X0"));
        let y0 = parseInt(node.a("Y0"));
        let x1 = parseInt(node.a("X1"));
        let y1 = parseInt(node.a("Y1"));
        let LW = parseInt(node.a("LW"));
        let LC = node.a("LC");
        let LT = parseInt(node.a("LT"));

        //实际绘制需要减去箭头的高度，不然会超出矩形
        let drX0 = x0 - arrowHeight;
        let drY0 = y0 - arrowHeight;
        let drX1 = x1 - arrowHeight;
        let drY1 = y1 - arrowHeight;

        //计算需要绘制的矩形位置
        let rect =   EmArrow.CalculateRectangle(drX0, drY0, drX1, drY1,arrowHeight);
        let domLeftIs0 = true;
        if (rect.relativePosition.point1.x === 0){
            domLeftIs0 = false;
        }

        //绘制箭头线的矢量图
        let $svg =  self.createSvgArrow(index,id,
            rect.relativePosition.point0.x , rect.relativePosition.point0.y,
            rect.relativePosition.point1.x, rect.relativePosition.point1.y,
            rect.dimensions.width,
            rect.dimensions.height,
            arrowHeight,
            LW,
            LC,
            LT
        );
        //在线的两个点上绘制两个很小的DIV，可以拖动
        //这两个div是在外部的，删除的时候需要一起删除
        let $point0Div = $(createDiv(point0Id, "rgba(255,0,0,0)"));
        $point0Div.width(arrowHeight * 1.5);
        $point0Div.height(arrowHeight * 1.5);
        $point0Div.css("z-index", index + 1)
  
        $point0Div.offset({top: y0, left: x0});
 
        if(!IsView && !node.a("lock")) {
            $point0Div.css("cursor", "move");
            $point0Div.draggable({
                drag: function (event, ui) {
                    let moveLeft = Math.round(ui.position.left / window.scaleIncrement);
                    let moveTop = Math.round(ui.position.top / window.scaleIncrement);
                    self.node.a("X0", moveLeft);
                    self.node.a("Y0", moveTop);
                    self.CreateEm();
                }
            });
        }

        let $point1Div = $(createDiv(point1Id, "rgba(8,226,48,0)"));
        $point1Div.width(arrowHeight * 1.5);
        $point1Div.height(arrowHeight * 1.5);
     
        $point1Div.css("z-index", index + 2)
        $point1Div.offset({top: y1, left: x1});
        if(!IsView && !node.a("lock")) {
            $point1Div.css("cursor", "move");
            $point1Div.draggable({
                drag: function (event, ui) {
                    let moveLeft = Math.round(ui.position.left / window.scaleIncrement);
                    let moveTop = Math.round(ui.position.top / window.scaleIncrement);
                    self.node.a("X1", moveLeft);
                    self.node.a("Y1", moveTop);
                    self.CreateEm();
                }
            });
        }

        let $svgBack = $(createDiv(backId,"#00000000"));
        $svgBack.css("z-index", index);
        $svgBack.offset({top: rect.position.y, left: rect.position.x});

        $svgBack.append($svg)
        $backDiv.append($point0Div);
        $backDiv.append($point1Div);
        $backDiv.append($svgBack);

        $svgBack.on('mousedown', function (e) {
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
            SelectElement($svgBack , node);
            //触发事件，主要用户通知动态表格
            if (self.handler !== undefined) {
                self.handler(node);
            }
            //$svgBack.css("background-color", "rgba(4,0,247,0.19)")
        });
        if(!IsView && !node.a("lock")) {
            $svgBack.draggable({
                drag: function (event, ui) {
                    //计算 x1,y1 x0,y0

                    //这里是左上角位移
                    let left = Math.round(ui.position.left / window.scaleIncrement);
                    let top = Math.round(ui.position.top / window.scaleIncrement);
                    //需要计算出移动的距离
                    let moveLeft = left - rect.position.x;
                    let moveTop = top - rect.position.y;
                    node.a("X0", x0 + moveLeft);
                    node.a("Y0", y0 + moveTop);
                    node.a("X1", x1 + moveLeft);
                    node.a("Y1", y1 + moveTop);
                    self.InitPrototype()
                }
            });
        }

        $svgBack.on('mouseup', function (e) {
            //设置鼠标为正常模式
            $("body").css("cursor", "auto");
            self.CreateEm();
        });

        if(!IsView ) {
            $svgBack.on('contextmenu', function (e) {
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
                                    $svgBack.remove();
                                    $point1Div.remove();
                                    $point0Div.remove();

                                    window.dataModel.remove(node)
                                    console.log("删除 arrow " + $svg.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });
        }
        this.RootDom = [$svgBack, $point0Div, $point1Div];
        if (node.a("selected")){
            DrawSelectionEffect(this.RootDom[0]);
        }
        self.InitPrototype()
        return $svgBack;
    }

    createSvgArrow(zIndex, id, x0, y0, x1, y1, width, height, arrowHeight, lineWidth, lineColor,lineType) {
        // 添加的偏移量
        let offset = arrowHeight;

        // 给起点和终点坐标都添加偏移量
        x0 += offset;
        y0 += offset;
        x1 += offset;
        y1 += offset;

        // 创建SVG元素
        let $svg = $(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
        $svg.attr('id', id);
        $svg.attr('width', width + offset * 2); // 考虑偏移量增加SVG大小
        $svg.attr('height', height + offset * 2);
        $svg.css("background-color", "#00000000");
        $svg.css("z-index", zIndex);

        let angle = Math.atan2(y1 - y0, x1 - x0);

        // 创建线段的路径并设置属性
        let pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let linePath = `M ${x0} ${y0} L ${x1} ${y1}`;
        $(pathLine).attr({
            'd': linePath,
            'stroke': lineColor,
            'stroke-width': lineWidth,
        });
        if (lineType === 2){
            $(pathLine).attr('stroke-dasharray',"5,5");
        }else if (lineType === 3){
            $(pathLine).attr('stroke-dasharray',"5,1,5");
        }

        $svg.append(pathLine);

        // 创建箭头的路径并设置属性
        let pathArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let arrowPath = `M ${x1 - arrowHeight * Math.cos(angle + Math.PI / 6)} 
                   ${y1 - arrowHeight * Math.sin(angle + Math.PI / 6)} 
                   L ${x1} ${y1} L 
                   ${x1 - arrowHeight * Math.cos(angle - Math.PI / 6)} 
                   ${y1 - arrowHeight * Math.sin(angle - Math.PI / 6)}`;
        $(pathArrow).attr({
            'd': arrowPath,
            'stroke': lineColor,
            'stroke-width': lineWidth,
            'fill': lineColor,
        });
        $svg.append(pathArrow);
        return $svg;
    }

    static CalculateRectangle(x0, y0, x1, y1,minSpace) {
        //这里计算矩形位置和宽高的时候需要留出箭头的高度，也就是说无论如何，矩形的内部最低保持箭头宽度的空隙
        // 计算矩形的位置
        let position = { x: Math.min(x0, x1), y: Math.min(y0, y1) };

        // 计算矩形的长和宽
        let dimensions = { width: Math.abs(x0 - x1), height: Math.abs(y0 - y1) };
        //保留矩形的间隙，无论高度与宽度都不能小于minSpace
        if (dimensions.width < minSpace) {
            dimensions.width = minSpace;
        }
        if (dimensions.height < minSpace) {
            dimensions.height = minSpace;
        }


        // 计算两点的相对坐标
        const relativeA = { x: x0 - Math.min(x0, x1), y: y0 - Math.min(y0, y1) };
        const relativeB = { x: x1 - Math.min(x0, x1), y: y1 - Math.min(y0, y1) };

        let relativePosition = {
            point0: relativeA,
            point1: relativeB
        };

        return { position: position, dimensions: dimensions, relativePosition: relativePosition };
    }


    //创建矩形节点
    static  CreateNode(xmlNode, index) {
        let x0 = 0;
        let y0  = 0;
        let x1 = 100;
        let y1  = 0;
        //let w  = 100;
        //let h  = 100;
        let id = GenerateSnowflakeId();
        let LC = "#FF0000FF";
        let LT = "1";
        let LW = "1";
        let Rectangle =   EmArrow.CalculateRectangle(x0, y0, x1, y1);
        if (xmlNode !== undefined && xmlNode !== null) {
            id = $(xmlNode).find('ID').text();
            //读取通用x0,y0,w,h
            x0 = parseInt( $(xmlNode).find('X0').text());
            y0 =  parseInt($(xmlNode).find('Y0').text());
            x1 = parseInt( $(xmlNode).find('X1').text());
            y1 =  parseInt($(xmlNode).find('Y1').text());

            let strTemp = $(xmlNode).find('LC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    LC = IntToRGB(parseInt(strTemp));
                } else {
                    LC= strTemp;
                }
            }

            LT = $(xmlNode).find('LT').text();
            LW =parseInt( $(xmlNode).find('LW').text());
        }
        let arrowHeight = Math.round( LW * 1.5);
        if (arrowHeight< 10)
            arrowHeight = 10;
        let node = new ht.Node();
        node.setName('箭头线');
        node.setId(id);
        node.s({
            'ctl.type': 'rectangle'
        });
        node.a({
            name: '箭头线',
            selected: false,
            lock: false,
            type:"arrow",
            X0:x0,
            Y0:y0,
            X1:x1,
            Y1:y1,
            LC:LC,
            LT:LT,
            LW:LW,
            arrowHeight:arrowHeight,
            index: index
        });
        // node.setPosition(Rectangle.position.x, Rectangle.position.y);
        // node.setWidth(Rectangle.dimensions.width);
        // node.setHeight(Rectangle.dimensions.height);
        return node;
    }



    ExportXml(){
        let node = this.node;
        let id = node.getId();
        let xml = XmlParser.parseFromString("<AR/>", "text/xml");

        AppendDom(xml, "ID", id);
        AppendDom(xml, "TP", 11);
        AppendDom(xml, "X0", node.a("X0"));
        AppendDom(xml, "Y0", node.a("Y0"));
        AppendDom(xml, "X1", node.a("X1"));
        AppendDom(xml, "Y1", node.a("Y1"));
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
     
        elFrame.contentWindow.AddProperty("名称", data.a("name"), null, "label", function () {})

        elFrame.contentWindow.AddProperty("X0", data.a("X0"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("X0",value.toString());
            let position = data.getPosition();
            data.setPosition(value, position.y);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("Y0", data.a("Y0"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("Y0",value.toString());
            let position = data.getPosition();
            data.setPosition(position.x, value);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("X1", data.a("X1"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("X1",value.toString());
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("Y1", data.a("Y1"), null, "int", function (value) {
            console.log("new value:" + value);
            data.a("Y1",value.toString());
            self.CreateEm();
        })


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
            data.a("LW", parseInt(value));
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("index", data.a("index"), null, "label", function () {})
        
    }



}
