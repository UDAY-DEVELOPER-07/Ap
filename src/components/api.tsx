export async function FetchApiData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
        throw new Error('Failed to fetch data from the API');   
    }   
    return await response.json();
}
