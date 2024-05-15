import Countdown from "react-countdown";

const MyCountdownComponent = () => {
  // Define your target date
  const targetDate = new Date("2024-06-31T00:00:00");

  // Renderer function to format the countdown display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is completed
      return <span>Countdown completed!</span>;
    } else {
      // Render a countdown timer
      return (
        <div className="flex items-end gap-2 font-poppins text-3xl  text-main-active-color">
          <div className="flex flex-col text-black">
            <span className="text-sm    font-medium">Days</span>
            <span className="text-3xl font-bold tracking-wide">{days}</span>
          </div>
          :
          <div className="flex flex-col text-black">
            <span className="text-sm    font-medium">Hours</span>
            <span className="text-3xl font-bold tracking-wide">{hours}</span>
          </div>
          :
          <div className="flex flex-col text-black">
            <span className="text-sm    font-medium">Minutes</span>
            <span className="text-3xl font-bold tracking-wide">{minutes}</span>
          </div>
          :
          <div className="flex flex-col text-black">
            <span className="text-sm    font-medium">Seconds</span>
            <span className="text-3xl font-bold tracking-wide">{seconds}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default MyCountdownComponent;
