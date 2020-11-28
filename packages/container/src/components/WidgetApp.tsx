import React, { useRef, useEffect } from "react";
import { mount } from "widget/WidgetApp";

export default () => {
  const ref = useRef(null);

  // Pass in our ref and render it once.
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
