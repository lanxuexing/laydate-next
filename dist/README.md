
# Laydate-Next

<p align="center">
  <a href="https://npmcharts.com/compare/laydate-next?minimal=true"><img src="https://img.shields.io/npm/dm/laydate-next.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/laydate-next"><img src="https://img.shields.io/npm/v/laydate-next.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/laydate-next"><img src="https://img.shields.io/npm/l/laydate-next.svg?sanitize=true" alt="License"></a>
</p>

English | [简体中文](README-zh_CN.md)

## What is it

An extensively used, advanced web calendar component that combines attractive design with robust functionality. It effectively caters to various date-related business scenarios. It offers five core selection modes: year picker, year-month picker, date picker, time picker, and datetime picker. All modes support range selection (dual controls). The component includes a powerful mechanism for parsing and validating custom date formats. It provides both Chinese and international versions and offers a minimalist yet flexible theme. Developed in native JavaScript, it can be used as a standalone component.

This fork of [laydate by 贤心 (sentsim)](https://github.com/layui/laydate) with some important fixes merged. We are eternally grateful for his starting point.

The previous version forked into this repository: 5.3.1 (July 1, 2023).

## When To Use

By clicking the input box, you can select a time from a popup panel.

## Installation

```
# if you use npm
npm install laydate-next -S

# or if you use yarn
yarn add laydate-next
```

## Usage

```
<input name="mydate" id="mydate">

var laydate = require("laydate");
 
//  init date
laydate({
  elem: '#mydate',
  lang: 'en'
});
```

## Props

| Property Name | Description                                                  | Type               | Default Value |
| ------------- | ------------------------------------------------------------ | ------------------ | ------------- |
| elem          | Selector or DOM object of the bound element                  | string/DOM         | -             |
| type          | Type of the component panel. Supports the following values: `year`、`month`、`date`、`time`、`datetime` | string             | date          |
| id            | Unique index of the instance used for related operations. If not set, it retrieves the id attribute value from the bound element specified by the `elem` property | string             | -             |
| range         | Enables range selection with left and right panels. The corresponding range selection panel is displayed based on the `type` property. Supported values are: `-/~/['#start', '#end']` | boolean/string/array | false         |
| rangeLinked   | Enables linked mode for range selection. This property must be enabled along with the `range` property. By default, the range selection uses independent left and right panels. When set, it uses linked left and right panels | boolean            | false         |
| fullPanel     | Enables the full panel mode, where the date and time are displayed in the same panel. It only works when `type` is set to 'datetime' and `range` property is not set | boolean            | false         |
| format        | Custom format for returning the date and time values. Default: yyyy-MM-dd. The format symbols are as follows: `yyyy`、`y`、`MM`、`M`、`dd`、`d`、`HH`、`H`、`mm`、`m`、`ss`、`s` |                    |               |
| value         | DefaultValue.                                                | string/date        | new Date()    |
| isInitValue   | FillOnInitialize.                                            | boolean            | false         |
| shortcut      | Custom shortcut options                                      | array              | []            |
| weekStart     | StartOfWeek. It supports numbers from 0 to 6                 | number             | 0             |
| isPreview     | ShowPreview. forced to false when type is set to 'datetime'  | boolean            | true          |
| min           | Minimum selectable date                                      | string             | -Infinity     |
| max           | Maximum selectable date                                      | string             | Infinity      |
| trigger       | CustomPopupEvent                                             | string             | click         |
| show          | DefaultShowPanel                                             | boolean            | false         |
| position      | PanelPosition, Supports the following values: `absolute`、`fixed`、`static`         | string            | absolute         |
| zIndex        | PanelZIndex                                                  | number             | 99999999      |
| shade         | ShowMask, `0.5` or `[0.5, '#000']`                           | number/array       | -             |
| showBottom    | ShowBottomBar                                                | boolean            | true          |
| btns          | CustomBottomBarButtons, array sort: `['clear','now','confirm']`                    | array            | -          |
| autoConfirm   | AutoConfirmOnSelect                                          | boolean            | true          |
| lang          | Language, Supports the following values: `cn` or `en`        | string             | 'cn'          |
| theme         | Theme, built-in themes: `molv`, `grid`, `circle` or custom theme color `#FF5722` or `['grid', '#FF5722']`                     | string/array             | -             |
| mark          | CustomDateMarks, Allows for custom date marks. This property can be used to set multiple date marks in bulk. The prefix "0-" represents every year, and "0-0-" represents every year and month. `{ '0-10-14': 'birthday', '0-0-10': 'Salary' }`                    | object             | -            |
| holidays      | HolidayMarks, The value is a two-dimensional array: `[['2023-1-1','2023-1-2'],['2023-1-28','2023-1-29']]`               | array             | -     |

# Demo

You can clone this repo to your working copy and then launch the demo page in your local machine:

```bash
npm install
npm run dev

# or
yarn install
yarn dev
```

The demo page server is listening on: http://127.0.0.1:5173
