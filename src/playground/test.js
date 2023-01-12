const appRoot = document.getElementById('app');

// const template = (<div>
//     <h1>React application was invented by Facebook</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//          Placeat maiores ipsam, necessitatibus doloribus dolor id 
//          eligendi harum consectetur ut. Iste recusandae quas deserunt debitis optio 
//          laudantium officia qui maiores tenetur?
//          </p>
// </div>)

const fullName = 'Jagaban';
const age = 65;


const template2 = (<div>
    <h1>{fullName.toLocaleUpperCase()}</h1>
    <p>Age: {age}</p>
    <p>welcome to my react Js course</p>
</div>)


const getPlayerLocation = (playerLocal) => {
    if (playerLocal) {
        return <p>player location: {playerLocal}</p>
    }
}


const player = {
    firstName: 'Christiano',
    lastName: 'Ronaldo',
    age: 40,
    jerseyNo: 7,
    team: 'ManchesterUnited',
    // location: 'England',

}
const template3 = (<div>
    <h1>{player.firstName} </h1>
    <h2>{player.lastName.toLocaleUpperCase()} </h2>
    <h3>Age: {player.age > 18 ? player.age : 'Under 18'}</h3>
    <p>jerseyNo: {player.jerseyNo}</p>
    <p>team: {player.team}</p>
    {/* <p>location: {getPlayerLocation(player.location)}</p> */}
    {getPlayerLocation(player.location)}

</div>)


let counter = 0;
const newID = 'addCount'
const addOne = () => {
    counter++;
    renderTemplate()
}
const minusOne = () => {
    if (counter >= 1) {
        counter--;
        renderTemplate()
    }
}
const reset = () => {
    counter = 0;
    renderTemplate()
}

const renderTemplate = () => {
    const template4 = (<div>
        <h1 id={newID}>Counts: {counter}</h1>
        <button onClick={addOne}>Add +1</button>
        <button onClick={minusOne}>Minus -1</button>
        <button onClick={reset}>reset</button>
    </div>)
    ReactDOM.render(template4, appRoot)
}
renderTemplate()
