
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

```html
<input type="text" id="ID-test-laydate">
<input type="text" class="class-test-laydate" lay-options="{value: '2016-10-14'}">
<input type="text" class="class-test-laydate" lay-options="{value: '2017-08-21'}">

<script>

// Single Render
laydate.render({
  elem: '#mydate',
  lang: 'en'
});

// Batch Render
laydate.render({
  elem: '.class-test-laydate'
});

</script>
```

:fire:TL;DR

> Apart from the elem attribute, other basic attributes can also be directly written in the lay-options="{}" attribute of the element.

## API

API | Description
--- | ---
`var laydate = layui.laydate` | Get the `laydate` module.
`laydate.render(options)` | Render the `laydate` component, core method.
`laydate.hint(id, opts)` | Pop up a hint layer on the corresponding `laydate` component panel.
`laydate.getInst(id)` | Get the rendering instance corresponding to the component.
`laydate.unbind(id)` | Unbind the current instance from the target element.
`laydate.close(id)` | Close the date panel.
`laydate.getEndDate(month, year)` | Get the last day of a specific month.

#### laydate.hint(id, opts)

- Parameter `id`: The value of the `id` attribute defined when rendering the component.
- Parameter `opts`: Optional attributes supported by this method, as listed in the table below:

| Attribute | Description                    | Type   | Default Value |
|-----------|--------------------------------|--------|---------------|
| content   | The content of the hint         | string | -             |
| ms        | The number of milliseconds for the hint layer to automatically disappear | number | 3000          |

```js
// Render
laydate.render({
  elem: '', // Element selector to bind
  id: 'test', // Custom ID
  // Other attributes ...
});
// Show hint
laydate.hint('test', {
  content: 'Hint content'
});
```

#### laydate.getInst(id)

- Parameter `id`: The value of the `id` attribute defined when rendering the component.

```js
// Render
laydate.render({
  elem: '', // Element selector to bind
  id: 'test', // Custom ID
  // Other attributes ...
});
// Get the corresponding instance
var inst = laydate.getInst('test');
console.log(inst); // Instance object
```

#### laydate.unbind(id)

- Parameter id: The value of the id attribute defined when rendering the component.

```js
// Render
laydate.render({
  elem: '', // Element selector to bind
  id: 'test', // Custom ID
  // Other attributes ...
});
// Unbind the corresponding instance
laydate.unbind('test');
```

#### laydate.close(id)

- Parameter id: The value of the id attribute defined when rendering the component. If the id parameter is not provided, it will close the currently open date panel.

```js
// Render
laydate.render({
  elem: '', // Element selector to bind
  id: 'test', // Custom ID
  // Other attributes ...
});
// Close the corresponding date panel
laydate.close('test');
```

#### laydate.getEndDate(month, year)

- Parameter month: The month (default: current month).
- Parameter year: The year (default: current year).

```js
var days1 = laydate.getEndDate(10); // Gets the last day of October as 31
var days2 = laydate.getEndDate(2, 2080); // Gets the last day of February 2080 as 29
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

## Callback

- ready
```js
laydate.render({
  elem: '#mydate',
  ready: function(date){
  /* Get the initial date and time object. The format of the date parameter is as follows:
    {
      year: 2017, // Year
      month: 8, // Month
      date: 18, // Day
      hours: 0, // Hour
      minutes: 0, // Minute
      seconds: 0 // Second
    }
  */
  console.log(date);
}
)}
```

- change
```js
laydate.render({
  elem: '#mydate',
  change: function(value, date, endDate){
    console.log(value); // Date string, e.g., "2017-08-18"
    console.log(date); // Object containing values for year, month, day, hour, minute, and second
    console.log(endDate); // End date and time object, only returned when using range. The object members are the same as above.
  }
)}
```

- done
```js
laydate.render({
  elem: '#mydate',
  done: function(value, date, endDate){
    console.log(value); // Date string, e.g., "2017-08-18"
    console.log(date); // Object containing values for year, month, day, hour, minute, and second
    console.log(endDate); // End date and time object, only returned when using range. The object members are the same as above.
  }
)}
```

- confirm
```js
laydate.render({
  elem: '#mydate',
  confirm: function(value, date, endDate){
    console.log(value); // Date string, e.g., "2017-08-18"
    console.log(date); // Object containing values for year, month, day, hour, minute, and second
    console.log(endDate); // End date and time object, only returned when using range. The object members are the same as above.
  }
)}
```

- onNow
```js
laydate.render({
  elem: '#mydate',
  onNow: function(value, date, endDate){
    console.log(value); // Date string, e.g., "2017-08-18"
    console.log(date); // Object containing values for year, month, day, hour, minute, and second
    console.log(endDate); // End date and time object, only returned when using range. The object members are the same as above.
  }
)}
```

- onClear
```js
laydate.render({
  elem: '#mydate',
  onClear: function(value, date, endDate){
    console.log(value); // Date string, e.g., "2017-08-18"
    console.log(date); // Object containing values for year, month, day, hour, minute, and second
    console.log(endDate); // End date and time object, only returned when using range. The object members are the same as above.
  }
)}
```

- close
```js
laydate.render({
  elem: '#mydate',
  close: function(){
    // logic
  }
)}
```

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
