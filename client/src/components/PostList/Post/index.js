import React from 'react'
import {Card,CardActions,CardContent,IconButton,Typography,Avatar, CardHeader, Menu, MenuItem} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import StyledcardMedia from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from '../../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  console.log('post-2',props);
  const dispath = useDispatch();
  const onLike = React.useCallback(()=>{
    dispath(updatePost.updatePostRequest({...props, likeCount : props.likeCount + 1 }));
  },[dispath,props]);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onDelete = React.useCallback(()=>{
    dispath(deletePost.deletePostRequest({...props}));
    setAnchorEl(null);
  },[dispath,props]);
  console.log('ancho',anchorEl);
  return (
    <Card>
        <CardHeader 
            avatar={<Avatar>A</Avatar>} 
            title={props.author}
            subheader={moment(props.updatedAt).local().format('HH:mm MMM DD,YYYY')}
            action={
              <>
                <IconButton aria-label="settings" onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                  <MenuItem onClick={onDelete} disableRipple>
                    <DeleteIcon />
                    Delete
                  </MenuItem>
                </Menu>
              </>
            }
        />
        <StyledcardMedia
            image={props.attachment}
            title='Title'
            component="img"
            alt="Post Image"
        />
        <CardContent>
            <Typography variant="h5" color="text.primary">
                {props.title}
            </Typography>
            <Typography variant="body2" component='p' color="text.secondary">
                {props.content}
            </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={onLike}>
          <FavoriteIcon />
          <Typography component='span' color='text.secondary'>{props.likeCount}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}
