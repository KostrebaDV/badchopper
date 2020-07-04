import {useEffect, useContext} from 'react';
import {ROUTES} from './routes';
import {useHistory} from "react-router-dom";
import {AppContext} from './store';
import {getAllDepartments} from './api';
import {isNull} from '../../utils';
import {initEffect} from './imageEffector/imageEffectLoader';

export const useGetDepartmentData = () => {
    const {departments, setDepartments} = useContext(AppContext);

    useEffect(() => {
      if (departments.length === 0) {
          getAllDepartments()
              .then(({data}) => setDepartments(data));
      }
        // eslint-disable-next-line
    }, []);
};

export const useCanvas = () => {
    const {location} = useHistory();
    const canvasHTMLCollection = document.getElementById('imageEffector');
    const canvasHTMLCollectionClass = document.getElementsByClassName('imageEffectorClass');

    useEffect(() => {
        // @ts-ignore
        if (!isNull(canvasHTMLCollection)) {
            if (location.pathname === ROUTES.CLIENT_ROOT) {

                while(canvasHTMLCollectionClass.length > 0) {
                    canvasHTMLCollectionClass[0].remove();
                }

                // @ts-ignore
                canvasHTMLCollection.style.display = '';
                initEffect();
            } else {
                // @ts-ignore
                canvasHTMLCollection.style.display = 'none';
            }
        }
        // eslint-disable-next-line
    }, [location.pathname]);
};
