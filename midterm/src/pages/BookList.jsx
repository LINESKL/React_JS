import React, { memo, useState, useMemo } from 'react';

const BookRow = memo(function BookRow({ book, deleteBook }) {
  return (
    <tr className="border-b border-green-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-green-900 whitespace-nowrap bg-gray-50 "
      >
        {book.title}
      </th>
      <td className="px-6 py-4">{book.author}</td>
      <td className="px-6 py-4 bg-green-50">{book.genre}</td>
      <td className="px-3 py-4">{book.rating}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => deleteBook(book.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
});

const GENRES = ["all", "fiction", "nonfiction", "tech"];

export default function BookListEx({ books, deleteBook }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGenre, setFilterGenre] = useState('all');

    const filteredBooks = useMemo(() => {
        let list = books;
        
        if (filterGenre !== 'all') {
            list = list.filter(book => book.genre === filterGenre);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            list = list.filter(book => 
                book.title.toLowerCase().includes(lowerCaseSearch)
            );
        }

        return list;
    }, [books, filterGenre, searchTerm]);

    return (
        <div className="mt-10 w-full md:w-4/5 lg:w-3/5 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Book List</h2>

            <div className="flex space-x-4 mb-6 items-center">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md shadow-sm flex-1"
                />
                
                <select 
                    value={filterGenre} 
                    onChange={(e) => setFilterGenre(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md shadow-sm bg-white"
                >
                    {GENRES.map(genre => (
                        <option key={genre} value={genre}>
                            {genre.charAt(0).toUpperCase() + genre.slice(1)}
                        </option>
                    ))}
                </select>
                <p className="text-gray-600 text-sm">Found: {filteredBooks.length}</p>
            </div>
            
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-green-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 ">Title</th>
                            <th scope="col" className="px-6 py-3">Author</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50">Genre</th>
                            <th scope="col" className="px-3 py-3">Rating</th>
                            <th scope="col" className="px-6 py-3 bg-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                            <BookRow
                            key={book.id}
                            book={book}
                            deleteBook={deleteBook}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                Books not found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}