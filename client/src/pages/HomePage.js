import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StyledFab from './styles';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';

export default function HomePage() {
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(()=>{
      dispatch(showModal());
  },[dispatch]);
  return (
    <div>
        <Header />
        <PostList />
        <CreatePostModal/>
        <StyledFab color='primary' onClick={openCreatePostModal}>
          <AddIcon  />
        </StyledFab>
    </div>
  )
}
