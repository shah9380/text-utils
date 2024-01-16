import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Home = ()=>{
    let[text,setText] = useState('');
    let[countChar,setCountChar]= useState(0);
    let[words,setWords]= useState(0);
    let[readingTime,setReadingTime] = useState(0);
    const textAreaRef = useRef(null);
    const getContent = (event)=>{
        setText(event.target.value);
        
    }
    function calculateReadingTime(text, wordsPerMinute = 200) {
        const words = text.trim().split(/\s+/).length;
        const minutes = words / wordsPerMinute;
        if(text===''){
            setReadingTime(0);
        }else{
            setReadingTime(minutes);
        }
        
    }
    useEffect(()=>{
        setCountChar(text.length)
        let arr = text.split(/\s+/);
            if(text=== ""){
                setWords(0);
            }else{
                setWords(arr.length);
            }
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                textAreaRef.current.focus(); 
                textAreaRef.current.value = text;
            }
            calculateReadingTime(text);
    },[text])
    const clearMe = (e)=>{
        if(e.target.value === "clear"){
            setText('');
            console.log(e.target);
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                textAreaRef.current.value = '';
                textAreaRef.current.focus();
            }
        }else if(e.target.value === "uppercase"){
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                textAreaRef.current.style.textTransform = 'uppercase';
                textAreaRef.current.focus();
                setText(text.toUpperCase());
            }
        }else if(e.target.value === "lowercase"){
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                textAreaRef.current.style.textTransform = 'lowercase';
                textAreaRef.current.focus();
                setText(text.toLowerCase());
            }
        }else if(e.target.value === "trim"){
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                setText(text.replace(/\s+/g, ' '));
            }
        }else if(e.target.value === "copy"){
            if (textAreaRef.current) {
                // Do something with the DOM element (e.g., focus on the input)
                textAreaRef.current.select();
                document.execCommand('copy');
                setTimeout(()=>{
                    alert('text copied');
                },5_00);
                
            }
        }
    }
    return(
        <section>
            <h1 className="text-2xl font-medium mt-[10vh] mb-8">TextUtis - Word Counter, Character Counter, Remove Extra Space</h1>
            <div className="flex flex-col gap-4 justify-center items-center" >
                <p className="text-start w-[75%] text-xl font-semibold">Ener your text here</p>
                <textarea ref={textAreaRef} onChange={getContent} className="border border-black w-[75%]" rows={8} >

                </textarea>
                <div className="w-[75%] flex gap-4 flex-wrap">
                    <Button clearMe={clearMe} color="bg-blue-500" hover="hover:bg-blue-600" value="uppercase" display="Convert UpperCase"></Button>
                    <Button clearMe={clearMe} color="bg-blue-500" hover="hover:bg-blue-600" value="lowercase" display="Convert LowerCase"></Button>
                    <Button clearMe={clearMe} color="bg-red-500" hover="hover:bg-red-600" value="clear" display="Clear Text"></Button>
                    <Button clearMe={clearMe} color="bg-green-500" hover="hover:bg-green-600" value="copy" display="Copy To Clipboard"></Button>
                    <Button clearMe={clearMe} color="bg-blue-500" hover="hover:bg-blue-600" value="trim" display="Remove Extra Spaces"></Button>
                </div>
            </div>
            <div className="w-[75%] mx-auto flex flex-col gap-2 justify-center items-start mt-4">
                <h1 className="text-2xl font-medium">Summary Of Your Text</h1>
                <ul>
                    <li className="text-start">Number of Words : <span>{words}</span></li>
                    <li className="text-start">Number of Characters : <span>{countChar}</span></li>
                    <li className="text-start">Reading Time : <span>{readingTime}</span></li>
                </ul>
            </div>
            <div>
            <h1 className="text-2xl font-medium">Preview Document</h1>
                <textarea className="border border-black w-[75%]" rows={2} value={text}>
                </textarea>
            </div>
            

        </section>
    )
}
export default Home;