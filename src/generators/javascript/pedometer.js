import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
javascriptGenerator["pedometer_import"] = function (block) {
  var code = "const pedometer = require('pedometer');\n";
  return code;
};
