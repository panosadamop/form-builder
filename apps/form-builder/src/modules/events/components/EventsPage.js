import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { FormView, getForm, useForm } from '../../forms/form';
import { FormsProvider } from '../../forms/form/formsContext';
import { SubmissionProvider, SubmissionsList, SubmissionsProvider } from '../../forms/submission';
import EventFormError from './EventFormError';
import EventPage from './EventPage';
import {Routes} from "react-router";

const EventsPage = () => {
  const { dispatch: dispatchFormEvent } = useForm();

  useEffect(() => {
    getForm(dispatchFormEvent, null, 'event');
  }, [dispatchFormEvent]);

  return (
    <FormsProvider>
      <SubmissionsProvider>
        <Routes>
          <Route
            path="/event"
            render={(props) => (
              <SubmissionsList
                {...props}
                FormError={EventFormError}
                formName="event"
                getViewPath={(formId, submission) => `/event/${submission._id}`}
                getEditPath={(formId, submission) => `/event/${submission._id}/edit`}
                getDeletePath={(formId, submission) => `/event/${submission._id}/delete`}
                createSubmissionPath={`/event/create`}
              />
            )}
          />
          <Route
            path="/event/create"
            render={(props) => (
              <SubmissionProvider>
                <FormView {...props} name='event'/>
              </SubmissionProvider>
            )}
          />
          <Route
            path="/event/:eventId"
            render={(props) => (
              <SubmissionProvider>
                <EventPage {...props}/>
              </SubmissionProvider>
            )}
          />
        </Routes>
      </SubmissionsProvider>
    </FormsProvider>
  );
};

export default EventsPage;
