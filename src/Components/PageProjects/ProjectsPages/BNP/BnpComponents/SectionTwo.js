import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const SectionTwo = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // The lower the slower

  return (
    <div>
      {}
      <section class="counters" ref={myRef}>
        <div>
          <div class="counter" data-target="600">
            {myElementIsVisible
              ? counters.forEach((counter) => {
                  const updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;

                    // Lower inc to slow and higher to slow
                    const inc = target / speed;

                    // console.log(inc);
                    // console.log(count);

                    // Check if target is reached
                    if (count < target) {
                      // Add inc to count and output in counter
                      counter.innerText = count + inc;
                      // Call function every ms
                      setTimeout(updateCount, 0);
                    } else {
                      counter.innerText = target;
                    }
                  };
                  updateCount();
                })
              : "0"}
          </div>
          <h3>Subscribers</h3>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
