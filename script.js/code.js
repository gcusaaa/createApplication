
document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('searchInput');
    let peopleList = document.getElementById('searchInput');
    let sortButton = document.getElementById('searchInput');

    let Ascending = true

    function fetchRandom() {
        try {
            let output = await fetch('https://randomuser.me/api/?results=20');
            let data = await output.json();
            let data.results;
        } catch (error) {
            console.error(`Fetch unsuccessful`, error);
        }
    }

    function displayList(people) {
        peopleList.innerHTML = '';
        if (people.length === 0) {
            message.textContent = ('Message not found')
        } else {
            message.textContent = 
        }
    }


})
