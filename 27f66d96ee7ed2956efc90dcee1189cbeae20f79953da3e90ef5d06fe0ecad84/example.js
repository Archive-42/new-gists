const Footer = props => {
    return(
         <div className={props.light ? 'light' : 'dark'}>
            <p>{props.content}</p>
         </div>
    );
} 