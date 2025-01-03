import react from 'react';

function AddBook() {


  return (
    <div>
      <h1>Add Book</h1>
        <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input type="text" className="form-control" id="title" />

            <label htmlFor="author">Auteur</label>
            <input type="text" className="form-control" id="author" />

            <label htmlFor="pages">Pages</label>
            <input type="number" className="form-control" id="pages" />

            <label htmlFor="price">Prix</label>
            <input type="number" className="form-control" id="price" />

            <button className="btn btn-primary">Ajouter</button>
        </div>
    </div>
  );
}

export default AddBook;