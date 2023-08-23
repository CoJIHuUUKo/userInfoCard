import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Button from "../Button/Button";
import "./FormInfoUser.css";

export interface IFormValues {
  avatar: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  contacts: string | number;
}

interface Props {
  onSubmit: (values: IFormValues) => void;
}

const FormInfoUser = ({ onSubmit }: Props) => {
  const initialValues: IFormValues = {
    avatar: "",
    firstName: "",
    lastName: "",
    age: "",
    city: "",
    contacts: "",
  };

  const SignupSchema = Yup.object().shape({
    avatar: Yup.string()
      .matches(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
        "Неверный URL адрес"
      )
      .min(3, "Минимальная длина поля 3 символа")
      .required("Поле не должно быть пустым!"),
    firstName: Yup.string()
      .min(3, "Минимальная длина поля 3 символа")
      .max(10, "Максимальная длина поля 10 символов")
      .required("Поле не должно быть пустым!"),
    lastName: Yup.string()
      .min(3, "Минимальная длина поля 3 символа")
      .max(10, "Максимальная длина поля 10 символов")
      .required("Поле не должно быть пустым!"),
    age: Yup.string()
      .min(2, "Минимальная длина поля 2 символа")
      .max(2, "Максимальная длина поля 2 символа")
      .required("Поле не должно быть пустым!"),
    city: Yup.string()
      .min(2, "Минимальная длина поля 2 символа")
      .max(10, "Максимальная длина поля 10 символов!")
      .required("Поле не должно быть пустым!"),
    contacts: Yup.string()
      .min(2, "Поле должно быть больше 3-х символов")
      .required("Поле не должно быть пустым!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <legend className="FormLegend">
            <b>Добавить данные нового пользователя</b>
          </legend>
          <div className="FormContainer">
            {errors.avatar && touched.avatar ? (
              <h6 className="FormStyleError">{errors.avatar}</h6>
            ) : null}
            <Field
              id="avatar"
              type="text"
              name="avatar"
              className="FormContainerInput"
              placeholder="Фотография"
            />

            {errors.firstName && touched.firstName ? (
              <h6 className="FormStyleError">{errors.firstName}</h6>
            ) : null}
            <Field
              id="firstName"
              type="text"
              name="firstName"
              className="FormContainerInput"
              placeholder="Имя"
            />
            {errors.lastName && touched.lastName ? (
              <h6 className="FormStyleError">{errors.lastName}</h6>
            ) : null}

            <Field
              id="lastName"
              type="text"
              name="lastName"
              className="FormContainerInput"
              placeholder="Фамилия"
            />

            {errors.age && touched.age ? (
              <h6 className="FormStyleError">{errors.age}</h6>
            ) : null}
            <Field
              id="age"
              type="text"
              name="age"
              className="FormContainerInput"
              placeholder="Возраст"
            />

            {errors.city && touched.city ? (
              <h6 className="FormStyleError">{errors.city}</h6>
            ) : null}
            <Field
              id="city"
              type="text"
              name="city"
              className="FormContainerInput"
              placeholder="Город"
            />

            {errors.contacts && touched.contacts ? (
              <h6 className="FormStyleError">{errors.contacts}</h6>
            ) : null}
            <Field
              id="contacts"
              type="text"
              name="contacts"
              className="FormContainerInput"
              placeholder="Контакты"
            />
          </div>
          <Button type="submit">Отправить</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormInfoUser;
