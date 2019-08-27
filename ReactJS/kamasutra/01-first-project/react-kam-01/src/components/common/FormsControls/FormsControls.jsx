import React from 'react';
import styles from './FormsControls.module.css';

// const FormControl = ({ input, meta, child, ...props }) => {
//   const hasError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       <div>{props.child}</div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
      {/* {meta.error && meta.touched && <span>'SOME ERROR'</span>} */}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
      {/* {meta.error && meta.touched && <span>'SOME ERROR'</span>} */}
    </div>
  );
};
