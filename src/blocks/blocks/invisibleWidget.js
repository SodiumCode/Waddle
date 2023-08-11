import Blockly from "blockly";
const HELP_URL = "https://www.yuque.com/coco-central/widget/widgetguide";

Blockly.Blocks["ivw_defTypes"] = {
  init: function () {
    this.appendDummyInput().appendField("创建不可见控件");
    this.appendDummyInput()
      .appendField("类型名")
      .appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type")
      .appendField("图标")
      .appendField(new Blockly.FieldTextInput("https://public.coco-central.cn/waddle/2/waddle2.png"), "icon");
    // 五个参数分两行输入
    this.appendDummyInput()
      .appendField("名称")
      .appendField(new Blockly.FieldTextInput("我的控件"), "title")
      .appendField("版本")
      .appendField(new Blockly.FieldTextInput("1.0.0"), "version")
      .appendField("类型")
      .appendField(
        new Blockly.FieldDropdown([
          ["功能控件", "true"],
          ["界面控件", "false"],
        ]),
        "isGlobalWidget"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8647F3");
    this.setTooltip("定义不可见控件类型，在添加积木中添加积木");
  },
};

// Blockly.Blocks['ivw_itemType'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件类型名")
// 			.appendField(new Blockly.FieldTextInput("MY_WIDGET"), "type");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("type属性，控件类型，必须唯一");
//
// 	}
// };

// Blockly.Blocks['ivw_itemIcon'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件图标")
// 			.appendField(new Blockly.FieldTextInput("./static/img/logo/logo-white.svg"), "icon");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("icon属性，控件图标，url");
//
// 	}
// };

// Blockly.Blocks['ivw_itemTitle'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件名称")
// 			.appendField(new Blockly.FieldTextInput("我的控件"), "title");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("title属性，显示出来的名称");
//
// 	}
// };

// Blockly.Blocks['ivw_itemVersion'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件版本")
// 			.appendField(new Blockly.FieldTextInput("1.0.0"), "version");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("version属性，版本号x.y.z");
//
// 	}
// };

// Blockly.Blocks['ivw_itemIsGlobalWidget'] = {
// 	init: function () {
// 		this.appendDummyInput()
// 			.appendField("控件类型")
// 			.appendField(new Blockly.FieldDropdown([["全局控件", "true"], ["屏幕控件", "false"]]), "isGlobalWidget");
// 		this.setPreviousStatement(true, null);
// 		this.setNextStatement(true, null);
// 		this.setColour("#5574F8");
// 		this.setTooltip("isGlobalWidget属性，是否为全局控件");
//
// 	}
// };

Blockly.Blocks["ivw_addProperty"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建 属性积木")
      .appendField("属性名")
      .appendField(new Blockly.FieldTextInput("属性1"), "label")
      .appendField("属性内部名")
      .appendField(new Blockly.FieldTextInput("propertyName"), "key");
    this.appendDummyInput()
      .appendField("属性值类型")
      .appendField(
        new Blockly.FieldDropdown([
          ["字符串", "string"],
          ["字符串（多行）", "multilineString"],
          ["数字", "number"],
          ["布尔", "boolean"],
          ["颜色", "color"],
          ["对象", "object"],
          ["任何类型", "any"],
        ]),
        "valueType"
      );
    this.appendValueInput("defaultValue").appendField("默认值");
    this.appendValueInput("config").setCheck("config").appendField("积木配置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e76cea");
    this.setTooltip(
      "定义一个属性积木\n变量名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！，需要配合初始化积木使用，初始化积木放在控件初始化里"
    );
  },
};

// 有点可怕（（，这大小写不对
Blockly.Blocks["ivw_getproperty"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取控件属性")
      .appendField(new Blockly.FieldTextInput("propertyName"), "KEY")
      .appendField("的值");
    this.setOutput(true, null);
    this.setColour("#e76cea");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ivw_getparam"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取参数")
      .appendField(new Blockly.FieldTextInput("paramName"), "KEY")
      .appendField("的值");
    this.setOutput(true, null);
    this.setColour("#3ca9ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ivw_addMethod"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建 方法积木")
      .appendField("方法名")
      .appendField(new Blockly.FieldTextInput("方法1"), "label")
      .appendField("积木内部名")
      .appendField(new Blockly.FieldTextInput("methodName"), "key")
      .appendField("返回值")
      .appendField(
        new Blockly.FieldDropdown([
          ["不返回", "noReturn"],
          ["字符串", "'string'"],
          ["数字", "'number'"],
          ["布尔", "'boolean'"],
          ["列表", "'array'"],
          ["颜色", "'color'"],
          ["对象", "'object'"],
          ["任何类型", "['string','number','boolean','array','color','object',]"],
        ]),
        "valueType"
      );
    this.appendDummyInput().appendField("代码参数");
    this.appendStatementInput("params").setCheck(null);
    this.appendDummyInput().appendField("执行代码");
    this.appendStatementInput("code").setCheck(null);
    this.appendValueInput("config").setCheck("config").appendField("积木配置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffbb55");
    this.setTooltip(
      "定义一个方法积木\n函数名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！"
    );
  },
};

Blockly.Blocks["ivw_addParams"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("添加参数")
      .appendField("参数名")
      .appendField(new Blockly.FieldTextInput("参数名"), "label")
      .appendField("参数内部名")
      .appendField(new Blockly.FieldTextInput("paramName"), "key");
    this.appendDummyInput()
      .appendField("输入值类型")
      .appendField(
        new Blockly.FieldDropdown([
          ["字符串", "'string'"],
          ["字符串（多行）", "'multilineString'"],
          ["数字", "'number'"],
          ["布尔", "'boolean'"],
          ["颜色", "'color'"],
          ["对象", "'object'"],
          ["任何类型", "['string','number','boolean','color','array','object']"],
        ]),
        "valueType"
      );
    this.appendValueInput("defaultValue").appendField("默认值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3CA9FF");
    this.setTooltip("定义控件用于方法的参数");
  },
};

Blockly.Blocks["ivw_addEventParams"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("添加事件参数")
      .appendField("参数名")
      .appendField(new Blockly.FieldTextInput("参数名"), "label")
      .appendField("参数内部名")
      .appendField(new Blockly.FieldTextInput("paramName"), "key");
    this.appendDummyInput()
      .appendField("输出值类型")
      .appendField(
        new Blockly.FieldDropdown([
          ["字符串", "'string'"],
          ["数字", "'number'"],
          ["布尔", "'boolean'"],
          ["颜色", "'color'"],
          ["对象", "'object'"],
          ["任何类型", "['string','number','boolean','color','array','object']"],
        ]),
        "valueType"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3CA9FF");
    this.setTooltip("定义控件用于事件的参数");
  },
};

Blockly.Blocks["ivw_addDropdownParams"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("添加下拉参数")
      .appendField("参数名")
      .appendField(new Blockly.FieldTextInput("参数1"), "label")
      .appendField("参数内部名")
      .appendField(new Blockly.FieldTextInput("paramName"), "key");
    this.appendDummyInput().appendField("下拉选项");
    this.appendStatementInput("dropdownItems").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3CA9FF");
    this.setTooltip("定义控件用于方法的参数");
  },
};

Blockly.Blocks["ivw_addDropdownItem"] = {
  init: function () {
    this.appendDummyInput().appendField("下拉参数").appendField(new Blockly.FieldTextInput("参数名"), "label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3CA9FF");
    this.setTooltip("放到“添加下拉参数”里");
  },
};

Blockly.Blocks["ivw_addEvent"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建 事件积木")
      .appendField("当")
      .appendField(new Blockly.FieldTextInput("发生什么"), "label")
      .appendField("时")
      .appendField("事件内部名")
      .appendField(new Blockly.FieldTextInput("eventName"), "key");
    this.appendDummyInput().appendField("参数");
    this.appendStatementInput("params").setCheck(null);
    this.appendValueInput("config").setCheck("config").appendField("积木配置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#608fee");
    this.setTooltip(
      "（不可见控件）定义一个事件积木\n事件名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！\n执行代码里面的出发事件不能删，不然事件还是没触发！"
    );
  },
};

Blockly.Blocks["vw_addEvent"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建 事件积木（可见控件）")
      .appendField("当")
      .appendField(new Blockly.FieldTextInput("发生什么"), "label")
      .appendField("时")
      .appendField("事件内部名")
      .appendField(new Blockly.FieldTextInput("eventName"), "key");
    this.appendDummyInput().appendField("参数");
    this.appendStatementInput("params").setCheck(null);
    this.appendDummyInput().appendField("执行代码");
    this.appendStatementInput("code").setCheck(null);
    this.appendValueInput("config").setCheck("config").appendField("积木配置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#608fee");
    this.setTooltip(
      "（可见控件）定义一个事件积木\n事件名是内部代码调用的名称（建议英文）\n标签是CoCo积木上显示的名称\n实在没理解就导入到CoCo看一下效果\n不可以动态添加！！！\n执行代码里面的出发事件不能删，不然事件还是没触发！"
    );
  },
};

Blockly.Blocks["ivw_methodReturn"] = {
  init: function () {
    this.appendValueInput("value").setCheck(null).appendField("返回");
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour("#ffbb55");
    this.setTooltip("触发事件并传参（可选，请用事件传参积木）");
  },
};

Blockly.Blocks["ivw_emit"] = {
  init: function () {
    this.appendDummyInput().appendField("主动触发事件").appendField(new Blockly.FieldTextInput("eventName"), "event");
    this.appendStatementInput("parameters").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#608fee");
    this.setTooltip("触发事件并传参（可选，请用事件传参积木）");
  },
};

Blockly.Blocks["ivw_emitParameter"] = {
  init: function () {
    this.appendValueInput("parameter").setCheck(null).appendField("事件传参");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#608fee");
    this.setTooltip("传参（可选）");
  },
};

let attris = {
  key: "名称",
  valueType: "值类型",
  label: "标签",
  labelAfter: "尾标签",
  defaultValue: "默认值",
};

for (const key in attris) {
  if (Object.hasOwnProperty.call(attris, key)) {
    const attri = attris[key];
    Blockly.Blocks["ivwAttri_" + key] = {
      init: function () {
        this.appendValueInput("value")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable(attri), "blockLabel");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#5574F8");
        this.setTooltip(`${key}，${attri}`);
      },
    };
  }
}

Blockly.Blocks["ivwAttri_custom"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("自定义属性")
      .appendField(new Blockly.FieldTextInput("label"), "key");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5574F8");
    this.setTooltip("自定义属性");
  },
};

Blockly.Blocks["ivw_export"] = {
  init: function () {
    this.appendDummyInput().appendField("导出控件");
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour("#5574F8");
    this.setTooltip("导出控件，一般为最后一行代码，这是必要的，不然没法在coco中使用");
  },
};

Blockly.Blocks["ivw_defWidget"] = {
  init: function () {
    this.appendDummyInput().appendField("不可见控件积木代码");
    this.appendDummyInput().appendField("控件初始化");
    this.appendStatementInput("constructor").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8647F3");
    this.setTooltip("定义不可见控件实体，控件初始化里放初始化属性（懂js的随意）");
  },
};

Blockly.Blocks["ivw_propsinit"] = {
  init: function () {
    this.appendDummyInput().appendField("初始化控件属性").appendField(new Blockly.FieldTextInput("prop"), "props_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e76cea");
    this.setTooltip("根据定义属性积木时的值初始化控件属性，放在控件初始化里");
  },
};

// Blockly.Blocks["ivw_option_icon"] = {
//     init: function () {
//         this.appendValueInput("ICON")
//             .setCheck("String")
//             .appendField("定义 积木内部名 为")
//             .appendField(new Blockly.FieldTextInput(""), "NAME")
//             .appendField("的积木的 图标 为");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     },
// };

// Blockly.Blocks["ivw_option_color"] = {
//     init: function () {
//         this.appendValueInput("ICON")
//             .setCheck("String")
//             .appendField("定义 积木内部名 为")
//             .appendField(new Blockly.FieldTextInput(""), "NAME")
//             .appendField("的积木的 颜色 为");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     },
// };

Blockly.Blocks["ivw_config"] = {
  init: function () {
    this.appendValueInput("color").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField("积木颜色");
    this.appendDummyInput().appendField("积木图标").appendField(new Blockly.FieldTextInput("无"), "icon");
    this.appendDummyInput()
      .appendField("生成本积木")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "generateBlock")
      .appendField("单行积木")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "inputsInline");
    this.appendDummyInput()
      .appendField("与下一块积木的间隔")
      .appendField(new Blockly.FieldNumber(16, 1, 100, 1), "space");
    this.setOutput(true, "config");
    this.setColour("ffbb55");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["widget_config"] = {
  init: function () {
    this.appendValueInput("color").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField("积木颜色");
    this.appendDummyInput().appendField("积木图标").appendField(new Blockly.FieldTextInput("无"), "icon");
    this.appendDummyInput()
      .appendField("生成本积木")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "generateBlock")
      .appendField("单行积木")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "inputsInline");
    this.appendDummyInput()
      .appendField("与下一块积木的间隔")
      .appendField(new Blockly.FieldNumber(16, 1, 100, 1), "space");
    this.setColour("ffbb55");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ivw_setprop"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("设置 控件属性")
      .appendField(new Blockly.FieldTextInput("prop"), "name")
      .appendField("的值为");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e76cea");
    this.setTooltip("");
    this.setHelpUrl("不可见控件使用");
  },
};

Blockly.Blocks["ivw_addFunction"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建自定义函数")
      .appendField("函数名")
      .appendField(new Blockly.FieldTextInput("函数1"), "functionName");
    this.appendDummyInput().appendField("代码参数");
    this.appendStatementInput("params").setCheck(null);
    this.appendDummyInput().appendField("执行代码");
    this.appendStatementInput("code").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f88767");
    this.setTooltip("定义一个控件方法，使用this.xxx()调用");
  },
};

Blockly.Blocks["ivw_addFunctionParam"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("新建自定义函数参数")
      .appendField("参数名")
      .appendField(new Blockly.FieldTextInput("参数1"), "paramName");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f88767");
    this.setTooltip("定义一个自定义函数参数");
  },
};

Blockly.Blocks["widget_config"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("设置控件配置 文档链接")
      .appendField(new Blockly.FieldTextInput(""), "NAME")
      .appendField("支持平台")
      .appendField(
        new Blockly.FieldDropdown([
          ["全部支持", '["android","ios","web"]'],
          ["网页端", '["web"]'],
          ["手机端", '["android","ios"]'],
        ]),
        "S"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
