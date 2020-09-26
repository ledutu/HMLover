/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-bitwise */

/* eslint-disable no-shadow */
export const style = (style, propsStyle) => {
  if (propsStyle) {
    if (Array.isArray(propsStyle)) {
      style = style.concat(propsStyle);
    } else {
      style.push(propsStyle);
    }
  }
  return style;
};

export const hexToRgbA = (hex, alpha = 1) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      alpha || 1 + ')'
    );
  }
  throw new Error('Bad Hex');
};

export const rgbToRgbA = (color, alpha) => {
  color = '' + color;
  if (!color || color.indexOf('rgb') < 0) {
    return;
  }

  if (color.charAt(0) == '#') {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums[2]),
    g = parseInt(nums[3]),
    b = parseInt(nums[4]);

  return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

export const rgbToHex = color => {
  color = '' + color;
  if (!color || color.indexOf('rgb') < 0) {
    return;
  }

  if (color.charAt(0) == '#') {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums[2], 10).toString(16),
    g = parseInt(nums[3], 10).toString(16),
    b = parseInt(nums[4], 10).toString(16);

  return (
    '#' +
    ((r.length == 1 ? '0' + r : r) +
      (g.length == 1 ? '0' + g : g) +
      (b.length == 1 ? '0' + b : b))
  );
};

export const fileProps = file => {
  if (!file.path) file.path = file.uri;
  if (!file.filename) {
    file.filename = file.fileName || file.path.substring(file.path.lastIndexOf('/') + 1);
    file.filename = file.filename.toLowerCase();
  }

  if (!file.name) {
    file.name = file.fileName || file.filename;
  }
  if (!file.type) file.type = file.mime;
  if (!file.uri) file.uri = file.path;
  return file;
};

export const fileFormat = file => {
  let fileObj = file;
  !fileObj.filename && (fileObj.filename = fileObj.path.split('/').pop());
  fileObj.name = fileObj.filename || fileObj.path.split('/').pop();
  fileObj.uri = fileObj.path;
  fileObj.type = fileObj.mime;
  fileObj.name = fileObj.name.toLowerCase();
  return fileObj;
};

export const validateEmail = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
};

export const validatePassword = text => {
  let reg = /^[a-zA-Z0-9]{6,}$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
};
export const validateFullName = text => {
  let reg = /^[a-zA-Z ]{2,30}$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
}
export const validatePhone = text => {
  if (text.length >= 10 && text.length <= 12) {
    return true;
  }
  return false;
};

export function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

export function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
};

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

export function reducePrice(labelValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

    ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

        : Math.abs(Number(labelValue));

}

// Date.prototype.getWeekNumber = function () {
//   var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
//   var dayNum = d.getUTCDay() || 7;
//   d.setUTCDate(d.getUTCDate() + 4 - dayNum);
//   var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//   return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
// };