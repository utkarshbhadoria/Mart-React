/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Outlet } from 'react-router-dom'
import { auth } from '../../firebase/firebase';
import ProductContext from '../../contexts/productContext/productcontext';
import { db } from '../../firebase/firebase';
import { collection, where } from 'firebase/firestore';









export default function Navigation() {
  const [open, setOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart)//to get num of cartItems

  const user = JSON.parse(localStorage.getItem('user'))
  
  

  const { isAdmin, isUser, check } = useContext(ProductContext)
  console.log(isAdmin);
  useEffect(() => {
    try {
      if (user) {
        check(user.user.email);
      }
    }
    catch { }
  }, [user]);

  const logout = () => {
    localStorage.clear('user'); // Clear user data


    auth.signOut()
    window.location.href = '/signin'


  }

  return (
    // new Nav
    <>
      <div className="header-top">
        <div className="content-margins">
          <div className="row">
            <div className="col-md-5 hidden-xs hidden-sm">
              <div className="entry"><b>contact us:</b> <Link to="tel:+35235551238745">+3  (523) 555 123 8745</Link></div>
              <div className="entry"><b>email:</b> <Link to="mailto:office@exzo.com">office@exzo.com</Link></div>
            </div>
            <div className="col-md-7 col-md-text-right">
              {isAdmin || isUser ?
                <div className="entry"><Link onClick={logout} className="open-popup" ><b>logout</b></Link></div> :
                <div className="entry"><Link to="signin" className="open-popup" data-rel="1"><b>login</b></Link>&nbsp; or &nbsp;<Link to="signup" className="open-popup" data-rel="2"><b>register</b></Link></div>
              }
              <div className="entry hidden-xs hidden-sm"><Link to="#"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></div>
              {isUser ?
                <div className="entry hidden-xs hidden-sm cart">
                  <Link to="/cart">
                    <span className="cart-icon">
                      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      <span className="cart-label">{cartItems.length}</span>
                    </span>
                  </Link>
                </div> : " "
              }
              {isAdmin ?
                <div className="entry hidden-xs hidden-sm">
                  <Link to="/dashboard" className="col-md-9 col-md-text-right">
                    <span className="sr-only"></span>
                    <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div> :
                <div className="entry hidden-xs hidden-sm">
                  <Link to="/" className="col-md-9 col-md-text-right">
                    <span className="sr-only"></span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

              }
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="content-margins">
          <div className="row">
            <div className="col-xs-3 col-sm-1">
              <Link id="logo" to="index1.html"><img src="img/logo-2.png" alt="" /></Link>
            </div>
            <div className="col-xs-9 col-sm-11 text-right">
              <div className="nav-wrapper">
                <div className="nav-close-layer"></div>
                <nav>
                  <ul>
                    <li className="active">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to="/about">about us</Link>
                    </li>
                    <li className="megamenu-wrapper">
                      <Link to="products1.html">products</Link>
                      <div className="menu-toggle"></div>
                      <div className="megamenu">
                        <div className="links">
                          <Link className="active" to="products1.html">Products Landing 1</Link>
                          <Link to="products2.html">Products Landing 2</Link>
                          <Link to="products3.html">Products Landing 3</Link>
                          <Link to="product.html">Product Detail</Link>
                        </div>
                        <div className="content">
                          <div className="row nopadding">
                            <div className="col-xs-6">
                              <div className="product-shortcode style-5">
                                <div className="product-label green">best price</div>
                                <div className="icons">
                                  <Link className="entry"><i className="fa fa-check" aria-hidden="true"></i></Link>
                                  <Link className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                  <Link className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                                </div>
                                <div className="preview">
                                  <div className="swiper-container" data-loop="1">
                                    <div className="swiper-button-prev style-1"></div>
                                    <div className="swiper-button-next style-1"></div>
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <img src="img/product-59.jpg" alt="" />
                                      </div>
                                      <div className="swiper-slide">
                                        <img src="img/product-61.jpg" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-animate">
                                  <div className="title">
                                    <div className="shortcode-rate-wrapper">
                                      <div className="rate-wrapper align-inline">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                      </div>
                                    </div>
                                    <div className="h6 animate-to-green"><Link to="product.html">modern beat nine</Link></div>
                                  </div>
                                  <div className="description">
                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor Link malesuada</div>
                                  </div>
                                  <div className="price">
                                    <div className="simple-article size-4 dark">$630.00</div>
                                  </div>
                                </div>
                                <div className="preview-buttons">
                                  <div className="buttons-wrapper">
                                    <Link className="button size-2 style-2" to="product.html">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-1.png" alt=""/></span>
                                        <span className="text">Learn More</span>
                                      </span>
                                    </Link>
                                    <Link className="button size-2 style-3" to="#">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-3.png" alt=""/></span>
                                        <span className="text">Add To Cart</span>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6">
                              <div className="product-shortcode style-5">
                                <div className="product-label green">best price</div>
                                <div className="icons">
                                  <Link className="entry"><i className="fa fa-check" aria-hidden="true"></i></Link>
                                  <Link className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                  <Link className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                                </div>
                                <div className="preview">
                                  <div className="swiper-container" data-loop="1">
                                    <div className="swiper-button-prev style-1"></div>
                                    <div className="swiper-button-next style-1"></div>
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <img src="img/product-60.jpg" alt="" />
                                      </div>
                                      <div className="swiper-slide">
                                        <img src="img/product-61.jpg" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-animate">
                                  <div className="title">
                                    <div className="shortcode-rate-wrapper">
                                      <div className="rate-wrapper align-inline">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                      </div>
                                    </div>
                                    <div className="h6 animate-to-green"><Link to="product.html">modern beat nine</Link></div>
                                  </div>
                                  <div className="description">
                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor Link malesuada</div>
                                  </div>
                                  <div className="price">
                                    <div className="simple-article size-4 dark">$630.00</div>
                                  </div>
                                </div>
                                <div className="preview-buttons">
                                  <div className="buttons-wrapper">
                                    <Link className="button size-2 style-2" to="product.html">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-1.png" alt=""/></span>
                                        <span className="text">Learn More</span>
                                      </span>
                                    </Link>
                                    <Link className="button size-2 style-3" to="#">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-3.png" alt=""/></span>
                                        <span className="text">Add To Cart</span>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="services1.html">Services</Link>
                    </li>
                    <li>
                      <Link to="gallery1.html">gallery</Link>
                    </li>
                    <li className="megamenu-wrapper">
                      <Link to="#">Pages</Link>
                      <div className="menu-toggle"></div>
                      <div className="megamenu">
                        <div className="links">
                          <Link className="active" to="checkout1.html">Checkout 1</Link>
                          <Link to="checkout2.html">Checkout 2</Link>
                          <Link to="cart.html">Cart</Link>
                          <Link to="elements.html">Elements</Link>
                        </div>
                        <div className="content">
                          <div className="row nopadding">
                            <div className="col-xs-6">
                              <div className="product-shortcode style-5">
                                <div className="product-label green">best price</div>
                                <div className="icons">
                                  <Link className="entry"><i className="fa fa-check" aria-hidden="true"></i></Link>
                                  <Link className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                  <Link className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                                </div>
                                <div className="preview">
                                  <div className="swiper-container" data-loop="1">
                                    <div className="swiper-button-prev style-1"></div>
                                    <div className="swiper-button-next style-1"></div>
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <img src="img/product-61.jpg" alt="" />
                                      </div>
                                      <div className="swiper-slide">
                                        <img src="img/product-59.jpg" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-animate">
                                  <div className="title">
                                    <div className="shortcode-rate-wrapper">
                                      <div className="rate-wrapper align-inline">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                      </div>
                                    </div>
                                    <div className="h6 animate-to-green"><Link to="product.html">modern beat nine</Link></div>
                                  </div>
                                  <div className="description">
                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor Link malesuada</div>
                                  </div>
                                  <div className="price">
                                    <div className="simple-article size-4 dark">$630.00</div>
                                  </div>
                                </div>
                                <div className="preview-buttons">
                                  <div className="buttons-wrapper">
                                    <Link className="button size-2 style-2" to="product.html">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-1.png" alt=""/></span>
                                        <span className="text">Learn More</span>
                                      </span>
                                    </Link>
                                    <Link className="button size-2 style-3" to="#">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-3.png" alt=""/></span>
                                        <span className="text">Add To Cart</span>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6">
                              <div className="banner-shortcode style-3 rounded-image text-center">
                                <div className="valign-middle-cell">
                                  <div className="valign-middle-content">
                                    <div className="simple-article size-5 light transparent uppercase col-xs-b5"><span className="color">30%</span>DISCOUNT</div>
                                    <h3 className="h3 light col-xs-b15">all models from relax seriece</h3>
                                    <div className="simple-article size-3 light transparent col-xs-b30">Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac</div>
                                    <Link className="button size-2 style-1" to="#">
                                      <span className="button-wrapper">
                                        <span className="icon"><img src="img/icon-1.png" alt=""/></span>
                                        <span className="text">learn more</span>
                                      </span>
                                    </Link>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><Link to="contact1.html">contact</Link></li>
                  </ul>
                  <div className="navigation-title">
                    Navigation
                    <div className="hamburger-icon active">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="header-bottom-icon toggle-search"><i className="fa fa-search" aria-hidden="true"></i></div>
              <div className="header-bottom-icon visible-rd"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
              <div className="header-bottom-icon visible-rd">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <span className="cart-label">550</span>
              </div>
            </div>
          </div>
          <div className="header-search-wrapper">
            <div className="header-search-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                    <form>
                      <div className="search-submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="submit" />
                      </div>
                      <input className="simple-input style-1" type="text" value="" placeholder="Enter keyword" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="button-close"></div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
