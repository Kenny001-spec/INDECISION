const appRoot = document.getElementById('app');

const appObj = {
    title: 'Indecision App',
    subtitle: 'Let computer make decisions for you',
    options: []
}

const newArray = [1, 4, 6, 5, 9]


const submitOption = (e) => {
    e.preventDefault()

    const formOption = e.target.elements.options.value;
    if (formOption.length > 0) {
        appObj.options.push(formOption)
        e.target.elements.options.value = '';
        // console.log(formOption)
        renderTemplate()
    }

}

const removeOptions = () => {
    appObj.options = [];
    renderTemplate();
}

const decisionOptions = () => {
    const randomNumb = Math.trunc(Math.random() * appObj.options.length);
    const decision = appObj.options[randomNumb]
    alert(decision)
    renderTemplate()
    // console.log(randomNumb)
}

const renderTemplate = () => {

    const template = (<div>
        <h1>{appObj.title}</h1>
        <h2>{appObj.subtitle}</h2>


        <form onSubmit={submitOption}>
            <input type="text" name="options" />
            <button>Add option</button>
        </form>


        <button onClick={removeOptions}>Remove All</button>
        <button onClick={decisionOptions} disabled={appObj.options.length === 0}>Make Decision</button>


        <p>{appObj.options.length}</p>


        {/* <p>{newArray.map(el => el * 10)}</p> */}
        {/* {[<p key="a">a</p>, <p key="b">b</p>, <p key="c">c</p>, <p key="d">d</p>]} */}


        <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
        <ul>
            {appObj.options.map(option => <li key={option}>{option}</li>)}

        </ul>

    </div>)

    ReactDOM.render(template, appRoot)
}
renderTemplate()
