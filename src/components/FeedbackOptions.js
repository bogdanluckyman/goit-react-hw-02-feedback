export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          updateClics={onLeaveFeedback}
          buttonText={option}
        />
      ))}
    </div>
  );
};

const Button = ({ updateClics, buttonText }) => {
  return (
    <button onClick={() => updateClics(buttonText.toLowerCase())}>
      {buttonText}
    </button>
  );
};
