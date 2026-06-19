import React from 'react'
import data from './data.json'

function Photos() {
  return (
    <div className='Gallary'>
        {
            data.map(data => {
                return(
                    <div className='box-container' key={ data }>
                    {
                        data.items.map(items => {
                            return(
                                <div className='galary-box' key={items.id || items.video}>
                                   {items.image && (
                                     <img src={items.image} alt="" />
                                   )}
                                   {items.video && (
                                     <video src={items.video} controls autoPlay muted loop width="100%" />
                                   )}
                                </div>
                            )                      
                    })
                    }
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Photos
















// import React from 'react';
// import data from './data.json';

// function Photos() {
//   return (
//     <div className='Gallary'>
//       {
//         data.map((group, index) => (
//           <div className='box-container' key={index}>
//             {
//               group.items.map(item => (
//                 <div className='galary-box' key={item.id}>
//                   {
//                     item.image ? (
//                       <img src={item.image} alt="" />
//                     ) : item.video ? (
//                       <video 
//                         src={item.video} 
//                         controls 
//                         width="100%" 
//                         height="auto"
//                       />
//                     ) : null
//                   }
//                 </div>
//               ))
//             }
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Photos;








// import React from 'react'
// import data from './data.json'

// function Photos() {
//   return (
//     <div className='Gallary'>
//         {
//             data.map(data => {
//                 return(
//                     <div className='box-container' key={ data }>
//                     {
//                         data.items.map(items => {
//                             return(
//                                 <div className='galary-box' key={items.id}>
//                                    <img src={items.image} alt="" />
//                                 </div>
//                             )                      
//                     })
//                     }
//                     </div>
//                 )
//             })
//         }
      
//     </div>
//   )
// }

// export default Photos
