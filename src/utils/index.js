import toast from "react-hot-toast";

// get stored books
const getStoredReadBooks = ()=>{
    
    const storedReadBooks = localStorage.getItem('readbooks');
    if(storedReadBooks){
     return JSON.parse(storedReadBooks)
    }
    return [];
}

// save read books to localstorage
const saveReadBooks = (book)=>{
//    console.log(book);
    const storedReadBooks = getStoredReadBooks()
    const isExist = storedReadBooks.find(storedReadBook => storedReadBook.bookId === book.bookId)
    if(isExist){
        toast.error('Already read this book!')
    }else{
        storedReadBooks.push(book)
        localStorage.setItem('readbooks', JSON.stringify(storedReadBooks))
        toast.success('Book added to readlist successfully!')
    }
}

//=============wishlist tab functions=============================

const getStoredWishedBooks = () =>{
    const storedWishedBooks = localStorage.getItem('wishedbooks')
    if(storedWishedBooks){
        return JSON.parse(storedWishedBooks)
    }
    return []

}

// save to local storage
const setWishedBooks = (book) =>{
    const storedReadBooks = getStoredReadBooks()
    const storedWishedBooks = getStoredReadBooks()
  
        const isExist = storedReadBooks.find(readBook => readBook.bookId === book.bookId )
        if(isExist){
            toast.error('You Have Already Read This Book')
        }else{
            storedWishedBooks.push(book)
            localStorage.setItem('wishedbooks', JSON.stringify(storedWishedBooks))
            toast.success('Book added to Wishlist')
        }
    
   
        

}
export {getStoredReadBooks,saveReadBooks, getStoredWishedBooks,setWishedBooks }
