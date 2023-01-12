'use strict';

var appRoot = document.getElementById('app');

var appObj = {
    title: 'Indecision App',
    subtitle: 'Let computer make decisions for you',
    options: []
};

var newArray = [1, 4, 6, 5, 9];

var submitOption = function submitOption(e) {
    e.preventDefault();

    var formOption = e.target.elements.options.value;
    if (formOption.length > 0) {
        appObj.options.push(formOption);
        e.target.elements.options.value = '';
        // console.log(formOption)
        renderTemplate();
    }
};

var removeOptions = function removeOptions() {
    appObj.options = [];
    renderTemplate();
};

var decisionOptions = function decisionOptions() {
    var randomNumb = Math.trunc(Math.random() * appObj.options.length);
    var decision = appObj.options[randomNumb];
    alert(decision);
    renderTemplate();
    // console.log(randomNumb)
};

var renderTemplate = function renderTemplate() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appObj.title
        ),
        React.createElement(
            'h2',
            null,
            appObj.subtitle
        ),
        React.createElement(
            'form',
            { onSubmit: submitOption },
            React.createElement('input', { type: 'text', name: 'options' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All'
        ),
        React.createElement(
            'button',
            { onClick: decisionOptions, disabled: appObj.options.length === 0 },
            'Make Decision'
        ),
        React.createElement(
            'p',
            null,
            appObj.options.length
        ),
        React.createElement(
            'p',
            null,
            appObj.options.length > 0 ? 'Here are your options' : 'No options available'
        ),
        React.createElement(
            'ul',
            null,
            appObj.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        )
    );

    ReactDOM.render(template, appRoot);
};
renderTemplate();
