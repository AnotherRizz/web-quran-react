const Button = (props) => {
   const {
     variant = "bg-sky-500 w-full",
     type = "button",
     children = "Default Text",
     onClick = ()=>{},  } = props;
 
   return (
     <button
       className={`h-10  font-semibold rounded-md ${variant} text-white`}
       type={type}
       onClick={onClick}
       >
       {children}
     </button>
   );
 };
 
 export default Button;
 