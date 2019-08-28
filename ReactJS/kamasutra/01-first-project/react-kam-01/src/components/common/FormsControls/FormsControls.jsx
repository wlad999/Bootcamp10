import React from 'react';
import styles from './FormsControls.module.css';

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
// export const TextArea = ({ input, meta, ...props }) => {
//   const hasError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//       {/* {meta.error && meta.touched && <span>'SOME ERROR'</span>} */}
//     </div>
//   );
// };
// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//       {/* {meta.error && meta.touched && <span>'SOME ERROR'</span>} */}
//     </div>
//   );
// };
