import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Economic Student',
        email: 'economicStudent@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Ludwig von Mises',
            comment: 'Very competitive!'
        }, {
            nickname: 'Karl Marx',
            comment: 'Can you share this photo with me?'
        }]
    }, {
        id: Math.random(),
        nickname: 'Philosophy Student',
        email: 'philosophyStudent@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }

        default:
            return state
    }
}

export default reducer