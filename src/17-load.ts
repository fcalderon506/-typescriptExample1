import _ from 'lodash';

const data = [
  {
    username: 'Juan',
    role: 'admin'
  },
  {
    username: 'Maria',
    role: 'staff'
  },
  {
    username: 'Carlos',
    role: 'staff'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
