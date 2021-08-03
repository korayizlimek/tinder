// // test('should renders Not Result')

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import { Cards } from "../views";

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Cards />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     render(<Cards name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Cards, Jenny!");

//   act(() => {
//     render(<Cards name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Cards, Margaret!");
// });
