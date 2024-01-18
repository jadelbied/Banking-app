import { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '1' },
  { name: 'Features', href: '1' },
  { name: 'Marketplace', href: '1' },
  { name: 'Company', href: '1' },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Fragment>
      <div id="overlayer"></div>
  <div className="loader">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>


  <div className="site-wrap">

    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
   
    
    <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo"><a href="index.html" className="h2 mb-0">Finances<span className="text-primary">.</span> </a></h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li><a href="#home-section" className="nav-link">Home</a></li>
                <li className="has-children">
                  <a href="#about-section" className="nav-link">About Us</a>
                  <ul className="dropdown">
                    <li><a href="#team-section" className="nav-link">Team</a></li>
                    <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                    <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                    <li><a href="#gallery-section" className="nav-link">Gallery</a></li>
                    <li><a href="#services-section" className="nav-link">Services</a></li>
                    <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                    <li className="has-children">
                      <a href="#">More Links</a>
                      <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                
                <li><a href="#blog-section" className="nav-link">Blog</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
                <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-facebook"></span></a></li>
                <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-twitter"></span></a></li>
                <li className="social"><a href="#contact-section" className="nav-link"><span className="icon-linkedin"></span></a></li>
              </ul>
            </nav>
          </div>


          <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a></div>

        </div>
      </div>
      
    </header>

  
     
    <div className="site-blocks-cover overlay" style="background-image: url(assets/images/hero_2.jpg);" data-aos="fade" id="home-section">

      <div className="container">
        <div className="row align-items-center justify-content-center">

          
          <div className="col-md-10 mt-lg-5 text-center">
            <div className="single-text owl-carousel">
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Banking Solutions</h1>
                <p className="mb-5 desc"  data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo.</p>
                <div data-aos="fade-up" data-aos-delay="100">
                  <a href="#" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                </div>
              </div>

              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Financing Solutions</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo.</p>
                <div data-aos="fade-up" data-aos-delay="100">
                  <a href="#" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                </div>
              </div>

              <div classNameName="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Savings Accounts</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo.</p>
                <div data-aos="fade-up" data-aos-delay="100">
                  <a href="#" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                </div>
              </div>

            </div>
          </div>
            
        </div>
      </div>

      <a href="#next" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
      </a>
    </div>  


    <div className="site-section cta-big-image" id="about-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src="assets/images/img_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            
            <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>

            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
          </div>
        </div>    
        
      </div>  
    </div>

    <div className="site-section" id="next">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="">
            <img src="assets/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Money Savings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Online Shoppings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
            <h3 className="card-title">Credit / Debit Cards</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src="assets/images/about_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <h3 className="h3 mb-4 text-black">Banking Solutions Is Our Priority</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              
            </div>
              
            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
              
            </div>

            
            
            
          </div>
        </div>
      </div>
    </div>

    

    
    <section className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Meet Team</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>
        <div className="row">
          

          
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_1.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Accountant</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_2.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Dave Simpson</h3>
                <span className="position">Bank Teller</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src="assets/images/person_3.jpg" alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Ben Thompson</h3>
                <span className="position">Bank Teller</span>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>

    <section className="site-section" id="gallery-section" data-aos="fade">
      

      <div className="container">

        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Gallery</h2>
          </div>
        </div>

        
        
        <div id="posts" className="row no-gutter">
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_1.jpg" className="item-wrap fancybox">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_1.jpg"/>
            </a>
          </div>
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_2.jpg"/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_3.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_3.jpg"/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">

            <a href="assets/images/img_4.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_4.jpg"/>
            </a>

          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_5.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_5.jpg"/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_1.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_1.jpg"/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_2.jpg"/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_3.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_3.jpg"/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_4.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_4.jpg"/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_5.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_5.jpg"/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_1.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_1.jpg"/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="assets/images/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src="assets/images/img_2.jpg"/>
            </a>
          </div>

          
        </div>
      </div>

    </section>


    <section className="site-section">
      <div className="container">

        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">How It Works</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas fugiat molestiae eligendi repudiandae error?</p>
          </div>
        </div>
        
        <div className="row align-items-lg-center" >
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">

            <div className="owl-carousel slide-one-item-alt">
              <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid"/>
              <img src="assets/images/img_2.jpg" alt="Image" className="img-fluid"/>
              <img src="assets/images/img_3.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="custom-direction">
              <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace"></span></span></a><a href="#" className="custom-next"><span><span className="icon-keyboard_backspace"></span></span></a>
            </div>

          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            
            <div className="owl-carousel slide-one-item-alt-text">
              <div>
                <h2 className="section-title mb-3">01. Online Applications</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                  neque voluptas?</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">02. Get an approval</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?</p>
                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">03. Card delivery</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente labore eius ullam? Iusto?</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>

    
    

    <section className="site-section border-bottom bg-light" id="services-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Services</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione animi tempora sint hic quod!</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Credit Card</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo beatae minus incidunt voluptates?</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/002-rich.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Income Monitoring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio veritatis aperiam consequuntur qui.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/003-notes.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Insurance Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore suscipit distinctio inventore doloribus deserunt!</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Financial Investment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio voluptatibus repellat hic officia quibusdam!</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4">
              <div className="unit-4-icon">
                <img src="assets/images/flaticon-svg/svg/005-megaphone.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
              </div>
              <div>
                <h3>Financial Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iusto eaque velit saepe nobis ipsa?</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="site-section testimonial-wrap" id="testimonials-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Happy Customers</h2>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
          <div>
            <div className="testimonial">
              
              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti tenetur ad perspiciatis quam atque eius quia suscipit repudiandae animi voluptatem.&rdquo;</p>
              </blockquote>

              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src="assets/images/person_1.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>John Smith</p>
              </figure>
            </div>
          </div>
          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates exercitationem ut totam distinctio magnam quisquam, unde iure. Labore!.&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src="assets/images/person_2.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Christine Aguilar</p>
              </figure>
              
            </div>
          </div>

          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi odio nihil officia quasi nostrum, ipsa est? Culpa, ullam dolorem!&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src="assets/images/person_3.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Robert Spears</p>
              </figure>

              
            </div>
          </div>

          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam tempora beatae animi in sapiente quos maiores ex aut.&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src="assets/images/person_1.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Bruce Rogers</p>
              </figure>

            </div>
          </div>

        </div>
    </section>

    <section className="site-section bg-light" id="pricing-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title mb-3">Pricing</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="pricing">
              <h3 className="text-center text-black">Basic</h3>
              <div className="price text-center mb-4 ">
                <span><span>$47</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li className="remove">Lorem ipsum dolor sit amet</li>
                <li className="remove">Consectetur adipisicing elit</li>
                <li className="remove">Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 pricing-popular" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing">
              <h3 className="text-center text-black">Premium</h3>
              <div className="price text-center mb-4 ">
                <span><span>$200</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li className="remove">Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing">
              <h3 className="text-center text-black">Professional</h3>
              <div className="price text-center mb-4 ">
                <span><span>$750</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="row site-section" id="faq-section">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title">Frequently Ask Questions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div className="col-lg-6">

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">Where are you from?</h3>
              <p>Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What is your opening time?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="site-section" id="about-section">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src="assets/images/img_4.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            

            <div className="row">

              
              
              <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-primary flaticon-head"></span></div>
                  <div>
                    <h3>Bank Loan</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-primary flaticon-smartphone"></span></div>
                  <div>
                    <h3>Banking Consulation </h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>


            
          </div>
        </div>

        
      </div>
    </section>
  
    
    

    <section className="site-section" id="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Blog</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="h-entry">
              <a href="single.html">
                <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Banking is good for business? Why?</a></h2>
              <div className="meta mb-4">Ham Brook <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="h-entry">
              <a href="single.html">
                <img src="assets/images/img_4.jpg" alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Banking is good for business? Why?</a></h2>
              <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="h-entry">
              <a href="single.html">
                <img src="assets/images/img_3.jpg" alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Banking is good for business? Why?</a></h2>
              <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div> 
          </div>
          
        </div>
      </div>
    </section>

   


    <section className="site-section bg-light" id="contact-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div className="row mb-5">
          


          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-room d-block h2 text-primary"></span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-phone d-block h2 text-primary"></span>
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              <span className="icon-mail_outline d-block h2 text-primary"></span>
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">

            

            <form action="#" className="p-5 bg-white">
              
              <h2 className="h4 text-black mb-5">Contact Form</h2> 

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white"/>
                </div>
              </div>

  
            </form>
          </div>
          
        </div>
      </div>
    </section>

    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div className="col-md-3 ml-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#about-section" className="smoothscroll">Terms</a></li>
                  <li><a href="#about-section" className="smoothscroll">Policy</a></li>
                  <li><a href="#about-section" className="smoothscroll">About Us</a></li>
                  <li><a href="#services-section" className="smoothscroll">Services</a></li>
                  <li><a href="#testimonials-section" className="smoothscroll">Testimonials</a></li>
                  <li><a href="#contact-section" className="smoothscroll">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-social">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post" className="footer-subscribe">
              <div className="input-group mb-3">
                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              
              <p>Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
              
        
            </div>
          </div>
          
        </div>
      </div>
    </footer>

  </div> 

  <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/jquery-ui.js"></script>
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/jquery.countdown.min.js"></script>
  <script src="assets/js/jquery.easing.1.3.js"></script>
  <script src="assets/js/aos.js"></script>
  <script src="assets/js/jquery.fancybox.min.js"></script>
  <script src="assets/js/jquery.sticky.js"></script>
  <script src="assets/js/isotope.pkgd.min.js"></script>

  
  <script src="assets/js/main.js"></script>

    </Fragment>
  );
}
