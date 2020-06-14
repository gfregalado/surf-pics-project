import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const CustomSwitch = withStyles({
  switchBase: {
    color: '#d1ddd6',
    '&:hover': {
      backgroundColor: 'rgb(209, 221, 214,0.3)',
    },
    '&$checked': {
      color: '#CBDBF6',
      '&:hover': {
        backgroundColor: 'rgb(203, 219, 246,0.3)',
      },
    },
    '&$checked + $track': {
      backgroundColor: '#CBDBF6',
    },
  },
  checked: {},
  track: { backgroundColor: '#d1ddd6' },
})(Switch);

export default CustomSwitch;
