
let parser = new DOMParser();

function FindTable2Array(subDom, dsTableArray) {
    let dsTable = $(subDom).find("Table");
    if (dsTable !== undefined && dsTable !== null) {
        dsTableArray.push(dsTable.get(0));
    }
    //删除Table节点
    $(subDom).find("Table").remove();
}

export default function Nodes2xml(dataModel) {

    let frameRootXml =  parser.parseFromString("<Frame/>", "text/xml");

    AppendDom(frameRootXml,"NAME",FrameName);
    AppendDom(frameRootXml,"Width",ScreenWidth);
    AppendDom(frameRootXml,"Height",ScreenHeight);
    AppendDom(frameRootXml,"ScreeTypeID",PisType+"_" +ScreenWidth+"*"+ScreenHeight+";"+ScreenTypeDesc);
    let xmlNode = parser.parseFromString("<Xml/>", "text/xml");

    let xmlDuration = parser.parseFromString("<Duriation>60</Duriation>", "text/xml");
    let xmlFr = parser.parseFromString("<FR/>", "text/xml");
    xmlFr.documentElement.appendChild(xmlDuration.documentElement);
    
    let nodes = dataModel.getDatas();
    let nodeArr =  StoreNodes(nodes);
    
    let dsTableArray = [];
    for (let i = 0; i < nodeArr.length; i++) {
        let node = nodeArr[i];
        let element = node.s("element");
        let subDom = element.ExportXml();
        //数据表格会有多个xml节点生成
        if(Array.isArray(subDom)){
            for (let j = 0; j < subDom.length; j++){
                if (subDom[j].tagName === "DT" ){
                    FindTable2Array(subDom[j], dsTableArray);
                }
                xmlFr.documentElement.appendChild(subDom[j]);
            }
        }else {
            if (subDom.tagName === "SN" || subDom.tagName === "PT" || subDom.tagName === "VD") {
                FindTable2Array(subDom, dsTableArray);
            }
            xmlFr.documentElement.appendChild(subDom);

        }
    }

    //如果有DT，还需要提取DataXML节点
    let xmlData = parser.parseFromString("<Data/>", "text/xml");
    let xmlNewDataSet = parser.parseFromString("<NewDataSet/>", "text/xml");

    for (let i = 0; i < dsTableArray.length; i++){
        xmlNewDataSet.documentElement.appendChild(dsTableArray[i]);
    }
    xmlData.documentElement.appendChild(xmlNewDataSet.documentElement);
    xmlNode.documentElement.appendChild(xmlFr.documentElement)
    frameRootXml.documentElement.appendChild(xmlNode.documentElement);
    frameRootXml.documentElement.appendChild(xmlData.documentElement);
    return new XMLSerializer().serializeToString(frameRootXml);
}
 


