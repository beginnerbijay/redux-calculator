const initialvalue = 0;
const value = 1;
export const changeNum = (state = initialvalue, action) =>{
    switch(action.type){
        case 'INCR' : return state + 1;
        case "DECR" : return state - 1;
        default : return state;
    }
}
export const multNum = (state = value, action) =>{
    switch(action.type){
        case 'MULTI' : return state * 5;
        case "DIVIDE" : return state / 5;
        default : return state;
    }
}
export const changeColor = (state = document.body.style.backgroundColor ="white", action) =>{
    switch(action.type){
        case 'color' : return document.body.style.backgroundColor = "black";;
        case "colors" : return document.body.style.backgroundColor ="white";
        default : return state;
    }
}