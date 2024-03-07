import * as actions from '../actions';
import {takeLatest,call, put} from 'redux-saga/effects'
import * as api from '../../api';

function* fetchPostSaga(action){
    try{
        const posts = yield call(api.fetchPosts);
        console.log('[posts]',posts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.getPosts.getPostFailure(err));
    }

}

function* createPostSaga(action){
    try{
        console.log('[create-post-saga] Start',action.payload);
        const post = yield call(api.createPosts,action.payload);
        console.log('[create-post-saga] Success:', post);
        yield put(actions.createPost.createPostSuccess(post.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.createPost.createPostFailure(err));
    }

}

function* updatePostSaga(action){
    try{
        console.log('[update-post-saga] Start',action.payload);
        const updatedPost = yield call(api.updatePost,action.payload);
        console.log('[update-post-saga] Success:', updatedPost);
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.updatePost.updatePostFailure(err));
    }

}

function* deletePostSaga(action){
    try{
        console.log('[delete-post-saga] Start',action.payload);
        const deletedPost = yield call(api.deletePost,action.payload);
        console.log('[delete-post-saga] Success:', deletedPost);
        yield put(actions.deletePost.deletePostSuccess(deletedPost.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.deletePost.deletePostFailure(err));
    }

}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest,createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest,updatePostSaga);
    yield takeLatest(actions.deletePost.deletePostRequest,deletePostSaga);
}

export default mySaga;