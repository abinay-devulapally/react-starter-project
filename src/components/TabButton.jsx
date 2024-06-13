export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

// export default function TabButton(props) {
//   function handleClick() {
//     console.log("Hello >>>>");
//   }
//   return (
//     <li>
//       <button onClick={handleClick}>{props.children}</button>
//     </li>
//   );
// }
