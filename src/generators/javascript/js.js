import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";javascriptGenerator["js_run"] = function (block) {
  var code = block.getFieldValue("CODE") || "console.log(233);";
  return code;
};

javascriptGenerator["js_run2"] = function (block) {
  var code = block.getFieldValue("CODE") || "console.log(233)";
  return [code, 0]; // 最高优先级，避免增加无用括号
};

javascriptGenerator["js_run_join"] = function (block) {
  var code =
    Blockly.JavaScript.valueToCode(
      block,
      "CODE1",
      Blockly.JavaScript.ORDER_NONE
    ) +
    Blockly.JavaScript.valueToCode(
      block,
      "CODE2",
      Blockly.JavaScript.ORDER_NONE
    );
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_usestrict"] = function (block) {
  let code = '"use strict";\n';
  return code;
};

javascriptGenerator["js_bitwise"] = function (block) {
  var value1 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE1",
      Blockly.JavaScript.ORDER_NONE
    ) || "0";
  var value2 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE2",
      Blockly.JavaScript.ORDER_NONE
    ) || "0";
  var operation_type = block.getFieldValue("TYPE");
  let code = value1 + " " + operation_type + " " + value2;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_comparisons"] = function (block) {
  var value1 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE1",
      Blockly.JavaScript.ORDER_NONE
    ) || "0";
  var value2 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE2",
      Blockly.JavaScript.ORDER_NONE
    ) || "0";
  var comparisons_type = block.getFieldValue("TYPE");
  let code = value1 + " " + comparisons_type + " " + value2;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_time"] = function (block) {
  var code = block.getFieldValue("TYPE");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_popup_alert"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || "null";
  var code = `alert(${text});\n`;
  return code;
};

javascriptGenerator["js_popup_confirm"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || "null";
  var code = `confirm(${text});`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_popup_prompt"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || "null";
  var code = `prompt(${text})\n`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_json_parse"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `JSON.parse(${text})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_json_stringify"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "OBJECT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `JSON.stringify(${text})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_json_access"] = function (block) {
  var key =
    Blockly.JavaScript.valueToCode(
      block,
      "KEY",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var object =
    Blockly.JavaScript.valueToCode(
      block,
      "OBJECT",
      Blockly.JavaScript.ORDER_NONE
    ) || "{}";
  var code = `${object}[${key}]`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_window_screen"] = function (block) {
  var code = `${block.getFieldValue("TYPE")}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_window_avail_screen"] = function (block) {
  var code = `${block.getFieldValue("TYPE")}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_window_depth"] = function (block) {
  var code = `screen.colorDepth`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_window_pixeldepth"] = function (block) {
  var code = `screen.pixelDepth`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_navigator_online"] = function (block) {
  var code = `navigator.onLine`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_navigator_language"] = function (block) {
  var code = `navigator.language`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_navigator_platform"] = function (block) {
  var code = `navigator.platform`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_math_constant"] = function (block) {
  var code = block.getFieldValue("TYPE");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_console_clean"] = function (block) {
  var code = `console.clear();\n`;
  return code;
};

javascriptGenerator["js_console_count"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.count(${text});\n`;
  return code;
};

javascriptGenerator["js_console_error"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.error(${text});\n`;
  return code;
};

javascriptGenerator["js_console_warn"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.warn(${text});\n`;
  return code;
};

javascriptGenerator["js_console_log"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.log(${text});\n`;
  return code;
};

javascriptGenerator["js_console_time"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.time(${text});\n`;
  return code;
};

javascriptGenerator["js_console_timeend"] = function (block) {
  var text =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `console.timeEnd(${text});\n`;
  return code;
};

javascriptGenerator["js_base64"] = function (block) {
  var dropdown_type = block.getFieldValue("TYPE");
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_NONE
  );
  if (dropdown_type == "BM") {
    return [`btoa(encodeURI(${value_text}))`, Blockly.JavaScript.ORDER_NONE];
  } else {
    return [`decodeURI(atob(${value_text}))`, Blockly.JavaScript.ORDER_NONE];
  }
};

javascriptGenerator["js_ln"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  var code = `Math.log(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_uri"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var str =
    Blockly.JavaScript.valueToCode(
      block,
      "URI",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `${mode}(${str})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_replace"] = function (block) {
  var str =
    Blockly.JavaScript.valueToCode(
      block,
      "STR",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var str1 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR1",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var mode = block.getFieldValue('MODE');
  var str2 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR2",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `${str}.${mode}(${str1},${str2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_powerandlower"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var str =
    Blockly.JavaScript.valueToCode(
      block,
      "STR",
      Blockly.JavaScript.ORDER_NONE
    ) || '""';
  var code = `(${str}).${mode}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_with"] = function (block) {
  var str1 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR1",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var str2 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR2",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${str1}.${mode}(${str2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_pad"] = function (block) {
  var str1 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR1",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var str2 =
    Blockly.JavaScript.valueToCode(
      block,
      "STR2",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var length =
    Blockly.JavaScript.valueToCode(
      block,
      "NUM",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${str1}.${mode}(${length},${str2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_escape"] = function (block) {
  var str =
    Blockly.JavaScript.valueToCode(
      block,
      "STR",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '""';
  var mode = block.getFieldValue("MODE");
  var code = `${mode}(${str})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_base"] = function (block) {
  var value_num = Blockly.JavaScript.valueToCode(
    block,
    "NUM",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var number_base = block.getFieldValue("BASE");
  var code = `(${value_num}).toString(${number_base})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_str_index"] = function (block) {
  var value_str1 = Blockly.JavaScript.valueToCode(
    block,
    "STR1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_str2 = Blockly.JavaScript.valueToCode(
    block,
    "STR2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var operation_type = block.getFieldValue("TYPE");
  var code = `(${value_str1}).${operation_type}${value_str2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_array_sort"] = function (block) {
  var value_array =
    Blockly.JavaScript.valueToCode(
      block,
      "ARRAY",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "[]";
  return `${value_array}.sort();\n`;
};

javascriptGenerator["js_array_reverse"] = function (block) {
  var value_array =
    Blockly.JavaScript.valueToCode(
      block,
      "ARRAY",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "[]";
  return `${value_array}.reverse();\n`;
};

javascriptGenerator["js_array_join"] = function (block) {
  var value_array =
    Blockly.JavaScript.valueToCode(
      block,
      "ARRAY",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "[]";
  var value_str = Blockly.JavaScript.valueToCode(
    block,
    "STR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `${value_array}.join(${value_str})`;
};
javascriptGenerator["js_function_value"] = function (block) {
  var statements_p = javascriptGenerator.statementToCode(block, "P");
  var statements_c = javascriptGenerator.statementToCode(block, "C");
  var code = `((${statements_p.trim().trim(",")})=>{${statements_c}})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascriptGenerator["js_function_run"] = function (block) {
  var value_v = Blockly.JavaScript.valueToCode(
    block,
    "V",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_p = javascriptGenerator.statementToCode(block, "P");
  var code = `${value_v}(${statements_p.trim().trim(",")});\n`;
  return code;
};

javascriptGenerator["js_function_param"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `${value_name},`;
  return code;
};

javascriptGenerator["js_function_param_define"] = function (block) {
  var value_name = block.getFieldValue("NAME");
  var code = `${value_name},`;
  return code;
};
javascriptGenerator['js_settimeout'] = function(block) {
    var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
    var value_t = Blockly.JavaScript.valueToCode(block, 'T', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `setTimeout(${value_f},${value_t});\n`;
    return code;
};
javascriptGenerator['js_settimeout2'] = function(block) {
  var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_NONE);
  var value_t = Blockly.JavaScript.valueToCode(block, 'T', Blockly.JavaScript.ORDER_NONE);
  var code = `setTimeout(${value_f},${value_t})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
javascriptGenerator['js_setinterval'] = function(block) {
    var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
    var value_t = Blockly.JavaScript.valueToCode(block, 'T', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `setInterval(${value_f},${value_t});\n`;
    return code;
};
javascriptGenerator['js_setinterval2'] = function(block) {
  var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_NONE);
  var value_t = Blockly.JavaScript.valueToCode(block, 'T', Blockly.JavaScript.ORDER_NONE);
  var code = `setInterval(${value_f},${value_t})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
javascriptGenerator['js_location'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = `window.location.${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};