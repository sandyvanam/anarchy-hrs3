import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border.main}`,
    backgroundColor: 'inherit',
    '& button': {
      width: '100%',
    },
  },
  head: {
    marginBottom: theme.spacing(2.5),
  },
}));
export default useStyles;
