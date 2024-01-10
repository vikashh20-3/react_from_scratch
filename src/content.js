 import { useState } from "react";

const Content = () => {
    const  [name , SetName]=useState('vikash');

    const handleNameChange = () => {
        const names = ['vikash', 'viku', 'vikku'];
        const int = Math.floor(Math.random() * 3);
        // return names[int];
        SetName(names[int]);
    }

    const handlebuttoclickevent = () => {
        return console.log('you clicked this upper button')
    };

    const handleclickeventsecond = (name) => {
        return console.log(`${name} is clicked`)
    };

    const handleclickeventseconde = (e) => {
        return console.log(e)
    };
    // this e will show the properties of this onclick 
    // we can furthur more explore this like 
    // e.target
    // this will show on which xml tag it should be used
    // e.target.innertext
    // this will show that what is the innter text of that tag
    return (
        <main>
            <p>
                {/* Hello {handleNameChange()}! */}
                Hello {name};
            </p>
            {/* we can render js code as a string 

        <p>Vikash</p>
        <p>{"Vikash"}</p>
        <p>{[2, 3, 4]}</p> */}

            {/* we cannot display object in this way  */}
            {/* <p>{{a:3}}</p> */}
            {/* it will show that object cannot be rendered */}
            {/* boolean can also be not rendered in this way */}

            {/* <button onClick={handlebuttoclickevent}>You Clicked this upper button</button> */}
            <button onClick={handleNameChange}>To change the name with useState</button>
            <button onClick={() => handleclickeventsecond('vikash')}>You Clicked this parameter  button</button>

        </main>
    )
}
export default Content;