export const Services = (props) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title text-center">
          <h2>Aplicação Web</h2>
          <p>
            A aplicação web permite monitorizar e gerir espaços, utilizadores e reservas de uma forma simples e eficiente, fornecendo dashboards com dados estatísticos e de fácil interpretação.
          </p>
        </div>
        <div className="row img-center">
          <img
            src="img/webpage.png"
            width={"90%"}
            height={"90%"}
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center mt-4 app-button">
          <a
            href="https://meeting-manager-webpage.herokuapp.com"
            className="btn btn-custom btn-lg page-scroll"
          >
            Visitar
          </a>
        </div>
      </div>
    </div>
  );
};
