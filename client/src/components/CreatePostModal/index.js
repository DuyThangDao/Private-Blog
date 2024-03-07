import { Button, Modal } from '@mui/material'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../redux/actions';
import { modalState$ } from '../../redux/selectors';
import { StyledDiv,StyledTextField,StyledFooter,StyledForm,StyledTextareaAutosize } from './styles';
import FileBase64 from 'react-file-base64';

export default function CreatePostModal() {
    const [title,setTitle] = React.useState('');
    const [content,setContent] = React.useState('');
    const [attachment,setAttachment] = React.useState('');

    const dispath = useDispatch();
    const {isShow} = useSelector(modalState$);
    const onClose = React.useCallback(()=>{
      dispath(actions.hideModal());
      setAttachment('');
      setContent('');
      setTitle('');
    },[dispath]);
    const onSubmit= React.useCallback(()=>{
      const data = {
        title: title,
        content: content,
        attachment: attachment,
      }
      dispath(actions.createPost.createPostRequest(data));
      onClose();
    },[title,content,attachment,dispath,onClose]);
    const body = (
      <StyledDiv>
        <StyledForm noValidate autoComplete='off' onSubmit={onSubmit}>
          <h2>Create New Post</h2>
          <StyledTextField  required label='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <StyledTextareaAutosize  minRows={10} maxRows={15} placeholder='Content...' value={content} onChange={(e)=>{setContent(e.target.value)}} />
          <FileBase64  accept='image/*' multiple={false} type='file' value={attachment} onDone={({base64})=>{setAttachment(base64)}}/>
          <StyledFooter>
            <Button  variant='contained' color='primary' fullWidth onClick={onSubmit}>Create</Button>
          </StyledFooter>
        </StyledForm>
      </StyledDiv>
    );

  return (
    <Modal open={isShow} onClose={onClose}>
        {body}
    </Modal>
  )
}
