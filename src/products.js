import image1 from './assets/products/producto1.png';
import image2 from './assets/products/producto2.png';
import image3 from './assets/products/producto3.png';
import image4 from './assets/products/producto4.png';
import image5 from './assets/products/producto5.png';
import image6 from './assets/products/producto6.png';
import image7 from './assets/products/producto7.png';
import image8 from './assets/products/producto8.png';
import {useState, useEffect} from 'react';

export const PRODUCTS = () => {
    const [products, setProducts] = useState([]);
    console.log("hello2");

    useEffect(() => {
        
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => {
          const convertedData = convertFetchedData(data);
          setProducts(convertedData);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        
        });
        
    }, []);

    const convertFetchedData = (data) => {
        const images = {
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8
          };
        return data.map(item => {
            const imageKey = `image${item.id}`;
          return {
            id: item.id,
            productName: item.productName,
            price: item.price,
            productImage: images[imageKey] 
          };
        });
      };

    // return (
    //     <div>
    //         {products.map(product => (
    //             <div ey={product.id}>
    //                 <img src={product.productImage} alt={product.productName} />
    //                 <h3>{product.productName}</h3>+
    //                 <p>Price: ${product.price}</p>
                
    //             </div>
    //         ))}
    //     </div>
    // );
    
    return products; 

} 


// export const PRODUCTS = [
//     {
//         id: 1,
//         productName: "piece 0023",
//         price: 20.0,
//         productImage: image1

//     },
//     {
//         id: 2,
//         productName: "piece 0036",
//         price: 60.0,
//         productImage: image2

//     },
//     {
//         id: 3,
//         productName: "piece 0001",
//         price: 90.0,
//         productImage: image3

//     },
//     {
//         id: 4,
//         productName: "piece 0015",
//         price: 45.0,
//         productImage: image4

//     },
//     {
//         id: 5,
//         productName: "piece 0020",
//         price: 50.0,
//         productImage: image5

//     },
//     {
//         id: 6,
//         productName: "piece 0018",
//         price: 45.0,
//         productImage: image6

//     },
//     {
//         id: 7,
//         productName: "piece 0021",
//         price: 40.0,
//         productImage: image7

//     },
//     {
//         id: 8,
//         productName: "piece 0014",
//         price: 23.0,
//         productImage: image8

//     },
// ]