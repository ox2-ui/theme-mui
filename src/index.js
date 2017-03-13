import { positive,
  neutral_dim,
  neutral_tint,
  neutral_faded,
  critical,
  action,
  neutral,
} from '@ox2/colors';

const theme = {
  palette: {
    accent1Color: positive,
    primary3Color: neutral_dim,
    primary1Color: positive,
    alternateTextColor: neutral_dim,
  },
  checkbox: {
    boxColor: neutral_dim,
    checkedColor: neutral_dim,
  },
  tabs: {
    backgroundColor: neutral_tint,
  },
  textField: {
    floatingLabelColor: neutral_dim,
    errorColor: critical,
    borderColor: neutral_faded,
  },
  toggle: {
    thumbOnColor: action,
    trackOffColor: neutral,
    trackDisabledColor: neutral_faded,
    labelColor: neutral_dim,
    labelDisabledColor: neutral,
  },
};
export default theme;
