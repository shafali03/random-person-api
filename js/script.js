
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    //creating fetch
    fetch("https://randomuser.me/api/")
        .then(data => data.json())
        .then(data => showData(data))
        .catch(error => console.log(error));
});

const ajax = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const url = "https://randomuser.me/api/";
    xhr.open("GET", url, true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(Error(xhr.statusText))
        }
    };
    xhr.onerror = () => {
        reject(Error('there was an error'))
    };

    xhr.send();
});

function showData(data) {
    const {
        name: { first },
        dob: { age }
    } = data.results[0];

    document.getElementById("first").textContent = first;
    document.getElementById("age").textContent = age;
}


// fetch("https://randomuser.me/api/")
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));




