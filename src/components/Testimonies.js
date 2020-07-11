import React, { useRef } from "react";

function Testimonies(text) {
    
  return (
        { text.map((i, k) => (
            <div className="w-full sm:w-1/3 max-w-xs p-4 sm:pl-0 z-10 animated FadeUp">
        <p className="before-01">
          {i}
        </p>
      </div>
        ))}     
    //   <div className="w-full sm:w-1/3 max-w-xs p-4 sm:px-2 z-10 animated FadeUp  sm:anim-delay-05">
    //     <p className="before-02">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
    //       soluta natus cum qui facilis repudiandae sapiente modi tempore dolores
    //       commodi!
    //     </p>
    //   </div>
    //   <div className="w-full sm:w-1/3 max-w-xs p-4 sm:pr-0 z-10 animated FadeUp  sm:anim-delay-06">
    //     <p className="before-03">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
    //       soluta natus cum qui facilis repudiandae sapiente modi tempore dolores
    //       commodi!
    //     </p>
    //   </div>
  );
};

export default Testimonies;
