let list = [];
let input = document.querySelector('.type');
let output = document.querySelector('.output');
let button = document.querySelector('.button');
let deleteButton = document.querySelector('.delete');
let saveTabButton = document.querySelector('.savetab');
 
let storedList = JSON.parse(localStorage.getItem('myList'));
console.log(storedList);
if (storedList) {
    list = storedList;
    output.innerHTML = list.map(url => `<li><a target="_blank" href="${url}">${url}</a></li>`).join('');
}

button.addEventListener('click', function() {
    console.log(input.value);
    
    output.innerText = "";
    list.push(input.value);
    input.value = "";
    localStorage.setItem('myList', JSON.stringify(list));
    console.log(list);
    localStorage.getItem('myList');

    output.innerHTML = list.map(url => `<li><a target="_blank" href="${url}">${url}</a></li>`).join('');
}
)

deleteButton.addEventListener('click', function() {
    list = [];
    localStorage.clear();
    output.innerHTML = "";
})
saveTabButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
            list.push(tabs[0].url);
            localStorage.setItem('myList', JSON.stringify(list));
            output.innerHTML = list.map(url => `<li><a target="_blank" href="${url}">${url}</a></li>`).join('');
    });
})

