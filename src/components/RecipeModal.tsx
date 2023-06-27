import Modal from 'react-bootstrap/Modal';
import './RecipeModal.css';

const RecipeModal = ({ recipe, showContact, handleCloseContact, selectedRecipe, setRecipe, setTodos, setRecipeText }) => {
    
    const onNameChange = (event) => {
      // recipe[selectedRecipe]?.name = event.target.value;
      const updatedRecipe = recipe.map((item) => {
        if (item.number === selectedRecipe + 1) {
          return {
            ...item,
            name: event.target.value // Replace 'New Recipe Name' with the desired new name
          };
        }
        return item;
      });
    
      setRecipe(updatedRecipe);
    };
    
    const setCurrentRecipe = () => {
        setTodos(recipe[selectedRecipe]?.list);
        setRecipeText(recipe[selectedRecipe]?.recipe)
        handleCloseContact();
    };

    const deleteRecipe = () => {
        const objectDeleteing = { name: recipe[selectedRecipe]?.name};
        const newArray = recipe.filter(object => object.name !== objectDeleteing.name);

        setRecipe(newArray)
        handleCloseContact();
    };

  return (
    <Modal
      className="contact"
      show={showContact}
      onHide={handleCloseContact}
      size="lg"
    >
      <Modal.Header className="contact" closeButton>
        <Modal.Title className="contact">
          <span className='ps-4'>{recipe[selectedRecipe]?.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="contact">
          <div className="form-group mt-4">
            <p>Name</p>
            <input
              type="text"
              className="form-control rounded-4 mb-4"
              placeholder={recipe[selectedRecipe]?.name}
              onChange={onNameChange}
            />
          </div>
          <div>
            <p>Recipe</p>
            <pre className='recipe-text pb-3'>{recipe[selectedRecipe]?.recipe}</pre>
          </div>


          <div className='d-flex justify-content-between buttons'>
            <button className="btn btn-lg btn-danger pb-0 mt-4 rounded-5" onClick={deleteRecipe}>
                <p>Delete</p>
            </button>

            <button className="btn btn-lg btn-success pb-0 mt-4 rounded-5" onClick={setCurrentRecipe}>
                <p>Load</p>
            </button>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default RecipeModal;