import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import EventOnUserProfile from '../EventOnUserProfile/EventOnUserProfile';
import { initOtherEventsOnProfileAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function OtherEventsOnProfie(props) {
  const dispatch = useDispatch()
  const events = useSelector(state => state.eventReducer.otherEvents)

  useEffect(() => {
    dispatch(initOtherEventsOnProfileAsyncAC())
  }, [dispatch])
  return (
    <div>
      <h3>чужие события в которых вы учавствуете</h3>
      {events?.length ?
        events.map(event => < EventOnUserProfile key={event.id} event={event} />)
        : "вы не учавствуете ни в одном чужом событии"}
    </div>
  );
}

export default OtherEventsOnProfie;
