
// import './Value.css'

// const Value = () => {
//     return ( 
//         <section className='v-wrapper'>
//             <div className='v-container'>
//                 <div className='v-left'>
//                     <div className='image-container'>
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_ylxsi_ZX_SncZZhTsiKXF0_QTJTA8HNYw&usqp=CAU" alt="Not found" />
//                     </div>
//                 </div>

//                 <div className='v-right'>
//                     <span className='orangeText'>Our Value</span>
//                     <span className='primaryText'>Value We Give To You</span>
//                     <span className='secondaryText'>We always ready to help by providing the best services for you.
//                         <br />
//                         We beleive a good blace to live can make your life better
//                     </span>
//                 </div>

//             </div>
//         </section>
//      );
// }
 
// export default Value;





// import React, { useState } from 'react';
// import{
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
//     AccordionItemState
// } from 'react-accessible-accordion';
// // import "react-accessible-accordion/dist/fancy-example.css";
// import {MdOutlineArrowDropDown} from 'react-icons/md';
// import data from '../../Utils/Accordion';
// import './Value.css';

// const Value = () => {
//   return (
//     <section className="v-wrapper">
//         <div className="paddings innerWidth flexCenter v-container">

//             {/* left  */}
//             <div className="v-left">
//                 <div className="image-container">
//                     <img src="./h1.webp" alt="" />
//                 </div>
//             </div>

//             {/* right  */}
//             <div className="flexColStart v-right">
//                 <span className='orangeText'>Our Value</span>
//                 <span className='primaryText'>Making Living spaces more beautiful</span>
//                 <span className='secondaryText'>With a decade of exp in the real estate and construction we were successfully completed more than 80 projects and fullfill dreams of 200's families</span>

//                 <Accordion className='accordion' allowMultipleExpanded={false}
//                            preExpanded={[0]}>
//                             {

//                                 data.map((item, i)=>
//                                 {
//                                     const [className, setClassName] = useState(null)
//                                     return(
//                                         <AccordionItem className={accordionItem ${className}} key={i} uuid={i}>
//                                             <AccordionItemHeading>
//                                                 <AccordionItemButton className='flexCenter accordionButton'>

//                                                     <AccordionItemState>
//                                                         {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
//                                                     </AccordionItemState>

//                                                     <div className="flexCenter icon">
//                                                         {item.icon}
//                                                     </div>
//                                                     <span className='primaryText'>
//                                                         {item.heading}
//                                                     </span>

//                                                     <div className="flexCenter icon">
//                                                         <MdOutlineArrowDropDown size={20}/>
//                                                     </div>
//                                                 </AccordionItemButton>
//                                             </AccordionItemHeading>

//                                             <AccordionItemPanel>
//                                                 <p className="secondaryText">
//                                                     {item.detail}
//                                                 </p>
//                                             </AccordionItemPanel>
//                                         </AccordionItem>
//                                     )
//                                 })
                           
//                             }
//                 </Accordion>
//             </div>

//         </div>
//     </section>
//   )
// }

// export default Value;






import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../Utils/Accordion';
import './Value.css';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">

                {/* left  */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="data:image/jpeg;base64,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" alt="Not Found" />
                    </div>
                </div>

                {/* right  */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Making Living spaces more beautiful</span>
                    <span style={{color: "black"}}>With a decade of exp in the real estate and construction we were successfully completed more than 80 projects and fulfill dreams of 200's families</span>

                    <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                        {data.map((item, i) => <AccordionItemWrapper key={i} item={item} />)}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

const AccordionItemWrapper = ({ item }) => {
    const [className, setClassName] = useState(null);

    const handleToggle = (expanded) => {
        setClassName(expanded ? "expanded" : "collapsed");
    };

    return (
        <AccordionItem className={`accordionItem ${className}`}>
            <AccordionItemHeading>
                <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                        {({ expanded }) => {
                            handleToggle(expanded);
                            return null; // You can't return a component directly here
                        }}
                    </AccordionItemState>
                    <div className="flexCenter icon">
                        {item.icon}
                    </div>
                    <span className='primaryText'>
                        {item.heading}
                    </span>
                    <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p style={{color: "black"}}>
                    {item.detail}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    );
};

export default Value;
