import { styled } from '@material-ui/core/styles';
import { Toolbar, Button } from '@material-ui/core';

export const MyToolbar = styled(Toolbar)({
    margin: 'auto',
});

export const MyButton = styled(Button)({
    padding: '0 25px',
    fontSize: 20,
    fontWeight: 400,
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'gray',
        borderRadius: 5
      }
  });