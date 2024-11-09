const SEARCH_API_URL = "https://api-girman-478368a575e7.herokuapp.com/api/users/search";

const getUsersByQuery = async (query: string) => {
    return fetch(SEARCH_API_URL + "?query=" + query);
}

// fjgf
export { getUsersByQuery };