import { useEffect } from 'react';
import axios from 'axios';

export default function useValidateSession(setCurrentUser) {
  useEffect(() => {
    axios('http://localhost:3030/api/login/validate', {withCredentials: true})
      .then(res => setCurrentUser(res.data))
      .catch(() => setCurrentUser(''))
  }, [])
};
