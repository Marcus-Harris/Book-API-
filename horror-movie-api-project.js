async function books(bookName) {
    const response = await fetch(`http://openlibrary.org/search.json?q=${bookName}`)
    const info = await response.json();
    console.log("The latitude is: " + info.docs.title + ".\nThe longitude is: " + info.docs.first_publish_year);
}

books("The Lord of the Rings")