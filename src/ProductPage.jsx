import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../public/products.js'; // Adjust the path to your data
import { Star,Plus, Minus  } from 'lucide-react';

const ProductPage = ({ handleCartOpen, addToCart}) => {
    const { id } = useParams();
    const product = productData.find((p) => p.id == id);
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(false);
    
    const handleAdd = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };
    
    const handleMinus = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Prevents going below 0
    };
    

    const handleSizeClick = useCallback((selectedSize) => {
        setSelected(true);
        setSize(selectedSize);
        console.log('Selected size:', selectedSize);
    }, []);

    const handleAddToCart = () => {
        if (selected && quantity > 0) {
            const itemToAdd = {
                ...product,
                selectedSize: size,
                quantity: quantity
            };
            addToCart(itemToAdd);
        }
    };

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className='w-full bg-white h-full pt-10'>
            <div className="bg-white py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4 ">
                            <div className="h-[460px] rounded-lg bg-gray-300 mb-4 ">
                                <img className="w-full h-full object-cover" src={product.images.mainImage} alt="Product Image"/>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-xl font-semibold uppercase text-black mb-2">{product.name}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="text-xl font-medium text-[#1c1c1ca6]">${product.price}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-medium capitalize text-black">size</span>
                                <div className="flex items-center mt-2">
                                    {product.sizes.map((sizeOption, index) => (
                                        <button
                                            key={index}
                                            className={`SelectSize border border-solid text-sm border-black text-black py-2 px-3 font-medium mr-2  ${size === sizeOption ? 'bg-black text-white' : 'bg-white'} ${product.status === 'sold out' ? 'size-disabled' : ''}`}
                                            onClick={() => handleSizeClick(sizeOption)}
                                            disabled={product.status === 'sold out'}
                                        >
                                            {sizeOption}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-medium capitalize text-black">Quantity</span>
                                <div className="flex items-center mt-2 gap-0">
                                        <button id='minus' className='text-black py-2 px-3 border border-solid hover:bg-gray-100' onClick={handleMinus}><Minus/></button>
                                        <div className='p-2 px-5 bg-white text-black border-y'>{quantity}</div>
                                        <button onClick={handleAdd} id='add' className='text-black py-2 px-3 border border-solid hover:bg-gray-100'><Plus/></button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 -mx-2 mb-4">
                                <div className="px-2">
                                    <button className="w-full bg-black text-white py-3 px-4 font-medium uppercase" disabled={!selected} onClick={handleAddToCart} >Add to Cart</button>
                                </div>
                                <div className="px-2">
                                    <button className="w-full bg-transparent border-solid border border-black text-black py-3 px-4 font-medium flex items-center justify-center gap-4 uppercase">
                                        <Star strokeWidth={'1px'}/>
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-black">Product Description:</span>
                                <p className="text-black text-sm mt-2">
                                    {product.description}
                                    {/* Lorem ipsum... (rest of the description) */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;