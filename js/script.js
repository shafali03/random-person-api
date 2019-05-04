const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    getData()
        .then(data => showData(data))
        .catch(error => console.log(error));

});



function showData(data) {
    const {
        name: { first },
        dob: { age }
    } = data.results[0];

    document.getElementById("first").textContent = first;
    document.getElementById("age").textContent = age;
}


const getData = async function () {
    const url = "https://randomuser.me/api/"
    const result = await fetch(url);
    const response = await result.json();

    return response;
}