import { TextField, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';


export const StyledDiv = styled('div')(()=>({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    padding: '8px 16px 24px',
}));

export const StyledForm = styled('form')(()=>({
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: '#ffffff',
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    padding: '8px 16px 24px',
}));

export const StyledTextField = styled(TextField)(()=>({
    marginBottom: '10px',
}));

export const StyledTextareaAutosize = styled(TextareaAutosize)(()=>({
    padding: '10px',
    marginBottom: '10px',
}));

export const StyledFooter = styled('div')(()=>({
    marginTop: '10px',
}));
