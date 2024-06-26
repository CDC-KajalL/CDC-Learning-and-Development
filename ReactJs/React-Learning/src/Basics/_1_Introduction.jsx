import React, {useState} from 'react'
import Box from './_1_Box';
import Btn from './_1_Button';
import Form1 from './_3_Form';
import Rating from './_5_Props';
import Universal from './_6_Class_concept';

//Wishes according to the time
const Wish = () => {
    const today = new Date();
    if (today.getHours() < 12) {
        return "Good Morning🌼"
    }
    else if (today.getHours() < 16 && today.getHours() > 12) {
        return "Good Afternoon🌻✨"
    }
    else if (today.getHours() > 16 && today.getHours() < 22) {
        return "Good Evening🥀❣"
    }
    else if (today.getHours() >= 22) {
        return "Sweet Dreams😴"
    }
    else {
        return "Have a great day ahead🌼!"
    }
}

function Introduction() {
    const [name, setName] = useState('Kajal');
    const nums = [7, 3, 1, 2, 4, 6, 11, 22]
    const [displayText, setDisplayText] = useState('');

    //Even number from the list
    const even = (arr) => {
        const r = arr.filter(num => num % 2 === 0);
        console.log(r)
        setDisplayText(r.join(','));
        return r;
    }
    //random item selector from an array passed as a parameter
    const Randomise = (arr) => {
        const r = Math.floor(Math.random() * arr.length)
        return arr[r];
    }
    //Changes the name on double click through a random function
    const handleNameChange =()=>{
        // const names = ["Kate", "Einstenina", "Nini", "Kajal", "Einsta"]
        const names = ["Aakash", "Aditi", "Aditya", "Ankit", "Ansh", "Chetan", "Dattatraya", "Naman", "Keshav", "Nischal", "Rohit", "Siddhesh", "Sonu", "Sriram", "Usha", "Sravani", "Sumantraj Paul", "Sonu", "Saksham"]
        const r = Math.floor(Math.random() * names.length)
        setName(names[r]);
        console.log("double clicked!")
    }

    return (
        <div>
            <div className="flex justify-center flex-col text-center ">
                <h1 onDoubleClick={handleNameChange}>Hey {name}</h1>
                <p>{Wish()}</p>
                <br />
                <div className="flex flex-wrap space-x-1 space-y-1">
                    {/* Box 1 */}
                    <Box width="45" height="52" color = "[#8800ff]">
                        <p><b>Finding even numbers from the below list</b></p><br />
                        
                        <div className="text-xs">
                            <p >List = [{nums.join(',')}]</p>
                            <p>Even Numbers = [{displayText}]</p>
                        </div>
                        <br />
                        <Btn size="sm" type="primary" onClick={() => even(nums)}>Generate</Btn><br/>
                    </Box>
                    {/* Box 2 */}
                    <Box width = "52" height = "56" color = "orange-300">
                        <p><b>Number Game</b></p><br/>
                        <Form1></Form1>
                    </Box>
                    {/* Box 3 */}
                    <Box width = "52" height = "56" color = "orange-300">
                    <p><b>Rating</b></p><br/>
                        <div >  
                            <Rating rating = "1"/>
                            <Rating rating = "2"/>
                            <Rating rating = "3"/>
                            <Rating rating = "4"/>
                            <Rating rating = "5"/>
                        </div>
                    </Box>
                    {/* Box 4 */}
                    <Box width = "52" height = "56" color = "orange-300">
                        <div className="flex flex-row">
                            Python:&nbsp;&nbsp;&nbsp;<Universal/>
                        </div>
                        <div className="flex flex-row">
                            C++: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Universal/><br/>
                        </div>
                        <div className="flex flex-row">
                            Java: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Universal/><br/>
                        </div>
                        <Btn size="sm" type="primary" onClick={() => this.handleSubmit()}>
                        Submit
                    </Btn>
                        
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Introduction