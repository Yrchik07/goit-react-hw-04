// import {Field, Form, Formik} from 'formik';
// import toast, { Toaster } from 'react-hot-toast';
// import * as Yup from 'yup'
// import isEmpty from 'lodash/isEmpty';


// const searchFormSchema = Yup.object().shape({
//   searchTerm: Yup.string().required("Search term is required!"),
// });

// const FORM_INITIAL_VALUES = {
//   searchTerm: "",
// };

// const SearchBar = ({ onSubmit }) => {
//   const handleSubmit = (values) => {
//     onSubmit(values.searchTerm);
//   };

//   const notify = () =>{
//     if (isEmpty(FORM_INITIAL_VALUES.searchTerm)) {
//       toast.error('Search term cannot be empty!');
//     } else {
//       toast.success('Here is your toast.');
//     }
//   } 


//   return (

//     <header>
//    < Formik
//    initialValues={FORM_INITIAL_VALUES}
//        validationSchema={searchFormSchema}
//     onSubmit={handleSubmit}
    
//   >    

//       <Form>
//       <Toaster />

//         <label>
//         <Field
//           type="text"
//           autoComplete="off"
//           autoFocus
//           name="searchTerm"
//           placeholder="Search images and photos"
//         />
        
//         {/* <ErrorMessage component="p" name="searchTerm" /> */}

//         </label>
//         <button type="submit" onClick={notify}>Search</button>
//       </Form>    

//       </Formik></header>
//     );
// };

// export default SearchBar;

import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import isEmpty from 'lodash/isEmpty';

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values.searchTerm);
  };

  const notify = () => {
    if (isEmpty(FORM_INITIAL_VALUES.searchTerm)) {
      toast.error('Search term cannot be empty!');
    } else {
      toast.success('Here is your toast.');
    }
  };

  return (
    <header>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={searchFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Toaster />

          <label>
            <Field
              type="text"
              autoComplete="off"
              autoFocus
              name="searchTerm"
              placeholder="Search images and photos"
            />
          </label>

          <button type="submit" onClick={notify}>Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
