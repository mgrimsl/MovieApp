export const querry = (input, handleData) => {

    input = input.replace(" ","+")
    console.log(`I am searching : ${input}`)
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=99ba460e`)
    .then(response => response.json())
    .then(data => handleData(data))
}

export const querryMovie = (id, handleData) => {
    console.log(id)
    if (id !== 'null'){
    console.log(`I am pulling : ${id}`)
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=99ba460e`)
    .then(response => response.json())
    .then(data => handleData(
        'Details',
        {'Title' : data.Title,
        'Data' : data,
        }
        ))
    }
}