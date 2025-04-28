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

export default function DrawXml(backDiv,xml,dataModel) {

    // let parser = new DOMParser();
    // let xmlDoc = parser.parseFromString(xmlStr, "text/xml");
    // let xml = $(xmlDoc);

    backDiv.empty();
    //清除dataModel中的node
    dataModel.clear();
    backDiv.empty();
    console.log('开始解析xml '); // 输出标签名称
    //解析xml，读取每个元素
    xml.find('FR').each(function () {
        let tagName = this.tagName; // 获取标签名称
        console.log('Tag Name: ' + tagName);
      
        // 如果想要获取子标签中的值，可以继绀使用jQuery的text()或者其他遍历方法
        let loopIndex = 0;
        let lastDTNode = null;
        $(this).children().each(function () {
            //判断上一级的上一级标签不能是INXML
            if (this.parentNode.parentNode.tagName.toUpperCase() === 'INXML') {
                console.log('error '+$(this).html()+' find InXml return');
                return;
            }
            
            let em = null
            let index = parseInt( $(this).find('index').text());
            if (index === null || index === undefined || isNaN(index)){
                console.log('error '+$(this).html()+' index is null');
                index = loopIndex;
            }
            if (this.tagName.toUpperCase() === 'DT') {
                //这里记录一下动态表格xmlNode,等下次循环到附属的静态表格node的时候一起绘制
                lastDTNode = this;
            } else if (this.tagName.toUpperCase() === 'ST') {
                let id = $(this).find('ID').text();
                //非附属的静态表格，独立绘制
                if (id !== "-1") {
                    let node = StTable.CreateNode(this, index)
                    em = new StTable(backDiv, node);
                } else {
                    // id = -1 是DT的附属，与之前的DT节点一起传给DtTable.CreateNode
                    if (lastDTNode !== null) {
                        let dtId = $(lastDTNode).find('ID').text();
                        let dataNode = GetTableNodeByElementId(xml, dtId);
                        let xmlNodeArr = [
                            lastDTNode,
                            this,
                            dataNode
                        ]
                        let node = DtTable.CreateNode(xmlNodeArr, index);
                        em = new DtTable(backDiv, node);
                        lastDTNode = null;
                    }
                }
            } else if (this.tagName.toUpperCase() === 'SW') {
                let node = EmText.CreateNode(this, index)
                em = new EmText(backDiv, node);
            } else if (this.tagName.toUpperCase() === 'CL') {
                let node = EmClock.CreateNode(this, index)
                em = new EmClock(backDiv, node);
            } else if (this.tagName.toUpperCase() === 'SN') {
                let snId = $(this).find('ID').text();
                let dataNode = GetTableNodeByElementId(xml, snId);
                let xmlNodeArr = [
                    this,
                    dataNode
                ]
                let node = EmSubject.CreateNode(xmlNodeArr, index)
                em = new EmSubject(backDiv, node);
            } else if (this.tagName.toUpperCase() === 'PT') {
                let ptId = $(this).find('ID').text();
                let dataNode = GetTableNodeByElementId(xml, ptId);
                let xmlNodeArr = [
                    this,
                    dataNode
                ]
                let node = EmImage.CreateNode(xmlNodeArr, index)
                em = new EmImage(backDiv, node);
            }else if (this.tagName.toUpperCase() === 'VD') {
                let vdId = $(this).find('ID').text();
                let dataNode = GetTableNodeByElementId(xml, vdId);
                let xmlNodeArr = [
                    this,
                    dataNode
                ]
                let node = EmVideo.CreateNode(xmlNodeArr, index)
                em = new EmVideo(backDiv, node);
            }else if (this.tagName.toUpperCase() === 'RT') {
                let node = EmRectangle.CreateNode(this, index)
                em = new EmRectangle(backDiv, node);
            }else if (this.tagName.toUpperCase() === 'CR') {
                let node = EmCircular.CreateNode(this, index)
                em = new EmCircular(backDiv, node);
            }
            else if (this.tagName.toUpperCase() === 'AR') {
                let node = EmArrow.CreateNode(this, index)
                em = new EmArrow(backDiv, node);
            } else if (this.tagName.toUpperCase() === 'LN') {
                let node = EmLine.CreateNode(this, index)
                em = new EmLine(backDiv, node);
            }

            if (em !== null) {
                em.CreateEm();
                loopIndex += 5;
            }
        });
    });
}
function GetTableNodeByElementId($xml,elementId) {
    let  findArr = $xml.find("Table");
    if (findArr !== undefined && findArr !== null && findArr.length > 0){
        for (let i = 0; i < findArr.length; i++){
            if ($(findArr[i]).find("ELEMENTID").text() === elementId){
                return findArr[i];
            }
        }
    }
    return null;
}


