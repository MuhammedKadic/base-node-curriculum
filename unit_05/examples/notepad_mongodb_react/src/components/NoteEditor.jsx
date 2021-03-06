import React from 'react';
import PropTypes from 'prop-types';

const NoteEditor = (props) => (
  <div className="col-sm-6 col-md-4" data-id={props.id}>
    <div className="card mb-3">
      <div className="card-header d-flex flex-wrap align-items-center">
        <h3 className="card-title flex-grow-1 m-1">{props.id ? 'Edit Note' : 'Add Note'}</h3>
        <div>
          <button
            type="submit"
            className="btn btn-outline-primary m-1 px-2 py-1"
            title="Save"
            onClick={(e) => props.onSave(props.id)}
          >
            <i className="fa-fw fas fa-save"></i>
            <span className="sr-only">Save</span>
          </button>
          <button
            type="button"
            className="btn btn-outline-primary m-1 px-2 py-1"
            title="Cancel"
            onClick={(e) => props.onCancel(props.id)}
          >
            <i className="fa-fw fas fa-ban"></i>
            <span className="sr-only">Cancel</span>
          </button>
        </div>
      </div>
      <div className="Note-body card-body">
        <input type="hidden" name="_id" value="${id}" />
        <div className="form-group">
          <label htmlFor="Note-title">Title</label>
          <input
            className="form-control"
            type="text"
            id="Note-title"
            name="title"
            value={props.title}
            onChange={(e) => props.onTitleChange(props.id, e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Note-body">Body</label>
          <textarea
            className="form-control"
            rows="7"
            id="Note-body"
            name="body"
            value={props.body}
            onChange={(e) => props.onBodyChange(props.id, e.target.value)}
          />
        </div>
        <output>{props.error ? <h4 className="text-danger">{props.error}</h4> : null}</output>
      </div>
    </div>
  </div>
);

NoteEditor.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  onTitleChange: PropTypes.func,
  onBodyChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  error: PropTypes.string,
};

export default NoteEditor;
