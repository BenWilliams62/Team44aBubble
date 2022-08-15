import styles from "./textInput.module.css";
import {validInputColor} from '../../logic/color';

export const TextInput = (props) => {


    return (
        <div>
            {props.label ?
            <>
                <label htmlFor={props.name}>
                    {props.name}
                </label>
                <br />
            </>:<></>}


            <div className={props.wide ? styles.containerWide : styles.container} style={{borderColor: validInputColor(props.valid)}}>

                {props.search ? 
                <div className={styles.svgContainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4633 12.5239C10.3085 13.4476 8.84376 14 7.25 14C3.52208 14 0.5 10.9779 0.5 7.25C0.5 3.52208 3.52208 0.5 7.25 0.5C10.9779 0.5 14 3.52208 14 7.25C14 8.84376 13.4476 10.3085 12.5239 11.4633L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L11.4633 12.5239ZM2 7.25C2 4.3505 4.35051 2 7.25 2C10.1495 2 12.5 4.3505 12.5 7.25C12.5 8.66445 11.9406 9.94826 11.0311 10.8923C11.0054 10.912 10.9807 10.9337 10.9572 10.9572C10.9337 10.9807 10.912 11.0054 10.8923 11.0311C9.94826 11.9406 8.66445 12.5 7.25 12.5C4.35051 12.5 2 10.1495 2 7.25Z" fill="#3A3A3A"/>
                </svg>
                </div>
                :<></>}

                <input type="text" value={props.value} onChange={(e) => props.onChange(e.target.value)} className={styles.input} placeholder={props.placeholder} name={props.name} id={props.name}/>
                {props.value != "" ? <div className={styles.containerRight} onClick={() => props.clear()}>x</div> : <></>}
            </div>
        </div>
    )
}