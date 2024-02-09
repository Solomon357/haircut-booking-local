import { styled } from '@mui/material/styles';
import { Button }  from '@mui/material';


export const NextButton = styled(Button)({
    backgroundColor: '#57BFC6',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#12aab5',
      boxShadow: 'none'
    }
  });

export const PrevButton = styled(Button)({
  backgroundColor: '#E39C9C',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#c56060',
    boxShadow: 'none'
  }
});

export const SubmitButton = styled(Button)({
  backgroundColor: '#4caf50',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#29a02e',
    boxShadow: 'none'
  }
});