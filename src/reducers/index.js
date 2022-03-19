import { actionsTypes } from '../actions';

const { checkState, confirmState, deleteState, errorState, resetState, writeState } = actionsTypes;

const reducerObject = (state, payload) => (
	{
		[checkState]: {...state, loading:true, error:false},
		[confirmState]: {...state, confirmed: true, value:'', loading:false},
		[deleteState]: {...state, confirmed:false, deleted:true},
		[errorState]: {...state, loading:false, error: true, value:''},
		[resetState]: {...state, confirmed:false, deleted:false},
		[writeState]: {...state, loading:false, value:payload}
	}
)

export const reducer = (state, action) =>
{
	return reducerObject(state, action.payload)[action.type] || state;
};
