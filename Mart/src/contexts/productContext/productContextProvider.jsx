import { useState , useEffect , React } from "react";
import  ProductContext  from "./productcontext"
import { auth, db } from '../../firebase/firebase'
import {  Timestamp, addDoc, collection, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";


 function ProductContextProvider({children}){
    const [details, setDetails] = useState(null);
    const [mode , setMode] = useState('light');
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false)
    const toggleMode = () =>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = 'black'
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
        }
      
      }
      const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
    
      })  

    // ------------------------------------------  -------Add Product--------------------------------------------------------
    const addProduct = async () => {
      if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
        return toast.error('Please fill all fields')
      }
      const productRef = collection(db, "products")
      setLoading(true)
      try {
        await addDoc(productRef, products)
        toast.success("Product Add successfully");
        setTimeout(()=>
          window.location.href='/dashboard'
          , 3000 )
        getProductData()
        closeModal()
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
    }
// -----------------------------------------------------GET PRODUCT ---------------------------------------------------------
    const [product , setProduct] = useState([]);
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(db, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productsArray)
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getProductData();
    }, []);

    // ----------------------------------------------------EDIT PRODUCT ---------------------------------------------------

    const editProduct = async (item) => {
      setProducts(item)
      
      setLoading(true)
      try {
        await setDoc(doc(db , "products" , products.id) , products)
        toast.success("Product Updated successfully");
        setTimeout(()=>
          window.location.href='/dashboard'
          , 3000 )
        getProductData()
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
    }


    return(
        <>
        <ProductContext.Provider value={{details, setDetails , mode , toggleMode, value ,setValue , loading , setLoading, products , setProducts , addProduct ,editProduct ,product}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider