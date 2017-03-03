import React, { PropTypes } from 'react';

const InputForm = ({ submitAction, actionLabel }: { submitAction: func, actionLabel: string }) => {
  let input;

  const inputRef = (node) => {
    input = node;
  };

  const resetInput = () => { input.value = ''; };

  const submit = (e) => {
    submitAction(e, input, resetInput);
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
};

export default InputForm;
