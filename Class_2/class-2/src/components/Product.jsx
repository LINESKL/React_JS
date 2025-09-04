import "./Product.css"

function Product({ title, price, inStock, description, rating, tags, img }) {
    const hasDiscount = tags.includes("Скидка");
    const finalPrice = hasDiscount ? Math.round(price * 0.9) : price;
    return (
        <div className="bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-w-xs mx-auto flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-2xl animate-fadeIn">
            <div className="relative">
                <img 
                    className={`w-70 h-70 object-cover rounded-t-lg transition-all duration-300 ${!inStock ? 'filter blur-sm grayscale' : ''}`} 
                    src={img} 
                    alt={title} 
                />
            </div>
            <div className="p-5 flex flex-col gap-2">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{title}</h5>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">{"★".repeat(rating)}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{rating}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                    {tags.length > 0 ? tags.map((tag, i) => (
                        <span key={i} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-700 dark:text-gray-300">{tag}</span>
                    )) : <span className="text-xs text-gray-400">_________</span>}
                </div>
                <div className="flex items-center gap-2 mt-2">
                    {hasDiscount && (
                        <span className="text-lg text-gray-400 line-through">{price}₸</span>
                    )}
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{finalPrice}₸</span>
                </div>
                <button 
                    className="flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 transition-colors duration-200 disabled:opacity-50" 
                    disabled={!inStock}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2M16 16a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {inStock ? 'В корзину' : 'Нет в наличии'}
                </button>
            </div>
        </div>
    )
}

export default Product;