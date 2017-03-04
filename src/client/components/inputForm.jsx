import React, { PropTypes } from 'react';

const InputForm = ({ submitAction,
                     actionLabel,
                     needResetOnAfterSubmit }: { submitAction: func,
                                                  actionLabel: string,
                                                  needResetOnAfterSubmit: boolean }) => {
  let input;

  const inputRef = (node) => {
    input = node;
  };

  const submit = (e) => {
    submitAction(e, input);
    if (needResetOnAfterSubmit) input.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={inputRef} />
        <button type="submit">
          {actionLabel}
        </button>
      </form>
    </div>
  );
};

InputForm.propTypes = {
  submitAction: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
  needResetOnAfterSubmit: PropTypes.bool.isRequired,
};

export default InputForm;
