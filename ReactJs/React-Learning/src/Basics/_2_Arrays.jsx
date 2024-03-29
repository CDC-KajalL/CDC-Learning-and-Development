import React from 'react';

function Second() {
    const K = ["Krishna", "Nandan","Keshav", "Madhav", "Kanha", "Murli Manohar"];
    const R = {'1': "Radha", "2": "Kishori", "3": "Radhika", "4": "Vrindavaneshwari", "5": "Krishna priya", "6": "Madhvi"};
    const R1 = [{'1': "Makheshwari", "2": "Kriyeshwari", "3": "Swadwshwari", "4": "Sudheshwari", "5": "Thrivedabharatheeshwari", "6": "Pramaanashaashanseshwari"},{1: "Rameshwari", 2:"Kshmeshwari", 3: "Pramodakaaneshwari", 4: "Vrajeshwari", 5: "Vrajadhipe", 6: "Gaurangi"}]
    const K1 = {1: ["Gopal", "Govinda", "Hari", "Jagannath", "Kamalnayan", "Lakshmikantam"], 2: ["Mohan", "Murali", "Murlidhar", "Shyam", "Sumedha", "Vasudev"]}
    function f1(arr) {
        // Extracting data from list
        const arrItems = arr.map((item) => (
            <li key={item}>{item}</li>
        ));
        return arrItems;
    }

    function f2(arr) {
        // Extracting data from dictionary
        const dItems = Object.keys(arr).map(key => (
            <div key={key}>
                {arr[key]}
            </div>
        ))
        return dItems;
    }

    function f3(arr){
        const listItems = R1.map((obj, index) => (
            <ul key={index}>
                {Object.values(obj).map((value, id) => (
                    <li key={id}>{value}</li>
                ))}
            </ul>
        ));
        return listItems;
    }
    function f4(arr){
        const listItems = Object.keys(K1).map((key) => (
            <ul key={key}>
                {K1[key].map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        ));
        return listItems;
    }
    return (
        <div className="flex flex-wrap">
            <div className="">
                <p>Shree Krishna names:-</p>
                <ul>
                    {f1(K)}
                    {f4(K1)}
                </ul>
            </div>
            <div>
                <p>Shree Radhe's names:-</p>
                <ul>
                    {f2(R)}
                    {f3(R1)}
                </ul>
            </div>
        </div>
    );
}

export default Second;
