import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";

const FooterContent = () => {
  return (
    <div
      className="container-sm d-flex flex-row justify-content-between mb-2">
      <ContactInfo />
      <ContactList />
    </div>
  );
};

export default FooterContent;
