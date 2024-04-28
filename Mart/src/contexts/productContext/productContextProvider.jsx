import { useState , useEffect , React } from "react";
import  ProductContext  from "./productcontext"
import { auth, db } from '../../firebase/firebase'
import {  Timestamp, addDoc, getDocs,deleteDoc,collection, onSnapshot, orderBy, query, setDoc , doc} from 'firebase/firestore';
import { toast } from "react-toastify";
import { where } from "firebase/firestore";


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

      const [isUser , setIsUser] = useState(false);
      const [isAdmin , setIsAdmin] = useState(false);

      const check = async (email) => {
        try {
            const querySnapshotAdmin = await getDocs(query(collection(db, 'admin'), where('email', '==', email)));
            const querySnapshotUser = await getDocs(query(collection(db, 'users'), where('email', '==', email)));

            console.log(querySnapshotUser);


            if (!querySnapshotAdmin.empty) setIsAdmin(true);
            else if (querySnapshotAdmin.empty && !querySnapshotUser.empty) setIsUser(true);

        } catch (error) {
            
            //toast.error("");
        }
    };
      
    
      
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
        toast.success("Product Added successfully");
        console.log(products);
        setTimeout(()=>
          window.location.href='/dashboard'
          , 2000 )
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
      getOrderData();
    }, []);

    // ----------------------------------------------------EDIT PRODUCT ---------------------------------------------------

    const editProduct = (item) => {
      setProducts(item)
    }

    const updateProduct = async (item) => {
      setLoading(true)
      try {
        await setDoc(doc(db, "products", products.id), products);
        toast.success("Product Updated successfully")
        getProductData();
        setLoading(false)
        window.location.href = '/dashboard'

      } catch (error) {
        setLoading(false)
        console.log(error)
      }
      setProducts("")
    }

    //------------------------------------------------------DELETE PRODUCT ----------------------------------------

  const deleteProduct = async(item) => {

    try {
      
      setLoading(true)
      await deleteDoc(doc(db, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
      
    } catch (error) {
      toast.error('Product Deleted Falied')

      setLoading(false)
    }
  }

  //------------------------------------------------------GET ORDER DATA---------------------------------
  const [order , setOrder] = useState([])
  const getOrderData = async() =>{
    setLoading(true);
    try{
      const orderArray = [];
    const result = await getDocs(collection(db , "orders"))
    result.map((docs)=>{
      orderArray.push(docs.data());
      setLoading(false)
    })
    setOrder(orderArray)
    setLoading(false)
    }
    catch(error){
      toast.error(error)
      setLoading(false)

    }
    

  }

  return(
      <>
      <ProductContext.Provider value={{
        isAdmin, isUser, check , mode , toggleMode,
         value ,setValue , loading , setLoading, products , 
         setProducts , addProduct ,editProduct ,product ,
          deleteProduct , updateProduct , order}}>
          {children}
      </ProductContext.Provider>
      </>
  )

}
export default ProductContextProvider