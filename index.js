const data = ["apple","mango","orange","banana","watermelon","waterfruit"]

const getSuggestions = (keyword) => {
    let result = data.filter(i =>  i.substring(0,keyword.length).toLowerCase() === keyword.toLowerCase())
    return new Promise((res) => 
        setTimeout(() => {
            res(result)
        },1000)
    )
}

const inputBox = document.getElementById('search-input');
const sectionToDisplay = document.getElementById('show-suggestion');

const handleChange = (event) => {
    handleSearch(event.target.value)
}

const handleSearch = async (keyword) => {
    let result = await getSuggestions(keyword)
    sectionToDisplay.innerHTML = result
}

const debounce = (fn,delay=1000) => {
    let ctxTimer;
    return function () {
        const self = this;
        const args = arguments;
        clearTimeout(ctxTimer);
        ctxTimer = setTimeout(() => fn.apply(self,args),delay)
    }
}

(() => {
    inputBox.addEventListener('input',debounce(handleChange,6000))

})();