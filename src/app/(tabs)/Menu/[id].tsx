import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, {useState} from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import { PizzaSize } from '@/src/types'
import Button from '@/src/components/Button'

  const ProductDetailsScreen = () => {
  const { id }=useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  const product=products.find(p=> p.id.toString() ===id);
  const addtocart=()=>{
console.warn('Add To Cart, size is:' +selectedSize);
  }

  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
if(!product)
return(<Text>Not found</Text>);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}}/>
    <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image}/>
    <Text style={styles.subtitle}>Select size</Text>

    <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: size === selectedSize ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: size === selectedSize ? 'black' : 'gray' },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

     <Text style={styles.price}> ${product.price}</Text>
     <Button onPress={addtocart} text="Add to Cart"/>
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

  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});


export default ProductDetailsScreen;

