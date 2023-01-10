import apk from '../assets/apk/meeting_manager_user.apk'

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Aplicação Mobile - Utilizador</h2>
          <p>
            A aplicação móvel dos utilizadores permite aos mesmos consultar e efetuar reservas em salas, através da pesquisa pelo nome do espaço ou leitura do QR Code associado à sala. Esta aplicação possibilita também que equipas de limpeza definam quando um determinado espaço se encontra limpo e desinfetado, fornecendo maior segurança aos utilizadores. 
          </p>
        </div>
        <div className="row img-center">
          <img src="img/appuser.png" className="img-responsive" width={"35%"} height={"35%"} alt="" />
          <img src="img/appuser2.png" className="img-responsive" width={"35%"} height={"35%"} alt="" />
        </div>
        <div className="d-flex justify-content-center mt-4 app-button">
          <a href={apk} className="btn btn-custom btn-lg page-scroll" download>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
