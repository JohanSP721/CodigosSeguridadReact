export const actionsTypes = {
	confirmState: 'CONFIRM',
	errorState: 'ERROR',
	writeState: 'WRITE',
	checkState: 'CHECK',
	deleteState: 'DELETE',
	resetState: 'RESET',
};

export const onConfirm = payload =>
(
	{
		type: actionsTypes.confirmState,
		payload,
	}
);

export const onError = payload =>
(
	{
		type: actionsTypes.errorState,
		payload,
	}
);

export const onWrite = payload =>
(
	{
		type: actionsTypes.writeState,
		payload,
	}
);

export const onCheck = payload =>
(
	{
		type: actionsTypes.checkState,
		payload,
	}
);

export const onDelete = payload =>
(
	{
		type: actionsTypes.deleteState,
		payload,
	}
);

export const onReset = payload =>
(
	{
		type: actionsTypes.resetState,
		payload,
	}
);
