import {useContext, useEffect} from 'react';
import {AppContext} from '../../App/store';
import {getFeedbacks} from '../../App/api';

export const useGetFeedbacks = () => {
  const {setFeedbacks, feedbacks} = useContext(AppContext);

  useEffect(() => {
     if (feedbacks.length === 0) {
         getFeedbacks()
            .then(({data}) => setFeedbacks(data));
     }
  });

  return feedbacks;
};
