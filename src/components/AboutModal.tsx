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
        I created this project to push myself as a developer and create something useful and impactful. This project shows what I can build as a front-end developer.
        </p>
        <p>
        AI Shopping List has the capability to help you in your day-to-day life by facilitating the process of shopping by breaking down all the ingredients needed to make any food you want. It also helps with the process of cooking by providing a detailed step-by-step recipe that is easy to follow and execute.
        </p>
        <br />
        <br />

        <h1 className='minus'>Project design</h1>
        <p>The design of AI Shopping List was made using figma.</p>
        <a
          className="modal-link font-weight-bold"
          href="https://www.figma.com/proto/D6Vn2XxJnVNWPLr0QtY5sB/AI-Shopping-List?type=design&node-id=5-15&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A44"
          target="_blank"
        >
          Figma preview
        </a>{' '}
        <a
          className="modal-link font-weight-bold px-3"
          href="https://www.figma.com/file/D6Vn2XxJnVNWPLr0QtY5sB/AI-Shopping-List?type=design&node-id=0%3A1&mode=design&t=Y1inG55jTNdXIvH9-1"
          target="_blank"
        >
          Figma full project
        </a>
        <br />
        <br />
        <br />

        <h1 className='minus'>How it works?</h1>
        <p>It works using the ChatGpt API. When the user sends a text, Chatgpt will use its knowledge of cooking to break down all the ingredients of that food and send back a text. That text will be cleaned, and anything unsuseful will be removed. After adding the list of ingredients, Chatgpt will receive those ingredients and make a detailed step-by-step recipe based on those ingredients.</p>
        <br />
        <br />


        <h1 className='minus'>Project technologies</h1>
        <p>The technologies and libraries used in this project:</p>
        <ul>
          <li>Vite</li>
          <li>React</li>
          <li>React Icons</li>
          <li>Bootstrap 5</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Axios</li>
          <li>Google ReCAPTCHA</li>
          <li>React simple typewriter</li>
        </ul>

      </Modal.Body>
    </Modal>
  );
}

export default AboutModal;