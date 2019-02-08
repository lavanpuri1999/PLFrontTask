const answersheet = {
    answers : [],
    rightans : [],
} 

export default function(state = answersheet,action){
    switch(action.type){
        case 'ADD_ANSWERS' : 
            return Object.assign({},state,{answers : action.payload});
        break;
        case 'RIGHT_ANSWERS' : 
            return Object.assign({},state,{rightans : action.payload});
        break;
        default:
            return state;
    }
}