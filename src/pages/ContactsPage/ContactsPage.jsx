import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
import Contact from "../../components/Contact/Contact";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
i
function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Сторінка контактів</h1>
      <Contact />
      <h2>Contacts</h2>
      {isLoading && !error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Audio
            height={80}
            width={80}
            radius={9}
            color="green"
            ariaLabel="loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <ContactList />
      )}
    </div>
  );
}

export default ContactsPage;
