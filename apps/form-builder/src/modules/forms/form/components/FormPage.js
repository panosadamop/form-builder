import React, { useEffect } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import SubmissionsPage from '../../submission/components/SubmissionsPage';
import { getForm, useForm } from '../formContext';
import FormDelete from './FormDelete';
import FormView from './FormView';
import FormEdit from './FormEdit';
import { SubmissionProvider, SubmissionsProvider } from '../../submission';
import {Routes} from "react-router";

const FormNavigation = () => {
  const { formId } = useParams();
  const { dispatch } = useForm();

  useEffect(() => {
    getForm(dispatch, formId);
  }, [dispatch, formId]);

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/form">
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}`}>
          <i className="fa fa-pencil"></i> Enter Data
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/submission`}>
          <i className="fa fa-list-alt"></i> View Data
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/edit`}>
          <i className="fa fa-edit"></i> Edit Form
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/form/${formId}/delete`}>
          <i className="fa fa-trash"></i> Delete Form
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/form/:formId"
          render={ (props) => (
            <SubmissionsProvider>
              <SubmissionProvider>
                <FormView {...props} />
              </SubmissionProvider>
            </SubmissionsProvider>
          )}
        />
        <Route path="/form/:formId/edit" component={FormEdit} />
        <Route path="/form/:formId/delete" component={FormDelete} />
        <Route path="/form/:formId/submission" component={SubmissionsPage} />
      </Routes>
    </div>
  );
};

export default FormNavigation;
