const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

console.log(year+'年' + month + '月' + day + '日');