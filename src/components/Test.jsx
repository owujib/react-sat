import React from 'react';

// export default function Test() {
//   return (
//     <div>
//       <h1>This is a test component</h1>
//     </div>
//   );
// }

//===== OR ======//

function Test() {
  return (
    <div>
      <h1 className="display-1">This is a test component</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
    </div>
  );
}

export default Test;

export function Card(props) {
  console.log(props.elements);
  return (
    <div className="card-component">
      <div className="img-box">
        <img src={props.elements.img} width="100" height="100" alt="card img" />
      </div>
      <div className="card-body">
        <h4>{props.elements.title}</h4>
        <p>{props.elements.description}</p>
        <a href={props.elements.link}>this is my card link </a>
      </div>
    </div>
  );
}
