import { javascriptGenerator } from "blockly/javascript";import  Blockly from "blockly";/*javascriptGenerator['html_noa_tag_a'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<a>\n${inner}\n</a>`;
    return code;
};

javascriptGenerator['html_noa_tag_abbr'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<abbr>\n${inner}\n</abbr>`;
    return code;
};

javascriptGenerator['html_noa_tag_address'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<address>\n${inner}\n</address>`;
    return code;
};

javascriptGenerator['html_noa_tag_area'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<area>\n${inner}\n</area>`;
    return code;
};

javascriptGenerator['html_noa_tag_article'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<article>\n${inner}\n</article>`;
    return code;
};

javascriptGenerator['html_noa_tag_aside'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<aside>\n${inner}\n</aside>`;
    return code;
};

javascriptGenerator['html_noa_tag_audio'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<audio>\n${inner}\n</audio>`;
    return code;
};

javascriptGenerator['html_noa_tag_b'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<b>\n${inner}\n</b>`;
    return code;
};

javascriptGenerator['html_noa_tag_base'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<base>\n${inner}\n</base>`;
    return code;
};

javascriptGenerator['html_noa_tag_bdi'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<bdi>\n${inner}\n</bdi>`;
    return code;
};

javascriptGenerator['html_noa_tag_bdo'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<bdo>\n${inner}\n</bdo>`;
    return code;
};

javascriptGenerator['html_noa_tag_blockquote'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<blockquote>\n${inner}\n</blockquote>`;
    return code;
};

javascriptGenerator['html_noa_tag_body'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<body>\n${inner}\n</body>`;
    return code;
};

javascriptGenerator['html_noa_tag_br'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<br>\n${inner}\n</br>`;
    return code;
};

javascriptGenerator['html_noa_tag_button'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<button>\n${inner}\n</button>`;
    return code;
};

javascriptGenerator['html_noa_tag_canvas'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<canvas>\n${inner}\n</canvas>`;
    return code;
};

javascriptGenerator['html_noa_tag_caption'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<caption>\n${inner}\n</caption>`;
    return code;
};

javascriptGenerator['html_noa_tag_cite'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<cite>\n${inner}\n</cite>`;
    return code;
};

javascriptGenerator['html_noa_tag_code'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<code>\n${inner}\n</code>`;
    return code;
};

javascriptGenerator['html_noa_tag_col'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<col>\n${inner}\n</col>`;
    return code;
};

javascriptGenerator['html_noa_tag_colgroup'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<colgroup>\n${inner}\n</colgroup>`;
    return code;
};

javascriptGenerator['html_noa_tag_command'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<command>\n${inner}\n</command>`;
    return code;
};

javascriptGenerator['html_noa_tag_data'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<data>\n${inner}\n</data>`;
    return code;
};

javascriptGenerator['html_noa_tag_datalist'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<datalist>\n${inner}\n</datalist>`;
    return code;
};

javascriptGenerator['html_noa_tag_dd'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<dd>\n${inner}\n</dd>`;
    return code;
};

javascriptGenerator['html_noa_tag_del'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<del>\n${inner}\n</del>`;
    return code;
};

javascriptGenerator['html_noa_tag_details'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<details>\n${inner}\n</details>`;
    return code;
};

javascriptGenerator['html_noa_tag_div'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<div>\n${inner}\n</div>`;
    return code;
};

javascriptGenerator['html_noa_tag_dfn'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<dfn>\n${inner}\n</dfn>`;
    return code;
};

javascriptGenerator['html_noa_tag_dialog'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<dialog>\n${inner}\n</dialog>`;
    return code;
};

javascriptGenerator['html_noa_tag_dl'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<dl>\n${inner}\n</dl>`;
    return code;
};

javascriptGenerator['html_noa_tag_dt'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<dt>\n${inner}\n</dt>`;
    return code;
};

javascriptGenerator['html_noa_tag_em'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<em>\n${inner}\n</em>`;
    return code;
};

javascriptGenerator['html_noa_tag_embed'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<embed>\n${inner}\n</embed>`;
    return code;
};

javascriptGenerator['html_noa_tag_fieldset'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<fieldset>\n${inner}\n</fieldset>`;
    return code;
};

javascriptGenerator['html_noa_tag_figcaption'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<figcaption>\n${inner}\n</figcaption>`;
    return code;
};

javascriptGenerator['html_noa_tag_figure'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<figure>\n${inner}\n</figure>`;
    return code;
};

javascriptGenerator['html_noa_tag_footer'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<footer>\n${inner}\n</footer>`;
    return code;
};

javascriptGenerator['html_noa_tag_form'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<form>\n${inner}\n</form>`;
    return code;
};

javascriptGenerator['html_noa_tag_h1'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<h1>\n${inner}\n</h1>`;
    return code;
};

javascriptGenerator['html_noa_tag_head'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<head>\n${inner}\n</head>`;
    return code;
};

javascriptGenerator['html_noa_tag_header'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<header>\n${inner}\n</header>`;
    return code;
};

javascriptGenerator['html_noa_tag_hr'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<hr>\n${inner}\n</hr>`;
    return code;
};

javascriptGenerator['html_noa_tag_html'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<html>\n${inner}\n</html>`;
    return code;
};

javascriptGenerator['html_noa_tag_i'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<i>\n${inner}\n</i>`;
    return code;
};

javascriptGenerator['html_noa_tag_iframe'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<iframe>\n${inner}\n</iframe>`;
    return code;
};

javascriptGenerator['html_noa_tag_img'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<img>\n${inner}\n</img>`;
    return code;
};

javascriptGenerator['html_noa_tag_input'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<input>\n${inner}\n</input>`;
    return code;
};

javascriptGenerator['html_noa_tag_ins'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<ins>\n${inner}\n</ins>`;
    return code;
};

javascriptGenerator['html_noa_tag_isindex'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<isindex>\n${inner}\n</isindex>`;
    return code;
};

javascriptGenerator['html_noa_tag_kbd'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<kbd>\n${inner}\n</kbd>`;
    return code;
};

javascriptGenerator['html_noa_tag_keygen'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<keygen>\n${inner}\n</keygen>`;
    return code;
};

javascriptGenerator['html_noa_tag_label'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<label>\n${inner}\n</label>`;
    return code;
};

javascriptGenerator['html_noa_tag_legend'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<legend>\n${inner}\n</legend>`;
    return code;
};

javascriptGenerator['html_noa_tag_li'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<li>\n${inner}\n</li>`;
    return code;
};

javascriptGenerator['html_noa_tag_link'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<link>\n${inner}\n</link>`;
    return code;
};

javascriptGenerator['html_noa_tag_main'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<main>\n${inner}\n</main>`;
    return code;
};

javascriptGenerator['html_noa_tag_map'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<map>\n${inner}\n</map>`;
    return code;
};

javascriptGenerator['html_noa_tag_mark'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<mark>\n${inner}\n</mark>`;
    return code;
};

javascriptGenerator['html_noa_tag_menu'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<menu>\n${inner}\n</menu>`;
    return code;
};

javascriptGenerator['html_noa_tag_menuitem'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<menuitem>\n${inner}\n</menuitem>`;
    return code;
};

javascriptGenerator['html_noa_tag_meta'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<meta>\n${inner}\n</meta>`;
    return code;
};

javascriptGenerator['html_noa_tag_meter'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<meter>\n${inner}\n</meter>`;
    return code;
};

javascriptGenerator['html_noa_tag_nav'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<nav>\n${inner}\n</nav>`;
    return code;
};

javascriptGenerator['html_noa_tag_noscript'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<noscript>\n${inner}\n</noscript>`;
    return code;
};

javascriptGenerator['html_noa_tag_object'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<object>\n${inner}\n</object>`;
    return code;
};

javascriptGenerator['html_noa_tag_ol'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<ol>\n${inner}\n</ol>`;
    return code;
};

javascriptGenerator['html_noa_tag_optgroup'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<optgroup>\n${inner}\n</optgroup>`;
    return code;
};

javascriptGenerator['html_noa_tag_option'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<option>\n${inner}\n</option>`;
    return code;
};

javascriptGenerator['html_noa_tag_output'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<output>\n${inner}\n</output>`;
    return code;
};

javascriptGenerator['html_noa_tag_p'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<p>\n${inner}\n</p>`;
    return code;
};

javascriptGenerator['html_noa_tag_param'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<param>\n${inner}\n</param>`;
    return code;
};

javascriptGenerator['html_noa_tag_pre'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<pre>\n${inner}\n</pre>`;
    return code;
};

javascriptGenerator['html_noa_tag_progress'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<progress>\n${inner}\n</progress>`;
    return code;
};

javascriptGenerator['html_noa_tag_q'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<q>\n${inner}\n</q>`;
    return code;
};

javascriptGenerator['html_noa_tag_rp'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<rp>\n${inner}\n</rp>`;
    return code;
};

javascriptGenerator['html_noa_tag_rt'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<rt>\n${inner}\n</rt>`;
    return code;
};

javascriptGenerator['html_noa_tag_ruby'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<ruby>\n${inner}\n</ruby>`;
    return code;
};

javascriptGenerator['html_noa_tag_s'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<s>\n${inner}\n</s>`;
    return code;
};

javascriptGenerator['html_noa_tag_samp'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<samp>\n${inner}\n</samp>`;
    return code;
};

javascriptGenerator['html_noa_tag_script'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<script>\n${inner}\n</script>`;
    return code;
};

javascriptGenerator['html_noa_tag_section'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<section>\n${inner}\n</section>`;
    return code;
};

javascriptGenerator['html_noa_tag_select'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<select>\n${inner}\n</select>`;
    return code;
};

javascriptGenerator['html_noa_tag_small'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<small>\n${inner}\n</small>`;
    return code;
};

javascriptGenerator['html_noa_tag_source'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<source>\n${inner}\n</source>`;
    return code;
};

javascriptGenerator['html_noa_tag_span'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<span>\n${inner}\n</span>`;
    return code;
};

javascriptGenerator['html_noa_tag_strong'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<strong>\n${inner}\n</strong>`;
    return code;
};

javascriptGenerator['html_noa_tag_style'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<style>\n${inner}\n</style>`;
    return code;
};

javascriptGenerator['html_noa_tag_sub'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<sub>\n${inner}\n</sub>`;
    return code;
};

javascriptGenerator['html_noa_tag_summary'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<summary>\n${inner}\n</summary>`;
    return code;
};

javascriptGenerator['html_noa_tag_sup'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<sup>\n${inner}\n</sup>`;
    return code;
};

javascriptGenerator['html_noa_tag_svg'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<svg>\n${inner}\n</svg>`;
    return code;
};

javascriptGenerator['html_noa_tag_table'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<table>\n${inner}\n</table>`;
    return code;
};

javascriptGenerator['html_noa_tag_tbody'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<tbody>\n${inner}\n</tbody>`;
    return code;
};

javascriptGenerator['html_noa_tag_td'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<td>\n${inner}\n</td>`;
    return code;
};

javascriptGenerator['html_noa_tag_template'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<template>\n${inner}\n</template>`;
    return code;
};

javascriptGenerator['html_noa_tag_textarea'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<textarea>\n${inner}\n</textarea>`;
    return code;
};

javascriptGenerator['html_noa_tag_tfoot'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<tfoot>\n${inner}\n</tfoot>`;
    return code;
};

javascriptGenerator['html_noa_tag_th'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<th>\n${inner}\n</th>`;
    return code;
};

javascriptGenerator['html_noa_tag_thead'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<thead>\n${inner}\n</thead>`;
    return code;
};

javascriptGenerator['html_noa_tag_time'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<time>\n${inner}\n</time>`;
    return code;
};

javascriptGenerator['html_noa_tag_title'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<title>\n${inner}\n</title>`;
    return code;
};

javascriptGenerator['html_noa_tag_tr'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<tr>\n${inner}\n</tr>`;
    return code;
};

javascriptGenerator['html_noa_tag_track'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<track>\n${inner}\n</track>`;
    return code;
};

javascriptGenerator['html_noa_tag_u'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<u>\n${inner}\n</u>`;
    return code;
};

javascriptGenerator['html_noa_tag_ul'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<ul>\n${inner}\n</ul>`;
    return code;
};

javascriptGenerator['html_noa_tag_var'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<var>\n${inner}\n</var>`;
    return code;
};

javascriptGenerator['html_noa_tag_video'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<video>\n${inner}\n</video>`;
    return code;
};

javascriptGenerator['html_noa_tag_wbr'] = function(block){
    var inner = javascriptGenerator.statementToCode(block, "INNER")
    let code = `<wbr>\n${inner}\n</wbr>`;
    return code;
};*/
//trim()有助于身体健康

let html_attribute_to_str = (code) => {
  // //属性格式一下
  // let list = code.split("\n");
  // let att = "";
  // list.forEach((element) => {
  //   att = att + element.trim() + " ";
  // });
  // return att.trim();
  return code;
};
let html_escape_one = (char) => {
  //HTML转义一下
  //与现在转义冲突，所以废除
  return char;
};
let html_escape = (str) => {
  //HTML转义下
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    newstr = newstr + html_escape_one(str[i]);
  }
  return newstr;
};
let js_to_one = (code) => {
  //将js转为一行代码
  let list = code.split("\n");
  let newstr = "";
  let thisline = "";
  list.forEach((element) => {
    thisline = element.trim();
    if (
      !["{", ":", ";"].includes(thisline.charAt(thisline.length - 1)) &
      (thisline != "")
    ) {
      //判断结尾是否为{ : ;
      newstr = newstr + thisline + ";";
    } else {
      newstr = newstr + thisline;
    }
  });
  return escape_quotes(newstr);
};
let escape_quotes = (str) => {
  //转义引号
  return str.replaceAll('"', '"');
};
let css_to_one = (css) => {
  //css转一行
  return escape_quotes(css.split("\n").join(""));
};

javascriptGenerator["html_attribute"] = function (block) {
  var key = block.getFieldValue('KEY');
  var value =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
    var code = `${key}: ${value},\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_event"] = function (block) {
  var eventName = block.getFieldValue('eventName');
  var widgetEventName = block.getFieldValue('widgetEventName');
  var code = `${eventName}: this.${widgetEventName}.bind(this),\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_href"] = function (block) {
  var value_name =
    Blockly.JavaScript.valueToCode(
      block,
      "URL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
    var code = `href: ${value_name},\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_src"] = function (block) {
  var value_name =
    Blockly.JavaScript.valueToCode(
      block,
      "URL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
    var code = `src: ${value_name},\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_id"] = function (block) {
  var value_name =
    Blockly.JavaScript.valueToCode(
      block,
      "URL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
    var code = `id: ${value_name},\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_class"] = function (block) {
  var value_name =
    Blockly.JavaScript.valueToCode(
      block,
      "URL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
    var code = `className: ${value_name},\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_target"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
    var code = `target: "${dropdown_mode}",\n`;
  return code;
};

javascriptGenerator["html_attribute_disabled"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = `disabled: "${dropdown_mode}",\n`;
  return code;
};

javascriptGenerator["html_attribute_loading"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = `loading: "${dropdown_mode}",\n`;
  return code;
};

javascriptGenerator["html_attribute_autoplay"] = function (block) {
  var dropdown_mode = block.getFieldValue("MODE");
  var code = `autoPlay: "${dropdown_mode}",\n`;
  return code;
};

javascriptGenerator["html_attribute_onclick"] = function (block) {
  var statements_fun = js_to_one(
    javascriptGenerator.statementToCode(block, "FUN")
  );
    var code = `onClick: "${statements_fun}",\n`;
  return code;
};

javascriptGenerator["html_attribute_ondblclick"] = function (block) {
  var statements_fun = js_to_one(
    javascriptGenerator.statementToCode(block, "FUN")
  );
    var code = `onDblClick: "${statements_fun}",\n`;
  return code;
};

javascriptGenerator["html_attribute_onmousemove"] = function (block) {
  var statements_fun = js_to_one(
    javascriptGenerator.statementToCode(block, "FUN")
  );
    var code = `onMouseMove: "${statements_fun}",\n`;
  return code;
};

javascriptGenerator["html_attribute_onmouseout"] = function (block) {
  var statements_fun = js_to_one(
    javascriptGenerator.statementToCode(block, "FUN")
  );
    var code = `onMouseOut: "${statements_fun}",\n`;
  return code;
};

javascriptGenerator["html_attribute_onemptied"] = function (block) {
  var statements_fun = js_to_one(
    javascriptGenerator.statementToCode(block, "FUN")
  );
    var code = `onEmptied: "${statements_fun}",\n`;
  return code;
};

javascriptGenerator["html_plaintext"] = function (block) {
  var text = block.getFieldValue("TEXT");
    var code = `${text}\n`;
  return code;
};

javascriptGenerator["html_js"] = function (block) {
  var e =
    Blockly.JavaScript.valueToCode(
      block,
      "E",
      Blockly.JavaScript.ORDER_ASSIGNMENT
    ) || "";
  var code = `${e}\n`;
  return html_escape(code);
};

javascriptGenerator["html_js2"] = function (block) {
  var e =
    Blockly.JavaScript.valueToCode(
      block,
      "E",
      Blockly.JavaScript.ORDER_ASSIGNMENT
    ) || "";
  var code = `${e}`;
  return [html_escape(code), 0];
};

javascriptGenerator["html_h123456"] = function (block) {
  var dropdown_type = block.getFieldValue("TYPE");
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
    // console.log(statements_pro, statements_pro == '');
  // React.createElement('h1', {}, [])
  // var code = `<${dropdown_type}${
  //   statements_pro == "" ? "" : " "
  // }${statements_pro}>${statements_con}</${dropdown_type}>\n`;
  var code = `React.createElement("${dropdown_type}", {${statements_pro}}, [${statements_con}]),\n`;
  return html_escape(code);
};

javascriptGenerator["html_tag"] = function (block) {
  var name = block.getFieldValue("NAME");
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
    // console.log(statements_pro, statements_pro == '');
  // var code = `<${name}${
  //   statements_pro == "" ? "" : " "
  // }${statements_pro}>${statements_con}</${name}>\n`;
  var code = `React.createElement("${name}", {${statements_pro}}, [${statements_con}]),\n`;
  return html_escape(code);
};

javascriptGenerator["html_a"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("a", {${statements_pro}}, [${statements_con}]),\n`;
  return html_escape(code);
};

javascriptGenerator["html_button"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("button", {${statements_pro}}, [${statements_con}]),\n`;
  return html_escape(code);
};

javascriptGenerator["html_img"] = function (block) {
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("img", {${statements_pro}}, null),\n`;
  return html_escape(code);
};

javascriptGenerator["html_video"] = function (block) {
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("video", {${statements_pro}}, null),\n`;

  return html_escape(code);
};

javascriptGenerator["html_input"] = function (block) {
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("input", {${statements_pro}}, null),\n`;
  return html_escape(code);
};

javascriptGenerator["html_iframe"] = function (block) {

  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("iframe", {${statements_pro}}, null),\n`;

  return html_escape(code);
};

javascriptGenerator["html_b"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("b", {${statements_pro}}, [${statements_con}]),\n`;

  return html_escape(code);
};

javascriptGenerator["html_br"] = function (block) {
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("br", {${statements_pro}}, null),\n`;
  return html_escape(code);
};

javascriptGenerator["html_attribute_style"] = function (block) {
  var statements_con = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "CON") || ""
  );
  var code = `style: {${statements_con}},\n`;
  return html_escape(code);
};
/*
javascriptGenerator["html_css_background_color"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "";
  var code = `background-color:${val};\n`;
  return html_escape(code);
};

javascriptGenerator["html_css_font_size"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
  var code = `font-size:${val};\n`;
  return html_escape(code);
};

javascriptGenerator["html_css_font_style"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var code = `font-style:${mode};\n`;
  return html_escape(code);
};

javascriptGenerator["html_css_text_decoration"] = function (block) {
  var mode = block.getFieldValue("MODE");
  var code = `text-decoration:${mode};\n`;
  return html_escape(code);
};*/

javascriptGenerator["html_css"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
  var name = block.getFieldValue("NAME") || "attribute";
  var code = `${name}: ${val},\n`;
  return html_escape(code);
};

javascriptGenerator['html_css_background'] = function (block) {
  var dropdown_type = block.getFieldValue('TYPE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${dropdown_type}: ${value_name},\n`;
  return code;
};

javascriptGenerator['html_css_border'] = function (block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || "none";
  var code = `border${dropdown_name1}${dropdown_name2}: ${value_name},\n`;
  return code;
};

javascriptGenerator['html_css_border2'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || "none"
  var code = `border${dropdown_name}Radios: ${value_name},\n`;
  return code;
};

javascriptGenerator['html_css_dimension'] = function (block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${dropdown_name1}: ${value_name},\n`;
  return code;
};

javascriptGenerator['html_css_marginpadding'] = function (block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${dropdown_name1}${dropdown_name}: ${value_name},\n`;
  return code;
};

javascriptGenerator["html_other_px"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}px"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_cm"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}cm"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_mm"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}mm"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_in"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}in"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_pt"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}pt"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_pc"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}pc"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_%"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}%"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_em"] = function (block) {
  var val =
    Blockly.JavaScript.valueToCode(
      block,
      "VAL",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "5";
  var code = `"${val}em"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_other_color"] = function (block) {
  var val = block.getFieldValue("VAL");
  var code = `"#${val}"`;
  return [html_escape(code),0];
};

javascriptGenerator["html_code"] = function (block) {
  var val = block.getFieldValue("CODE");
  var code = `${val}\n`;
  return html_escape(code);
};

javascriptGenerator["html_div"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("div", {${statements_pro}}, [${statements_con}]),\n`;

  return html_escape(code);
};

javascriptGenerator["html_footer"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("footer", {${statements_pro}}, [${statements_con}]),\n`;

  return html_escape(code);
};

javascriptGenerator["html_noscript"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("noscript", {${statements_pro}}, [${statements_con}]),\n`;

  return html_escape(code);
};

javascriptGenerator["html_script"] = function (block) {
  var statements_con = (
    javascriptGenerator.statementToCode(block, "CON") || ""
  ).trim();
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("script", {${statements_pro}}, [${statements_con}]),\n`;

  return html_escape(code);
};
//wssb

javascriptGenerator["html_html"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_pro = html_attribute_to_str(
    javascriptGenerator.statementToCode(block, "PRO") || ""
  );
  var code = `React.createElement("div", {${statements_pro}dangerouslySetInnerHTML: {__html: ${value_name}}}, null),\n`;

  return code;
};
