import { positive, neutral_dim, neutral_tint, critical } from '@ox2/colors';

const theme = {
  palette: {
    accent1Color: positive,
    primary3Color: neutral_dim,
    primary1Color: positive,
    alternateTextColor: neutral_dim,
  },
  tabs: {
    backgroundColor: neutral_tint,
  },
  textField: {
    floatingLabelColor: neutral_dim,
    errorColor: critical,
  },
};


export default theme;
