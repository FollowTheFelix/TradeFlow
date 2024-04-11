export default function ItemDetailsPage({products}) {
    return (
        <>
        <h1>Product Details</h1>
        <p>{products.title}</p>
        <p>{products.description}</p>
        <p>{products.retailPrice}</p>
        <p>{products.wholesalePrice}</p>
        <p>{products.qtyAvailable}</p>
        <p>{products.minQuantity}</p>
        <p>{products.delivery}</p>
        <p>{products.reviews}</p>
        </>
    );
}