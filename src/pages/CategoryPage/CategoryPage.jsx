import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard"
import ItemFilter from "../../components/ItemFilter/ItemFilter";

export default function CategoryPage({products}) {    
    let { categoryName } = useParams();

    const productListItems = products
      .filter(product => product.category === categoryName)
      .map((p, idx) => (
        <ItemCard 
          title={p.title} 
          description={p.description} 
          category={p.category} 
          wholesalePrice={p.wholesalePrice}  
          retailPrice={p.retailPrice}  
          qtyAvailable={p.qtyAvailable}  
          minQuantity={p.minQuantity}  
          delivery={p.delivery}
          id={p._id}  
          key={idx} 
          index={idx}
        />
      ));

    return (
        <>
        <h1>{categoryName}</h1>
        {productListItems.length ?
        (
        <ul>{productListItems}</ul>
        ) : ( 
        <div>no products</div>
        )
    }
        <ItemFilter products={products}/>
        </>
    );
}