import Blockly from "blockly";//使用的是crypto图标中的颜色

Blockly.Blocks["crypto_import"] = {
  init: function () {
    this.appendDummyInput().appendField("引入crypto-js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_md5"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto生成哈希MD5");
    this.appendDummyInput("").appendField("的对象");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_sha1"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-1");
    this.appendDummyInput("").appendField("的对象");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_md5_s"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto生成哈希MD5");
    this.appendDummyInput("").appendField("的字符串");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_sha1_s"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-1");
    this.appendDummyInput("").appendField("的字符串");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_tostr"] = {
  init: function () {
    this.appendValueInput("STR").setCheck(null);
    this.appendDummyInput().appendField("到字符串");
    this.setOutput(true, "String");
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_sha256"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-256");
    this.appendDummyInput("").appendField("的对象");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["crypto_sha256_s"] = {
  init: function () {
    this.appendValueInput("STR")
      .setCheck(null)
      .appendField("使用Crypto哈希SHA-256");
    this.appendDummyInput("").appendField("的字符串");
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_aes_encrypt"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("使用Crypto AES加密");
    this.appendValueInput("CODE").setCheck(null).appendField("密钥");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_aes_decrypt"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("使用Crypto AES解密");
    this.appendValueInput("CODE").setCheck(null).appendField("密钥");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_des_encrypt"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("使用Crypto DES加密");
    this.appendValueInput("CODE").setCheck(null).appendField("密钥");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_des_decrypt"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck(null)
      .appendField("使用Crypto DES解密");
    this.appendValueInput("CODE").setCheck(null).appendField("密钥");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacmd5str"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC MD5 的字符串");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha1str"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA1的字符串");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha256str"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA256的字符串");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha512str"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA512的字符串");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacmd5"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC MD5 的对象");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha1"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA1的对象");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha256"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA256的对象");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["crypto_hmacsha512"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("使用Crypto生成 消息");
    this.appendValueInput("W").setCheck("String").appendField("密钥");
    this.appendDummyInput().appendField("HMAC SHA512的对象");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks['crypto_encbase64parse'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Base64解析");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_encbase64stringify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Base64字符串化");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_enclatin1parse'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Latin1解析");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_enclatin1stringify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Latin1字符串化");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_enchexparse'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Hex解析");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_enchexstringify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Hex字符串化");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_encutf8parse'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Utf8解析");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_encutf8stringify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Utf8字符串化");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_encutf16parse'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Utf16解析");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_encutf16stringify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto编码器Utf16字符串化");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['crypto_createuuid'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("使用Crypto生成UUID");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#5574f8");
 this.setTooltip("不要在后面加东西");
 this.setHelpUrl("");
  }
};

//额，我更了个啥玩意