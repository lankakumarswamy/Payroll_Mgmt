import React from "react";
import { Calendar, theme } from "antd";

const CalendarPanel = (props: any) => {
  const { onPanelChange, onChange, onSelect } = props;
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <>
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          onChange={onChange}
          onSelect={onSelect}
        />
      </div>
    </>
  );
};

export default CalendarPanel;
