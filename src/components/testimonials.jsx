import apk from '../assets/apk/meeting_manager_room.apk'

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Aplicação Mobile - Sala</h2>
          <p>
            A aplicação móvel da sala fornece um QR Code e um calendário semanal com as respetivas reservas, permitindo aos utilizadores efetuarem a marcação rápida da sala. Esta aplicação utiliza os mecanismos de tempo real do Firebase, o que faz com que a informação apresentada no ecrã esteja sempre atualizada.
          </p>
        </div>
        <div className="row img-center">
          <img
            src="img/apptablet.png"
            width={"80%"}
            height={"80%"}
            className="img-responsive"
            alt=""
          />
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
