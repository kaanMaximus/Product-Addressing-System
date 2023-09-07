import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Product_CategoryDTO from '../../dataModels/ProductCategoryDTO';
import { Styles } from '../../component/Styles';

const ReadProductCategory: React.FC = () => {
    const [searchKey, setSearchKey] = useState('');
    const [foundProductCategory, setFoundProductCategory] = useState<Product_CategoryDTO | null>(null);
   
    const handleSearchProductCategory = async () => {
        // Simulate fetching data from API
        console.log("fetching bro");
        const fetchedProductCategory: Product_CategoryDTO = {
            Product_Category_Name:'nike'
        };
         // Simulate searching for a product by name
         if (fetchedProductCategory.Product_Category_Name.toLowerCase() === searchKey.toLowerCase()) {
            setFoundProductCategory(fetchedProductCategory);
            
        } else {
            setFoundProductCategory(null);
        }
    };
        return (
            <View style={Styles.container}>
                <Text style={Styles.heading}>Product Category Search</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Enter Product Category Name"
                    onChangeText={setSearchKey}
                    value={searchKey}
                />
                <Button title="Search Product Category" onPress={handleSearchProductCategory} />
                {foundProductCategory && (
                    <View style={Styles.productDetails}>
                         <Text>Yes that Product Category exists.</Text>
                        <Text>Name: {foundProductCategory.Product_Category_Name}</Text>  
                    </View>
                )}
            </View>
        );

                }
export default ReadProductCategory;