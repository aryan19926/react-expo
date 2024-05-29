import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, {useState} from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import { PizzaSize } from '@/src/types'
import Button from '@/src/components/Button'
import { useCart } from '@/src/providers/CartProvider'

  const ProductDetailsScreen = () => {
  const { id }=useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const {addItem}=useCart();
  const router=useRouter();

  const product=products.find(p=> p.id.toString() ===id);

  const addtocart=()=>{
    if(!product) return;
    
  addItem(product, selectedSize);
  router.push('/cart')
  }

  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
if(!product)
return(<Text>Not found</Text>);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}}/>
    <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image}/>
    
     <Text style={styles.price}> ${product.price}</Text>
     {/* <Button onPress={addtocart} text="Add to Cart"/> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});


export default ProductDetailsScreen;

