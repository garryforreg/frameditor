export class StTable {

    constructor(backDiv, node) {
        this.RootDom = null;
        this.backDiv = backDiv;
        this.node = node;
        node.s("element", this);
        this.splitStr = ",";
        this.propertyDiv = null;
        try{
            window.dataModel.add(node);
        }catch (e){
            console.log(e);
            throw e;
        }

    }
    GetRootDom(){
        return this.RootDom;
    }

    MouseDownHandler(handler) {
        this.handler = handler;
    }


    AdjSmaller(overValue, lineArr) {
        //小了，需要调整前一个格子
        let adjOver = overValue;
        for (let i = lineArr.length - 1; i >= 0; i--) {
            let cellValue = lineArr[i];
            //扣除这个格子的值，仍然不够，继续扣除
            if (adjOver + cellValue < 0) {
                adjOver += cellValue;
                lineArr[i] = 0;
            } else {
                //够了，跳出循环
                lineArr[i] = adjOver + cellValue;
                break;
            }
        }
    }


    CreateEm() {
        let backDiv = this.backDiv;
        let node = this.node;
        const self = this;
        let id = node.getId();
        $("#" + id).remove();
        let position = node.getPosition();

        //先尝试删除
        let colNum = node.getAttr("colCount");
        let rowNum = node.getAttr("rowCount");
        let lineWidth = node.getAttr("lineWidth");
        let fillColor = node.getAttr("fillColor");
        let lineColor = node.getAttr("lineColor");
        //let width = node.getAttr("width");
        //let height = node.getAttr("height");
        let hr = node.getAttr("HR");
        let wc = node.getAttr("WC");

        if (wc.length !== colNum) {
            colNum = wc.length;
        }
        if (hr.length !== rowNum) {
            rowNum = hr.length;
        }
        if (!isNaN(lineColor)) {
            lineColor = IntToRGB(lineColor);
        }

        let totalHeight = eval(hr.join("+")) + (lineWidth * (rowNum + 1));
        let totalWidth = eval(wc.join("+")) + (lineWidth * (colNum + 1));

        // 创建一个新的div元素
        var $newTable = $('<table></table>', {
            id: id,
            text: ''
        });
        $newTable.offset({top: position.y, left: position.x});
        backDiv.append($newTable);
        $newTable.css("position", "absolute");
        //$newTable.css("overflow", "hidden");
        $newTable.width(totalWidth);
        $newTable.height(totalHeight);
        $newTable.css("padding", "0px");
        $newTable.css("border", "0px");
        $newTable.css("border-spacing", "0px");
        $newTable.css("border-collapse", "collapse");
        $newTable.css('z-index', node.a("index"));
        for (var i = 0; i < rowNum; i++) {
            var $tr = $('<tr></tr>'); // 创建一行
            var rowHeight = hr[i];
            $tr.attr("id", id + "_tr" + this.splitStr + i)
            for (var j = 0; j < colNum; j++) {
                var $td = $('<td></td>'); // 创建一个单元格
                var colWidth = wc[j];
                $td.attr("id", id + "_td" + this.splitStr + i + this.splitStr + j)
                $td.css("padding", "0px");
                $td.width(colWidth);
                $td.height(rowHeight);
                //$td.text('行' + (i + 1) + '，列' + (j + 1) ); // 设置单元格内容
                $tr.append($td); // 将单元格添加到行中
            }
            $newTable.append($tr); // 将行添加到表格中
        }

        $newTable.find('tr td:first-child').css('border-left', lineWidth + 'px solid ' + lineColor);
        $newTable.find('tr:first-child td').css('border-top', lineWidth + 'px solid ' + lineColor);
        $newTable.find('th, td').css('border-bottom', lineWidth + 'px solid ' + lineColor);
        $newTable.find('th, td').css('border-right', lineWidth + 'px solid ' + lineColor);
        $newTable.find('th, td').css("background-color", IntToRGB(fillColor));
        //绘制发现总是会有1-2个像素的误差
        //这里挨个检查每行，每列，如果与设置不符，调整
        if ($newTable.width() !== totalWidth) {
            //首行，检查列宽
            $newTable.find('tr:first-child td').each(function () {
                let cellColIndex = $(this).index(); // 当前单元格的列索引
                let value = wc[cellColIndex] - $(this).width();
                if (value > 0) {
                    if (value < 1) {
                        value = 1;
                    }
                } else {
                    if (value < -1) {
                        value = -1;
                    }
                }
                if ($newTable.width() < totalWidth) {
                    self.AdjTableColWidth($newTable, cellColIndex, wc[cellColIndex] + value);
                }
            })
        }
        if ($newTable.height() !== totalHeight) {
            //首列，检查行高
            $newTable.find('tr td:first-child').each(function () {
                let cellRowIndex = $(this).parent().index(); // 当前单元格的行索引
                let value = hr[cellRowIndex] - $(this).height();
                if (value > 0) {
                    if (value < 1) {
                        value = 1;
                    }
                } else {
                    if (value < -1) {
                        value = -1;
                    }
                }
                if ($newTable.height() < totalHeight) {
                    self.AdjTableRowHeight($newTable, cellRowIndex, hr[cellRowIndex] + value);
                }
            });
        }


        //绑定的高度一定是动态算出来的
        node.setWidth(Math.round($newTable.width()));
        node.setHeight(Math.round($newTable.height()));
        $newTable.on('mousedown', function (e) {
            hideMenu(e);
            node.setAttr("selRowIndex",-1);
            node.setAttr("selColIndex",-1);
            node.setAttr("selWidth", 0);
            node.setAttr("selHeight", 0);

            // 处理点击事件的代码
            console.log(id + ' 静态表格元素被点击了！');
            if (e.target instanceof HTMLTableCellElement) {
                //表格的某个cell被点击了
                let cell = $(e.target)
                let selRowIndex = cell.get(0).parentNode.rowIndex;
                let selColIndex = cell.get(0).cellIndex;
                node.setAttr("selRowIndex",selRowIndex);
                node.setAttr("selColIndex",selColIndex);
                node.setAttr("selWidth", Math.round(cell.width()))
                node.setAttr("selHeight",Math.round(cell.height()))
                // 这里可以绑定属性显示单个单元格的高，宽
                console.log(cell.attr("id") + ' 格元格被点击了！at ' + selRowIndex + '行,' + selColIndex + '列');
            }

            self.SetNodeSelect();

        });
        $newTable.on('mouseup', function (e) {
            // self.SetRowsHeight()
            $newTable.css("background-color", "rgba(0,105,247,0)")
        });

        if (!IsView && !node.a("lock")) {
            $newTable.on('contextmenu', function (e) {
                let selRowIndex = undefined;
                let selColIndex = undefined;
                if (e.target instanceof HTMLTableCellElement) {
                    //表格的某个cell被点击了
                    let cell = $(e.target)
                    selRowIndex = cell.get(0).parentNode.rowIndex;
                    selColIndex = cell.get(0).cellIndex;
                    console.log(cell.attr("id") + ' 静态表格元素被右击了！at ' + selRowIndex + '行,' + selColIndex + '列');
                } else {
                    //点击到表格线了
                    console.log(id + ' 静态表格线被右击了！');
                    if (e.target instanceof HTMLDivElement) {
                        //表格线分两种情况，一个是点击到了表格行，一个是点击到了表格列
                        let clickEm = e.target.parentNode;
                        if (clickEm instanceof HTMLTableRowElement) {
                            selRowIndex = clickEm.rowIndex;
                            console.log($(clickEm).attr("id") + ' 静态表格行被右击了！at ' + selRowIndex + '行');

                        } else if (clickEm instanceof HTMLTableCellElement) {
                            selColIndex = clickEm.cellIndex;
                            console.log($(clickEm).attr("id") + ' 静态表格列被右击了！at ' + selColIndex + '列');
                        }
                    } else if (e.target instanceof HTMLTableElement) {
                        console.log(id + ' 表格最外层上、左线被右击了！');
                    }
                }

                // e.preventDefault();
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
                                name: "添加一行",
                                onClick: function (e) {
                                    self.AddRow();
                                    self.SetNodeSelect()
                                },
                            }, {
                                name: "添加一列",
                                onClick: function (e) {
                                    self.AddCol();
                                    self.SetNodeSelect()
                                },
                            },
                            {
                                name: "删除一行",
                                onClick: function (e) {
                                    self.DelRow();
                                    self.SetNodeSelect()
                                },
                            }, {
                                name: "删除一列",
                                onClick: function (e) {
                                    self.DelCol();
                                    self.SetNodeSelect()
                                },
                            }, {
                                name: "删除表格",
                                onClick: function (e) {
                                    //1.从背景板上删除控件。2.从dateMode删除对应的数据
                                    CleanSelection(this.RootDom, node)
                                    $newTable.remove();
                                    window.dataModel.remove(node)
                                    console.log("删除 静态表格控件 " + $newTable.attr("id"));
                                }
                            }
                        ]
                    }
                showMenu(e, option);
            });


            // 让所有的表格行（tr）都可以调整高度
            $("#" + id + " tr").resizable({
                handles: "s",  // 只在南边（下边）添加一个拖动把手
                minHeight: 1,
                resize: function (event, ui) {
                    let hrArr = node.a("HR");
                    // 重置宽度以防止拖动时改变
                    ui.size.width = ui.originalSize.width; // 限制只能调整高度
                  
                    // 让所有的表格行（tr）都同步调整高度
                    let row = ui.element.get(0);
                    let rowIndex = row.rowIndex;

                    let currHeight = Math.round(ui.size.height);
                    let moveHeight = currHeight - hrArr[rowIndex];
                    let nextCellHeight = 0;
                    //判断是否是最后一行
                    if (rowIndex !== hrArr.length - 1) {
                        nextCellHeight = hrArr[rowIndex + 1] - moveHeight;

                        let nextRow = self.table.get(0).rows[rowIndex + 1];
                        for (let i = 0; i < nextRow.cells.length; i++) {
                            let $nextCell = $(nextRow.cells[i]);
                            $nextCell.height(nextCellHeight);
                            console.log("moveHeight:" + moveHeight + " nextCellHeight:" + nextCellHeight + " $nextCell:" + $nextCell.height());
                        }
                        $(nextRow).height(nextCellHeight);
                    }

                    for (let i = 0; i < self.table.get(0).rows[rowIndex].cells.length; i++) {
                        let cell = self.table.get(0).rows[rowIndex].cells[i];
                        $(cell).height(currHeight);
                    }
               
                    
                    //保存表格的高度
                    hrArr[rowIndex] = currHeight;
                    if (rowIndex !== hrArr.length - 1) {
                        hrArr[rowIndex +1 ] = Math.round(nextCellHeight);
                    }

                    //重新计算宽度
                    let totalHeight = eval(hrArr.join("+")) + (lineWidth * (rowNum + 1));
                    $newTable.height(totalHeight);
                    node.setHeight(Math.round($newTable.outerHeight()));

                    SetSelSize(id,$newTable.width(),$newTable.height());
                    self.InitPrototype();
                    if (self.handler !== undefined) {
                        self.handler(self.node);
                    }
                }
            });

            // 让所有的表格列（th或td）都可以调整宽度
            $("#" + id + " th, #" + id + " td").resizable({
                handles: "e", // 只在东边（右边）添加一个拖动把手
                minWidth: 1,
                resize: function (event, ui) {
                    if (IsView && !node.a("lock")) {
                        return;
                    }
                    let wcArr = node.a("WC");
                    // 重置高度以防止拖动时改变
                    ui.size.height = ui.originalSize.height; // 限制只能调整宽度
                    let selCell = ui.element.get(0);
                    let currWidth = Math.round(ui.size.width);
                    let moveWidth = currWidth - wcArr[selCell.cellIndex];
                    let nextCellWidth = 0;
                    if (selCell.cellIndex !== wcArr.length - 1){
                        nextCellWidth = wcArr[selCell.cellIndex + 1] - moveWidth;
                    }
                        
                    //该单元格所在列的所有宽度均于此保持一致
                    for (let i = 0; i < self.table.get(0).rows.length; i++) {
                        let cell = self.table.get(0).rows[i].cells[selCell.cellIndex];
                        let row = self.table.get(0).rows[i];
                        $(cell).width(currWidth);
                        if (selCell.cellIndex !== wcArr.length - 1){
                            let $nextCell =  $(row.cells[cell.cellIndex + 1]);
                            $nextCell.width(nextCellWidth);
                            console.log("moveWidth:" + moveWidth +" nextCellWidth:"+  $nextCell.width());
                        }
                    }
                    //保存表格的宽度
                    wcArr[selCell.cellIndex] = currWidth;
                    if (selCell.cellIndex !== wcArr.length - 1) {
                       wcArr[selCell.cellIndex + 1] = Math.round(nextCellWidth);
                    }
                    //重新计算宽度
                    let totalWidth = eval(wcArr.join("+")) + (lineWidth * (colNum + 1));
                    $newTable.width(totalWidth);
                    node.setWidth(Math.round($newTable.outerWidth()));
                    SetSelSize(id,$newTable.width(),$newTable.height());
                    self.InitPrototype();
                    if (self.handler !== undefined) {
                        self.handler(self.node);
                    }
                }
            });

            $("#" + id).draggable({
                drag: function (event, ui) {
                    node.setPosition(Math.round(ui.position.left / window.scaleIncrement), Math.round(ui.position.top / window.scaleIncrement));
                    SetSelPosition(id,ui.position.left, ui.position.top)
                   self.InitPrototype();
                    if (self.handler !== undefined) {
                        self.handler(self.node);
                    }
                }
            });

        }
        this.table = $newTable;
        this.RootDom = $newTable;
        SetSelSize(id,$newTable.width(),$newTable.height());
        SetSelPosition(id,$newTable.position().left,$newTable.position().top);
        self.InitPrototype();
        return $newTable;
    }
    
    
    SetNodeSelect() {
        this.InitPrototype();
        dataModel.sm().ss(this.node);
        //选择
        SelectElement($("#" + this.node.getId()), this.node);
        //触发事件，主要用户通知动态表格
        if (this.handler !== undefined) {
            this.handler(this.node);
        }
    }

    ExportXml() {
        let node = this.node;
        let position = node.getPosition();
        let id = node.getId();
        let hrArr = node.a("HR");
        let wcArr = node.a("WC");
        let xml = XmlParser.parseFromString("<ST/>", "text/xml");
        AppendDom(xml, "ID", id);
        AppendDom(xml, "TP", 3);
        AppendDom(xml, "X0", position.x);
        AppendDom(xml, "Y0", position.y);
        AppendDom(xml, "W", node.getWidth());
        AppendDom(xml, "H", node.getHeight());
        //NR
        AppendDom(xml, "NR", hrArr.length);
        //NC
        AppendDom(xml, "NC", wcArr.length);
        //LW  lineWidth
        AppendDom(xml, "LW", node.a("lineWidth"));
        //FC
        AppendDom(xml, "FC", node.a("fillColor"));
        //LC
        AppendDom(xml, "LC", node.a("lineColor"));
        //HR
        AppendDom(xml, "HR", hrArr.join(","));
        //WC
        AppendDom(xml, "WC", wcArr.join(","));

        AppendDom(xml, "index", node.a("index"));

        return xml.documentElement;
    }

    //调整列宽
    AdjTableColWidth($newTable, index, width) {
        $newTable.find("tr td").each(function () {
            let cellColIndex = $(this).index(); // 当前单元格的列索引
            if (cellColIndex !== index) {
                //继续循环
                return;
            }

            $(this).width(width);
        })
    }

    //调整行高
    AdjTableRowHeight($newTable, index, width) {
        $newTable.find("tr").eq(index).find("td").each(function () {
            $(this).height(width);
        })
    }


    static CreateNode(xmlNode, index) {
        //读取通用x0,y0,w,h
        let x0 = 0;
        let y0 = 0;

        let id = GenerateSnowflakeId();
        //表格属性
        let colCount = 3;
        let rowCount = 3;
        let lineWidth = 2;
        let fillColor =  "#000000FF";
        let lineColor = "#ff0000";
        let hr = [31, 31, 30];
        let wc = [31, 31, 30];
        let w = wc.reduce(function (a, b) {
            return a + b;
        }, 0);

        let h = hr.reduce(function (a, b) {
            return a + b;
        }, 0);
        //还要计算线宽度与行数
        h += (rowCount + 1) * lineWidth;
        w += (colCount + 1) * lineWidth;
        //xml读取
        if (xmlNode !== undefined && xmlNode !== null) {
            x0 = parseInt($(xmlNode).find('X0').text());
            y0 = parseInt($(xmlNode).find('Y0').text());
            w = parseInt($(xmlNode).find('W').text());
            h = parseInt($(xmlNode).find('H').text());
            id = parseInt($(xmlNode).find('ID').text());
            let strTemp = $(xmlNode).find('NC').text();
            if (strTemp.length > 0) {
                colCount = parseInt(strTemp);
            }

            strTemp = $(xmlNode).find('NR').text();
            if (strTemp.length > 0) {
                rowCount = parseInt(strTemp);
            }

            strTemp = $(xmlNode).find('LC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    lineColor = IntToRGB(parseInt(strTemp));
                } else {
                    lineColor = strTemp;
                }
            }

            strTemp = $(xmlNode).find('LW').text();
            if (strTemp.length > 0) {
                lineWidth = parseInt(strTemp);
            }

            strTemp = $(xmlNode).find('FC').text();
            if (strTemp.length > 0) {
                if (strTemp.indexOf("#") < 0) {
                    fillColor = IntToRGB(parseInt(strTemp));
                } else {
                    fillColor = strTemp;
                }
            }


            let hrStr = $(xmlNode).find('HR').text();

            if (hrStr.length > 0) {
                hr = SplitStr2Int(hrStr, ",");
                if (hrStr.indexOf(",") > 0) {
                    hr = hrStr.split(",").map(Number);
                } else {
                    hr = [parseInt(hrStr)];
                }
            }

            let wcStr = $(xmlNode).find('WC').text();
            if (wcStr.length > 0) {
                if (wcStr.indexOf(",") > 0) {
                    wc = wcStr.split(",").map(Number);
                } else {
                    wc = [parseInt(wcStr)];
                }
            }

        }


        //创建Node
        let node = new ht.Node();
        node.setName('静态表格');
        node.setId(id);
        node.a({
            name:"静态表格",
            selected: false,
            lock: false,
            type:"table",
            width: w,
            height: h,
            index: index,
            colCount: colCount,
            rowCount: rowCount,
            lineWidth: lineWidth,
            lineColor: lineColor,
            fillColor: fillColor,
            HR: hr,
            WC: wc,
            NR: hr.length,
            NC: wc.length,
            selWidth:0,
            selHeight:0,
            selRowIndex : -1,
            selColIndex : -1
        });
        node.setPosition(x0, y0);
        node.setWidth(w);
        node.setHeight(h);
        return node;
    }

    SetRowsHeight() {
        let hr = [];

        let rowLength = this.table.get(0).rows.length;
        if (this.table === undefined || this.table === null) {
            return;
        }
        for (let i = 0; i < rowLength; i++) {
            let row = this.table.get(0).rows[i];
            let rowHeight = $(row).height();
            hr.push(rowHeight);
        }
        // node.setAttr("HR",hr);
        console.log(hr);
    }

    AdjRow(number) {
        let node = this.node;
        let hr = this.node.a("HR");
        let lineWidth = node.a("lineWidth");
        //在高度不变的情况下，重新分配表格行
        let rowLength = eval(hr.join("+")) + (lineWidth * (hr.length + 1));
        rowLength = rowLength - lineWidth * (number + 1);
        let arr = this.calculateSplit(number, rowLength);
        //处理小数
        node.a("HR", arr);
        node.a("rowCount", arr.length);
    }

    AdjCol(number) {
        let lineWidth = this.node.a("lineWidth");
        let wc = this.node.a("WC");
        //在宽度度不变的情况下，重新分配表格行
        let colLength = eval(wc.join("+")) + (lineWidth * (wc.length + 1));
        colLength = colLength - lineWidth * (number + 1);
        let node = this.node;


        let arr = this.calculateSplit(number, colLength);
        //处理小数
        node.a("WC", arr);
        node.a("colCount", arr.length);
    }

    calculateSplit(splitNum, total) {
        // Compute the initial height per row
        let heightPerRow = Math.floor(total / splitNum);

        // Compute leftover height
        let leftoverHeight = total - (heightPerRow * splitNum);

        // Initialize array to store the height of each row
        let rowHeights = [];

        // Distribute the initial height and add extra height to some rows
        for (let i = 0; i < splitNum; i++) {
            if (i < leftoverHeight) rowHeights.push(heightPerRow + 1);
            else rowHeights.push(heightPerRow);
        }

        return rowHeights;
    }


    //添加行，最后一行分割
    AddRow() {
        let node = this.node;
        let lineWidth = node.a("lineWidth");
        let hr = node.a("HR");
        let lastIndex = this.table.get(0).rows.length;
        //计算最后一行目前的行高
        let lastRow = this.table.get(0).rows[lastIndex - 1];
        //1.计算最后一行的高度
        let lastRowHeight = $(lastRow).height();
        let rowHeight = lastRowHeight / 2 - lineWidth;
        hr[hr.length - 1] = rowHeight;
        //hr 添加一个行
        hr.push(rowHeight);
        node.a("HR", hr);
        node.a("rowCount", hr.length);
        this.CreateEm();
    }

    //删除行，直接删除最后一行
    DelRow() {
        let node = this.node;
        let hrArray = node.a("HR");
        //删除hrArray数组的最后一个元素
        hrArray.pop();
        node.a("rowCount", hrArray.length);
        if (hrArray.length === 0){
            $("#" + node.getId()).remove();
            window.dataModel.remove(node)
        }else{
            this.CreateEm();
        }
    }

    //添加列，最后一列分割
    AddCol() {
        let node = this.node;
        let lineWidth = node.a("lineWidth");
        let wc = node.a("WC");
        let lastIndex = this.table.get(0).rows[0].cells.length;
        //计算最后一列目前的宽度
        let lastCell = this.table.get(0).rows[0].cells[lastIndex - 1];
        //1.计算最后一列需要的宽度
        let lastCellWidth = $(lastCell).width();
        let cellWidth = lastCellWidth / 2 - lineWidth;
        wc[wc.length - 1] = cellWidth;
        //wc 添加一个列
        wc.push(cellWidth);
        node.a("WC", wc);
        node.a("colCount", wc.length);
        this.CreateEm();
    }

    DelColByIndex(index) {
        let node = this.node;
        let colArray = node.a("WC");
        if (colArray.length > index){
            colArray.splice(index, 1);
        }
        node.a("colCount", colArray.length);
        if (colArray.length === 0){
            $("#" + node.getId()).remove();
            window.dataModel.remove(node)
        }else{
            this.CreateEm();
        }
    }
    DelCol() {
        let node = this.node;
        let colArray = node.a("WC");
        //删除colArray数组的最后一个元素
        colArray.pop();
        node.a("colCount", colArray.length);
        if (colArray.length === 0){
            $("#" + node.getId()).remove();
            window.dataModel.remove(node)
        }else{
            this.CreateEm();
        }
    }
    //初始化属性面板
    InitPrototype() {
        let data = this.node;
        let self = this;
        let elFrame = window.propertyFrame;
        let position = data.getPosition();
        elFrame.contentWindow.ClearProperty();

        elFrame.contentWindow.AddProperty("名称", data.a("name"), null, "label", function () {})

        elFrame.contentWindow.AddProperty("坐标 X", position.x, null, "int", function (value) {
            console.log("new value:" + value);
            let position = data.getPosition();
            data.setPosition(value, position.y);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("坐标 Y", position.y, null, "int", function (value) {
            console.log("new value:" + value);
            let position = data.getPosition();
            data.setPosition(position.x, value);
            self.CreateEm();
        })

        elFrame.contentWindow.AddProperty("宽", data.getWidth(), null, "int", function (value) {
            if (data.getWidth() === value) {
                return;
            }
            console.log("new value:" + value);
            //这里将当前每列的高度按比例分配
            let wc = data.getAttr("WC");
            let colNum = data.getAttr("colCount");
            let lineWidth = data.a("lineWidth");
            const numOfLine = wc.length + 1 // 表格线的数量
            //新宽度(总)
            let newArray =  redistributeSizesWithBorders(wc,value,lineWidth,numOfLine)
            data.setAttr("WC",newArray);
            let newWidth = eval(newArray.join("+")) + (lineWidth * (colNum + 1));
            data.setHeight(newWidth)
            self.CreateEm();
            self.SetNodeSelect();
        })


        elFrame.contentWindow.AddProperty("高", data.getHeight(), null, "int", function (value) {
            if (data.getHeight() === value) {
                return;
            }
            console.log("new value:" + value);
            //这里将当前每列的高度按比例分配
            let hr = data.getAttr("HR");
            let rowNum = data.getAttr("rowCount");
            let lineWidth = data.a("lineWidth");
            const numOfLine = hr.length + 1 // 表格线的数量
            //新高度(总)
            let newArray =  redistributeSizesWithBorders(hr,value,lineWidth,numOfLine)
            data.setAttr("HR",newArray);
            let newHeight = eval(newArray.join("+")) + (lineWidth * (rowNum + 1));
            data.setHeight(newHeight)
            self.CreateEm();
            self.SetNodeSelect();
        })


        elFrame.contentWindow.AddProperty("当前宽", data.getAttr("selWidth"), null, "int", function (value) {
            if (data.getAttr("selWidth") === value) {
                return;
            }
            let wc = data.getAttr("WC");
            let selColIndex = data.getAttr("selColIndex");
            if (selColIndex >= 0)
            {
                //表格中选择列所有行都要跟着变
                wc[selColIndex] = value;
            }
            data.setAttr("selWidth",value)
            self.CreateEm();
            self.SetNodeSelect();
        })


        elFrame.contentWindow.AddProperty("当前高", data.getAttr("selHeight"), null, "int", function (value) {
            if (data.getAttr("selHeight") === value) {
                return;
            }

            let hr = data.getAttr("HR");
            let selRowIndex = data.getAttr("selRowIndex");
            if (selRowIndex >= 0)
            {
                //表格中选择列所有行都要跟着变
                hr[selRowIndex] = value;
            }
            data.setAttr("selHeight",value)
            self.CreateEm();
            self.SetNodeSelect();
        })

        elFrame.contentWindow.AddProperty("index", data.a("index"), null, "label", function (value) {})

        let color = data.getAttr("lineColor");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("边线颜色", color, null, "color", function (value) {
            if (data.getAttr("lineColor") === value) {
                return;
            }

            data.setAttr("lineColor", value);
            self.CreateEm();
            self.SetNodeSelect();
        })
        
        
        color = data.getAttr("fillColor");
        if (!isNaN(color)) {
            color = IntToRGB(color)
        }
        elFrame.contentWindow.AddProperty("填充颜色", color, null, "color", function (value) {
            if (data.getAttr("fillColor") === value) {
                return;
            }
            data.setAttr("fillColor", value);
            self.CreateEm();
            self.SetNodeSelect();
        })

        elFrame.contentWindow.AddProperty("线宽", data.a("lineWidth"), null, "int", function (value) {
            let old = data.a("lineWidth");
            if (old === value) {
                return;
            }
            data.a("lineWidth", value);
            self.CreateEm();
        })


        elFrame.contentWindow.AddProperty("列数",data.getAttr("colCount"), null, "int", function (value) {
            let old = data.getAttr("colCount");
            if (old === value) {
                return;
            }
            data.setAttr("colCount", value);
            self.AdjCol(value);
            self.CreateEm();
            self.SetNodeSelect();
        })

        elFrame.contentWindow.AddProperty("行数",data.getAttr("rowCount"), null, "int", function (value) {
            let old = data.a("rowCount");
            if (old === value) {
                return;
            }
            data.a("rowCount", value);
            self.AdjRow(value);
            self.CreateEm();
            self.SetNodeSelect();
        })
        
    }


}

