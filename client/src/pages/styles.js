import { styled } from '@mui/system';
import { Fab } from '@mui/material';

const StyledFab = styled(Fab)(()=>({
        position: 'fixed',
        bottom : 10,
        right : 10
}));

export default StyledFab;