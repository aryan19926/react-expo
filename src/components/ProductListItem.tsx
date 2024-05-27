import { StyleSheet ,Text, View, Image, Pressable } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';


export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
type ProductlistItemProps={
    product:Product;
}

const ProductListItem= ({product}:ProductlistItemProps)=>{
return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
      <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image}
       resizeMode="contain"/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> $ {product.price}</Text>
      </Pressable>
      </Link>);
}
export default ProductListItem
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    maxWidth:'50%',
    flex:1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price:{
      color:Colors.light.tint,
      fontWeight:'bold',
  },
  image:{
       width:'100%' ,
       aspectRatio:1 , 
      
  },
});
