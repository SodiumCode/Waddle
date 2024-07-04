import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

javascriptGenerator.forBlock["axios_import"] = function () {
  var code = `const axios = require('axios');\n`;
  return code;
};

javascriptGenerator.forBlock["axios_responsedropdown"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = dropdown_mode == 'all' ? `response` : `response.${dropdown_mode}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["axios_error"] = function (block) {
  var code = block.getFieldValue("axios_error_type");
  return [code, javascriptGenerator.ORDER_NONE];
};

javascriptGenerator.forBlock["axios_getpost"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var value_url = javascriptGenerator.valueToCode(block, "URL", javascriptGenerator.ORDER_ATOMIC) || "''";
  var value_params = javascriptGenerator.valueToCode(block, "PARAMS", javascriptGenerator.ORDER_ATOMIC) || "";
  var value_head = javascriptGenerator.valueToCode(block, "HEAD", javascriptGenerator.ORDER_ATOMIC) || "";
  var value_body = javascriptGenerator.valueToCode(block, "BODY", javascriptGenerator.ORDER_ATOMIC) || "";
  var statements_ok = javascriptGenerator.statementToCode(block, "OK");
  var statements_error_response = javascriptGenerator.statementToCode(block, "error_response");
  var statements_error_request = javascriptGenerator.statementToCode(block, 'error_request')
  var statements_error_other = javascriptGenerator.statementToCode(block, 'error_other')
  var code =
    `
axios({
  method:'${dropdown_mode}',
  url:${value_url},
  ` + (value_head == "" ? ""
      : `headers:${value_head},
  `) + (value_params == "" ? ""
      : `params:${value_params},
  `) + (value_body == "" ? ""
      : `body:${value_body},
  `) +
    `
})
.then((response)=>{
  ${statements_ok}
})
.catch((error)=>{
  if (error.response) {
    ${statements_error_response}
  } else if (error.request) {
    ${statements_error_request}
  } else {
    ${statements_error_other}
  }
})
`;
  return code;
};
/*
javascriptGenerator.forBlock["axios_timeout"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `timeout: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_maxcontentlength"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `maxContentLength: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_data"] = function (block) {
  var value_num = javascriptGenerator.valueToCode(block, "NUM", javascriptGenerator.ORDER_ATOMIC) || "0";
  var code = `data: ${value_num},\n`;
  return code;
};

javascriptGenerator.forBlock["axios_withcredentials"] = function (block) {
  var checkbox_name = block.getFieldValue("NAME") === "TRUE";
  var code = `withCredentials: ${checkbox_name},\n`;
  return code;
};
*/
