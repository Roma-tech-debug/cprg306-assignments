// item.js
export default function Item({ name, quantity, category }) {
    return (
      <li className="  text-white bg-slate-900 p-2 m-4 w-[380px]" >
      <strong>{name}</strong> <br />
      Buy {quantity} in {category}
        
      </li>
    );
  }
  // style={{ backgroundColor: '#070738' }}
