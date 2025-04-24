// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Card from '../servicecard/singlecard';
// import '../servicecard/servicecard.scss';

// import './feature.scss';
// import Feature1 from '../../images/feature1.png';
// import Feature2 from '../../images/feature2.png';
// import Feature3 from '../../images/feature3.png';
// import Feature4 from '../../images/feature4.png';
// import Feature5 from '../../images/feature5.png';
// import Feature6 from '../../images/feature6.png';
// function MultipleItemsSlider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
      
//     return (
//         <>
//             <section className="section-aboutUs w-100 margin-medium-T-B">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-11 col-md-12">
//                             <div className="slider-container">
//                                 <Slider {...settings}>
//                                     <Card
//                                         title="Synergy of expertise"
//                                         description="This is the card description."
//                                         imageUrl={Feature1}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />
//                                     <Card
//                                         title="Innovation- driven Approach"
//                                         description="This is the card description."
//                                         imageUrl={Feature2}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />

//                                     <Card
//                                         title="Practical, hands-on education"
//                                         description="This is the card description."
//                                         imageUrl={Feature3}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />
//                                     <Card
//                                         title="Comprehensive IT solutions"
//                                         description="This is the card description."
//                                         imageUrl={Feature4}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />
//                                     <Card
//                                         title="Unified Brand identity and Vision"
//                                         description="This is the card description."
//                                         imageUrl={Feature5}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />
//                                     <Card
//                                         title="Robust trading infrastructure"
//                                         description="This is the card description."
//                                         imageUrl={Feature6}
//                                         showDescription={false}
//                                         showLink={false}
//                                     />
//                                 </Slider>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default MultipleItemsSlider;
