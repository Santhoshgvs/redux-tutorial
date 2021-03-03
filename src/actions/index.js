export const actionIncrement=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    };
};

export const actionDecrement=()=>{
    return{
        type:"DECREMENT"
    }
}