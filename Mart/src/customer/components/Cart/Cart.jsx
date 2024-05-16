import React, { useContext, useState, useEffect } from 'react'
import Layout from '../Layout';
import ProductContext from '../../../contexts/productContext/productcontext';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';
import { TrashIcon } from "@heroicons/react/24/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";


function Cart() {

  const context = useContext(ProductContext)
  const { mode, product } = context;

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const cartLength = cartItems.length;

  const [totalAmount, setTotalAmount] = useState(null)
  const [quantity , setQuantity] = useState(1)

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => {
      temp = temp + parseInt(item.price)
    });
    setTotalAmount(temp);

  }, [cartItems])

  const shipping = parseInt(50);
  const grandTotal = shipping + totalAmount

  // add to cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success('deleted from cart');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  // Integrating payment gateway
  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buynow = async () => {


    // validation
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

      })
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
    console.log(addressInfo)

    var options = {
      key: "",
      key_secret: "",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "Mart",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response)
        toast.success('Payment Successful')

        const paymentId = response.razorpay_payment_id

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US", {
            month: " short",
            day: "2-digit",
            year: "numeric"
          }
          ),
          email: JSON.parse(localStorage.getItem('user')).user.email,
          userid: JSON.parse(localStorage.getItem('user')).user.uid,
          paymentId
        }

        try {
          const result = addDoc(collection(db, "orders"), orderInfo)
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay)

  }



  return (
    <Layout >

      <>
        <div className="header-empty-space"></div>

        <div className="container">
          <div className="empty-space col-xs-b15 col-sm-b30"></div>
          <div className="breadcrumbs">
            <Link to={"/"}>home</Link>
            <Link to={" "}>shopping cart</Link>
          </div>
          <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
          <div className="text-center">
            <div className="simple-article size-3 grey uppercase col-xs-b5">shopping cart</div>
            <div className="h2">check your products</div>
            <div className="title-underline center"><span></span></div>
          </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        {cartItems ?
          <div className="container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th style={{ width: '150px' }}></th>
                  <th>product name</th>
                  <th style={{ width: '100px' }}>price</th>
                   
                  <th style={{ width: '150px' }}>total</th>
                  <th style={{ width: '70px' }}></th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map((item, index) =>{
                const { title, price, description, imageUrl, category } = item
                return(
                  <tr key={index}>
                        <td data-title=" ">
                            <img src={imageUrl} alt=""/>
                        </td>
                        <td data-title=" "><h6 class="h6"><a href="#">{title}</a></h6></td>
                        <td data-title="Price: ">{price}</td>
                        <td data-title="Total:">{totalAmount} </td>
                        <td data-title="">
                          <button onClick={()=>deleteCart(item)}>
                            <TrashIcon className="h-6 w-6 text-gray-500" />
                          </button>
                            
                        </td>
                    </tr>
                  
                )
              }
              )}
              </tbody>
            </table>
            <div className="empty-space col-xs-b35"></div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{shipping}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
                </div>
              </div>
              {/* <Modal  /> */}
              <Modal 
              name={name} 
              address={address} 
              pincode={pincode} 
              phoneNumber={phoneNumber} 
              setName={setName} 
              setAddress={setAddress} 
              setPincode={setPincode} 
              setPhoneNumber={setPhoneNumber} 
              buyNow={buynow} 
               />
            </div>

            
            <div className="empty-space col-xs-b35 col-md-b70"></div>
            
            <div className="empty-space col-xs-b35 col-md-b70"></div>
            <div className="empty-space col-xs-b35 col-md-b70"></div>
          </div> :
          <div className="mb-10 text-center text-gray-700 text-1xl">
            <h3>No Items Added in the Cart</h3>
          </div>
        } 
      </>
    </Layout>
  )
}

export default Cart