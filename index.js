const API_KEY = 'uSaz9wRyAD34QNjWTBYdubxir3GKmm7NkKXF9RVD';
const BASE_URL = 'https://developer.nps.gov/api/v1/parks?';

const formHandler = () => {
    $('#main-form').submit(e => {
        e.preventDefault();
        const state = $('#state-select').val();
        const maxResults = $('#max-results').val();

        fetch(`${BASE_URL}stateCode=${state}&limit=${maxResults}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                const parksList = results.data.map(park => displayPark(park)).join('');
                $('.js-results-list').removeClass('hidden').html(parksList);
            })
            .catch(e => console.log(e))
    });
}

const displayPark = park => {
    return `<li class="park">
        <h3>${park.fullName}</h3>
        <h4>${park.description}</h4>
        <a href="${park.url}">Website</a>
    </li>`;
}

$(formHandler());