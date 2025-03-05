import Link  from "next/link";
import ItemList  from './item-list';
export default function Page() {
    return (
      <main>
        <h1 className="text-4xl text-center  py-4">Shopping List</h1>
        <ItemList/>
        
      </main>
    );
  }
