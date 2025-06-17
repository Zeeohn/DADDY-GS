const whatsappNumber = "+2349162439716";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

const FloatingWhatsappButton = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        textDecoration: "none",
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="white"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C12.97 27.56 14.46 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.36 0-2.7-.27-3.95-.8l-.28-.12-4.27 1.38 1.4-4.15-.18-.29C7.27 18.01 7 16.52 7 15c0-5.01 4.06-9.08 9.07-9.08 5.01 0 9.08 4.07 9.08 9.08 0 5.01-4.07 9.08-9.08 9.08zm5.13-6.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.01 4.22.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsappButton;
