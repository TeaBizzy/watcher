// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import { useEffect } from 'react';
import axios from 'axios';

// ___________________________________________________________________ //
// *----------------------------- Hooks -----------------------------* //

// Checks if a user is still logged in from their last session.
export default function useValidateSession(setCurrentUser) {
  useEffect(() => {
    axios('http://localhost:3030/api/login/validate', {withCredentials: true})
      .then(res => setCurrentUser(res.data))
      .catch(() => setCurrentUser(''))
  }, [])
};
