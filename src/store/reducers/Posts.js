import { ADD_POST } from '../actions/actionTypes'

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
                
            }
    }
}