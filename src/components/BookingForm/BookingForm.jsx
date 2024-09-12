import css from "./BookingForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { useSelector, useDispatch } from "react-redux";
import { selectBooking } from "../../redux/campers/selectors";
import { changeBooking } from "../../redux/campers/slice";
import { format } from "date-fns";

const BookingForm = ({ camperId }) => {
  const dispatch = useDispatch();
  const booking = useSelector(selectBooking);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    date: Yup.date().required("Date is required."),
  });

  const handleSubmit = (camperId) => async (values, actions) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      actions.resetForm();

      const bookingDate = format(values.date, "dd/MM/yyyy");

      if (camperId in booking) {
        if (bookingDate in booking[camperId]) {
          if (booking[camperId][bookingDate] === values.email) {
            iziToast.warning({
              title: "Already booked",
              message: `This campervan is already booked for you for ${bookingDate}.`,
              position: "topRight",
            });
          } else {
            iziToast.error({
              title: "Booking is not available",
              message: `This campervan is already booked for ${bookingDate}.`,
              position: "topRight",
            });
          }
          return;
        }
      }

      dispatch(
        changeBooking({ id: camperId, date: bookingDate, email: values.email })
      );
      iziToast.success({
        title: "Success",
        message: "Form submitted successfully.",
        position: "topRight",
      });
    } catch (error) {
      const errors = error.inner.reduce((acc, curr) => {
        acc.push(curr.message);
        return acc;
      }, []);
      console.log(error.inner[0].message);
      iziToast.error({
        title: "Validation Errors",
        message: errors.join(" "),
        position: "topRight",
      });
    }
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: null,
        comment: "",
      }}
      onSubmit={(values, actions) => handleSubmit(camperId)(values, actions)}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.formContainer} noValidate>
          <div className={css.formInfo}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </div>
          <div className={css.form}>
            <div>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Name*"
                className={css.field}
              />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email*"
                className={css.field}
              />
            </div>
            <div>
              <DatePicker
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className={css.field}
                placeholderText="Booking date*"
                id={dateFieldId}
              />
            </div>
            <div>
              <Field
                type="text"
                name="comment"
                id={commentFieldId}
                placeholder="Comment"
                className={clsx(css.field, css.stretched)}
              />
            </div>
          </div>
          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
