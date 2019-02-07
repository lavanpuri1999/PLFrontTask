const answersheet = {
    answers : [],
} 

export default function(state = answersheet,action){
    switch(action.type){
        case 'ADD_ANSWERS' : 
            return Object.assign({},state,{answers : action.payload});
        break;
        default:
            return state;
    }
}