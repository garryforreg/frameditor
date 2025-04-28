import {EmText} from "./EmText.js";
import {DtTable} from "./DtTable.js";
import {EmClock} from "./EmClock.js";
import {StTable} from "./StTable.js";
import {EmSubject} from "./EmSubject.js";
import {EmImage} from "./EmImage.js";
import {EmVideo} from "./EmVideo.js";
import {EmRectangle} from "./EmRectangle.js";
import {EmArrow} from "./EmArrow.js";
import {EmLine} from "./EmLine.js";
import {EmCircular} from "./EmCircular.js";

export default function ClipboardCopyNewNode(node) {

    if(node === null || node === undefined)
        return;

    let dicItems = ClipboardLoadFromStorage();
    let length = Object.keys(dicItems).length;
    let element = node.s("element");
    let expObj = element.ExportXml();
    let expDomArray = [];
    if(Array.isArray(expObj)){
        expDomArray = expObj;
    }else{
        expDomArray.push(expObj);
    }
    //创建一个新ID
    dicItems[length + 1] = expDomArray;
    ClipboardSave2Storage(dicItems);
    DrawClipboard();
}
function ClipboardSave2Storage(dicItems) {
    let $xml =$("<clipboard>");
    for (let key in dicItems) {
        let emArr = dicItems[key];
        let $newChapter = $("<item>");
        $newChapter.attr("id", key);
        for (let i = 0; i < emArr.length; i++){
            $newChapter.append(emArr[i])
        }
        $xml.append($newChapter)
    }
    sessionStorage.setItem('clipboard', new XMLSerializer().serializeToString($xml[0]));
}


/**
 * 从存储中读取剪切板内容
 * @returns 字典<id（元素编号）,xml数组（单个元素导出的xml数组）[]>
 */
function ClipboardLoadFromStorage() {
    let xmlParser = new DOMParser();
    let dicItems = {};
    let clipboardStr = sessionStorage.getItem('clipboard');
    if (clipboardStr === null || clipboardStr === undefined || clipboardStr === ""){
        return  {};
    }

    let xmlDoc = xmlParser.parseFromString(clipboardStr, "text/xml");
    let $xml = $(xmlDoc);
    let $itemXml =  $xml.find("item")
    $itemXml.each(function (){
        let id = $(this).attr("id"); // 获取标签名称
        let xmlArr = [];
        $(this).children().each(function () {
            xmlArr.push($(this)[0]);
        });
        dicItems[id] = xmlArr;
    });
    return dicItems;
}

function ClipboardPasteNode(xmlArr) {

    if (xmlArr === null || xmlArr === undefined || xmlArr.length === 0){
        return;
    }
    let index = 0;
    let lastDTNode = null;

    for (let i = 0; i < xmlArr.length; i++) {
        let xml = xmlArr[i];
        let tagName = xml.tagName; // 获取标签名称
        console.log('Tag Name: ' + tagName); // 输出标签名称
        // 如果想要获取子标签中的值，可以继绀使用jQuery的text()或者其他遍历方法

        let em = null
        let node = null;
        if (xml.tagName.toUpperCase() === 'DT') {
            //这里记录一下动态表格xmlNode,等下次循环到附属的静态表格node的时候一起绘制
            lastDTNode = xml;
        } else if (xml.tagName.toUpperCase() === 'ST') {
            let id = $(xml).find('ID').text();
            //非附属的静态表格，独立绘制
            if (id !== "-1" && id !== "") {
                node = StTable.CreateNode(xml, index)
                node.setId(GenerateSnowflakeId());
                em = new StTable(backDiv, node);
            } else {
                // id = -1 是DT的附属，与之前的DT节点一起传给DtTable.CreateNode
                if (lastDTNode !== null) {

                    let dataNode = ClipboardGetDataNodeInArray(xmlArr);
                    let xmlNodeArr = [
                        lastDTNode,
                        xml,
                        dataNode
                    ]
                    node = DtTable.CreateNode(xmlNodeArr, index);
                    node.setId(GenerateSnowflakeId());
                    em = new DtTable(backDiv, node);
                    lastDTNode = null;
                }
            }
        } else if (xml.tagName.toUpperCase() === 'SW') {
            node = EmText.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmText(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'CL') {
            node = EmClock.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmClock(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'SN') {

            let dataNode = ClipboardGetDataNodeInArray(xmlArr);
            let xmlNodeArr = [
                xml,
                dataNode
            ]
            node = EmSubject.CreateNode(xmlNodeArr, index)
            node.setId(GenerateSnowflakeId());
            em = new EmSubject(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'PT') {

            let dataNode = ClipboardGetDataNodeInArray(xmlArr);
            let xmlNodeArr = [
                xml,
                dataNode
            ]
            node = EmImage.CreateNode(xmlNodeArr, index)
            node.setId(GenerateSnowflakeId());
            em = new EmImage(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'VD') {

            let dataNode = ClipboardGetDataNodeInArray(xmlArr);
            let xmlNodeArr = [
                xml,
                dataNode
            ]
            node = EmVideo.CreateNode(xmlNodeArr, index)
            node.setId(GenerateSnowflakeId());
            em = new EmVideo(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'RT') {
            node = EmRectangle.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmRectangle(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'CR') {
            node = EmCircular.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmCircular(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'AR') {
            node = EmArrow.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmArrow(backDiv, node);
        } else if (xml.tagName.toUpperCase() === 'LN') {
            node = EmLine.CreateNode(xml, index)
            node.setId(GenerateSnowflakeId());
            em = new EmLine(backDiv, node);
        }

        if (em !== null && node !== null) {
        
            em.CreateEm();
            MoveElementLeft(node,0);
            MoveElementTop(node,0);
            index += 5;
        }

    }
}

/**
 * 从数组中获取数据节点
 * @param xmlArr
 * @returns  数据xml节点
 */
function  ClipboardGetDataNodeInArray(xmlArr) {
    for (let i = 0; i < xmlArr.length; i++) {
        let $xml = $(xmlArr[i]);
        let  findArr = $xml.find("Table");
        if (findArr !== undefined && findArr !== null && findArr.length > 0) {
            return findArr[0];
        }
    }
    return null;
}


/**
 * 绘制剪切板
 * @param $clipboardDiv
 * @constructor
 */
export function DrawClipboard() {
    let $clipboardDiv = window.clipboard ;
    let selectId = -1;
    $clipboardDiv.empty();
    let dicItems = ClipboardLoadFromStorage();
    //新建一个表格
    let headers = ["ID", "描述"];
    // 创建表格元素
    let $table = $('<table>').attr('id', 'clipboardTable');
    let $thead = $('<thead>');
    let $tbody = $('<tbody>').attr('id', 'selectableBody');
    let $tr = $('<tr>');
    // 填充表头
    $.each(headers, function (index, value) {
        $tr.append($('<th>').text(value));
    });
    $thead.append($tr);
    // 循环两次创建两行
    for (let key in dicItems) {
        let emArr = dicItems[key];
        let tagName = emArr[0].tagName;
        let $tr = $('<tr>').addClass('ui-widget-content');
        $tr.attr("cId",key);
        $tr.append($('<td>').text(key));
        $tr.append($('<td>').text(XmlTagDesc[tagName]));
        $tbody.append($tr);
    }
    // 组装表格并添加到页面
    $table.append($thead).append($tbody);
    // 将创建好的表格添加到页面的特定容器中
    $clipboardDiv.append($table);

    $table.on('mousedown', function (e) {
        hideMenu(e);
        if (e.target instanceof HTMLTableCellElement) {
            //表格的某个cell被点击了
            let cell = $(e.target)
            let selRowIndex = cell.get(0).parentNode.rowIndex;
            if (selRowIndex > 0) {
                let $tr = $(cell.get(0).parentNode);
                let cid = $tr.attr("cId");
                if (cid !== undefined) {
                    selectId = cid;
                    $table.find('.ui-selected').each(function () {
                        // 从这个元素中删除 ui-selected 类
                        $(this).removeClass('ui-selected');
                    });
                    $tr.addClass("ui-selected"); // 选中此项
                    console.log("剪贴板选择了: " + selectId);
                }
            }
        }
    });

    $table.on('dblclick', function (e) {
        hideMenu(e);
        if (e.target instanceof HTMLTableCellElement) {
            //表格的某个cell被点击了
            let cell = $(e.target)
            let selRowIndex = cell.get(0).parentNode.rowIndex;
            if (selRowIndex > 0) {
                let $tr = $(cell.get(0).parentNode);
                let cid = $tr.attr("cId");
                if (cid !== undefined) {
                    selectId = cid;
                    ClipboardPasteNode(dicItems[selectId]);
                    console.log("双击了: " + selectId);
                }
            }
        }
    });


    $table.on('contextmenu', function (e) {
        let option =
            {
                menus: [
                    {
                        name: "粘贴",
                        onClick: function (e) {
                            console.log("粘贴 clicked");
                            ClipboardPasteNode(dicItems[selectId]);
                        },
                    },
                    {
                        name: "删除",
                        onClick: function (e) {
                            delete dicItems[selectId];
                            ClipboardSave2Storage(dicItems);
                            DrawClipboard();
                            console.log("删除  " +selectId);
                        }
                    }
                ]
            }
        showMenu(e, option);
    });


}