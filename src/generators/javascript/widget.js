import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator['widget_widgetlog'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
        var code = 'this.widgetLog(' + value_value + ');\n';
    return code;
};

javascriptGenerator['widget_widgetwarn'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
        var code = 'this.widgetWarn(' + value_value + ');\n';
    return code;
};

javascriptGenerator['widget_widgeterror'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
        var code = 'this.widgetError(' + value_value + ');\n';
    return code;
};