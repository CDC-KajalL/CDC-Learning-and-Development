import {useState} from 'react'
import Box from './_1_Box';
import Btn from './_1_Button';

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
//Iterating through array
const even = (arr) => {
    const r = arr.filter(num => num % 2 === 0);
    console.log(r)
    return r;
}

function Introduction() {
    const [name, setName] = useState('Nini');
    const nums = [7, 3, 1, 2, 4, 6, 11, 22]
    //passing as a parameter in random function
    const Randomise = (arr) => {
        const r = Math.floor(Math.random() * arr.length)
        return arr[r];
    }
    const handleNameChange =()=>{
        const names = ["Kate", "Einstenina", "Nini", "Kajal", "Einsta"]
        const r = Math.floor(Math.random() * names.length)
        setName(names[r]);
        console.log("double clicked!")
    }
    return (
        <div>
            <div className="flex justify-center flex-col text-center ">
                <p onDoubleClick={handleNameChange}>Hey {name}</p>
                <p>{Wish()}</p>
                <br />
                <div className="flex flex-wrap space-x-1 space-y-1">
                    <Box className="">
                        <p>Finding even numbers from the below list</p><br />
                        <div className="text-xs">
                            <p >List = [{nums.join(',')}]</p>
                            <p></p>
                        </div>
                        <br />
                        <Btn size="sm" type="primary" onClick={even(nums)}>Generate</Btn>
                    </Box>
                    <Box className="">
                        <Btn size="sm" type="secondary">Generate</Btn>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Introduction