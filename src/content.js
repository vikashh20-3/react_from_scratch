const Content = () => {

    const handleNameChange = () => {
        const names = ['vikash', 'viku', 'vikku'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handlebuttoclickevent = () => {
        return console.log('you clicked this upper button')
    };

    const handleclickeventsecond = (name) => {
        return console.log(`${name} is clicked`)
    };
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            {/* we can render js code as a string 

        <p>Vikash</p>
        <p>{"Vikash"}</p>
        <p>{[2, 3, 4]}</p> */}

            {/* we cannot display object in this way  */}
            {/* <p>{{a:3}}</p> */}
            {/* it will show that object cannot be rendered */}
            {/* boolean can also be not rendered in this way */}

            <button onClick={handlebuttoclickevent}>You Clicked this upper button</button>
            <button onClick={() => handleclickeventsecond('vikash')}>You Clicked this parameter  button</button>

        </main>
    )
}
export default Content;