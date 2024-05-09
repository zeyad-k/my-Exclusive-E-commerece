const FooterColumnSupport = () => {
  return (
    <div className="footer-column flex flex-col gap-6 font-poppins text-main-text-color ">
      <h3 className="footer-column-title text-xl font-medium leading-7">
        Support
      </h3>
      <ul className="footer-column-list flex	 max-w-[175px] flex-col gap-4 text-base font-normal">
        <li className="footer-column-list-item ">
          <a
            href="https://www.google.com/maps/search/?api=1&query=111+Bijoy+sarani,+Dhaka,+DH+1515,+Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </a>
        </li>
        <li className="footer-column-list-item">
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
        </li>
        <li className="footer-column-list-item">
          <a href="tel:+88015888889999">+88015-88888-9999</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterColumnSupport;
