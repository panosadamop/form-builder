import { Route } from 'react-router-dom';
import React from 'react';
import SubmissionsList from './SubmissionsList';
import { SubmissionsProvider } from '../submissionsContext';
import SubmissionPage from './SubmissionPage';
import { SubmissionProvider } from '../submissionContext';
import {Routes} from "react-router";

const SubmissionsPage = () => (
  <SubmissionsProvider>
    <Routes>
      <Route
        path="/form/:formId/submission"
        component={SubmissionsList}
      />
      <Route
        path="/form/:formId/submission/:submissionId"
        render={(props) => <SubmissionProvider><SubmissionPage {...props} /></SubmissionProvider>}
      />
    </Routes>
  </SubmissionsProvider>
)

export default SubmissionsPage;
