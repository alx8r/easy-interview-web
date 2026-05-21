'use client';

import { useAppDispatch, useAppSelector } from '@/redux';
import { globalSlice } from '@/redux/stores';
import { Alert } from '@/ui/components';
import { useEffect } from 'react';

export default function AlertProvider() {
  const dispatch = useAppDispatch();
  const { resetAlerGlobalState } = globalSlice.actions;

  const { alert } = useAppSelector((state) => state.globalReducer);

  useEffect(() => {
    const delay = 5000;

    const timer = setTimeout(() => {
      dispatch(resetAlerGlobalState());
    }, delay);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <div className="absolute top-10 right-5">
      {alert?.visible && (
        <Alert status={'danger'} title={'Oppss.. Something went wrong!'} message={alert.message} />
      )}
    </div>
  );
}
