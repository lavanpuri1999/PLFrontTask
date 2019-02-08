function addanswer(val){
    return {
        type : 'ADD_ANSWERS',
        payload : val,
    };
}

function rightsheet(val){
    return {
        type : 'RIGHT_ANSWERS',
        payload : val, 
    };
}

export default {addanswer,rightsheet}; 