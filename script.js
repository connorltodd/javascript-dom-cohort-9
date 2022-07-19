function fontColorChanger () {
    const mainTitle = document.getElementById('main-title');
    if(mainTitle.style.color === 'red') {
        mainTitle.style.color = 'black';
    } else {
        mainTitle.style.color = 'red';
    }
}


function randomFontColorChanger () {
    const randomColorTitle = document.getElementById('random-color-title');
    const colors = ['red', 'pink', 'blue', 'orange', 'purple']

    // we need to know what color the text currently is
    const currentTextColor = randomColorTitle.style.color;
    // find the index where this color is
    let currentColorindex = colors.indexOf(currentTextColor);
    // we can remove that color from the array
    colors.splice(currentColorindex, 1);

    console.log('previousTextColor', currentTextColor)
    console.log('colorsArray', colors)
    // we will use math random to pick one of the remaining colors
    const nextTextColor = colors[Math.floor(Math.random() * colors.length)];
    // update the text with the new color
    randomColorTitle.style.color = nextTextColor;
    console.log('futureTextColor', nextTextColor)

}


function inputChangeHandler (event) {
    const inputText = document.getElementById('input-text');
    inputText.innerText = `Input text: ${event.target.value}`;
    console.log(event.target.value)
}
