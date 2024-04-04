interface CardProps {
  children: { image: string; category: string; title: string; price: number };
}
function Card({ children }: CardProps) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl rounded">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-top w-full h-full block"
          src={children?.image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {children?.category}
        </h3>
        <h2 style={{color: "white"}} className="text-gray-900 title-font text-lg font-medium">
          {children?.title}
        </h2>
        <p className="mt-1">${children?.price}</p>
      </div>
    </div>
  );
}

export default Card;
