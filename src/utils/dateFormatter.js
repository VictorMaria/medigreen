import moment from 'moment';

const dateFormatter = date => {
  return moment(date).format('hh:mm a, MMMM Do YYYY');
};

export default dateFormatter;
