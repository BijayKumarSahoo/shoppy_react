import classes from './Products.module.css';
import ProductItem from "./ProductItem";

const Products = (props) => {

    const DUMMY_PRODUCTS = [
        {
            id: 'p1',
            name: 'product1',
            details: 'details1',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 20,
        },
        {
            id: 'p2',
            name: 'product2',
            details: 'details2',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 69,
        },
        {
            id: 'p3',
            name: 'product3',
            details: 'details3',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 99,
        },
        {
            id: 'p4',
            name: 'product4',
            details: 'details4',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 49,
        },
        {
            id: 'p5',
            name: 'product5',
            details: 'details5',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 57,
        }, {
            id: 'p6',
            name: 'product6',
            details: 'details6',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 29,
        },
        {
            id: 'p7',
            name: 'product7',
            details: 'details7',
            imageAddress: '../../assets/prod_dummy.jpg',
            price: 25,
        }
    ];

    return (
        <div className={classes['flex-container']}>
            {DUMMY_PRODUCTS.map(prod => (
                <div className={classes['flex-item']} key={prod.id}>
                    <ProductItem name={prod.name} price={prod.price} details={prod.details} id={prod.id} imageAddress={prod.imageAddress}></ProductItem>
                </div>
            ))
            }
        </div>


    )
}

export default Products;