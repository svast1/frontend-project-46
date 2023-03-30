import _ from 'lodash';

const sortData = (data) => {
    const sortedKeys = Object.keys(data).sort((a, b) => {
      if (a[0] === '+' || a[0] === '-') {
        a = a.slice(2);
      }
      if (b[0] === '+' || b[0] === '-') {
        b = b.slice(2);
      }
      return a.localeCompare(b);
    });
    const sortedObj = {};
    sortedKeys.forEach(key => {
      sortedObj[key] = data[key];
    });
      return sortedObj
    }
    const stylish = (data1, data2) => {
      const keys = _.union(_.keys(data1), _.keys(data2));
      return keys.reduce((acc, key) => {
       if (!_.has(data2, key)) {
         acc[`- ${key}`] = data1[key];
       } else if (!_.has(data1, key)) {
         acc[`+ ${key}`] = data2[key];
       } else if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
         acc[key] = stylish(data1[key], data2[key]);
       } else if (!_.isEqual(data1[key], data2[key])) {
         acc[`- ${key}`] = data1[key];
         acc[`+ ${key}`] = data2[key];
       } else {
         acc[key] = data1[key];
       }
       return sortData(acc);
     }, {});
   };

export default stylish;