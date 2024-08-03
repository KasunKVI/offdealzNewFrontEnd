import React, { useState } from 'react';
import styles from '../../assets/css/sideFilter.module.css';

const SideFilter: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [brands, setBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);

    const categories = ['Laptop', 'Mobile', 'Bike', 'Mic', 'Car'];

    // Example brands data - replace this with actual data fetching logic
    const brandsData: { [key: string]: string[] } = {
        Laptop: ['Dell', 'HP', 'Lenovo', 'Apple'],
        Mobile: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi'],
        Bike: ['Yamaha', 'Honda', 'Suzuki', 'Kawasaki'],
        Mic: ['Shure', 'Rode', 'Blue', 'Audio-Technica'],
        Car: ['Toyota', 'Honda', 'Ford', 'BMW'],
    };

    const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setBrands(brandsData[category] || []);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setPriceRange([0, value]);
    };

    return (
        <aside className={styles.sideFilter}>
            <div className={styles.filterBox}>
                <h3 className={styles.filterTitle}>Filter By</h3>

                {/* Category Filter */}
                <div className={styles.filterItem}>
                    <h4 className={styles.filterItemTitle}>Category</h4>
                    <select onChange={handleCategorySelect} className={styles.filterSelect}>
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort By Filter */}
                <div className={styles.filterItem}>
                    <h4 className={styles.filterItemTitle}>Sort By</h4>
                    <select className={styles.filterSelect}>
                        <option>Best Match</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                    </select>
                </div>

                {/* Brand Filter */}
                {selectedCategory && (
                    <div className={styles.filterItem}>
                        <h4 className={styles.filterItemTitle}>Brand</h4>
                        <select className={styles.filterSelect}>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Price Filter */}
                <div className={styles.filterItem}>
                    <h4 className={styles.filterItemTitle}>Price Range</h4>
                    <div className={styles.priceRange}>
                        <span>Rs . {priceRange[0]}</span>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            value={priceRange[1]}
                            onChange={handlePriceChange}
                            className={styles.rangeInput}
                        />
                        <span>Rs . {priceRange[1]}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideFilter;
