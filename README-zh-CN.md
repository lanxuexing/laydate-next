
# Laydate-Next

<p align="center">
  <a href="https://npmcharts.com/compare/laydate-next?minimal=true"><img src="https://img.shields.io/npm/dm/laydate-next.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/laydate-next"><img src="https://img.shields.io/npm/v/laydate-next.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/laydate-next"><img src="https://img.shields.io/npm/l/laydate-next.svg?sanitize=true" alt="License"></a>
</p>

[English](README.md) | 简体中文

## 概要

一款被广泛使用的高级 Web 日历组件，颜值与功能兼备，足以应对日期相关的各种业务场景。其中主要以：年选择器、年月选择器、日期选择器、时间选择器、日期时间选择五种类型的选择方式为基本核心，并且均支持范围选择（即双控件）。内置强劲的自定义日期格式解析和合法校正机制，含中文版和国际版，主题简约却又不失灵活多样。内部采用是零依赖的原生 JavaScript 编写，可作为独立组件使用。

这个是`laydate`的分支，合并了一些重要的修复，我们对贤心（sentsim）的表示非常感激。

这个仓库中的上一个版本：5.3.1（2023年7月1日）。

## 何时使用

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 安装

```
# if you use npm
npm install laydate-next -S

# or if you use yarn
yarn add laydate-next
```

## 使用方法

```
<input name="mydate" id="mydate">

var laydate = require("laydate");
 
//  init date
laydate({
  elem: '#mydate',
  lang: 'en'
});
```

## 属性

| 属性名称      | 描述                                                         | 类型                | 默认值        |
| ------------- | ------------------------------------------------------------ | ------------------- | ------------- |
| elem          | 绑定元素选择器或 DOM 对象                                   | 字符串/DOM 对象      | -             |
| type          | 组件面板的类型。支持以下值：`year`、`month`、`date`、`time`、`datetime` | 字符串              | date          |
| id            | 实例的唯一索引，用于相关操作。如果未设置，则从`elem`属性指定的绑定元素的 id 属性值获取 | 字符串              | -             |
| range         | 启用左右面板的范围选择。根据`type`属性的设置，会显示对应的范围选择面板。支持的值有：`-/~/['#start', '#end']` | 布尔值/字符串/数组   | false         |
| rangeLinked   | 启用范围选择的关联模式。必须与`range`属性一起启用。默认情况下，范围选择使用独立的左右面板。当设置为`true`时，使用关联的左右面板 | 布尔值             | false         |
| fullPanel     | 启用全面板模式，在同一个面板中显示日期和时间。仅当`type`设置为`datetime`，且未设置`range`属性时有效 | 布尔值             | false         |
| format        | 自定义返回的日期和时间格式。默认为`yyyy-MM-dd`。格式符号包括：`yyyy`、`y`、`MM`、`M`、`dd`、`d`、`HH`、`H`、`mm`、`m`、`ss`、`s` |                     |               |
| value         | 初始值                                                     | 字符串/日期         | new Date()    |
| isInitValue   | 是否将初始值填充在目标元素中。一般与`value`属性配合使用         | 布尔值             | false         |
| shortcut      | 自定义快捷选项                                             | 数组                | []            |
| weekStart     | 设置起始周。支持 0-6 的数字，0 表示从周日开始                   | 数字               | 0             |
| isPreview     | 是否在渲染时默认显示组件面板。当`type`设置为`datetime`时强制为`false` | 布尔值             | true          |
| min           | 最小可选日期                                               | 字符串              | -Infinity     |
| max           | 最大可选日期                                               | 字符串              | Infinity      |
| trigger       | 自定义弹出组件面板的事件                                     | 字符串              | click         |
| show          | 渲染时是否默认显示组件面板                                   | 布尔值              | false         |
| position      | 组件面板的定位方式。支持以下可选值：`absolute`、`fixed`、`static` | 字符串            | absolute         |
| zIndex        | 组件面板的层叠顺序                                           | 数字               | 99999999      |
| shade         | 是否显示弹出日期面板时的遮罩。值支持以下可选类型：数字或数组 `[0.5]`、`[0.5, '#000']` | 数字/数组         | -             |
| showBottom    | 是否显示组件面板的底部栏                                     | 布尔值             | true          |
| btns          | 自定义组件面板底部栏中的按钮。按钮将按照数组顺序排列。内置按钮名称：`clear`、`now`、`confirm` | 数组            | -          |
| autoConfirm   | 在选中目标值时是否自动确认                                   | 布尔值             | true          |
| lang          | 组件的语言版本。可选值：`cn` 中文版、`en` 英文版               | 字符串             | 'cn'          |
| theme         | 组件面板的主题。除了默认主题，还有内置主题：`molv`、`grid`、`circle`，或者直接传入自定义主题颜色，如`#FF5722`或`['grid', '#FF5722']` | 字符串/数组        | -             |
| calendar      | 是否显示我国常见的公历节日。当`lang`设置为`en`时无效            | 数组               | -     |
| mark          | 自定义日期标记。属性可批量设置多个日期标记，前缀`0-`即代表每年，`0-0-`即代表每年每月。例如：`{ '0-10-14': '生日', '0-0-10': '工资' }` | 对象               | -             |
| holidays      | 用于标注节假日及补班日。值是一个二维数组，`[['2023-1-1','2023-1-2'],['2023-1-28','2023-1-29']]`            | 数组               | -     |

## 演示

您可以克隆此存储库到本地，然后在本地机器上启动演示页面：

```bash
npm install
npm run dev

# or
yarn install
yarn dev
```

演示页面服务器监听地址： http://127.0.0.1:5173