import Product from "./components/Product";

function App() {
  const Products = [
    {
      title: "Iphone 13",
      price: 450000,
      inStock: true,
      description: "Iphone 13 128GB Black",
      rating: 4,
      tags: ["Скидка"],
      img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_3123_9_1.jpg"
    },
    {
      title: "Iphone 14 Pro",
      price: 600000,
      inStock: false,
      description: "Iphone 14 Pro 256GB Silver",
      rating: 5,
      tags: ["Новинка"],
      img: "https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-14-pro-silver/iphone-14-pro-128gb-silver-3.jpg"
    },
    {
      title: "Iphone 12",
      price: 350000,
      inStock: true,
      description: "Iphone 12 64GB Blue",
      rating: 3,
      tags: [],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDOvMm6KjIIyvti4TVVXqdDijzDcIQcpYEQ&s"
    },
    {
      title: "MacBook Pro 14",
      price: 900000,
      inStock: true,
      description: "MacBook Pro 14 512GB Space Gray",
      rating: 5,
      tags: ["Новинка"],
      img: "https://gadgetstore.kz/wa-data/public/shop/products/81/11/1181/images/3044/3044.970.jpg"
    },
    {
      title: "MacBook Air 13",
      price: 700000,
      inStock: false,
      description: "MacBook Air 13 256GB Gold",
      rating: 4,
      tags: ["Скидка", "Новинка"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffKb6ijAtAX1NU3Y6RFF7cQSohA-AZB_qIw&s"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-600 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-fadeIn">
        Classwork <span className="text-blue-700">2</span>
      </h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {Products.map((item, index) => (
            <Product 
              key={index}
              title={item.title}
              price={item.price}
              inStock={item.inStock}
              description={item.description}
              rating={item.rating}
              tags={item.tags}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
