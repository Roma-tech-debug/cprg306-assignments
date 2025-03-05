export default function Item({ name, quantity, category }) {
    return (
        <div className="bg-blue-300 m-2 p-4 text-black ">
            <h2 className="text-2xl font-bold text-left">{name}</h2>
            <ul className="w-full">
                <li className="bg-white">Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}