export default () => {
    const about = `
    <h1>About</h1>
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = about;
    return divElement;
}