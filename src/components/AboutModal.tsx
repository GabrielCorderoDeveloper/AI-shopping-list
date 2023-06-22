import Modal from 'react-bootstrap/Modal';
import './AboutModal.css';

const AboutModal = ({ showModal, handleCloseModal }) => {

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton className="px-5">
        <Modal.Title>
          <h1 className="pt-2">Why I created this project?</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          As a front-end developer, I needed to create projects to
          improve my skills and to show others what I'm capable of. I had many
          ideas of what my next project would be, but I wanted to create
          something useful, something that makes the lives of others at least
          slightly better.
        </p>
        <p>
          AI Personal Life Coach© is a personal coach that will adapt itself to
          fit your needs. The best and fastest way to make progress towards a
          goal is to have someone that show us the way. A good coach gives you
          advices however and excellent coach will reach out to you to see how
          are you doing and make sure that you are in the right path.
        </p>
        <p>
          A coach could be really expensive, especially if that coach is really
          good. I wanted to create a coach that is completely FREE and
          accessible to everyone. It doesn't matter where you life or what is
          your income, AI Personal Life Coach© is accessible to everyone, so
          don't waste time and make your life{" "}
          <i>
            <b>incredible!</b>
          </i>
        </p>
        <br />
        <br />

        <h1 className='minus'>Project design</h1>
        <p>The design of AI Personal Life Coach© was made using figma.</p>
        <a
          className="modal-link font-weight-bold"
          href="https://www.figma.com/proto/IrDQzLAK2ISdbWRbZchXsP/IA-Personal-life-coach?node-id=12-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=12%3A3"
          target="_blank"
        >
          Figma preview
        </a>{' '}
        <a
          className="modal-link font-weight-bold px-3"
          href="https://www.figma.com/file/IrDQzLAK2ISdbWRbZchXsP/IA-Personal-life-coach?node-id=0%3A1&t=QpoxV3pDldxajCVM-1"
          target="_blank"
        >
          Figma full project
        </a>
        <br />
        <br />
        <br />

        <h1 className='minus'>How it works?</h1>
        <p>The technologies and libraries used in this project:</p>
        <br />
        <br />


        <h1 className='minus'>Project technologies</h1>
        <p>The technologies and libraries used in this project:</p>
        <ul>
          <li>Vite</li>
          <li>React</li>
          <li>React Icons</li>
          <li>Bootstrap 5</li>
          <li>Typescript</li>
          <li>Axios</li>
          <li>Google ReCAPTCHA</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>

      </Modal.Body>
    </Modal>
  );
}

export default AboutModal;