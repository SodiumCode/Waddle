import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['htmldom_document'] = function (block) {
    var code = 'document';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['html_getelementbyid'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementById(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['html_getelementbyclass'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'CLASS', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementByClass(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['html_getelementbytagname'] = function (block) {
    var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var value_id = Blockly.JavaScript.valueToCode(block, 'TAGNAME', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `${value_node}.getElementByTagName(${value_id})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator['htmldom_appendchild'] = function (block) {
    var value_val1 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_val2 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_ATOMIC) || 'document';
    var code = `${value_val2}.appendChild(${value_val1});\n`;
    return code;
};
