const Button = (props)=>{
    let className = "font-medium text-white py-2 px-4 text-center rounded-md active:scale-[0.96] duration-300 ease-in-out";
    let classArr = className.split(' ');
    if(props.color !== undefined){
        classArr.push(props.color);
        classArr.push(props.hover);
    }else{
        classArr.push("bg-blue-500");
        classArr.push("hover:bg-sky-700");
    }
    let finalClassName = classArr.join(' ');
    return(
        <button onClick={props.clearMe} className={finalClassName} value={props.value}>{props.display}</button>
    )
}
export default Button;