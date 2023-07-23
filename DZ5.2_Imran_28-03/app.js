const books = ['youtube','you','oY','You','bOok']
function  book(someBooks){
    const onlyBook=[]
    const otherBooks=[]
    for (const book of someBooks) {
        if(book.includes('y')||book.includes('Y')){
            onlyBook.push(book)
        }else{
            otherBooks.push(book)
        }
    }
    return {
        onlyBook:onlyBook,
        otherBooks:otherBooks
    };
}
console.log( book(books).onlyBook);
console.log( book(books).otherBooks);
